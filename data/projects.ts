import type { Project } from '~/types/project'

export const projects: Project[] = [
  {
    id: 'expresswayph',
    slug: 'expresswayph',
    title: 'ExpresswayPH',
    positioning: 'Independent Product',
    role: 'Founder & Lead Developer',
    year: '2025',
    description:
      'Production web platform for Philippine expressway travelers with route calculation and real-time toll estimation.',
    stack: ['Nuxt', 'Cloudflare', 'Dynamic Toll APIs', 'Plausible Analytics'],
    metric: {
      value: '10k+',
      label: 'active users in 15 days',
      footnote: 'ExpresswayPH peak 15-day holiday surge',
    },
    image: '/images/projects/expresswayph.png',
    liveUrl: 'https://expresswayph.com',
    architecture: [
      { id: 'client', label: 'Traveler', description: 'Mobile / Web' },
      { id: 'edge', label: 'Cloudflare Edge', description: 'DNS / CDN / Cache' },
      { id: 'app', label: 'Nuxt', description: 'SSR / Prerender Engine' },
      { id: 'core', label: 'Toll Matrix', description: 'Routing Service' },
    ],
    caseStudy: {
      problem: [
        'Philippine expressways run on fragmented RFID systems. Autosweep and Easytrip cover different toll plazas, and the published toll matrices are confusing to read.',
        'Travelers had no practical way to forecast total transit expenses before a trip, especially during nationwide holiday surges when routes change.',
      ],
      approach: [
        'I independently designed, built and deployed a lightweight, mobile-first web app with custom matrix computation logic.',
        'Toll data lives in offline-friendly data structures so the app stays fast and usable even on weak mobile connections.',
      ],
      decisions: [
        {
          title: 'Static edge distribution via Cloudflare',
          detail:
            'Zero-downtime deploys and global caching keep the platform available during nationwide travel surges.',
        },
        {
          title: 'Decoupled JSON data feeds',
          detail:
            'Toll rates update instantly without rebuilding or redeploying the application.',
        },
        {
          title: 'Aggressive asset pruning',
          detail:
            'Minimal payload keeps the experience fast for low-bandwidth 3G mobile users on the road.',
        },
      ],
      outcomes: [
        '10k+ active users over a 15-day holiday window',
        '99.9% uptime during nationwide holiday travel surges',
      ],
    },
  },
  {
    id: 'lunchonline',
    slug: 'lunchonline',
    title: 'LunchOnline',
    positioning: 'B2B Lunch & Catering Platform',
    year: '2024',
    description:
      'Multi-tenant enterprise platform connecting corporate teams, meal allowances and food preparation workflows.',
    stack: ['Nuxt 4', 'NestJS', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
    image: '/images/projects/lunchonline.png',
    gallery: ['/images/projects/lunchonline-admin.png'],
    liveUrl: 'https://lunchonline.us',
    architecture: [
      { id: 'client', label: 'Corporate Client', description: 'Teams & stipends' },
      { id: 'app', label: 'Nuxt 4', description: 'Dashboard' },
      { id: 'api', label: 'NestJS API', description: 'Domain Modules' },
      { id: 'db', label: 'PostgreSQL', description: 'ACID Transactions' },
      { id: 'ext', label: 'Stripe', description: 'Provider Dispatch' },
    ],
    caseStudy: {
      problem: [
        'Multi-tenant corporate accounts need individual meal selections under strict company stipends, daily cutoff timers and consolidated monthly billing.',
        'Providers need aggregated orders early enough to prepare food, while finance teams need a single auditable invoice per company.',
      ],
      approach: [
        'A modular, domain-driven NestJS API backed by transactional PostgreSQL schemas keeps tenant data isolated and balances correct.',
        'A modern Nuxt frontend gives employees a fast ordering flow and gives administrators the operational controls they need.',
      ],
      decisions: [
        {
          title: 'Idempotent Stripe billing hooks',
          detail:
            'Payment webhooks are safe to retry, so duplicate deliveries never double-charge a corporate wallet.',
        },
        {
          title: 'Automated reconciliation jobs',
          detail:
            'Scheduled checks compare orders, payments and provider payouts to prevent balance discrepancies.',
        },
        {
          title: 'Docker containerization',
          detail:
            'Identical images across environments make AWS ECS / EC2 deployments predictable and repeatable.',
        },
      ],
      outcomes: [
        'Daily order cutoffs and provider aggregation fully automated',
        'Consolidated, auditable monthly billing per corporate account',
      ],
    },
  },
  {
    id: 'alaganow',
    slug: 'alaganow',
    title: 'AlagaNow',
    positioning: 'Pet Service Booking Platform',
    year: '2024',
    description:
      'Dual-sided marketplace connecting pet owners with verified providers for grooming, boarding, consultations and vaccinations.',
    stack: ['Vue / Nuxt', 'Node.js / Laravel', 'PostgreSQL', 'Tailwind CSS', 'Cloudflare'],
    metric: {
      value: '10k+',
      label: 'care sessions facilitated',
    },
    image: '/images/projects/alaganow.png',
    liveUrl: 'https://alaganow.pages.dev',
    architecture: [
      { id: 'client', label: 'Pet Owner', description: 'Mobile-first booking' },
      { id: 'app', label: 'Vue / Nuxt', description: 'Marketplace UI' },
      { id: 'api', label: 'Node / Laravel', description: 'Scheduling Engine' },
      { id: 'db', label: 'PostgreSQL', description: 'Bookings & Records' },
      { id: 'ext', label: 'Notifications', description: 'Reminder Queue' },
    ],
    caseStudy: {
      problem: [
        'Scheduling between pet parents and local providers was manual and fragmented, causing double-bookings.',
        'Vaccination compliance lapsed because reminders lived in chat threads and paper records.',
      ],
      approach: [
        'A real-time scheduling engine coordinates availability between owners and verified providers.',
        'Automated vaccination reminder pipelines and dedicated provider portals keep operations and pet records on track.',
      ],
      decisions: [
        {
          title: 'Timezone-aware conflict avoidance',
          detail:
            'Scheduling logic prevents double-bookings across providers, services and time windows.',
        },
        {
          title: 'Asynchronous notification queue',
          detail:
            'Reminders and booking updates send reliably without blocking user-facing requests.',
        },
        {
          title: 'Mobile-first touch interface',
          detail:
            'The booking flow is optimized for phones, where most pet owners actually schedule.',
        },
      ],
      outcomes: [
        '10,000+ care sessions facilitated',
        '90% reduction in provider scheduling overhead',
      ],
    },
  },
  {
    id: 'better-santa-rosa',
    slug: 'better-santa-rosa',
    title: 'Better Santa Rosa',
    positioning: 'Civic Transparency Platform',
    year: '2024',
    description:
      'Open-access civic data portal making municipal budgets, public information and project records searchable and understandable.',
    stack: ['Nuxt', 'TypeScript', 'Tailwind CSS', 'Structured JSON-LD'],
    architecture: [
      { id: 'src', label: 'Public Records', description: 'Budgets / Projects' },
      { id: 'etl', label: 'Data Engine', description: 'Structured Schemas' },
      { id: 'app', label: 'Nuxt SSG', description: 'Search & Discovery' },
      { id: 'user', label: 'Citizens', description: 'Open Access' },
    ],
    caseStudy: {
      problem: [
        'Local government budgets and public projects were buried inside unstructured PDFs, fragmented social media feeds and unindexed portals.',
        'Residents had no practical way to search or understand how public money was being allocated.',
      ],
      approach: [
        'A clean, neutral, high-density data and search portal aggregates municipal records into structured, searchable schemas.',
        'The presentation stays descriptive and non-partisan so the data speaks for itself.',
      ],
      decisions: [
        {
          title: 'SSG prerendering',
          detail:
            'Static generation delivers instant page loads even on weak mobile networks.',
        },
        {
          title: 'Schema.org structured data',
          detail:
            'JSON-LD markup makes civic records indexable and discoverable through natural search.',
        },
        {
          title: 'Accessible high-contrast UI',
          detail:
            'The interface is designed for a diverse civic demographic, not just technical users.',
        },
      ],
      outcomes: [
        'Municipal budgets and project records searchable in one place',
        'Instant load times on low-end devices and weak networks',
      ],
    },
  },
]
