export interface Experience {
  id: string
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface BuildPillar {
  id: string
  index: string
  title: string
  description: string
  stack: string[]
}

export interface SkillGroup {
  id: string
  label: string
  primary: string[]
  secondary: string[]
}

export interface PhilosophyItem {
  index: string
  title: string
  description: string
}

export interface AIWorkflowStep {
  index: string
  label: string
  description: string
}
