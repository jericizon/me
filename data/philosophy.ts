import type { AIWorkflowStep, PhilosophyItem } from '~/types/content'

export const philosophies: PhilosophyItem[] = [
  {
    index: '01',
    title: 'Ownership',
    description:
      'I work across the entire stack instead of treating frontend, backend and infrastructure as isolated silos.',
  },
  {
    index: '02',
    title: 'Simplicity',
    description:
      'Good architecture makes future changes easier and prevents routine features from turning into month-long crises.',
  },
  {
    index: '03',
    title: 'Production',
    description:
      'Code is never finished when it only works locally. It must survive deployment, edge cases, unexpected traffic and ongoing maintenance.',
  },
  {
    index: '04',
    title: 'Continuous Improvement',
    description:
      'I use modern tools including AI-assisted development to accelerate output while retaining full ownership of code quality.',
  },
]

export const aiWorkflowSteps: AIWorkflowStep[] = [
  {
    index: '01',
    label: 'Understand',
    description: 'Explore the codebase and requirements before writing a line.',
  },
  {
    index: '02',
    label: 'Plan',
    description: 'Break work into verifiable steps with clear acceptance criteria.',
  },
  {
    index: '03',
    label: 'Implement',
    description: 'Accelerate implementation with AI-assisted drafting and iteration.',
  },
  {
    index: '04',
    label: 'Test',
    description: 'Generate edge-case coverage and validate against real behavior.',
  },
  {
    index: '05',
    label: 'Review',
    description: 'Personally audit output for architecture, security and correctness.',
  },
  {
    index: '06',
    label: 'Ship',
    description: 'Deploy with confidence and own the result in production.',
  },
]

export const aiTools: string[] = ['Windsurf', 'Claude Code', 'Codex CLI', 'ChatGPT']

export const aiWorkflowStatement =
  'I use AI as an engineering multiplier - not as a replacement for engineering judgment.'
