<script setup lang="ts">
import { buildPillars } from '~/data/skills'
</script>

<template>
  <section
    id="engineering"
    class="scroll-mt-20 py-20 md:py-28"
    aria-label="Engineering capabilities"
  >
    <AppContainer>
      <SectionHeader
        eyebrow="Capabilities"
        title="What I Build"
        subtitle="End-to-end engineering across product, backend, frontend, data and quality."
      />

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="pillar in buildPillars"
          :key="pillar.id"
          class="flex flex-col gap-4 rounded-xl border border-surface-border bg-surface p-6 transition-colors hover:border-accent/40"
        >
          <span class="font-mono text-xs tracking-widest text-accent">
            {{ pillar.index }}
          </span>
          <h3 class="font-display text-lg font-bold tracking-tight text-text-primary">
            {{ pillar.title }}
          </h3>
          <p class="text-sm leading-relaxed text-text-secondary">
            {{ pillar.description }}
          </p>
          <div class="mt-auto flex flex-wrap gap-2 pt-2">
            <span
              v-for="tech in pillar.stack"
              :key="tech"
              class="rounded bg-surface-border/50 px-2 py-0.5 font-mono text-xs text-text-secondary"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </AppContainer>
  </section>
</template>
