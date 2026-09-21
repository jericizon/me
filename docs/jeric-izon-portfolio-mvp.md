# Jeric Izon Portfolio — Full MVP Redesign Specification

## 1. Project Goal

Rework `https://jericizon.github.io/me/` into a premium senior-engineer portfolio designed to communicate:

> **Senior Full-Stack Engineer who can own a product from architecture → implementation → deployment → production.**

The portfolio should support positioning for senior opportunities in the **₱150k–₱200k+ monthly range** without displaying salary expectations on the website.

### Core positioning

**JERIC IZON**

**Senior Full-Stack Engineer**

> I build and operate production web systems from architecture to deployment.

Primary stack:

- Laravel
- Vue / Nuxt
- NestJS
- AWS

Supporting positioning:

> 10+ years building business applications, APIs, dashboards and production platforms across the backend, frontend, database and infrastructure layers.

---

# 2. Design Direction

## Overall aesthetic

Target a visual language between:

- Linear
- Vercel
- Premium personal portfolio
- Modern engineering case-study site

The site should feel:

- Premium
- Technical
- Confident
- Minimal
- Modern
- Fast
- Product-oriented
- Senior-level

Avoid making it feel like a generic developer résumé template.

## Visual principle

The portfolio should communicate:

> **"This person can own our application."**

Rather than:

> "This person knows many technologies."

---

# 3. Color System

Recommended dark-first palette:

```text
Background     #0A0A0A
Surface        #111111
Surface 2      #171717
Primary text   #F5F5F5
Secondary      #A1A1AA
Border         #27272A
Accent         #A3E635
```

Use only one primary accent color.

The accent can be changed later if needed, but the design should not depend on multiple gradients or neon colors.

---

# 4. Typography

Recommended:

### Display

- Manrope
- or Inter Tight

### Body

- Inter

### Technical metadata

- JetBrains Mono

Typography hierarchy should be strong:

```text
SENIOR FULL-STACK ENGINEER
```

Small uppercase technical label.

Then:

```text
I build software
that survives production.
```

Large display heading.

---

# 5. Navigation

Sticky navigation.

Desktop:

```text
JERIC IZON

Work
About
Experience
Contact

GitHub
Resume
```

Mobile:

```text
JERIC IZON                         ☰
```

Navigation should have:

- Subtle backdrop blur
- Thin border
- Minimal animation
- Excellent mobile behavior

---

# 6. Hero Section

## Content

```text
JERIC IZON

Senior Full-Stack Engineer

I build software that
survives production.

I design, build and operate web systems
from architecture to deployment.

Laravel · Vue/Nuxt · NestJS · AWS

[ View selected work ] [ Let's talk ]

10+ YEARS       7+ YEARS       PRODUCTION
ENGINEERING     VUE/NUXT       SYSTEMS
```

Optional status indicator:

```text
● Available for senior opportunities
```

Do not mention the desired salary.

## Hero design

- Large typography
- Strong whitespace
- Minimal decorative elements
- Very subtle grid/noise texture
- Subtle entrance animation
- No generic developer illustration
- No excessive glow effects

---

# 7. Proof / Metrics Section

Immediately after the hero.

Suggested:

```text
10+
YEARS ENGINEERING

10+
YEARS LARAVEL

7+
YEARS VUE / NUXT

10K+
PRODUCT USERS*
```

Important:

Only display user metrics when they are clearly attributable and accurately described.

For ExpresswayPH, use the exact metric and timeframe that can be substantiated.

---

# 8. Selected Work

This should be the centerpiece of the portfolio.

Heading:

## Selected Work

Supporting text:

> Products, platforms and systems I've designed and built.

---

## Project 01 — ExpresswayPH

### Positioning

**Independent Product · Founder / Lead Developer**

> A production web platform for Philippine expressway travelers.

### Display

Use a large real screenshot/mockup.

Avoid generic technology-only cards.

### Metadata

