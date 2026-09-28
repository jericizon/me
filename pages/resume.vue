<script setup lang="ts">
import { resumeData } from '~/data/resume'
import type { ResumeData } from '~/types/resume'

const { header } = resumeData
const summaryParagraphs = resumeData.summary.split('\n\n')
const telHref = `tel:${header.phone.replace(/\s/g, '')}`

// Derive a machine-readable start date ("April 2024" -> "2024-04") for <time datetime>
const MONTHS: Record<string, string> = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
}

const periodStartDatetime = (period: string): string | undefined => {
  const [month, year] = period.split(' - ')[0].split(' ')
  const monthNumber = MONTHS[month]
  return monthNumber && year ? `${year}-${monthNumber}` : undefined
}

const pageTitle = 'Jeric Izon - Senior AI & Full-Stack Engineer Resume'
const pageDescription =
  'Resume of Jeric Izon, a senior AI and full-stack engineer specializing in Laravel, Node.js, NestJS, Vue/Nuxt, AWS, AI agents, LLM integrations, automation, and SaaS architecture.'
const canonicalUrl = 'https://jericizon.github.io/me/resume'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: 'https://jericizon.github.io/me/images/banner.png',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: 'https://jericizon.github.io/me/images/banner.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})

// ASCII-only output for ATS parsers: collapse decorative glyphs to hyphens.
// Char codes: 183 middle dot, 8208-8215 dash variants (incl. en/em dash), 8226 bullet.
const NON_ASCII_GLYPHS = new RegExp(
  `[${String.fromCharCode(183, 8208, 8209, 8210, 8211, 8212, 8213, 8214, 8215, 8226)}]`,
  'g',
)
const toAscii = (value: string): string => value.replace(NON_ASCII_GLYPHS, '-')

// Pure formatter so the plaintext layout stays testable
const formatResumePlaintext = (data: ResumeData): string => {
  const { header } = data
  const sections: string[] = []

  sections.push(
    [
      header.name,
      header.roleTitle,
      header.headline,
      `${header.location} | ${header.phone} | ${header.email}`,
      `Portfolio: ${header.portfolioUrl}`,
      `GitHub: ${header.githubUrl}`,
      `LinkedIn: ${header.linkedinUrl}`,
    ].join('\n'),
  )

  sections.push(`PROFESSIONAL SUMMARY\n\n${data.summary}`)

  sections.push(
    `CORE TECHNICAL SKILLS\n\n${data.skills
      .map((group) => `${group.category}: ${group.skills.join(', ')}`)
      .join('\n')}`,
  )

  const experience = data.experience
    .map((job) => {
      const lines = [
        `${job.role} | ${job.company} | ${job.location} | ${job.period}`,
      ]
      if (job.summary) lines.push(job.summary)
      lines.push(...job.highlights.map((highlight) => `- ${highlight}`))
      if (job.stack.length) lines.push(`Stack: ${job.stack.join(', ')}`)
      return lines.join('\n')
    })
    .join('\n\n')
  sections.push(`PROFESSIONAL EXPERIENCE\n\n${experience}`)

  const projects = data.projects
    .map((project) => {
      const heading = [project.name, project.role, project.url]
        .filter((part): part is string => Boolean(part))
        .join(' | ')
      const lines = [heading, project.description]
      lines.push(...project.highlights.map((highlight) => `- ${highlight}`))
      if (project.stack.length) lines.push(`Stack: ${project.stack.join(', ')}`)
      return lines.join('\n')
    })
    .join('\n\n')
  sections.push(`SELECTED PROJECTS\n\n${projects}`)

  return `${toAscii(sections.join('\n\n'))}\n`
}

const copyState = ref<'idle' | 'copied' | 'error'>('idle')
let copyTimer: ReturnType<typeof setTimeout> | undefined

const copyLabel = computed(() => {
  if (copyState.value === 'copied') return 'Copied!'
  if (copyState.value === 'error') return 'Copy failed'
  return 'Copy Plaintext ATS Resume'
})

