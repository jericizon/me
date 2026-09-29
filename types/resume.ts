export interface ResumeHeader {
  name: string
  roleTitle: string
  headline: string
  location: string
  portfolioUrl: string
  githubUrl: string
  linkedinUrl: string
}

export interface ResumeSkillCategory {
  category: string
  skills: string[]
}

export interface ResumeExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  summary?: string
  highlights: string[]
  stack: string[]
}

export interface ResumeProjectItem {
  id: string
  name: string
  url?: string
  role: string
  description: string
  highlights: string[]
  stack: string[]
}

export interface ResumeData {
  header: ResumeHeader
  summary: string
  skills: ResumeSkillCategory[]
  experience: ResumeExperienceItem[]
  projects: ResumeProjectItem[]
}
