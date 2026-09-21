<script setup lang="ts">
import { philosophies } from '~/data/philosophy'
</script>

<template>
  <section
    class="border-y border-surface-border bg-surface/40 py-20 md:py-28"
    aria-label="Engineering philosophy"
  >
    <AppContainer>
      <div class="flex max-w-3xl flex-col gap-4">
        <span class="font-mono text-xs uppercase tracking-widest text-accent">
          Engineering Philosophy
        </span>
        <h2
          class="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
        >
          I don't just write features.
        </h2>
        <p class="text-lg leading-relaxed text-text-secondary">
          I think about the system around them.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <article
          v-for="item in philosophies"
          :key="item.index"
          class="flex flex-col gap-3 rounded-xl border border-surface-border bg-base p-6"
        >
          <span class="font-mono text-xs tracking-widest text-text-muted">
            {{ item.index }}
          </span>
          <h3 class="font-display text-lg font-bold tracking-tight text-text-primary">
            {{ item.title }}
          </h3>
          <p class="text-sm leading-relaxed text-text-secondary">
            {{ item.description }}
          </p>
        </article>
      </div>
    </AppContainer>
  </section>
</template>