const copyAtsPlaintext = async () => {
  if (!import.meta.client) return
  try {
    await navigator.clipboard.writeText(formatResumePlaintext(resumeData))
    copyState.value = 'copied'
  } catch {
    copyState.value = 'error'
  }
  if (copyTimer) clearTimeout(copyTimer)
  copyTimer = setTimeout(() => {
    copyState.value = 'idle'
  }, 2000)
}

onBeforeUnmount(() => {
  if (copyTimer) clearTimeout(copyTimer)
})

const printResume = () => {
  if (!import.meta.client) return
  window.print()
}
</script>

<template>
  <div class="resume-toolbar no-print border-b border-surface-border">
    <div
      class="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-6 py-3.5"
    >
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
      >
        <Icon name="tabler:arrow-left" class="h-4 w-4" aria-hidden="true" />
        Back to Portfolio
      </NuxtLink>
      <div class="flex flex-wrap items-center gap-2 sm:ml-auto">
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-text-primary"
          @click="copyAtsPlaintext"
        >
          <Icon
            :name="copyState === 'copied' ? 'tabler:check' : 'tabler:copy'"
            class="h-3.5 w-3.5"
            aria-hidden="true"
          />
          {{ copyLabel }}
        </button>
        <button
          type="button"
          class="inline-flex items-center gap-1.5 rounded-md border border-surface-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-text-primary"
          @click="printResume"
        >
          <Icon name="tabler:printer" class="h-3.5 w-3.5" aria-hidden="true" />
          Download PDF
        </button>
        <a
          href="/me/jeric-izon-resume.pdf"
          download
          class="inline-flex items-center gap-1 px-1 text-xs text-text-muted underline underline-offset-2 transition-colors hover:text-accent"
        >
          <Icon name="tabler:download" class="h-3.5 w-3.5" aria-hidden="true" />
          Download static PDF
        </a>
        <span class="sr-only" role="status" aria-live="polite">
          {{ copyState === 'copied' ? 'Resume plaintext copied to clipboard' : copyState === 'error' ? 'Clipboard copy failed' : '' }}
        </span>
      </div>
    </div>
  </div>

  <article class="resume-doc mx-auto max-w-3xl px-6 pb-16 pt-10 sm:pb-24 sm:pt-14">
    <header class="resume-header border-b border-surface-border pb-10 text-center">
      <h1 class="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {{ header.name }}
      </h1>
      <p class="mt-3 font-display text-lg font-semibold text-accent">
        {{ header.roleTitle }}
      </p>
      <p class="mt-2 text-sm text-text-secondary">
        {{ header.headline }}
      </p>
      <p class="resume-contact mt-5 text-sm text-text-muted">
        {{ header.location }} ·
        <a
          :href="telHref"
          class="text-text-secondary underline underline-offset-2 transition-colors hover:text-accent"
        >{{ header.phone }}</a>
        ·
        <a
          :href="`mailto:${header.email}`"
          class="text-text-secondary underline underline-offset-2 transition-colors hover:text-accent"
        >{{ header.email }}</a>
      </p>
      <p class="resume-links mt-3 text-sm">
        <a
          :href="header.portfolioUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-accent underline underline-offset-4"
        >{{ header.portfolioUrl }}</a>
        |
        <a
          :href="header.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-accent underline underline-offset-4"
        >{{ header.githubUrl }}</a>
        |
        <a
          :href="header.linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-accent underline underline-offset-4"
        >{{ header.linkedinUrl }}</a>
      </p>
    </header>

    <section class="resume-section mt-12" aria-labelledby="summary-heading">
      <h2
        id="summary-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        PROFESSIONAL SUMMARY
      </h2>
      <div class="mt-4 space-y-4">
        <p
          v-for="(paragraph, index) in summaryParagraphs"
          :key="index"
          class="leading-relaxed text-text-secondary"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="resume-section mt-12" aria-labelledby="skills-heading">
      <h2
        id="skills-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        CORE TECHNICAL SKILLS
      </h2>
      <div class="mt-4 space-y-2">
        <p
          v-for="category in resumeData.skills"
          :key="category.category"
          class="leading-relaxed text-text-secondary"
        >
          <strong class="font-semibold text-text-primary">{{ category.category }}:</strong>
          {{ category.skills.join(', ') }}
        </p>
      </div>
    </section>

    <section class="resume-section mt-12" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        PROFESSIONAL EXPERIENCE
      </h2>
      <div class="mt-6 space-y-10">
        <article
          v-for="job in resumeData.experience"
          :key="job.id"
          class="resume-item"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 class="font-display text-base font-semibold text-text-primary">
              {{ job.role }}
            </h3>
            <time
              class="resume-period shrink-0 font-mono text-xs text-text-muted"
              :datetime="periodStartDatetime(job.period)"
            >
              {{ job.period }}
            </time>
          </div>
          <p class="mt-1 text-sm font-medium text-text-secondary">
            {{ job.company }} · {{ job.location }}
          </p>
          <p v-if="job.summary" class="mt-3 leading-relaxed text-text-secondary">
            {{ job.summary }}
          </p>
          <ul
            v-if="job.highlights.length"
            class="resume-highlights mt-4 list-disc space-y-1.5 pl-5 marker:text-text-muted"
          >
            <li
              v-for="(highlight, index) in job.highlights"
              :key="index"
              class="leading-relaxed text-text-secondary"
            >
              {{ highlight }}
            </li>
          </ul>
          <p v-if="job.stack.length" class="resume-stack mt-3 text-sm text-text-muted">
            <span class="font-medium text-text-secondary">Stack:</span>
            {{ job.stack.join(', ') }}
          </p>
        </article>
      </div>
    </section>

    <section class="resume-section mt-12" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        SELECTED PROJECTS
      </h2>
      <div class="mt-6 space-y-10">
        <article
          v-for="project in resumeData.projects"
          :key="project.id"
          class="resume-item"
        >
          <h3 class="font-display text-base font-semibold text-text-primary">
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent underline underline-offset-4"
            >{{ project.name }}</a>
            <template v-else>{{ project.name }}</template>
          </h3>
          <p class="mt-1 text-sm font-medium text-text-secondary">
            {{ project.role }}
          </p>
          <p class="mt-3 leading-relaxed text-text-secondary">
            {{ project.description }}
          </p>
          <ul
            v-if="project.highlights.length"
            class="resume-highlights mt-4 list-disc space-y-1.5 pl-5 marker:text-text-muted"
          >
            <li
              v-for="(highlight, index) in project.highlights"
              :key="index"
              class="leading-relaxed text-text-secondary"
            >
              {{ highlight }}
            </li>
          </ul>
          <p v-if="project.stack.length" class="resume-stack mt-3 text-sm text-text-muted">
            <span class="font-medium text-text-secondary">Stack:</span>
            {{ project.stack.join(', ') }}
          </p>
        </article>
      </div>
    </section>
  </article>
