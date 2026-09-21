<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <span class="font-mono text-xs uppercase tracking-widest text-accent">
      {{ eyebrow }}
    </span>
    <h2 class="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="max-w-2xl leading-relaxed text-text-secondary">
      {{ subtitle }}
    </p>
  </div>
</template>
