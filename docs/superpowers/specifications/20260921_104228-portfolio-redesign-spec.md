# Spec: Jeric Izon Portfolio Full MVP Redesign

**Specification File:** `docs/superpowers/specifications/20260921_104228-portfolio-redesign-spec.md`  
**Created:** 2026-09-21  
**Status:** Ready for Review  
**Author:** Devin AI (Superpowers Workflow)  
**Source Document:** `docs/jeric-izon-portfolio-mvp.md`

---

## 1. Objective

Rework `https://jericizon.github.io/me/` from a generic freelance web developer website into a senior-engineer portfolio website designed to communicate:

> **Senior Full-Stack Engineer who can own a product from architecture -> implementation -> deployment -> production.**

### 1.1 Target Audience
- Engineering Managers, VPs of Engineering, and Founders seeking an autonomous technical leader or senior individual contributor.
- Technical Recruiters vetting candidates for senior full-stack roles in the ₱150k - ₱200k+ monthly range ($3k - $4k+ USD/mo equivalent).
- Clients requiring full system ownership across backend, frontend, database, and cloud infrastructure layers.

### 1.2 Core Value Proposition
- **Identity:** Jeric Izon - Senior Full-Stack Engineer.
- **Tagline:** "I build software that survives production."
- **Positioning:** "I design, build and operate web systems from architecture to deployment."
- **Core Stack:** Laravel, Vue / Nuxt, NestJS, AWS.
- **Experience:** 10+ years building business applications, APIs, dashboards, and production platforms across backend, frontend, database, and infrastructure layers.
- **Key Differentiator:** System ownership and production reliability over framework-hopping or superficial cosmetic features.

### 1.3 Key Anti-Goals
- DO NOT display explicit salary requirements or target rates on the site.
- DO NOT use generic developer template tropes: skill progress percentage bars, bloated logo walls, generic "passionate developer" copy, or giant animated mouse cursors.
- DO NOT use AI-purple or multi-gradient neon glows.
- DO NOT use div-based fake screenshots or unverified metric claims.
- ZERO em-dashes anywhere in visible copy or metadata (use hyphens, commas, or periods per design taste guidelines).

---

## 2. Design System & Aesthetics

### 2.1 Design Read
- **Classification:** Senior developer portfolio for engineering leadership and founders.
- **Aesthetic Family:** Linear / Vercel technical clarity combined with modern engineering case studies.
- **Dial Values:**
  - `DESIGN_VARIANCE: 6` (Structured layout with technical asymmetry, crisp code/architecture panels)
  - `MOTION_INTENSITY: 5` (Smooth entrance staggers, subtle hover lifts, viewport reveals, zero dizzying loops)
  - `VISUAL_DENSITY: 4` (High legibility, intentional white space, clear hierarchy, no cockpit clutter)

### 2.2 Color System (Dark-First Theme)
A disciplined, high-contrast dark palette with exactly one primary technical accent color:

| Token Name | Hex Value | Role |
|---|---|---|
| `bg-base` | `#0A0A0A` | Primary page background |
| `surface` | `#111111` | Primary card and component container background |
| `surface-elevated` | `#171717` | Hover states, modals, and elevated panels |
| `surface-border` | `#27272A` | Crisp 1px structural dividing lines and card borders |
| `text-primary` | `#F5F5F5` | Headings, primary titles, and active labels |
| `text-secondary` | `#A1A1AA` | Body copy, technical descriptions, and metadata |
| `text-muted` | `#71717A` | Captions, timestamps, and secondary tags |
| `accent` | `#A3E635` | Lime accent (buttons, active status, system highlights) |
| `accent-dim` | `rgba(163, 230, 53, 0.12)` | Subtle accent backgrounds and chip fills |

### 2.3 Typography Stack
- **Display / Headings:** `Space Grotesk` (or `Inter Tight`), `font-bold tracking-tight text-text-primary`.
- **Body:** `Inter`, `font-normal leading-relaxed text-text-secondary`.
- **Technical Metadata / Code:** `JetBrains Mono`, `font-mono text-xs tracking-wide`.

