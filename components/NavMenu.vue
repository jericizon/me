<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'

const props = defineProps<{
  hasScrolled?: boolean
}>()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Navigation links
const navLinks = [
  { name: 'Home', href: '#home-section' },
  { name: 'About', href: '#about-section' },
  { name: 'Resume', href: '#resume-section' },
  { name: 'Tools', href: '#tools-section' },
  { name: 'Projects', href: '#projects-section' },
]

const { openContactForm } = useContactForm()

const handleNavClick = (link: { name: string; href: string }, e: Event) => {
  closeMenu()
}

const handleContactClick = () => {
  openContactForm()
  closeMenu()
}
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="hasScrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#home-section" class="flex items-center gap-2 group">
          <span class="font-display text-xl font-semibold text-text-primary group-hover:text-accent-gold transition-colors">Jeric</span>
          <span class="font-display text-xl font-semibold text-accent-gold">Izon</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            class="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface-elevated"
            @click="handleNavClick(link, $event)"
          >
            {{ link.name }}
          </a>
          <div class="ml-4 flex items-center gap-3">
            <ThemeToggle />
            <button 
              @click="handleContactClick"
              class="btn btn-primary py-2 px-4 text-sm"
            >
              Contact
            </button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <button 
          class="md:hidden w-10 h-10 flex items-center justify-center text-text-primary"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle menu"
        >
          <Icon 
            :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'" 
            class="w-6 h-6" 
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      class="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-border transition-all duration-300"
      :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
      <div class="px-6 py-6 space-y-2">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-xl transition-all"
          @click="handleNavClick(link, $event)"
        >
          {{ link.name }}
        </a>
        <div class="pt-4 flex items-center justify-between">
          <ThemeToggle />
          <button 
            @click="handleContactClick"
            class="btn btn-primary py-3 px-6"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>