</template>

<style>
@media print {
  @page {
    size: letter;
    margin: 0.5in;
  }

  /* Force the light token palette even when dark mode is active */
  :root,
  .dark {
    --color-base: 255 255 255;
    --color-surface: 255 255 255;
    --color-surface-elevated: 255 255 255;
    --color-surface-border: 212 212 216;
    --color-text-primary: 17 17 17;
    --color-text-secondary: 39 39 42;
    --color-text-muted: 82 82 91;
    --color-accent: 17 17 17;
    --color-ink: 255 255 255;
  }

  body {
    background: #ffffff !important;
    color: #111111 !important;
    font-size: 10pt;
    line-height: 1.4;
  }

  .resume-doc {
    max-width: none !important;
    padding: 0 !important;
    background: #ffffff;
    color: #111111;
  }

  /* Site chrome + toolbar hidden; .resume-header has no .sticky so it stays */
  .no-print,
  .resume-toolbar,
  header.sticky,
  nav,
  footer,
  a[href="#main-content"],
  [aria-hidden="true"] {
    display: none !important;
  }

  .resume-header {
    border-bottom-color: #111111;
  }

  .resume-item {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .section-title {
    break-after: avoid;
    page-break-after: avoid;
    border-bottom-color: #d4d4d8;
  }

  .resume-doc a {
    color: #111111;
    text-decoration: underline;
  }

  /* Project names keep their label; expose the target URL in print */
  .resume-item h3 a[href^="http"]::after {
    content: ' (' attr(href) ')';
    font-weight: normal;
  }
}
</style>