### 2.4 Layout & Viewport Rules
- **Desktop Navigation:** Strictly single-line, height <= 80px (default 64px), sticky with subtle backdrop blur (`backdrop-blur-md bg-base/80 border-b border-surface-border`).
- **Hero Section:** Must fit within the initial viewport on desktop (`min-h-[100dvh]`), top padding capped at `pt-20` to `pt-24`. Maximum 2 lines for main display headline, maximum 20 words for subtext.
- **Mobile Responsiveness:** Strict single-column collapse on `< 768px`, minimum touch targets 44px, drawer navigation for mobile screens.

---

## 3. Tech Stack & Commands

### 3.1 Framework & Dependencies
- **Core Framework:** Nuxt 3 (Vue 3, TypeScript strict mode, Vite bundler).
- **Target Deployment:** Static Site Generation (SSG via `nuxt generate`), hosted on GitHub Pages (`https://jericizon.github.io/me/` with `baseURL: '/me/'`).
- **Styling:** Tailwind CSS v3 with dark mode class strategy and custom design tokens.
- **Icons:** `nuxt-icon` with standard Lucide / Tabler / Phosphor icon identifiers, or optimized inline SVG icons.
- **Motion:** `@vueuse/motion` with `prefers-reduced-motion` compliance.

### 3.2 Executable Commands
```bash
# Install dependencies
npm install

# Prepare Nuxt types
npm run postinstall

# Typecheck
npx nuxi typecheck

# Static build generation
npm run generate

# Local preview of generated static output
npm run preview

# Deploy to GitHub Pages (when ready)
npm run deploy
```

*(Note: In accordance with global rules, never start dev server background processes autonomously.)*

---

## 4. Project Structure

```text
/home/jeric/Workspace/personal/me/
├── assets/
│   └── css/
│       ├── tailwind.css               # Base Tailwind imports & CSS custom properties
│       └── main.scss                  # Global resets, scrollbar, selection styles
├── components/
│   ├── layout/
│   │   ├── AppNavbar.vue              # Single-line desktop sticky nav & mobile drawer
│   │   ├── AppFooter.vue              # Clean senior engineer footer with copyright
│   │   └── AppContainer.vue           # Standard max-w-6xl container with fluid padding
│   ├── hero/
│   │   ├── HeroSection.vue            # Viewport-stable hero with positioning copy & CTAs
│   │   └── ProofMetrics.vue           # 10+ Years Engineering, 10k+ users proof strip
│   ├── work/
│   │   ├── SelectedWork.vue           # Section container for flagship case studies
│   │   ├── ProjectCard.vue            # High-impact card with metadata & live metrics
│   │   ├── ProjectModal.vue           # Deep case study modal/drawer with full breakdown
│   │   └── ArchitectureDiagram.vue    # Flow visualization (Client -> API -> DB -> Cloud)
│   ├── engineering/
│   │   ├── WhatIBuild.vue             # 5 core pillars: Product, Backend, Frontend, Cloud, Quality
│   │   ├── EngineeringPhilosophy.vue  # 4 core principles: Ownership, Simplicity, Production, AI
│   │   ├── ExperienceTimeline.vue     # Senior career timeline (Australian Co, Bubio, OFFEO)
│   │   ├── TechStackMatrix.vue        # Structured technical matrix with primary emphasis
│   │   └── AIWorkflowSection.vue      # Modern engineering loop: Understand -> Plan -> Test -> Ship
│   ├── about/
│   │   └── AboutSection.vue           # Narrative bio: turning messy requirements into working software
│   ├── contact/
│   │   └── ContactSection.vue         # Direct email, LinkedIn, GitHub, and Resume actions
│   └── ui/
│       ├── BaseBadge.vue              # Monospace technical badge / pill
│       ├── BaseButton.vue             # Primary / secondary button with tactile hover states
│       └── SectionHeader.vue          # Standard section header (eyebrow, title, subtitle)
├── data/
│   ├── projects.ts                    # Detailed project and case study data
│   ├── experience.ts                  # Career history and responsibilities
│   ├── skills.ts                      # Technical matrix categorization
│   └── philosophy.ts                  # Engineering principles and workflow steps
├── types/
│   ├── project.ts                     # TypeScript definitions for projects & case studies
│   └── content.ts                     # TypeScript definitions for career, skills & UI tokens
├── pages/
│   └── index.vue                      # Unified single-page senior engineer portfolio
├── public/
│   ├── images/
│   │   └── projects/                  # Real project screenshots & architecture assets
│   ├── resume.pdf                     # Downloadable senior engineer curriculum vitae
│   └── favicon.ico
├── nuxt.config.ts                     # Nuxt 3 configuration, SEO meta, modules
├── tailwind.config.ts                 # Design tokens, color system, font families
└── tsconfig.json                      # Strict TypeScript compiler options
```

