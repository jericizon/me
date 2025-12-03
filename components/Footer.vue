<template>
  <footer class="border-t border-glass-border/50 mt-16 bg-transparent" role="contentinfo">
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary-700">
        <p class="text-center sm:text-left">
          2025 Jeric Izon. All rights reserved.
        </p>
        <nav class="flex items-center gap-4" aria-label="Footer navigation">
          <a href="https://github.com/jericizon" target="_blank" rel="noopener" class="hover:text-secondary-900 transition-colors inline-flex items-center gap-2" aria-label="Visit GitHub profile (opens in new tab)">
            <Icon name="tabler:brand-github" class="w-5 h-5" aria-hidden="true" /> GitHub
          </a>
          <a href="#contact-section" @click.prevent="openContactForm" class="hover:text-secondary-900 transition-colors inline-flex items-center gap-2" aria-label="Open contact form">
            <Icon name="tabler:mail" class="w-5 h-5" aria-hidden="true" /> Contact
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'
const { openContactForm } = useContactForm()
</script>