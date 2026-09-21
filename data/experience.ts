import type { Experience } from '~/types/content'

export const experiences: Experience[] = [
  {
    id: 'australian-company',
    role: 'Senior Laravel Developer',
    company: 'Australian Company',
    period: 'Apr 2024 - Present',
    summary:
      'Production Laravel applications, APIs, frontend integrations and cloud infrastructure.',
    highlights: [
      'Own production Laravel applications and the AWS infrastructure behind them',
      'Maintain high-availability SLAs and lead production troubleshooting',
      'Integrate Next.js and Gatsby frontends with Laravel backends',
      'Deploy, monitor and operate cloud workloads end to end',
    ],
    stack: ['Laravel', 'AWS', 'Next.js', 'Gatsby'],
  },
  {
    id: 'bubio',
    role: 'Senior Backend Developer',
    company: 'Bubio',
    period: 'Apr 2025 - Dec 2025',
    summary:
      'Backend systems, REST APIs, database security, administrative features and Supabase infrastructure.',
    highlights: [
      'Designed core backend architecture and REST APIs',
      'Implemented database security with Supabase Row-Level Security (RLS)',
      'Built Edge Functions and administrative tooling for operations teams',
    ],
    stack: ['Laravel', 'Supabase', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'offeo',
    role: 'Full-Stack Engineer',
    company: 'OFFEO / IO / BUBBLE',
    period: '2018 - 2025',
    summary:
      'Long-term development of business applications and production systems across backend and frontend.',
    highlights: [
      'Shipped SaaS features, APIs and administrative dashboards in Laravel and Vue',
      'Built and maintained video-rendering pipelines and internal systems',
      'Owned production maintenance across multiple business applications',
    ],
    stack: ['Laravel', 'Vue', 'Node.js', 'MySQL'],
  },
]
