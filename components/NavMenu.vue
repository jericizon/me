<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'
import { useAnalytics } from '@/composables/useAnalytics'

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
  { name: 'Contact', href: '#contact-section' },
]

// Get appropriate icon for each nav item
const getNavIcon = (name: string) => {
  const icons = {
    'Home': 'tabler:home',
    'About': 'tabler:user',
    'Resume': 'tabler:file-text',
    'Tools': 'tabler:tools',
    'Projects': 'tabler:briefcase',
    'Contact': 'tabler:mail'
  }
  return icons[name as keyof typeof icons] || 'tabler:circle'
}
const { openContactForm } = useContactForm()
const { trackEvent } = useAnalytics()

const handleNavClick = (link: { name: string; href: string }, e: Event) => {
  if (link.name === 'Contact') {
    e.preventDefault()
    openContactForm()
  }
  closeMenu()
}
</script>

<template>
  <nav
    :class="[
      // Modern glassmorphic navigation
      'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500',
      hasScrolled 
        ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl shadow-glass dark:shadow-glass-dark border-b border-white/20 dark:border-white/10' 
        : 'bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border-b border-white/10 dark:border-white/5'
    ]"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16 lg:h-18">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <a href="#home-section" class="group inline-flex items-center gap-3 font-display font-bold text-xl lg:text-2xl text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
            <div class="relative w-10 h-10 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-105">
              <span class="text-white font-bold text-sm">JI</span>
              <!-- Animated ring on hover -->
              <span class="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:border-white/50 transition-colors"></span>
            </div>
            <span class="hidden sm:block">Jeric Izon</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1" role="menubar">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="group relative px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl"
            role="menuitem"
            @click="(e) => handleNavClick(link, e)"
          >
            <span class="relative z-10">{{ link.name }}</span>
            <!-- Hover background -->
            <div class="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"></div>
          </a>
        </div>

        <!-- Right side actions -->
        <div class="hidden lg:flex items-center gap-3">
          <!-- Theme Toggle -->
          <ThemeToggle />
          
          <!-- CTA Button -->
          <a
            href="#contact-section"
            @click.prevent="() => { trackEvent('cta_click', { section: 'nav', label: 'hire_me' }); openContactForm(); }"
            class="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-medium hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
            aria-label="Hire me - Open contact form"
          >
            <span>Hire Me</span>
            <Icon name="tabler:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

        <!-- Mobile menu buttons -->
        <div class="lg:hidden flex items-center gap-2">
          <!-- Theme Toggle (Mobile) -->
          <ThemeToggle />
          
          <!-- Mobile CTA -->
          <a
            href="#contact-section"
            @click.prevent="openContactForm"
            class="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-glow-primary transition-all duration-300"
            aria-label="Hire me - Open contact form"
          >
            <span class="hidden sm:inline">Hire Me</span>
            <Icon name="tabler:mail" class="w-4 h-4" aria-hidden="true" />
          </a>

          <!-- Mobile menu toggle -->
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center w-10 h-10 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl transition-all duration-300 hover:scale-105"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span class="sr-only">{{ isMenuOpen ? 'Close' : 'Open' }} main menu</span>
            <Icon
              :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'"
              class="block w-5 h-5 transition-transform duration-300"
              :class="{ 'rotate-180': isMenuOpen }"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-glass-lg dark:shadow-glass-dark-lg"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div class="px-4 py-6 space-y-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="group flex items-center gap-4 px-4 py-3 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-xl transition-all duration-300"
            :class="{ 'bg-primary-500/10 dark:bg-primary-500/20': false }"
            role="menuitem"
            @click="(e) => handleNavClick(link, e)"
          >
            <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/50 dark:bg-neutral-800/50 border border-white/20 dark:border-white/10 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-500/30 transition-colors">
              <Icon :name="getNavIcon(link.name)" class="w-5 h-5 text-neutral-500 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-hidden="true" />
            </span>
            <span>{{ link.name }}</span>
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>