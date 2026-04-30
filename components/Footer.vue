<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-base-600/30 py-12 px-6 lg:px-16" role="contentinfo">
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      
      <!-- Brand -->
      <div class="space-y-2">
        <div class="font-display font-bold text-xl text-base-50">Jeric Izon</div>
        <div class="text-sm text-base-400">Senior Full Stack Engineer</div>
      </div>

      <!-- Links -->
      <nav class="flex flex-wrap items-center gap-6 lg:gap-10" aria-label="Footer navigation">
        <a
          href="https://github.com/jericizon"
          target="_blank"
          rel="noopener"
          class="text-sm text-base-400 hover:text-coral-500 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jericizon"
          target="_blank"
          rel="noopener"
          class="text-sm text-base-400 hover:text-coral-500 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="#contact-section"
          class="text-sm text-base-400 hover:text-coral-500 transition-colors"
        >
          Contact
        </a>
        <a
          href="/hire-freelance-web-developer"
          class="text-sm text-coral-500 hover:text-coral-400 transition-colors"
        >
          CV / Resume
        </a>
      </nav>

      <!-- Copyright -->
      <div class="text-xs text-base-500 font-mono">
        © {{ year }} · Built with Nuxt & Tailwind
      </div>
    </div>
  </footer>
</template>
