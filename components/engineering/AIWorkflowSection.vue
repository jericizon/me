<script setup lang="ts">
import { aiTools, aiWorkflowStatement, aiWorkflowSteps } from '~/data/philosophy'
</script>

<template>
  <section
    class="border-t border-surface-border bg-surface/40 py-20 md:py-28"
    aria-label="AI-assisted engineering workflow"
  >
    <AppContainer>
      <SectionHeader
        eyebrow="Modern Workflow"
        title="AI-assisted engineering"
        :subtitle="aiWorkflowStatement"
      />

      <div class="mt-12 grid gap-10 lg:grid-cols-[1fr_280px]">
        <ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="step in aiWorkflowSteps"
            :key="step.index"
            class="flex flex-col gap-2 rounded-lg border border-surface-border bg-base p-4"
          >
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs tracking-widest text-accent">
                {{ step.index }}
              </span>
              <span
                class="font-mono text-xs font-medium uppercase tracking-wider text-text-primary"
              >
                {{ step.label }}
              </span>
            </div>
            <p class="text-xs leading-relaxed text-text-secondary">
              {{ step.description }}
            </p>
          </li>
        </ol>

        <div class="flex flex-col gap-4">
          <h3 class="font-mono text-xs uppercase tracking-widest text-text-muted">
            Toolset
          </h3>
          <ul class="flex flex-wrap gap-2 lg:flex-col lg:items-start">
            <li v-for="tool in aiTools" :key="tool">
              <BaseBadge variant="surface">{{ tool }}</BaseBadge>
            </li>
          </ul>
          <p class="text-xs leading-relaxed text-text-muted">
            AI accelerates research, boilerplate and edge-case test authoring.
            Architecture, security and runtime correctness stay under human ownership.
          </p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
