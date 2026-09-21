<script setup lang="ts">
import { experiences } from '~/data/experience'
</script>

<template>
  <section
    id="experience"
    class="scroll-mt-20 py-20 md:py-28"
    aria-label="Experience"
  >
    <AppContainer>
      <SectionHeader
        eyebrow="Experience"
        title="A decade of production ownership"
        subtitle="Senior roles spanning product engineering, backend architecture and cloud operations."
      />

      <ol class="relative mt-12 flex flex-col gap-10 border-l border-surface-border pl-8">
        <li
          v-for="job in experiences"
          :key="job.id"
          class="relative flex flex-col gap-3"
        >
          <span
            class="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-base"
            aria-hidden="true"
          />

          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 class="font-display text-xl font-bold tracking-tight text-text-primary">
              {{ job.role }}
            </h3>
            <span class="text-sm text-text-secondary">{{ job.company }}</span>
            <span class="font-mono text-xs text-text-muted">{{ job.period }}</span>
          </div>

          <p class="max-w-2xl text-sm leading-relaxed text-text-secondary">
            {{ job.summary }}
          </p>

          <ul class="flex max-w-2xl flex-col gap-1.5">
            <li
              v-for="highlight in job.highlights"
              :key="highlight"
              class="flex items-start gap-2 text-sm text-text-secondary"
            >
              <span class="mt-2 h-px w-3 shrink-0 bg-accent/60" aria-hidden="true" />
              {{ highlight }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 pt-1">
            <span
              v-for="tech in job.stack"
              :key="tech"
              class="rounded bg-surface-border/50 px-2 py-0.5 font-mono text-xs text-text-secondary"
            >
              {{ tech }}
            </span>
          </div>
        </li>
      </ol>
    </AppContainer>
  </section>
</template>