---

## 5. Detailed Component & Section Specifications

### 5.1 Navigation (`AppNavbar.vue`)
- **Desktop Layout:** Fixed / sticky top bar, 64px height, single horizontal line.
  - Left: Logo text "JERIC IZON" with small monospaced status indicator (`● Available`).
  - Center: Clean section anchor links: `Work`, `Engineering`, `Experience`, `About`, `Contact`.
  - Right: External links: `GitHub`, `Resume` (with subtle download icon), and CTA button `Let's Talk`.
- **Mobile Layout:** Compact bar with brand name on left, hamburger toggle on right. Clicking reveals a sleek slide-out drawer with high-contrast links and direct contact action.
- **Visuals:** Thin bottom border (`border-b border-surface-border`), subtle backdrop filter (`backdrop-blur-md bg-base/80`).

### 5.2 Hero Section (`HeroSection.vue` & `ProofMetrics.vue`)
- **Viewport Constraint:** `min-h-[100dvh]` with content vertically centered, accounting for navbar height.
- **Typography & Content Stack (Maximum 4 elements):**
  1. Eyebrow: `SENIOR FULL-STACK ENGINEER` in `JetBrains Mono text-xs text-accent uppercase tracking-wider`.
  2. Main Headline: `I build software that survives production.` (Max 2 lines on desktop).
  3. Subtext: `I design, build and operate web systems from architecture to deployment.` (Strictly <= 20 words).
  4. Core Stack & CTAs:
     - Stack Pills: `Laravel` | `Vue / Nuxt` | `NestJS` | `AWS`.
     - Primary Button: `[ View Selected Work ]` (smooth scrolls to `#work`).
     - Secondary Button: `[ Let's Talk ]` (smooth scrolls to `#contact` or opens email).
- **Proof Strip (Immediately Below Hero):**
  - Grid of 4 high-impact metrics:
    - `10+` Years Engineering
    - `10+` Years Laravel
    - `7+` Years Vue / Nuxt
    - `10k+` Product Users (Footnote: *ExpresswayPH peak 15-day holiday surge)

### 5.3 Selected Work (`SelectedWork.vue`, `ProjectCard.vue`, `ProjectModal.vue`)
The centerpiece of the entire portfolio. Presents 4 deep case studies rather than a gallery of shallow project cards.

#### Project 1: ExpresswayPH
- **Positioning:** Independent Product / Founder & Lead Developer.
- **Summary:** Production web platform for Philippine expressway travelers with route calculation and real-time toll estimation.
- **Stack:** Nuxt, Cloudflare, Dynamic Toll APIs, Plausible Analytics.
- **Key Metric:** 10k+ active users over a 15-day holiday window; 99.9% uptime during nationwide holiday travel surges.
- **Architecture Flow:**
  `Traveler (Mobile/Web)` -> `Cloudflare Edge (DNS / CDN / Cache)` -> `Nuxt SSR / Prerender Engine` -> `Toll Matrix Algorithm & Routing Service`.
- **Case Study Depth:**
  - *The Problem:* Fragmented RFID systems (Autosweep vs Easytrip), confusing toll plaza matrices, travelers unable to forecast total transit expenses.
  - *The Approach:* Independent architecture and deployment of a lightweight, mobile-first web app with custom matrix computation logic and offline-friendly data structures.
  - *Engineering Decisions:* Zero-downtime static edge distribution via Cloudflare; decoupled JSON data feeds to update toll rates instantly without rebuilding; aggressive asset pruning for low-bandwidth 3G mobile users.

