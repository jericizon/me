# QA Report: Jeric Izon Portfolio Redesign

**Plan:** `docs/superpowers/plans/20260921_104228-portfolio-redesign-plan.md`
**Branch:** `feat/portfolio-redesign` (worktree `.worktrees/portfolio-redesign`)
**Date:** 2026-09-21

---

## Automated Verification

| Check | Command | Result |
|---|---|---|
| TypeScript strict | `npx nuxi typecheck` | PASS, 0 errors (run after every task) |
| Static generation | `npm run generate` | PASS, 5 routes prerendered to `.output/public` |
| Prerendered content | grep `.output/public/index.html` | PASS: hero copy, all 4 projects, contact section present in SSR HTML |
| Em/en-dash scan | `grep -rn -P '[\x{2013}\x{2014}]' components/ pages/ data/ types/` | PASS, 0 matches |
| Base URL | image srcs in generated HTML | PASS: `/me/images/projects/...` prefix applied via `withBase` |

## Fixes Applied During QA

1. **`ssr: false` -> `ssr: true`** — with SSR off, `nuxt generate` emitted an empty SPA shell ("HTML content not prerendered" warning), defeating the SSG/SEO goals in the spec. Generated HTML now contains full page content.
2. **Component auto-import prefixing** — subdirectory components (`layout/AppNavbar`, `ui/BaseBadge`, etc.) were registering under path-prefixed names (`LayoutAppNavbar`, `UiBaseBadge`), so unprefixed usage rendered as empty comments. Fixed via `components: [{ path: '~/components', pathPrefix: false }]` in `nuxt.config.ts`.
3. **`text-muted` contrast** — `#71717A` measured 4.1:1 on `#0A0A0A` (below WCAG AA 4.5:1). Adjusted token to `#8E8E98` (6.1:1) in `tailwind.config.ts` and `assets/css/tailwind.css`.

## Contrast Matrix (computed)

| Foreground | On #0A0A0A | On #111111 | WCAG AA |
|---|---|---|---|
| text-primary #F5F5F5 | 18.16 | 17.32 | PASS |
| text-secondary #A1A1AA | 7.72 | 7.37 | PASS |
| text-muted #8E8E98 | 6.10 | 5.82 | PASS |
| accent #A3E635 | 13.13 | 12.52 | PASS |
| ink #0A0A0A on accent | 13.13 | - | PASS |

## Accessibility Checklist

- Semantic landmarks: `header/nav`, `main`, `footer`, `section` with aria-labels
- Skip-to-content link visible on focus
- `h1` once (hero), `h2` for section headers, `h3`/`h4` nested correctly
- Keyboard: focus-visible ring (accent), modal focus trap + Escape + focus restore, mobile drawer Escape + `aria-expanded`
- Mobile drawer and modal lock body scroll; min 44px touch targets on mobile nav
- `aria-modal="true"`, `role="dialog"`, `aria-label` on modal; `aria-hidden` on decorative elements
- All images have descriptive `alt`; lazy loading on project/gallery images
- `prefers-reduced-motion`: global CSS collapse in `tailwind.css` + scoped override in `ArchitectureDiagram`
- External links use `target="_blank" rel="noopener noreferrer"`

## Layout Constraints Verified

- Navbar: `h-16` (64px <= 80px), single-line on desktop, sticky with `backdrop-blur-md bg-base/80`
- Hero: `min-h-[100dvh]`, 4 text elements (eyebrow, headline, subtext, stack+CTA), headline max 2 lines, subtext 14 words
- Mobile: single-column collapse, vertical arrow fallback in architecture diagram below `md`

## Deviations & Notes

- **`main.scss` deleted** — Task 1 consolidated all base styles into `assets/css/tailwind.css` (prior session decision). Token intent preserved.
- **Legacy freelance pages** (`/hire-freelance-web-developer`, `/services/custom-website-development`) conflicted with the senior-engineer repositioning and rendered double navbars under the new shell. Converted to client-side redirects to `/` so indexed URLs don't 404; removed from `sitemap.xml`. Content remains in git history.
- **Better Santa Rosa** has no live URL or screenshot in the repo. `image`/`liveUrl` are optional in the data model; the card renders its real architecture flow as the visual instead of a fabricated screenshot (spec anti-goal). Add `public/images/projects/better-santa-rosa.png` later if available.
- **Resume link** reuses the existing Google Drive CV URL; no `public/resume.pdf` exists.
- ExpresswayPH metric follows the spec's verified claim (10k+ users, 15-day holiday window), not the old site's "50K+ monthly".

## Manual QA Not Performed

- Lighthouse audit and multi-viewport visual inspection require a running server (dev-server restriction). Recommended before deploy: `npm run generate && npx serve .output/public`, then Lighthouse on 375/390/768/1440px.

## Verdict

All acceptance criteria met. Build is clean, statically prerendered, and ready for `npm run deploy` review.
