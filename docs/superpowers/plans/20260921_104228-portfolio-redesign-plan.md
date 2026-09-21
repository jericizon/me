# Jeric Izon Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the personal portfolio into a senior full-stack engineer showcase communicating end-to-end production ownership (Laravel, Vue/Nuxt, NestJS, AWS) with Linear/Vercel-level polish.

**Architecture:** Nuxt 3 SSG application with dark-first Tailwind design tokens, decoupled typed data models for case studies and career history, modular component hierarchy, and responsive architecture flow diagrams.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, Tailwind CSS, @nuxtjs/color-mode, @vueuse/motion, GitHub Pages.

**Spec:** `docs/superpowers/specifications/20260921_104228-portfolio-redesign-spec.md`

## Global Constraints

- Palette: Background `#0A0A0A`, Surface `#111111`, Surface 2 `#171717`, Border `#27272A`, Primary text `#F5F5F5`, Secondary text `#A1A1AA`, Accent `#A3E635` (lime).
- Zero em-dashes (Unicode U+2014) in any copy, headings, pills, metadata, or comments.
- Desktop navbar strictly single-line, height <= 80px.
- Hero fits initial viewport (`min-h-[100dvh]`), max 2 lines headline, max 20 words subtext, max 4 text elements in stack.
- Real metrics only (10k+ users attributed specifically to ExpresswayPH peak period).
- Git safety: Do not commit directly to `main` or protected branches without branching or user instruction.
- Dev server restriction: Do not start background dev servers or watch processes.

---

## Task Breakdown

### Phase 1: Foundations & Design System

#### Task 1: Design Tokens & Tailwind Theme Configuration

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `assets/css/tailwind.css`
- Modify: `assets/css/main.scss`

**Interfaces:**
- Consumes: Design system specifications from Section 2 of the spec.
- Produces: CSS custom properties and Tailwind utility classes for `bg-base`, `surface`, `surface-elevated`, `surface-border`, `text-primary`, `text-secondary`, `accent`, and typography font stacks.

