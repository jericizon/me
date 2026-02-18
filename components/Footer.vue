<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'

const { openContactForm } = useContactForm()

const socialLinks = [
  { name: 'GitHub', icon: 'tabler:brand-github', url: 'https://github.com/jericizon' },
  { name: 'LinkedIn', icon: 'tabler:brand-linkedin', url: 'https://linkedin.com/in/jericizon' },
  { name: 'Twitter', icon: 'tabler:brand-x', url: 'https://twitter.com/jericizon' },
]

const navLinks = [
  { name: 'About', href: '#about-section' },
  { name: 'Resume', href: '#resume-section' },
  { name: 'Projects', href: '#projects-section' },
  { name: 'Contact', action: openContactForm },
]
</script>

<template>
  <footer class="relative py-16 border-t border-border" role="contentinfo">
    <div class="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        <!-- Brand -->
        <div class="md:col-span-5">
          <a href="#home-section" class="inline-block mb-4">
            <span class="font-display text-2xl font-semibold text-text-primary">Jeric</span>
            <span class="font-display text-2xl font-semibold gradient-text-gold">Izon</span>
          </a>
          <p class="text-text-tertiary text-sm leading-relaxed max-w-sm mb-6">
            Full Stack Developer crafting exceptional digital experiences. 
            Available for freelance and remote opportunities.
          </p>
          <div class="flex gap-3">
            <a 
              v-for="link in socialLinks" 
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 rounded-xl bg-surface-higher border border-border flex items-center justify-center text-text-secondary hover:text-accent-gold hover:border-accent-gold/30 transition-all"
              :aria-label="link.name"
            >
              <Icon :name="link.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-3 md:col-start-7">
          <h3 class="text-sm font-medium text-text-primary mb-4">Navigation</h3>
          <nav class="space-y-3" aria-label="Footer navigation">
            <a 
              v-for="link in navLinks.slice(0, 3)" 
              :key="link.name"
              :href="link.href"
              class="block text-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              {{ link.name }}
            </a>
            <button 
              @click="openContactForm"
              class="block text-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>

        <!-- Contact -->
        <div class="md:col-span-3">
          <h3 class="text-sm font-medium text-text-primary mb-4">Contact</h3>
          <div class="space-y-3 text-sm text-text-tertiary">
            <p>Philippines / Remote</p>
            <a href="mailto:hey@jericizon.com" class="block hover:text-text-primary transition-colors">
              hey@jericizon.com
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-text-tertiary">
          © {{ new Date().getFullYear() }} Jeric Izon. All rights reserved.
        </p>
        <p class="text-sm text-text-tertiary">
          Built with <span class="text-accent-rose">♥</span> using Nuxt.js
        </p>
      </div>
    </div>
  </footer>
</template>