```text
ROLE
Founder · Lead Developer

STACK
Nuxt · Cloudflare · APIs · Analytics

FOCUS
Product · Architecture · UX · SEO · Performance
```

### Possible outcomes

- Built and operated independently
- Production Nuxt application
- Expressway toll and route tools
- User-focused information architecture
- SEO and performance optimization
- Analytics and production monitoring
- Cloudflare infrastructure
- Ad monetization

Where accurate, highlight the known user metric:

> 10k+ active users over a 15-day period

### CTA

```text
View case study →
```

---

# 9. Project 02 — LunchOnline

### Positioning

**B2B Lunch / Catering Platform**

> B2B lunch and catering platform connecting businesses, food providers and operational workflows.

### Technology

```text
Nuxt 4
NestJS
PostgreSQL
Stripe
AWS
Docker
```

### Architecture visualization

```text
Customer
   ↓
Nuxt
   ↓
NestJS API
   ↓
PostgreSQL
   ↓
Stripe / Business Services
```

### Case-study topics

- Product architecture
- Backend/API design
- PostgreSQL
- Stripe wallet/top-up flow
- Business roles
- Food-provider workflows
- AWS deployment
- Docker

---

# 10. Project 03 — AlagaNow

### Positioning

**Pet Service Booking Platform**

> Pet-service booking platform connecting pet parents with professional service providers.

### Features to communicate

- Provider onboarding
- Booking
- Consultations
- Grooming
- Boarding
- Vaccination workflows
- Operational management

### Design

Use actual UI screenshots.

Do not make it a technology-logo card.

---

# 11. Project 04 — Better Santa Rosa

### Positioning

**Civic Transparency Platform**

> Civic transparency platform focused on making public information easier to discover and understand.

### Focus

- Public information
- Data presentation
- Search/discovery
- Professional UI
- Content organization
- Transparency-oriented UX

Keep political/civic content descriptive and neutral.

---

# 12. Case Study Template

Every major project should have a case-study view.

Example:

## ExpresswayPH

### The Problem

Explain the real user problem in 2–4 paragraphs.

### The Approach

Explain how the product was designed and implemented.

### Architecture

Show a simplified system diagram.

Example:

```text
                    Cloudflare
                        │
                        ▼
                    Nuxt App
                        │
            ┌───────────┼───────────┐
            ▼           ▼           ▼
         Toll Data   Routing     Analytics
            │
            ▼
       Application Data
```

### Engineering Decisions

Example sections:

- Why Nuxt?
- Why Cloudflare?
- How was performance handled?
- How was data structured?
- How was production monitoring handled?

### Result

Show:

- User metrics
- Performance improvements
- Product milestones
- Screenshots
- Links

Do not invent metrics.

---

# 13. What I Build

Do not simply call this "Skills."

Heading:

## What I Build

---

## Product Engineering

> Turning business requirements into production-ready applications.

Technologies:

```text
Laravel
NestJS
Nuxt
Vue
TypeScript
```

---

## Backend & APIs

> Business logic, REST APIs, authentication, authorization, integrations and data-heavy applications.

Technologies:

```text
PHP
Laravel
Node.js
NestJS
REST APIs
```

---

## Frontend

> Fast, responsive interfaces for dashboards, internal tools and customer-facing products.

Technologies:

```text
Vue
Nuxt
Tailwind CSS
JavaScript
TypeScript
```

---

## Data & Infrastructure

> Designing applications that are reliable beyond the local development environment.

Technologies:

```text
PostgreSQL
MySQL
AWS
Cloudflare
Docker
Linux
CI/CD
```

---

## Engineering Quality

> I care about maintainability, testing and making systems easier to change.

Technologies / practices:

```text
TDD
Testing
Security
Performance
Code Review
```

---

# 14. Engineering Philosophy

Heading:

## I don't just write features.

Subheading:

### I think about the system around them.

Four principles:

---

## 01 — Ownership

> I can work across the stack instead of treating frontend, backend and infrastructure as separate worlds.

---

## 02 — Simplicity

