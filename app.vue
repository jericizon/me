<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
})
</script>

<template>
  <div class="min-h-screen bg-base font-sans text-text-secondary antialiased">
    <div
      class="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
      aria-hidden="true"
    >
      <div class="absolute inset-0 bg-grain animate-grain" />
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
