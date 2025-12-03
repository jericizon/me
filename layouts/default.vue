<script setup lang="ts">
// Define reactive state for scroll position to add effects based on scroll
const scrollY = ref(0)

// Update scroll position on scroll
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  }, { passive: true })
})

// Computed property to determine if we've scrolled past the hero section
const hasScrolled = computed(() => scrollY.value > 50)
</script>

<template>
  <div class="min-h-screen text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
    <!-- Main content wrapper -->
    <main class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>