> Good architecture should make future changes easier, not turn every feature into a project.

---

## 03 — Production

> Code isn't finished when it works locally. It has to survive deployment, real users, monitoring and maintenance.

---

## 04 — Continuous Improvement

> I use modern tooling—including AI-assisted development—to move faster while retaining responsibility for the resulting code.

---

# 15. Experience

Use a timeline rather than a giant résumé wall.

## Senior Laravel Developer

**Australian company · Apr 2024–Present**

Description:

> Production Laravel applications, APIs, frontend integrations and cloud infrastructure.

Technology:

```text
Laravel
AWS
Next.js
Gatsby
```

Emphasize:

- Production ownership
- SLA work
- Backend development
- Frontend integration
- AWS
- Deployment
- Troubleshooting

---

## Senior Backend Developer

**Bubio · Apr 2025–Dec 2025**

Description:

> Backend systems, REST APIs, database security, administrative features and Supabase infrastructure.

Technology:

```text
Laravel
Supabase
PostgreSQL
REST APIs
```

Emphasize:

- REST APIs
- Database security
- Supabase RLS
- Edge Functions
- Admin features
- Production backend work

---

## Full-Stack Engineer

**OFFEO / IO / BUBBLE · 2018–2025**

Description:

> Long-term development of business applications and production systems across backend and frontend.

Emphasize:

- Laravel
- Vue
- Business applications
- Internal systems
- APIs
- Dashboards
- Production maintenance

---

# 16. Technical Stack

Use a clean technical matrix instead of dozens of logos.

| Area | Technologies |
|---|---|
| Backend | Laravel · PHP · NestJS · Node.js |
| Frontend | Vue · Nuxt · JavaScript · TypeScript |
| Database | PostgreSQL · MySQL |
| Cloud | AWS · Cloudflare · DigitalOcean |
| Infrastructure | Docker · Linux · CI/CD |
| Testing | TDD · PHPUnit · Automated Testing |
| UI | Tailwind CSS |
| Additional | React · Terraform · WordPress |

Primary technologies should visually dominate.

Secondary technologies should be visually quieter.

---

# 17. AI-Assisted Engineering

Heading:

## Modern Engineering Workflow

Supporting text:

> I use AI as an engineering multiplier—not as a replacement for engineering judgment.

Workflow:

```text
UNDERSTAND
     ↓
PLAN
     ↓
IMPLEMENT
     ↓
TEST
     ↓
REVIEW
     ↓
SHIP
```

Tools:

```text
Windsurf
Claude Code
Codex CLI
ChatGPT
Antigravity
```

Description:

> AI helps me explore unfamiliar code, accelerate implementation, generate test cases, investigate bugs and reduce repetitive work. I review and validate the resulting code before it reaches production.

Do not make AI the central identity of the portfolio.

It should be a productivity advantage.

---

# 18. GitHub

Heading:

## See how I build

Description:

> Selected repositories, experiments and engineering work.

CTA:

```text
GitHub →
```

Avoid embedding an enormous GitHub statistics dashboard.

A clean link is enough.

---

# 19. About

Heading:

## A little about me

Suggested copy:

> I'm a full-stack engineer based in the Philippines with more than a decade of experience building web applications and business systems.

> My strongest background is in Laravel and Vue/Nuxt, but my work increasingly spans Node/NestJS, PostgreSQL, AWS and modern cloud infrastructure.

> Over the years I've worked on everything from internal tools and administrative systems to customer-facing products and independent applications.

Closing statement:

> **I enjoy the difficult part: turning messy requirements into software that actually works.**

---

# 20. Contact

Heading:

## Let's build something useful.

Supporting copy:

> Looking for a senior engineer who can take ownership beyond writing tickets?

> I'm open to senior full-stack engineering opportunities, long-term product work and technically interesting projects.

Buttons:

```text
Email me

LinkedIn
GitHub
```

Keep the contact section extremely simple.

---

# 21. Footer

