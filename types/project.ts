export interface ArchitectureNode {
  id: string
  label: string
  description?: string
}

export interface ProjectMetric {
  value: string
  label: string
  footnote?: string
}

export interface EngineeringDecision {
  title: string
  detail: string
}

export interface CaseStudy {
  problem: string[]
  approach: string[]
  decisions: EngineeringDecision[]
  outcomes: string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  positioning: string
  role?: string
  year: string
  description: string
  stack: string[]
  metric?: ProjectMetric
  image?: string
  gallery?: string[]
  liveUrl?: string
  architecture: ArchitectureNode[]
  caseStudy: CaseStudy
}
