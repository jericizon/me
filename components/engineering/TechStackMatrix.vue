<script setup lang="ts">
import { skillGroups } from '~/data/skills'
</script>

<template>
  <section class="py-20 md:py-28" aria-label="Technical stack">
    <AppContainer>
      <SectionHeader
        eyebrow="Technical Stack"
        title="Tools I reach for"
        subtitle="Primary technologies first. Everything else stays quiet."
      />

      <dl class="mt-12 flex flex-col divide-y divide-surface-border border-y border-surface-border">
        <div
          v-for="group in skillGroups"
          :key="group.id"
          class="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[180px_1fr] sm:items-baseline"
        >
          <dt class="font-mono text-xs uppercase tracking-widest text-text-muted">
            {{ group.label }}
          </dt>
          <dd class="flex flex-wrap items-center gap-2">
            <span
              v-for="tech in group.primary"
              :key="tech"
              class="rounded-md border border-accent/40 bg-accent-dim px-2.5 py-1 font-mono text-xs font-medium text-accent"
            >
              {{ tech }}
            </span>
            <span
              v-for="tech in group.secondary"
              :key="tech"
              class="rounded-md px-2.5 py-1 font-mono text-xs text-text-muted"
            >
              {{ tech }}
            </span>
          </dd>
        </div>
      </dl>
    </AppContainer>
  </section>
</template>