```text
JERIC IZON

Senior Full-Stack Engineer

Laravel · Vue/Nuxt · NestJS · AWS

© 2026 Jeric Izon
```

---

# 22. Motion & Interaction

Animations should be subtle and purposeful.

## Hero

- Fade/slide entrance
- Small stagger between heading and supporting content

## Project cards

- Slight image scale on hover
- Border/accent transition
- CTA movement

## Scroll

- Reveal content when entering viewport
- Avoid excessive parallax

## Architecture diagrams

- Subtle left-to-right flow animation

## Buttons

- Small hover translation
- Accent transition
- No exaggerated magnetic effects

## Avoid

- Giant glowing cursor
- Excessive particle effects
- Excessive neon
- 15+ scroll animations
- Heavy 3D scenes
- Long loading animations

Performance is more important than visual gimmicks.

---

# 23. Responsive Design

Mobile is a first-class experience.

Desktop:

```text
Navigation

Hero

Metrics

Selected Work

Engineering

Experience

Stack

AI Workflow

About

Contact
```

Mobile:

```text
Navigation

Hero

Metrics

Project 01

Project 02

Project 03

Project 04

What I Build

Engineering Philosophy

Experience

Technical Stack

AI Workflow

About

Contact
```

Requirements:

- No horizontal overflow
- Large typography scales down gracefully
- Project images remain prominent
- Touch targets at least ~44px
- Sticky navigation remains usable
- Case studies work well on mobile
- Animations respect `prefers-reduced-motion`

---

# 24. SEO

Page title:

```text
Jeric Izon — Senior Full-Stack Engineer
```

Meta description:

```text
Jeric Izon is a senior full-stack engineer specializing in Laravel, Vue/Nuxt, NestJS, AWS and production web systems.
```

Open Graph:

```text
og:title
Jeric Izon — Senior Full-Stack Engineer

og:description
Building production web systems from architecture to deployment.

og:type
website
```

Include:

- Canonical URL
- Open Graph image
- Twitter/X card
- JSON-LD Person schema
- JSON-LD WebSite schema
- Semantic headings
- Accessible links
- Descriptive image alt text

---

# 25. Performance

The portfolio itself should demonstrate engineering quality.

Target:

- Fast first render
- Optimized images
- Lazy-loaded project screenshots
- Minimal JavaScript where possible
- No unnecessary third-party scripts
- No giant video backgrounds
- No huge font payload
- Good Core Web Vitals
- Good Lighthouse accessibility
- Good SEO score

Recommended target:

```text
Performance       90+
Accessibility     95+
Best Practices    95+
SEO               95+
```

Treat these as targets, not fabricated results.

---

# 26. Accessibility

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper heading hierarchy
- Sufficient color contrast
- Alt text
- Reduced-motion support
- Accessible mobile navigation
- Buttons used for actions
- Links used for navigation

---

# 27. Project Data Structure

Projects should be data-driven rather than hardcoded into large components.

Suggested structure:

```text
projects/
  expresswayph
  lunchonline
  alaganow
  better-santa-rosa
```

Each project should contain:

```text
title
slug
description
role
period
stack
focus
image
gallery
problem
approach
architecture
engineeringDecisions
results
links
```

This makes future projects easy to add.

---

# 28. Component Structure

Suggested component architecture:

```text
components/
├── layout/
│   ├── Navbar
│   ├── Footer
│   └── Container
│
├── hero/
│   ├── Hero
│   └── HeroMetrics
│
├── work/
│   ├── SelectedWork
│   ├── ProjectCard
│   ├── ProjectCaseStudy
│   └── ArchitectureDiagram
│
├── engineering/
│   ├── WhatIBuild
│   ├── Philosophy
│   ├── ExperienceTimeline
│   ├── TechStack
│   └── AIWorkflow
│
├── about/
│   └── About
│
├── contact/
│   └── Contact
│
└── ui/
    ├── Button
    ├── Badge
    ├── SectionHeading
    └── Reveal
```

---

# 29. Recommended Page Architecture

