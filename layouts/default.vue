<script setup lang="ts">
// Define reactive state for scroll position to add effects based on scroll
const scrollY = ref(0)

// Update scroll position on scroll
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})

// Computed property to determine if we've scrolled past the hero section
const hasScrolled = computed(() => scrollY.value > 50)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <!-- Decorative glasmorphic background elements -->
    <div class="pointer-events-none select-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <!-- Primary blob -->
      <div 
        class="blob blob-primary absolute -top-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full animate-float-slow"
        :style="{ transform: `translateY(${scrollY * 0.02}px)` }"
      ></div>
      
      <!-- Secondary blob -->
      <div 
        class="blob blob-cyan absolute top-48 -right-16 h-64 w-64 md:h-80 md:w-80 rounded-full animate-float"
        :style="{ transform: `translateY(${scrollY * -0.01}px)` }"
      ></div>
      
      <!-- Tertiary blob -->
      <div 
        class="blob blob-purple absolute bottom-0 left-1/4 h-56 w-56 md:h-72 md:w-72 rounded-full animate-pulse-slow"
        :style="{ transform: `translateY(${scrollY * 0.015}px)` }"
      ></div>
    </div>

    <!-- Navigation component -->
    <NavMenu :has-scrolled="hasScrolled" />

    <!-- Main content -->
    <main class="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <slot />
    </main>

    <!-- Footer will be included in the page template -->
  </div>
</template>
