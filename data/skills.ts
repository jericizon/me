import type { BuildPillar, SkillGroup } from '~/types/content'

export const buildPillars: BuildPillar[] = [
  {
    id: 'ai-engineering',
    index: '01',
    title: 'AI Engineering',
    description:
      'Working with AI agents and coding assistants to accelerate development, turning around features faster while raising the quality bar through generated tests, reviews and automation.',
    stack: ['Claude Code', 'OpenAI Codex', 'MCP', 'Agentic Workflows', 'LLM Integration'],
  },
  {
    id: 'product-engineering',
    index: '02',
    title: 'Product Engineering',
    description:
      'Turning complex business requirements into production-ready web applications.',
    stack: ['Laravel', 'NestJS', 'Nuxt', 'Vue', 'TypeScript'],
  },
  {
    id: 'backend-apis',
    index: '03',
    title: 'Backend & APIs',
    description:
      'Scalable REST APIs, authentication and authorization, third-party integrations, webhook handling and data integrity.',
    stack: ['PHP', 'Laravel', 'Node.js', 'NestJS', 'REST APIs'],
  },
  {
    id: 'frontend',
    index: '04',
    title: 'Frontend Engineering',
    description:
      'High-performance, responsive interfaces for dashboards, internal tools and client-facing platforms.',
    stack: ['Vue', 'Nuxt', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'data-infrastructure',
    index: '05',
    title: 'Data & Cloud Infrastructure',
    description:
      'Reliable architectures designed to run smoothly beyond the local development environment.',
    stack: ['PostgreSQL', 'MySQL', 'AWS', 'Cloudflare', 'Docker', 'Linux', 'CI/CD'],
  },
  {
    id: 'engineering-quality',
    index: '06',
    title: 'Engineering Quality',
    description:
      'Maintainable codebases backed by automated testing, security reviews and observability.',
    stack: ['TDD', 'PHPUnit', 'Vitest', 'Security Hardening', 'Performance Tuning'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    label: 'Backend',
    primary: ['Laravel', 'NestJS'],
    secondary: ['PHP', 'Node.js'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    primary: ['Nuxt', 'Vue 3'],
    secondary: ['TypeScript', 'JavaScript'],
  },
  {
    id: 'database',
    label: 'Database',
    primary: ['PostgreSQL'],
    secondary: ['MySQL', 'Redis'],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    primary: ['AWS', 'Cloudflare'],
    secondary: ['Docker', 'Linux', 'CI/CD', 'DigitalOcean'],
  },
  {
    id: 'testing-quality',
    label: 'Testing & Quality',
    primary: [],
    secondary: ['TDD', 'PHPUnit', 'Automated Integration Testing'],
  },
  {
    id: 'ui-styling',
    label: 'UI & Styling',
    primary: ['Tailwind CSS'],
    secondary: ['Responsive Design', 'Accessible Systems'],
  },
  {
    id: 'additional',
    label: 'Additional',
    primary: [],
    secondary: ['React', 'Terraform', 'WordPress'],
  },
]
