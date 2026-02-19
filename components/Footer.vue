<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'
const { openContactForm } = useContactForm()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-neutral-200/50 dark:border-neutral-800/50 bg-transparent" role="contentinfo">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">

        <!-- Brand -->
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center">
            <span class="font-display font-bold text-white text-xs">JI</span>
          </div>
          <span class="text-sm font-medium text-neutral-900 dark:text-white">Jeric Izon</span>
          <span class="text-neutral-300 dark:text-neutral-700">·</span>
          <span class="text-sm text-neutral-500 dark:text-neutral-500">Full Stack Developer</span>
        </div>

        <!-- Links -->
        <nav class="flex items-center gap-6" aria-label="Footer navigation">
          <NuxtLink
            to="/services/custom-website-development"
            class="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="Custom website development services"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/hire-freelance-web-developer"
            class="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="Hire freelance web developer"
          >
            Hire
          </NuxtLink>
          <a
            href="https://github.com/jericizon"
            target="_blank"
            rel="noopener"
            class="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="GitHub profile (opens in new tab)"
          >
            <Icon name="tabler:brand-github" class="w-4 h-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jericizon"
            target="_blank"
            rel="noopener"
            class="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <Icon name="tabler:brand-linkedin" class="w-4 h-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="#contact-section"
            @click.prevent="openContactForm"
            class="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="Open contact form"
          >
            <Icon name="tabler:mail" class="w-4 h-4" aria-hidden="true" />
            Contact
          </a>
        </nav>

        <!-- Copyright -->
        <p class="text-xs text-neutral-400 dark:text-neutral-600 order-last sm:order-none">
          © {{ year }} Jeric Izon
        </p>
      </div>
    </div>
  </footer>
</template>