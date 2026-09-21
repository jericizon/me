<script setup lang="ts">
// Legacy URL retained as a redirect to the unified portfolio page.
await navigateTo('/', { replace: true })
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
    <p class="text-sm text-text-secondary">
      This page has moved.
      <NuxtLink to="/" class="text-accent underline underline-offset-4">
        Return to the homepage
      </NuxtLink>
    </p>
  </div>
</template>
