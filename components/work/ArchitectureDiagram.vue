<script setup lang="ts">
import type { ArchitectureNode } from '~/types/project'

defineProps<{
  nodes: ArchitectureNode[]
}>()
</script>

<template>
  <ol
    class="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0"
    aria-label="System architecture flow"
  >
    <template v-for="(node, index) in nodes" :key="node.id">
      <li
        class="flex flex-1 flex-col gap-1 rounded-lg border border-surface-border bg-surface px-4 py-3"
      >
        <span class="font-mono text-[10px] uppercase tracking-widest text-accent">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <span class="text-sm font-medium text-text-primary">{{ node.label }}</span>
        <span v-if="node.description" class="font-mono text-xs text-text-muted">
          {{ node.description }}
        </span>
      </li>

      <li
        v-if="index < nodes.length - 1"
        class="flex items-center justify-center px-1 py-1 text-accent md:px-2"
        aria-hidden="true"
      >
        <Icon
          name="tabler:arrow-down"
          class="h-4 w-4 animate-flow md:hidden"
        />
        <Icon
          name="tabler:arrow-right"
          class="hidden h-4 w-4 animate-flow md:block"
        />
      </li>
    </template>
  </ol>
</template>

<style scoped>
@keyframes flow {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

.animate-flow {
  animation: flow 1.6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-flow {
    animation: none;
  }
}
</style>