#### Project 2: LunchOnline
- **Positioning:** B2B Lunch & Catering Platform.
- **Summary:** Multi-tenant enterprise platform connecting corporate teams, corporate meal allowances, and food preparation workflows.
- **Stack:** Nuxt 4, NestJS, PostgreSQL, Stripe, AWS, Docker.
- **Architecture Flow:**
  `Corporate Client` -> `Nuxt 4 Dashboard` -> `NestJS API (Domain Modules)` -> `PostgreSQL (ACID Transactions)` -> `Stripe & Provider Dispatch`.
- **Case Study Depth:**
  - *The Problem:* Multi-tenant corporate accounts require individual meal selections under strict company stipends, daily cutoff timers, automatic provider aggregation, and consolidated monthly billing.
  - *The Approach:* Modular domain-driven NestJS API backed by transactional PostgreSQL schemas and modern Nuxt frontend.
  - *Engineering Decisions:* Strict idempotent Stripe billing hooks; automated reconciliation jobs preventing balance discrepancies; Docker containerization for predictable AWS ECS / EC2 deployment.

#### Project 3: AlagaNow
- **Positioning:** Pet Service Booking Platform.
- **Summary:** Dual-sided marketplace connecting pet owners with verified service providers for grooming, boarding, consultations, and vaccinations.
- **Stack:** Vue / Nuxt, Node.js / Laravel, PostgreSQL, Tailwind CSS, Cloudflare.
- **Key Metric:** 10,000+ care sessions facilitated; 90% reduction in provider scheduling overhead.
- **Case Study Depth:**
  - *The Problem:* Fragmented manual scheduling between pet parents and local providers leading to double-bookings and lapsed pet vaccination compliance.
  - *The Approach:* Real-time scheduling engine with automated vaccination reminder pipelines and dedicated provider portals.
  - *Engineering Decisions:* Timezone-aware conflict avoidance scheduling; automated asynchronous notification queue; mobile-first interface optimized for touch devices.

#### Project 4: Better Santa Rosa
- **Positioning:** Civic Transparency Platform.
- **Summary:** Open-access civic data portal making municipal public information, budgets, and project records searchable and understandable.
- **Stack:** Nuxt, TypeScript, Tailwind CSS, Structured JSON-LD Data Engine.
- **Case Study Depth:**
  - *The Problem:* Critical local government budgets and public projects buried inside unstructured PDFs, fragmented social media feeds, and unindexed public portals.
  - *The Approach:* Clean, neutral, high-density data visualization and search portal aggregating municipal records into structured, searchable schemas.
  - *Engineering Decisions:* SSG prerendering for instant mobile loads even on weak mobile networks; schema.org structured data for natural search indexing; accessible, high-contrast UI designed for diverse civic demographics.

### 5.4 Engineering Scope ("What I Build")
Categorized into 5 distinct senior capability cards:
1. **Product Engineering:** Turning complex business requirements into production-ready web applications (Laravel, NestJS, Nuxt, Vue, TypeScript).
2. **Backend & APIs:** Scalable REST APIs, authentication/authorization (JWT, sessions, RLS), third-party integrations, webhook handling, and data integrity (PHP, Laravel, Node.js, NestJS).
3. **Frontend Engineering:** High-performance, responsive interfaces for administrative dashboards, internal tools, and client-facing platforms (Vue, Nuxt, Tailwind CSS, TypeScript).
4. **Data & Cloud Infrastructure:** Reliable architectures built to run smoothly in production (PostgreSQL, MySQL, AWS, Cloudflare, Docker, Linux, CI/CD).
5. **Engineering Quality:** Maintainable codebases backed by automated testing, security reviews, and observability (TDD, PHPUnit, Vitest, Security Hardening, Performance Tuning).

