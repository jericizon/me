# Implementation Plan: Jeric Izon Portfolio Redesign

**Spec Reference:** `docs/superpowers/specifications/20260921_104228-portfolio-redesign-spec.md`  
**Detailed Plan:** `docs/superpowers/plans/20260921_104228-portfolio-redesign-plan.md`  
**Created:** 2026-09-21

## Overview
Transform the portfolio at `https://jericizon.github.io/me/` from a generic freelance developer template into a senior full-stack engineer showcase communicating end-to-end production ownership (Laravel, Vue/Nuxt, NestJS, AWS) with Linear/Vercel-level polish.

## Architecture Decisions
- Dark-first aesthetic (#0A0A0A background, #111111 surface, #A3E635 lime accent)
- Space Grotesk / Inter Tight for display, Inter for body, JetBrains Mono for metadata
- Decoupled TypeScript data models in `data/` for projects, experience, skills, and philosophy
- Single-line sticky navigation at desktop (<= 80px) and mobile drawer
- Viewport-constrained hero section with max 4 text elements
- Selected Work centerpiece featuring ExpresswayPH, LunchOnline, AlagaNow, and Better Santa Rosa with deep case studies and architecture flow diagrams
- Zero em-dashes (Unicode U+2014) in copy or markup
- Nuxt 3 static site generation (SSG) deployment to GitHub Pages

## Task List Index

### Phase 1: Foundations & Design System
- [x] Task 1: Design Tokens & Tailwind Theme Configuration
- [x] Task 2: TypeScript Data Models & Static Datasets
- [x] Checkpoint: Foundations Validated

### Phase 2: Shell & Top-of-Funnel Experience
- [x] Task 3: Base UI Primitives (BaseBadge, BaseButton, SectionHeader)
- [x] Task 4: Sticky Navigation & App Shell (AppNavbar, AppFooter, AppContainer)
- [x] Task 5: Hero Section & Proof Metrics (HeroSection, ProofMetrics)
- [x] Checkpoint: Shell & Hero Verified

### Phase 3: Centerpiece - Selected Work & Architecture
- [x] Task 6: Architecture Diagram Visualizer (ArchitectureDiagram)
- [x] Task 7: Selected Work Cards & Case Study Modal (ProjectCard, ProjectModal, SelectedWork)
- [x] Checkpoint: Selected Work Verified

### Phase 4: Senior Engineering Depth & Career
- [x] Task 8: What I Build & Engineering Philosophy
- [x] Task 9: Experience Timeline & Technical Stack Matrix
- [x] Task 10: AI-Assisted Engineering Workflow
- [x] Checkpoint: Engineering Depth Verified

### Phase 5: About, Conversion & Page Assembly
- [x] Task 11: About & Contact Sections
- [x] Task 12: Unified Page Assembly & SEO Meta
- [x] Checkpoint: Assembly & Metadata Complete

### Phase 6: QA, Accessibility & Build Verification
- [x] Task 13: End-to-End Build, Prerender & Quality Assurance
- [x] Checkpoint: QA Complete & Ready for Ship

## Risks and Mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| Large image payloads slowing down initial load | High | Optimize project screenshots in public/images/projects, lazy load modal images |
| GitHub Pages base URL routing issues (`/me/`) | Medium | Ensure all assets use Nuxt `withBase` or runtimeConfig `app.baseURL` |
| Viewport overflow on mobile devices | Medium | Enforce `overflow-x-hidden` on app wrapper and test 375px/390px widths |
| Accidental commits to protected `main` branch | High | Create feature branch `feat/portfolio-redesign` before making code commits |