```text
/
│
├── Hero
│
├── Proof / Metrics
│
├── Selected Work
│   ├── ExpresswayPH
│   ├── LunchOnline
│   ├── AlagaNow
│   └── Better Santa Rosa
│
├── What I Build
│
├── Engineering Philosophy
│
├── Experience
│
├── Technical Stack
│
├── AI-Assisted Engineering
│
├── About
│
├── Contact
│
└── Footer
```

Optional future routes:

```text
/work
/work/expresswayph
/work/lunchonline
/work/alaganow
/work/better-santa-rosa
/about
/resume
```

For the initial MVP, a single-page portfolio can be used if it provides a better implementation-to-maintenance ratio.

---

# 30. What to Remove

Remove or heavily reduce:

- Skill percentage bars
- Huge technology-logo walls
- Generic "passionate developer" wording
- Long generic biography
- Every tiny project
- Every technology ever touched
- Generic stock illustrations
- Excessive animation
- "Hardworking / motivated / passionate" filler
- Huge GitHub statistics dashboards

The site should sell through:

**Experience + ownership + products + measurable outcomes + technical depth.**

---

# 31. Content Hierarchy

The visitor should understand the following within approximately 15 seconds:

1. Who is Jeric?
2. What level is he?
3. What does he specialize in?
4. What has he actually built?
5. Can he own a production system?
6. How can I contact him?

The page should answer those questions without requiring the visitor to read the entire résumé.

---

# 32. Target Impression

The portfolio should make the visitor think:

> "This person can own our application."

Not:

> "This person knows a lot of frameworks."

The design should communicate:

**Developer → Senior Engineer → System Owner → Product/Technical Lead**

---

# 33. Implementation Priorities

## P0 — Must Have

- New hero
- New navigation
- Selected Work
- ExpresswayPH case study
- LunchOnline case study
- AlagaNow case study
- Better Santa Rosa case study
- Experience timeline
- Technical stack
- Contact section
- Responsive design
- SEO metadata
- Accessibility
- Performance optimization

## P1 — Important

- Architecture diagrams
- Scroll reveal animations
- Project gallery
- Detailed case-study pages
- AI workflow section
- GitHub integration
- Downloadable résumé

## P2 — Future

- Blog / engineering notes
- More detailed project metrics
- Interactive architecture diagrams
- Engineering articles
- Testimonials
- Client/project references

---

# 34. MVP Success Criteria

The redesigned website is successful when:

### Positioning

A visitor immediately understands that Jeric is a senior full-stack engineer.

### Credibility

The visitor sees real products and real engineering work rather than only technology lists.

### Technical depth

The visitor can see evidence of:

- Backend architecture
- Frontend engineering
- Databases
- Cloud
- Testing
- Production operations

### Product thinking

The portfolio demonstrates that Jeric can turn requirements into working products.

### Design

The site feels:

- Premium
- Modern
- Technical
- Fast
- Professional
- Distinctive

### Conversion

A recruiter or engineering manager can reach the résumé, GitHub or contact information within one or two interactions.

---

# 35. Final Positioning

The core message of the portfolio should be:

> **Senior Full-Stack Engineer**
>
> I build and operate production web systems from architecture to deployment.
>
> **Laravel · Vue/Nuxt · NestJS · AWS**
>
> 10+ years building business applications, APIs, dashboards and products.

The portfolio should not explicitly sell a ₱150k–₱200k salary target.

Instead, it should provide enough evidence that the visitor can independently associate the profile with senior-level engineering scope and responsibility.

---

# Final Design Concept

## "Engineer Who Ships"

The site should combine:

**Linear-level polish**

+

**Vercel-style technical clarity**

+

**Product case studies**

+

**Jeric's actual engineering experience**

The key differentiator is not flashy animation.

It is showing:

```text
IDEA
  ↓
ARCHITECTURE
  ↓
IMPLEMENTATION
  ↓
TESTING
  ↓
DEPLOYMENT
  ↓
PRODUCTION
```

That is the story the entire portfolio should tell.
