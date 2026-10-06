import type { Experience } from '~/types/content'

export const experiences: Experience[] = [
  {
    id: 'cloudstaff',
    role: 'Senior Laravel Developer',
    company: 'Cloudstaff',
    period: 'Apr 2024 - Present',
    summary:
      'SLA-driven Laravel systems for a confidential Australian client, across AWS, Azure, Kinsta and Ploi.',
    highlights: [
      'Develop and maintain SLA-driven Laravel systems, upholding 99.9% uptime',
      'Deliver high-priority features across multiple projects under tight timelines',
      'Manage infrastructure deployments on AWS, Azure, Kinsta and Ploi',
      'Apply AI-assisted engineering workflows (Claude Code, Codex, MCP)',
    ],
    stack: ['Laravel', 'AWS', 'Azure', 'Vue.js', 'Gatsby'],
  },
  {
    id: 'expresswayph',
    role: 'Founder & Lead Developer',
    company: 'ExpresswayPH',
    period: 'Nov 2025 - Present',
    summary:
      'Web platform helping drivers navigate Philippine expressway exits, built end to end from architecture to deployment.',
    highlights: [
      'Solo-built the platform from system architecture and backend logic to frontend UI/UX and deployment',
      'Focused on usability, performance, and real-world routing accuracy for local road conditions',
    ],
    stack: ['Nuxt.js', 'Vue.js', 'Node.js', 'Tailwind CSS', 'Netlify'],
  },
  {
    id: 'imaginary-ones',
    role: 'Senior Software Engineer, Backend & Full-Stack',
    company: 'Imaginary Ones | Bubio.ai',
    period: '2022 - 2024',
    summary:
      'Backend architecture and full-stack development for two early-stage products: Imaginary Ones and Bubio.ai.',
    highlights: [
      'Architected backend systems and REST APIs with NestJS, Node.js and Supabase',
      'Implemented Supabase RLS, Edge Functions and Redis caching for multi-tenant data',
      'Built full-stack features with Nuxt and React, deployed via Docker and CI/CD on AWS',
    ],
    stack: ['NestJS', 'Node.js', 'Supabase', 'Nuxt', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'offeo',
    role: 'Senior Software Engineer, Backend & Full-Stack',
    company: 'OFFEO',
    period: '2018 - 2024',
    summary:
      'Founding engineer of a SaaS video-creation platform; built the backend and rendering pipeline, then maintained and scaled the mature platform.',
    highlights: [
      'Built the platform backend and frontend from the ground up, promoted to Senior in 2020',
      'Architected a distributed rendering/export engine (Node.js, FFmpeg, Laravel queues, Redis, S3)',
      'Maintained and scaled the mature platform from 2022 while new products ran in parallel',
      'Owned production maintenance, export servers and mentoring',
    ],
    stack: ['Laravel', 'Node.js', 'Vue', 'FFmpeg', 'Redis', 'AWS', 'Docker'],
  },
]
