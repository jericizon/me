// Exports the prerendered /resume page to public/jeric-izon-resume.pdf via headless Chrome.
// Serves .output/public on an ephemeral port so absolute /me/ asset URLs resolve.
// Requires pnpm (the project's package manager) when a prerender must be built first.
import { spawn, spawnSync } from 'node:child_process'
import { createServer } from 'node:http'
import {
  accessSync,
  constants,
  copyFileSync,
  createReadStream,
  existsSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  statSync
} from 'node:fs'
import { tmpdir } from 'node:os'
import { extname, join, normalize, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const outDir = join(root, '.output', 'public')
const resumeHtml = join(outDir, 'resume', 'index.html')
const pdfPath = join(root, 'public', 'jeric-izon-resume.pdf')
const MIN_PDF_BYTES = 10 * 1024

const which = name => {
  for (const dir of (process.env.PATH || '').split(':')) {
    const candidate = join(dir, name)
    try {
      accessSync(candidate, constants.X_OK)
      return candidate
    } catch {}
  }
  return null
}

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf'
}

const main = async () => {
  if (!existsSync(resumeHtml)) {
    console.log('Prerendered resume missing, running `pnpm run generate`...')
    const gen = spawnSync('pnpm', ['run', 'generate'], { cwd: root, stdio: 'inherit' })
    if (gen.status !== 0 || !existsSync(resumeHtml)) {
      console.error('Static build failed. Run `pnpm run generate` manually and retry.')
      process.exit(1)
    }
  }

  const chrome = ['google-chrome', 'chromium', 'chromium-browser', 'google-chrome-stable']
    .map(which)
    .find(Boolean)
  if (!chrome) {
    console.error('No Chrome/Chromium binary found on PATH.')
    process.exit(1)
  }

  const server = createServer((req, res) => {
    let path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    // Site deploys under /me/ but .output/public stores files at root
    if (path === '/me') path = '/'
    else if (path.startsWith('/me/')) path = path.slice(3)
    if (path.endsWith('/')) path += 'index.html'
    const file = normalize(join(outDir, path))
    if (!file.startsWith(outDir + sep) || !statSync(file, { throwIfNoEntry: false })?.isFile()) {
      res.writeHead(404)
      res.end('not found')
      return
    }
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' })
    createReadStream(file).pipe(res)
  })
  await new Promise(done => server.listen(0, '127.0.0.1', done))
  const url = `http://127.0.0.1:${server.address().port}/me/resume/`

  mkdirSync(join(root, 'public'), { recursive: true })

  // spawn must stay async: spawnSync would freeze the server above and deadlock Chrome
  const profileDir = mkdtempSync(join(tmpdir(), 'chrome-pdf-'))
  const print = headlessFlag => new Promise(done => {
    const child = spawn(chrome, [
      headlessFlag,
      '--disable-gpu',
      '--no-first-run',
      `--user-data-dir=${profileDir}`,
      '--no-pdf-header-footer',
      '--virtual-time-budget=10000',
      `--print-to-pdf=${pdfPath}`,
      url
    ], { stdio: ['ignore', 'ignore', 'pipe'] })
    let stderr = ''
    let timedOut = false
    // virtual-time-budget bounds virtual time only; cap wall-clock so a hung browser cannot wedge the script
    const timer = setTimeout(() => {
      timedOut = true
      child.kill('SIGKILL')
    }, 60_000)
    child.stderr.on('data', chunk => { stderr += chunk })
    child.on('error', err => { clearTimeout(timer); done({ status: -1, timedOut, stderr: String(err) }) })
    child.on('close', status => { clearTimeout(timer); done({ status, timedOut, stderr }) })
  })

  let result = await print('--headless=new')
  if (result.status !== 0 && /unknown|unrecognized|invalid/i.test(result.stderr || '')) {
    result = await print('--headless') // older Chrome lacks --headless=new
  }
  server.close()
  rmSync(profileDir, { recursive: true, force: true })

  const size = existsSync(pdfPath) ? statSync(pdfPath).size : 0
  if (result.status !== 0 || size < MIN_PDF_BYTES) {
    const reason = result.timedOut ? 'timed out after 60s' : `exit ${result.status}`
    console.error(`PDF export failed (${reason}, ${size} bytes).\n${(result.stderr || '').trim()}`)
    process.exit(1)
  }
  // Refresh the copy inside the generated site so deploys never ship a stale PDF
  copyFileSync(pdfPath, join(outDir, 'jeric-izon-resume.pdf'))
  console.log(`Wrote public/jeric-izon-resume.pdf (${(size / 1024).toFixed(1)} KB)`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
