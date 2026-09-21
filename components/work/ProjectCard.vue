<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (e: 'select', id: string): void
}>()

const withBasePath = useBasePath()
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface transition-all duration-200 hover:border-accent/40 hover:bg-surface-elevated"
  >
    <button
      type="button"
      class="flex flex-1 flex-col text-left"
      :aria-label="`View case study: ${props.project.title}`"
      @click="emit('select', props.project.id)"
    >
      <div
        v-if="props.project.image"
        class="relative aspect-[16/9] overflow-hidden border-b border-surface-border"
      >
        <img
          :src="withBasePath(props.project.image)"
          :alt="`${props.project.title} interface screenshot`"
          loading="lazy"
          class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div
        v-else
        class="flex aspect-[16/9] flex-col justify-center gap-2 border-b border-surface-border bg-surface px-6"
        aria-hidden="true"
      >
        <div
          v-for="node in props.project.architecture"
          :key="node.id"
          class="flex items-center gap-3"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-accent/60" />
          <span class="font-mono text-xs text-text-muted">{{ node.label }}</span>
          <span class="h-px flex-1 bg-surface-border/60" />
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-3 p-6">
        <div class="flex items-center justify-between gap-3">
          <span class="font-mono text-xs uppercase tracking-widest text-accent">
            {{ props.project.positioning }}
          </span>
          <span class="font-mono text-xs text-text-muted">
            {{ props.project.year }}
          </span>
        </div>

        <h3
          class="font-display text-xl font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent"
        >
          {{ props.project.title }}
        </h3>

        <p class="text-sm leading-relaxed text-text-secondary">
          {{ props.project.description }}
        </p>

        <div
          v-if="props.project.metric"
          class="flex items-baseline gap-2 pt-1"
        >
          <span class="font-display text-2xl font-bold text-accent">
            {{ props.project.metric.value }}
          </span>
          <span class="font-mono text-xs text-text-muted">
            {{ props.project.metric.label }}
          </span>
        </div>

        <div class="mt-auto flex flex-wrap items-center gap-2 pt-3">
          <span
            v-for="tech in props.project.stack.slice(0, 4)"
            :key="tech"
            class="rounded bg-surface-border/50 px-2 py-0.5 font-mono text-xs text-text-secondary"
          >
            {{ tech }}
          </span>
          <span
            class="ml-auto inline-flex items-center gap-1 font-mono text-xs text-text-secondary transition-colors group-hover:text-accent"
          >
            View case study
            <Icon name="tabler:arrow-up-right" class="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </button>
  </article>
</template>
