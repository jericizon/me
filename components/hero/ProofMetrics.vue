<script setup lang="ts">
const metrics = [
  { value: `${yearsSince(CAREER_START)}+`, label: 'Years Engineering' },
  { value: `${yearsSince(LARAVEL_START)}+`, label: 'Years Laravel' },
  { value: `${yearsSince(VUE_START)}+`, label: 'Years Vue / Nuxt' },
  { value: '26k+', label: 'Product Users' },
]
</script>

<template>
  <section aria-label="Experience metrics" class="border-y border-surface-border">
    <AppContainer>
      <dl
        class="grid grid-cols-2 gap-px overflow-hidden bg-surface-border/60 lg:grid-cols-4"
      >
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="flex flex-col gap-1 bg-base px-6 py-8"
        >
          <dd
            class="order-first font-display text-4xl font-bold tracking-tight text-text-primary"
          >
            {{ metric.value }}
          </dd>
          <dt class="font-mono text-xs uppercase tracking-widest text-text-muted">
            {{ metric.label }}
          </dt>
        </div>
      </dl>
    </AppContainer>
  </section>
</template>
