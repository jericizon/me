<script setup lang="ts">
const metrics = [
  { value: '10+', label: 'Years Engineering' },
  { value: '10+', label: 'Years Laravel' },
  { value: '7+', label: 'Years Vue / Nuxt' },
  { value: '10k+', label: 'Product Users', footnote: true },
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
            {{ metric.value }}<span v-if="metric.footnote" class="text-accent">*</span>
          </dd>
          <dt class="font-mono text-xs uppercase tracking-widest text-text-muted">
            {{ metric.label }}
          </dt>
        </div>
      </dl>
      <p class="py-4 font-mono text-xs text-text-muted">
        * ExpresswayPH peak 15-day holiday surge
      </p>
    </AppContainer>
  </section>
</template>