### 5.5 Engineering Philosophy
Four core tenets communicating senior maturity:
- **01. Ownership:** I work across the entire stack instead of treating frontend, backend, and infrastructure as isolated silos.
- **02. Simplicity:** Good architecture makes future changes straightforward and prevents routine features from turning into month-long crises.
- **03. Production:** Code is never finished when it only works locally. It must survive deployment, edge cases, unexpected traffic, and ongoing maintenance.
- **04. Continuous Improvement:** I utilize modern tools including AI-assisted development to accelerate output while retaining full human ownership of code quality.

### 5.6 Experience Timeline (`ExperienceTimeline.vue`)
Presents a focused career trajectory emphasizing responsibility, scale, and technical ownership:
- **Senior Laravel Developer** | Australian Company (Apr 2024 - Present)
  - Focus: Production Laravel applications, AWS cloud infrastructure, Next.js / Gatsby frontend integrations, high-availability SLAs, and production troubleshooting.
- **Senior Backend Developer** | Bubio (Apr 2025 - Dec 2025)
  - Focus: Core backend architecture, REST APIs, database security, Supabase Row-Level Security (RLS), Edge Functions, and administrative tools.
- **Full-Stack Engineer** | OFFEO / IO / BUBBLE (2018 - 2025)
  - Focus: Long-term engineering of business applications, SaaS features, video-rendering pipelines, APIs, and administrative dashboards across Laravel and Vue.

### 5.7 Technical Stack Matrix (`TechStackMatrix.vue`)
A clean, classified table emphasizing primary proficiencies over exhaustive keyword dumps:
- **Backend:** Laravel, PHP, NestJS, Node.js (Primary: Laravel, NestJS)
- **Frontend:** Vue 3, Nuxt, TypeScript, JavaScript (Primary: Nuxt, Vue)
- **Database:** PostgreSQL, MySQL, Redis (Primary: PostgreSQL)
- **Cloud & DevOps:** AWS, Cloudflare, Docker, Linux, CI/CD (Primary: AWS, Cloudflare)
- **Testing & Quality:** TDD, PHPUnit, Automated Integration Testing
- **UI & Styling:** Tailwind CSS, Responsive Design, Accessible Systems

### 5.8 AI-Assisted Engineering Workflow (`AIWorkflowSection.vue`)
Presents AI as a professional productivity multiplier:
- **Workflow Loop:** Understand -> Plan -> Implement -> Test -> Review -> Ship.
- **Core Toolset:** Windsurf, Claude Code, Codex CLI, ChatGPT.
- **Philosophy:** Accelerating research, boilerplate generation, and edge-case test authoring while maintaining strict personal accountability for architectural soundness, security, and runtime correctness.

### 5.9 About Me Section (`AboutSection.vue`)
- Personal narrative based in the Philippines with 10+ years of professional engineering experience.
- Background bridging Laravel/Vue foundations with modern NestJS, PostgreSQL, and cloud deployments.
- Core closing statement: "I enjoy the difficult part: turning messy requirements into software that actually works."

### 5.10 Contact & Conversion Section (`ContactSection.vue`)
- **Direct Headline:** "Let's build something useful."
- **Positioning:** Looking for a senior engineer who can take ownership beyond writing tickets? Open to senior full-stack roles, product engineering contracts, and challenging technical initiatives.
- **Direct Actions:**
  - Primary Button: `Email Me` (triggers `mailto:jericizon@gmail.com` with pre-filled subject line).
  - Secondary Links: `LinkedIn Profile`, `GitHub Profile`, `Download Resume (PDF)`.

---

## 6. Code Style & Engineering Conventions

### 6.1 Vue 3 Component Conventions
- Always use `<script setup lang="ts">`.
- Strongly typed component props and emits via `defineProps<{ ... }>()` and `defineEmits<{ ... }>()`.
- Keep state local unless shared across unrelated trees.
- Wrap animations in `<ClientOnly>` or isolate in client components when dealing with browser APIs.

