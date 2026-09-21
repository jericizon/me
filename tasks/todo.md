# Task Tracking: Jeric Izon Portfolio Redesign

**Spec:** `docs/superpowers/specifications/20260921_104228-portfolio-redesign-spec.md`  
**Plan:** `docs/superpowers/plans/20260921_104228-portfolio-redesign-plan.md`

---

## Phase 1: Foundations & Design System

- [ ] Task 1: Design Tokens & Tailwind Theme Configuration
  - Acceptance: Tailwind config has #0A0A0A base, #A3E635 accent, typography font stacks, CSS variables in tailwind.css and main.scss.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `tailwind.config.ts`, `assets/css/tailwind.css`, `assets/css/main.scss`

- [ ] Task 2: TypeScript Data Models & Static Datasets
  - Acceptance: Strongly typed interfaces and datasets for ExpresswayPH, LunchOnline, AlagaNow, Better Santa Rosa, career timeline, skills matrix, and philosophy.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `types/project.ts`, `types/content.ts`, `data/projects.ts`, `data/experience.ts`, `data/skills.ts`, `data/philosophy.ts`

- [ ] Checkpoint 1: Foundations Validated
  - All types compile cleanly without errors.

---

## Phase 2: Shell & Top-of-Funnel Experience

- [ ] Task 3: Base UI Primitives
  - Acceptance: BaseBadge (mono pills), BaseButton (tactile hover states, primary/secondary), SectionHeader (vertical stack, no split headers).
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/ui/BaseBadge.vue`, `components/ui/BaseButton.vue`, `components/ui/SectionHeader.vue`

- [ ] Task 4: Sticky Navigation & App Shell
  - Acceptance: AppNavbar is single-line on desktop (height <= 80px), responsive mobile drawer, AppFooter with positioning statement, AppContainer.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/layout/AppNavbar.vue`, `components/layout/AppFooter.vue`, `components/layout/AppContainer.vue`, `layouts/default.vue`, `app.vue`

- [ ] Task 5: Hero Section & Proof Metrics
  - Acceptance: Hero fits within initial viewport (min-h-[100dvh]), max 4 text elements, max 2 lines headline, max 20 words subtext, proof strip with verified 10k+ metric footnote.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/hero/HeroSection.vue`, `components/hero/ProofMetrics.vue`

- [ ] Checkpoint 2: Shell & Hero Verified
  - Sticky nav and hero render cleanly across desktop and mobile.

---

## Phase 3: Centerpiece - Selected Work & Architecture

- [ ] Task 6: Architecture Diagram Visualizer
  - Acceptance: Visual flow component (Client -> Edge -> API -> DB -> Cloud) with responsive fallback.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/work/ArchitectureDiagram.vue`

- [ ] Task 7: Selected Work Cards & Case Study Modal
  - Acceptance: 4 project cards with real screenshots and verified metrics; modal with problem, approach, architecture diagram, engineering decisions, outcomes, and accessible keyboard dismissal.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/work/ProjectCard.vue`, `components/work/ProjectModal.vue`, `components/work/SelectedWork.vue`

- [ ] Checkpoint 3: Selected Work Verified
  - Case studies open and close reliably with rich architecture diagrams.

---

## Phase 4: Senior Engineering Depth & Career

- [ ] Task 8: What I Build & Engineering Philosophy
  - Acceptance: 5 engineering pillars highlighting production capabilities; 4 core principles articulating senior maturity.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/engineering/WhatIBuild.vue`, `components/engineering/EngineeringPhilosophy.vue`

- [ ] Task 9: Experience Timeline & Technical Stack Matrix
  - Acceptance: Career timeline emphasizing production ownership and SLAs; classified stack matrix with primary technologies visually dominant.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/engineering/ExperienceTimeline.vue`, `components/engineering/TechStackMatrix.vue`

- [ ] Task 10: AI-Assisted Engineering Workflow
  - Acceptance: 6-stage engineering loop showing AI as a productivity multiplier rather than replacement for engineering judgment.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/engineering/AIWorkflowSection.vue`

- [ ] Checkpoint 4: Engineering Depth Verified
  - Full engineering authority communicated across all sections.

---

## Phase 5: About, Conversion & Page Assembly

- [ ] Task 11: About & Contact Sections
  - Acceptance: About narrative highlighting messy requirements to working software; friction-free contact section with direct email, LinkedIn, GitHub, and Resume.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `components/about/AboutSection.vue`, `components/contact/ContactSection.vue`

- [ ] Task 12: Unified Page Assembly & SEO Meta
  - Acceptance: pages/index.vue assembled with all 10 sections in exact priority order; nuxt.config.ts updated with JSON-LD schema and OpenGraph metadata.
  - Verify: `npx nuxi typecheck` passes cleanly.
  - Files: `pages/index.vue`, `nuxt.config.ts`

- [ ] Checkpoint 5: Page Assembly Complete
  - Full page structure in place and passing typechecks.

---

## Phase 6: QA, Accessibility & Build Verification

- [ ] Task 13: End-to-End Build, Prerender & Quality Assurance
  - Acceptance: `npm run generate` succeeds with zero errors; zero em-dashes across codebase; WCAG AA contrast satisfied.
  - Verify: `npm run generate` output files generated in `.output/public`.
  - Files: `docs/superpowers/qa/20260921_104228-portfolio-redesign-qa.md`

- [ ] Checkpoint 6: QA Complete & Ready for Ship
