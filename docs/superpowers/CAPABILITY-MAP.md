# Capability Map: Jeric Izon Portfolio Redesign

| Module id | Responsibility | Depends on |
|---|---|---|
| `core-theme-tokens` | Tailwind configuration, color tokens (#0A0A0A, #111111, #A3E635), typography (Space Grotesk, Inter, JetBrains Mono), base styling | — |
| `data-models` | TypeScript interfaces and static datasets for projects, case studies, experience timeline, stack matrix, and philosophy | `core-theme-tokens` |
| `layout-shell` | Single-line sticky navbar with mobile drawer, footer with branding and copyright, container wrapper | `core-theme-tokens`, `data-models` |
| `hero-proof` | Viewport-stable hero, positioning copy, primary stack pills, CTA buttons, metrics proof strip | `core-theme-tokens`, `layout-shell` |
| `selected-work` | Centerpiece project cards, case-study modals/drawers, interactive architecture flow diagrams for ExpresswayPH, LunchOnline, AlagaNow, Better Santa Rosa | `core-theme-tokens`, `data-models` |
| `engineering-depth` | "What I Build" capability cards, "Engineering Philosophy" principles, Experience timeline, Technical stack matrix, and AI-assisted workflow section | `core-theme-tokens`, `data-models` |
| `about-contact` | "About Me" narrative section, clean contact CTA (Email, LinkedIn, GitHub, Resume download) | `core-theme-tokens`, `data-models` |
| `seo-performance-qa` | Meta tags, OpenGraph, JSON-LD Person/WebSite schema, accessibility audit, static generation verification, Lighthouse readiness | All modules |

Build order: `core-theme-tokens` → `data-models` → `layout-shell` → `hero-proof` → `selected-work` → `engineering-depth` → `about-contact` → `seo-performance-qa`
