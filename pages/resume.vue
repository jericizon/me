<script setup lang="ts">
import { resumeData } from '~/data/resume'

const { header } = resumeData
const summaryParagraphs = resumeData.summary.split('\n\n')
const telHref = `tel:${header.phone.replace(/\s/g, '')}`

// Derive a machine-readable start date ("April 2024" -> "2024-04") for <time datetime>
const MONTHS: Record<string, string> = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
}

const periodStartDatetime = (period: string): string | undefined => {
  const [month, year] = period.split(' - ')[0].split(' ')
  const monthNumber = MONTHS[month]
  return monthNumber && year ? `${year}-${monthNumber}` : undefined
}

const pageTitle = 'Jeric Izon - Senior AI & Full-Stack Engineer Resume'
const pageDescription =
  'Resume of Jeric Izon, a senior AI and full-stack engineer specializing in Laravel, Node.js, NestJS, Vue/Nuxt, AWS, AI agents, LLM integrations, automation, and SaaS architecture.'
const canonicalUrl = 'https://jericizon.github.io/me/resume'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: 'https://jericizon.github.io/me/images/banner.png',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: 'https://jericizon.github.io/me/images/banner.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>

<template>
  <article class="mx-auto max-w-3xl px-6 py-16 sm:py-24">
    <header class="resume-header border-b border-surface-border pb-10 text-center">
      <h1 class="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {{ header.name }}
      </h1>
      <p class="mt-3 font-display text-lg font-semibold text-accent">
        {{ header.roleTitle }}
      </p>
      <p class="mt-2 text-sm text-text-secondary">
        {{ header.headline }}
      </p>
      <p class="resume-contact mt-5 text-sm text-text-muted">
        {{ header.location }} ·
        <a
          :href="telHref"
          class="text-text-secondary underline underline-offset-2 transition-colors hover:text-accent"
        >{{ header.phone }}</a>
        ·
        <a
          :href="`mailto:${header.email}`"
          class="text-text-secondary underline underline-offset-2 transition-colors hover:text-accent"
        >{{ header.email }}</a>
      </p>
      <p class="resume-links mt-3 text-sm">
        <a
          :href="header.portfolioUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-accent underline underline-offset-4"
        >Portfolio</a>
        |
        <a
          :href="header.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-accent underline underline-offset-4"
        >GitHub</a>
        |
        <a
          :href="header.linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-accent underline underline-offset-4"
        >LinkedIn</a>
      </p>
    </header>

    <section class="resume-section mt-12" aria-labelledby="summary-heading">
      <h2
        id="summary-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        PROFESSIONAL SUMMARY
      </h2>
      <div class="mt-4 space-y-4">
        <p
          v-for="(paragraph, index) in summaryParagraphs"
          :key="index"
          class="leading-relaxed text-text-secondary"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="resume-section mt-12" aria-labelledby="skills-heading">
      <h2
        id="skills-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        CORE TECHNICAL SKILLS
      </h2>
      <div class="mt-4 space-y-2">
        <p
          v-for="category in resumeData.skills"
          :key="category.category"
          class="leading-relaxed text-text-secondary"
        >
          <strong class="font-semibold text-text-primary">{{ category.category }}:</strong>
          {{ category.skills.join(', ') }}
        </p>
      </div>
    </section>

    <section class="resume-section mt-12" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        PROFESSIONAL EXPERIENCE
      </h2>
      <div class="mt-6 space-y-10">
        <article
          v-for="job in resumeData.experience"
          :key="job.id"
          class="resume-item"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 class="font-display text-base font-semibold text-text-primary">
              {{ job.role }}
            </h3>
            <time
              class="resume-period shrink-0 font-mono text-xs text-text-muted"
              :datetime="periodStartDatetime(job.period)"
            >
              {{ job.period }}
            </time>
          </div>
          <p class="mt-1 text-sm font-medium text-text-secondary">
            {{ job.company }} · {{ job.location }}
          </p>
          <p v-if="job.summary" class="mt-3 leading-relaxed text-text-secondary">
            {{ job.summary }}
          </p>
          <ul
            v-if="job.highlights.length"
            class="resume-highlights mt-4 list-disc space-y-1.5 pl-5 marker:text-text-muted"
          >
            <li
              v-for="(highlight, index) in job.highlights"
              :key="index"
              class="leading-relaxed text-text-secondary"
            >
              {{ highlight }}
            </li>
          </ul>
          <p v-if="job.stack.length" class="resume-stack mt-3 text-sm text-text-muted">
            <span class="font-medium text-text-secondary">Stack:</span>
            {{ job.stack.join(', ') }}
          </p>
        </article>
      </div>
    </section>

    <section class="resume-section mt-12" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        class="section-title border-b border-surface-border pb-2 font-display text-lg font-bold tracking-wide text-text-primary"
      >
        SELECTED PROJECTS
      </h2>
      <div class="mt-6 space-y-10">
        <article
          v-for="project in resumeData.projects"
          :key="project.id"
          class="resume-item"
        >
          <h3 class="font-display text-base font-semibold text-text-primary">
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent underline underline-offset-4"
            >{{ project.name }}</a>
            <template v-else>{{ project.name }}</template>
          </h3>
          <p class="mt-1 text-sm font-medium text-text-secondary">
            {{ project.role }}
          </p>
          <p class="mt-3 leading-relaxed text-text-secondary">
            {{ project.description }}
          </p>
          <ul
            v-if="project.highlights.length"
            class="resume-highlights mt-4 list-disc space-y-1.5 pl-5 marker:text-text-muted"
          >
            <li
              v-for="(highlight, index) in project.highlights"
              :key="index"
              class="leading-relaxed text-text-secondary"
            >
              {{ highlight }}
            </li>
          </ul>
          <p v-if="project.stack.length" class="resume-stack mt-3 text-sm text-text-muted">
            <span class="font-medium text-text-secondary">Stack:</span>
            {{ project.stack.join(', ') }}
          </p>
        </article>
      </div>
    </section>
  </article>
</template>