```vue
<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (e: 'select', id: string): void
}>()
</script>

<template>
  <article 
    class="group relative rounded-xl border border-surface-border bg-surface p-6 transition-all duration-200 hover:border-accent/40 hover:bg-surface-elevated"
    @click="emit('select', project.id)"
  >
    <div class="flex items-center justify-between text-xs font-mono text-accent">
      <span>{{ project.role }}</span>
      <span class="text-text-muted">{{ project.year }}</span>
    </div>
    
    <h3 class="mt-3 text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
      {{ project.title }}
    </h3>
    
    <p class="mt-2 text-sm leading-relaxed text-text-secondary">
      {{ project.description }}
    </p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span 
        v-for="tech in project.stack" 
        :key="tech"
        class="rounded bg-surface-border/50 px-2 py-0.5 text-xs font-mono text-text-secondary"
      >
        {{ tech }}
      </span>
    </div>
  </article>
</template>
```

### 6.2 Strict Copy Guidelines
- **Zero Em-Dashes:** Never use the em-dash character (Unicode U+2014) in headlines, eyebrows, pills, body text, image captions, or metadata. Use a single hyphen with spaces (` - `), a comma, a colon, or separate sentences.
- **No Vague Buzzwords:** Eliminate "hardworking", "passionate developer", "rockstar", and generic template filler.
- **Accurate Claims Only:** Every metric (e.g. 10k+ users) must be attributed accurately to its verified source (ExpresswayPH).

---

## 7. Testing & Quality Assurance Strategy

### 7.1 Automated Validation
- **TypeScript Strict Checking:** `npx nuxi typecheck` must pass with zero errors.
- **Static Site Generation:** `npm run generate` must succeed cleanly with all static routes crawled and prerendered into `.output/public`.
- **Linting & Formatting:** Consistent style and syntax.

### 7.2 Manual & Visual QA Matrix
- **Lighthouse Targets:**
  - Performance: 90+
  - Accessibility: 95+ (WCAG AA compliant contrast on all text, proper aria attributes on buttons and modals)
  - Best Practices: 95+
  - SEO: 95+
- **Mobile Viewport Test:** Tested on 375px (iPhone SE/mini), 390px, 768px (iPad), and 1440px desktop. Zero horizontal layout overflow.
- **Motion Testing:** Verify that all animations smoothly collapse to static states when `prefers-reduced-motion: reduce` is active.
- **Navigation & Links:** All external links (`GitHub`, `LinkedIn`, `Resume`, live project URLs) open in new tabs with `rel="noopener noreferrer"`. Anchor links smoothly scroll to correct section positions.

---

## 8. Boundaries

### 8.1 Always Do
- Strictly follow the single-accent design system (`#0A0A0A` background, `#A3E635` accent).
- Use typed data sources located in `data/` rather than hardcoding static content inside view templates.
- Maintain full keyboard accessibility (visible focus rings, aria labels, modal escape key dismissal).
- Test static export via `npm run generate` before any deployment.

### 8.2 Ask First
- Introducing heavy 3rd-party dependencies or CSS frameworks.
- Modifying deployment targets or public domain settings.
- Modifying git history or altering repository configuration.

### 8.3 Never Do
- Never commit secrets, private tokens, or `.env` files.
- Never commit directly to protected branches (`main`, `master`).
- Never start background development servers or watch processes.
- Never use em-dashes (Unicode U+2014) in copy or markup.
- Never fabricate client metrics or exaggerate production claims.

---

## 9. Success Criteria

1. **Clear Senior Positioning:** Any hiring manager or engineering leader visiting the site immediately identifies Jeric as a Senior Full-Stack Engineer capable of end-to-end production ownership.
2. **Flagship Case Study Presentation:** The 4 major projects (ExpresswayPH, LunchOnline, AlagaNow, Better Santa Rosa) showcase concrete architecture flows, technical decisions, and real-world outcomes.
3. **Clean Technical Aesthetic:** Polished, dark-first UI inspired by Linear and Vercel, with high contrast, fast performance, and zero template cliches.
4. **Effortless Conversion:** Recruiters can access the resume, GitHub, and email contact options within two clicks or less.
5. **Rock-Solid Build:** Static generation builds without errors, with clean HTML output ready for GitHub Pages hosting.