- [ ] **Step 1: Define design tokens in `tailwind.config.ts`**
Configure dark-first color scheme (#0A0A0A, #111111, #171717, #27272A, #A3E635, #F5F5F5, #A1A1AA), fonts (`Space Grotesk` / `Inter Tight` for display, `Inter` for sans, `JetBrains Mono` for mono), and keyframe animations.

- [ ] **Step 2: Update CSS files with global resets and custom properties**
Update `assets/css/tailwind.css` and `assets/css/main.scss` to configure base layer variables, selection highlights (`bg-accent/20 text-accent`), custom scrollbar, and keyboard `:focus-visible` styles using `#A3E635`.

- [ ] **Step 3: Verify TypeScript compilation of configuration**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit configuration changes**
*(Note: Create feature branch `feat/design-tokens` if working with git)*
Commit message: `chore(design): update design tokens to linear-inspired dark palette`

---

#### Task 2: TypeScript Data Models & Static Datasets

**Files:**
- Create: `types/project.ts`
- Create: `types/content.ts`
- Create: `data/projects.ts`
- Create: `data/experience.ts`
- Create: `data/skills.ts`
- Create: `data/philosophy.ts`

**Interfaces:**
- Consumes: Content requirements from MVP specification (ExpresswayPH, LunchOnline, AlagaNow, Better Santa Rosa, career timeline, philosophy, skills).
- Produces: Strongly typed data collections (`projects`, `experiences`, `skillGroups`, `philosophies`, `aiWorkflowSteps`) consumed by UI sections.

- [ ] **Step 1: Write TypeScript interface definitions**
Define `Project`, `ArchitectureNode`, `CaseStudy`, `Experience`, `SkillGroup`, `PhilosophyItem`, and `AIWorkflowStep` types in `types/project.ts` and `types/content.ts`.

- [ ] **Step 2: Populate static datasets**
Create `data/projects.ts` with complete data for ExpresswayPH (10k+ users in 15 days), LunchOnline, AlagaNow, and Better Santa Rosa.
Create `data/experience.ts` with Australian company, Bubio, and OFFEO career records.
Create `data/skills.ts` with structured 5-pillar technical matrix.
Create `data/philosophy.ts` with 4 engineering tenets and AI workflow stages.

- [ ] **Step 3: Verify data types and compilation**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit data layer**
Commit message: `feat(data): add typed datasets for projects, experience, skills, and philosophy`

---

### Checkpoint 1: Foundations Validated
- [ ] Tailwind theme configured with #0A0A0A base and #A3E635 lime accent.
- [ ] TypeScript interfaces and complete static datasets compiled without errors.

---

### Phase 2: Shell & Top-of-Funnel Experience

#### Task 3: Base UI Primitives

**Files:**
- Create: `components/ui/BaseBadge.vue`
- Create: `components/ui/BaseButton.vue`
- Create: `components/ui/SectionHeader.vue`

**Interfaces:**
- Consumes: Tailwind design tokens.
- Produces: Reusable UI primitives for badges, buttons, and section headers.

- [ ] **Step 1: Implement `BaseBadge.vue`**
Monospace badge supporting variants (`accent`, `surface`, `outline`) and optional live status dot.

- [ ] **Step 2: Implement `BaseButton.vue`**
Accessible button / link wrapper supporting primary (accent fill with dark text), secondary (surface border), and ghost variants with tactile `:active` micro-translation and focus ring.

- [ ] **Step 3: Implement `SectionHeader.vue`**
Standardized section header accepting `eyebrow` (uppercase mono), `title` (Space Grotesk bold), and `subtitle` (Inter relaxed) with single vertical stack (split-header banned per design taste rule).

- [ ] **Step 4: Verify UI primitives compile**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit UI primitives**
Commit message: `feat(ui): add BaseBadge, BaseButton, and SectionHeader primitives`

---

#### Task 4: Sticky Navigation & App Shell

**Files:**
- Create: `components/layout/AppNavbar.vue`
- Create: `components/layout/AppFooter.vue`
- Create: `components/layout/AppContainer.vue`
- Modify: `layouts/default.vue`
- Modify: `app.vue`

**Interfaces:**
- Consumes: `BaseButton.vue`, `BaseBadge.vue`.
- Produces: Unified application shell with desktop single-line navigation, mobile drawer, and footer.

- [ ] **Step 1: Implement `AppNavbar.vue`**
Build sticky navbar (height <= 80px, strictly single-line at desktop). Include logo "JERIC IZON", status pill "Available for senior opportunities", section anchor links (#work, #engineering, #experience, #about, #contact), resume download link, and mobile drawer menu with smooth toggle.

- [ ] **Step 2: Implement `AppFooter.vue`**
Clean senior engineer footer with brand name, positioning summary ("Laravel - Vue/Nuxt - NestJS - AWS"), social/code links, and copyright statement.

- [ ] **Step 3: Implement `AppContainer.vue` and update `layouts/default.vue` and `app.vue`**
Container with responsive constraints (`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`). Update layout to mount `AppNavbar`, containerized page content, and `AppFooter`.

- [ ] **Step 4: Verify layout type check**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit shell components**
Commit message: `feat(layout): implement single-line sticky navbar, footer, and container`

---

#### Task 5: Hero Section & Proof Metrics

**Files:**
- Create: `components/hero/HeroSection.vue`
- Create: `components/hero/ProofMetrics.vue`

**Interfaces:**
- Consumes: `BaseBadge.vue`, `BaseButton.vue`, design tokens.
- Produces: Viewport-constrained hero section and 4-item proof metrics strip.

- [ ] **Step 1: Implement `HeroSection.vue`**
Adhere strictly to design constraints:
1. Viewport stability (`min-h-[100dvh] flex flex-col justify-center`, top padding `pt-20` to `pt-24`).
2. Maximum 4 text elements:
   - Eyebrow: `SENIOR FULL-STACK ENGINEER`
   - Main headline: `I build software that survives production.` (Max 2 lines)
   - Subtext: `I design, build and operate web systems from architecture to deployment.` (<= 20 words)
   - Actions: Stack pills (Laravel, Vue/Nuxt, NestJS, AWS) + CTAs `[ View selected work ]` and `[ Let's talk ]`.

- [ ] **Step 2: Implement `ProofMetrics.vue`**
Metrics strip placed directly below hero:
- `10+` Years Engineering
- `10+` Years Laravel
- `7+` Years Vue / Nuxt
- `10k+` Product Users (Footnote clarifying ExpresswayPH 15-day peak window).

- [ ] **Step 3: Verify hero and metrics**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit hero components**
Commit message: `feat(hero): implement viewport-stable hero and proof metrics strip`

---

### Checkpoint 2: Shell & Hero Verified
- [ ] Navigation is single-line on desktop and responsive on mobile.
- [ ] Hero fits within initial viewport with zero horizontal overflow.
- [ ] Proof metrics render clearly with accurate footnotes.

---

### Phase 3: Centerpiece - Selected Work & Architecture

#### Task 6: Architecture Diagram Visualizer

**Files:**
- Create: `components/work/ArchitectureDiagram.vue`

**Interfaces:**
- Consumes: `ArchitectureNode[]` from `types/project.ts`.
- Produces: Interactive or animated system flow diagram (Client -> Edge/CDN -> API Service -> Database -> External Services).

- [ ] **Step 1: Implement `ArchitectureDiagram.vue`**
Build a sleek, high-contrast system architecture diagram:
- Monospace step indicators
- Arrow flows (`->`) with subtle animation
- Clean status nodes highlighting role of each tier (Nuxt frontend, NestJS API, PostgreSQL, Stripe, Cloudflare).
- Mobile-friendly vertical fallback on viewports `< 768px`.

- [ ] **Step 2: Verify component compiles**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 3: Commit architecture diagram component**
Commit message: `feat(work): add responsive architecture flow diagram component`

---

#### Task 7: Selected Work Cards & Case Study Modal

**Files:**
- Create: `components/work/ProjectCard.vue`
- Create: `components/work/ProjectModal.vue`
- Create: `components/work/SelectedWork.vue`

**Interfaces:**
- Consumes: `data/projects.ts`, `ArchitectureDiagram.vue`, `BaseBadge.vue`, `BaseButton.vue`.
- Produces: The showcase section featuring ExpresswayPH, LunchOnline, AlagaNow, and Better Santa Rosa with deep case study inspection.

- [ ] **Step 1: Implement `ProjectCard.vue`**
Card with real screenshot preview, role badge, technology pills, verified metric badge (e.g. 10k+ users in 15 days), core outcome description, and "View case study" trigger.

- [ ] **Step 2: Implement `ProjectModal.vue`**
Modal / drawer providing complete deep dive:
- The Problem (2-3 concise paragraphs)
- The Approach & System Design
- Architecture diagram
- Key Engineering Decisions (Why Nuxt, Why NestJS, database decisions, performance strategy)
- Measurable Outcomes & Live URLs
- Accessible backdrop, keyboard Escape key support, and focus trap.

- [ ] **Step 3: Implement `SelectedWork.vue`**
Section container with section header ("Selected Work", "Products, platforms and systems I've designed and built"), grid of 4 project cards, and modal state management.

- [ ] **Step 4: Verify selected work compilation**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit selected work components**
Commit message: `feat(work): implement SelectedWork cards, deep case study modal, and project flows`

---

### Checkpoint 3: Selected Work Verified
- [ ] All 4 projects render with screenshots, stack pills, and metrics.
- [ ] Clicking a project opens the deep case study modal with architecture diagram.
- [ ] Modal closes on click outside, close button, or Escape key.

---

### Phase 4: Senior Engineering Depth & Career

#### Task 8: What I Build & Engineering Philosophy

**Files:**
- Create: `components/engineering/WhatIBuild.vue`
- Create: `components/engineering/EngineeringPhilosophy.vue`

**Interfaces:**
- Consumes: `data/skills.ts`, `data/philosophy.ts`, `SectionHeader.vue`.
- Produces: 5-pillar capability grid and 4-principle philosophy section.

- [ ] **Step 1: Implement `WhatIBuild.vue`**
Display 5 engineering pillars:
1. Product Engineering (Laravel, NestJS, Nuxt, Vue, TypeScript)
2. Backend & APIs (PHP, Laravel, Node.js, NestJS, REST APIs)
3. Frontend (Vue, Nuxt, Tailwind CSS, TypeScript)
4. Data & Infrastructure (PostgreSQL, MySQL, AWS, Cloudflare, Docker, Linux, CI/CD)
5. Engineering Quality (TDD, PHPUnit, Security, Performance, Code Review)
Ensure each card highlights system impact over mere technology names.

- [ ] **Step 2: Implement `EngineeringPhilosophy.vue`**
Display 4 core principles:
- 01 - Ownership (Working across the entire stack)
- 02 - Simplicity (Architecture that makes future changes easier)
- 03 - Production (Code is not done until it survives real-world operations)
- 04 - Continuous Improvement (Leveraging modern tools and AI while owning the result)

- [ ] **Step 3: Verify compilation**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit engineering components**
Commit message: `feat(engineering): implement WhatIBuild pillars and EngineeringPhilosophy`

---

#### Task 9: Experience Timeline & Technical Stack Matrix

**Files:**
- Create: `components/engineering/ExperienceTimeline.vue`
- Create: `components/engineering/TechStackMatrix.vue`

**Interfaces:**
- Consumes: `data/experience.ts`, `data/skills.ts`, `SectionHeader.vue`, `BaseBadge.vue`.
- Produces: Career history timeline and categorized technical matrix.

- [ ] **Step 1: Implement `ExperienceTimeline.vue`**
Vertical timeline highlighting senior roles:
- Senior Laravel Developer (Australian company - Apr 2024 to Present)
- Senior Backend Developer (Bubio - Apr 2025 to Dec 2025)
- Full-Stack Engineer (OFFEO / IO / BUBBLE - 2018 to 2025)
Highlight production ownership, SLAs, cloud infrastructure, and backend architecture.

- [ ] **Step 2: Implement `TechStackMatrix.vue`**
Clean classified matrix with primary technologies visually emphasized (accent borders/chips) and secondary technologies quietly styled:
- Backend, Frontend, Database, Cloud, Infrastructure, Testing, UI, Additional.

- [ ] **Step 3: Verify compilation**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit timeline and matrix**
Commit message: `feat(engineering): implement ExperienceTimeline and TechStackMatrix`

---

#### Task 10: AI-Assisted Engineering Workflow

**Files:**
- Create: `components/engineering/AIWorkflowSection.vue`

**Interfaces:**
- Consumes: `data/philosophy.ts`, `BaseBadge.vue`.
- Produces: Workflow diagram presenting AI as a productivity multiplier.

- [ ] **Step 1: Implement `AIWorkflowSection.vue`**
Display the 6-stage engineering loop:
`Understand` -> `Plan` -> `Implement` -> `Test` -> `Review` -> `Ship`.
List toolset: Windsurf, Claude Code, Codex CLI, ChatGPT.
Clear statement: "I use AI as an engineering multiplier - not as a replacement for engineering judgment."

- [ ] **Step 2: Verify compilation**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 3: Commit AI workflow section**
Commit message: `feat(engineering): implement AIWorkflowSection demonstrating modern engineering workflow`

---

### Checkpoint 4: Engineering Depth Verified
- [ ] What I Build, Philosophy, Timeline, Stack Matrix, and AI Workflow render smoothly.
- [ ] Copy communicates senior leadership, ownership, and production rigor.
- [ ] Zero em-dashes across all text elements.

---

### Phase 5: About, Conversion & Page Assembly

#### Task 11: About & Contact Sections

**Files:**
- Create: `components/about/AboutSection.vue`
- Create: `components/contact/ContactSection.vue`

**Interfaces:**
- Consumes: `BaseButton.vue`, `SectionHeader.vue`.
- Produces: Personal narrative and high-conversion contact section.

- [ ] **Step 1: Implement `AboutSection.vue`**
Story of a senior engineer based in the Philippines with 10+ years of production experience, turning messy requirements into software that actually works.

- [ ] **Step 2: Implement `ContactSection.vue`**
Direct, friction-free contact section:
- Headline: "Let's build something useful."
- Subtext: "Looking for a senior engineer who can take ownership beyond writing tickets? I'm open to senior full-stack engineering opportunities, long-term product work and technically interesting projects."
- Primary Action: `Email Me` (`mailto:jericizon@gmail.com`)
- Secondary Actions: `LinkedIn`, `GitHub`, `Download Resume`.

- [ ] **Step 3: Verify compilation**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit about and contact sections**
Commit message: `feat(contact): implement AboutSection and friction-free ContactSection`

---

#### Task 12: Unified Page Assembly & SEO Meta

**Files:**
- Modify: `pages/index.vue`
- Modify: `nuxt.config.ts`

**Interfaces:**
- Consumes: All section components from previous tasks.
- Produces: The assembled single-page application with updated JSON-LD and OpenGraph metadata.

- [ ] **Step 1: Assemble `pages/index.vue`**
Organize sections in exact hierarchy:
1. `HeroSection`
2. `ProofMetrics`
3. `SelectedWork` (#work)
4. `WhatIBuild` (#engineering)
5. `EngineeringPhilosophy`
6. `ExperienceTimeline` (#experience)
7. `TechStackMatrix`
8. `AIWorkflowSection`
9. `AboutSection` (#about)
10. `ContactSection` (#contact)

- [ ] **Step 2: Update SEO metadata and JSON-LD schema in `nuxt.config.ts` and `pages/index.vue`**
Set page title: `Jeric Izon - Senior Full-Stack Engineer`
Meta description: `Jeric Izon is a senior full-stack engineer specializing in Laravel, Vue/Nuxt, NestJS, AWS and production web systems.`
JSON-LD Person and WebSite schema.

- [ ] **Step 3: Verify page assembly type check**
Run: `npx nuxi typecheck`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit page assembly**
Commit message: `feat(pages): assemble full senior portfolio page with structured metadata`

---

### Phase 6: QA, Accessibility & Build Verification

#### Task 13: End-to-End Build, Prerender & Quality Assurance

**Files:**
- Modify: Any files requiring edge-case fixes discovered during testing.
- Create: `docs/superpowers/qa/20260921_104228-portfolio-redesign-qa.md`

**Interfaces:**
- Consumes: Complete project codebase.
- Produces: Verified static build and QA report.

- [ ] **Step 1: Execute static site generation**
Run: `npm run generate`
Expected: Success with all routes crawled and generated in `.output/public`.

- [ ] **Step 2: Scan for prohibited characters (em-dash check)**
Run: `grep -rn -P '[\x{2013}\x{2014}]' components/ pages/ data/ types/`
Expected: 0 matches.

- [ ] **Step 3: Contrast and accessibility check**
Verify all text satisfies WCAG AA contrast (minimum 4.5:1 ratio against `#0A0A0A` and `#111111`).
Verify keyboard navigation tab-index and aria attributes.

- [ ] **Step 4: Document QA findings**
Save comprehensive QA report in `docs/superpowers/qa/20260921_104228-portfolio-redesign-qa.md`.

- [ ] **Step 5: Commit QA documentation**
Commit message: `docs(qa): record QA verification report for portfolio redesign`

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/20260921_104228-portfolio-redesign-plan.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
