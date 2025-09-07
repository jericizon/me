<script setup lang="ts">
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

import { useContactForm } from '@/composables/useContactForm'
const { openContactForm } = useContactForm()

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
      // Modern glass navigation
      'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500',
      hasScrolled ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-white/20' : 'bg-white/80 backdrop-blur-lg shadow-soft border-b border-white/10'
    ]"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16 lg:h-18">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <a href="#home-section" class="group inline-flex items-center gap-3 font-display font-bold text-xl lg:text-2xl text-neutral-900 hover:text-primary-600 transition-colors duration-300">
            <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-medium group-hover:shadow-large transition-shadow duration-300">
              <span class="text-white font-bold text-sm">JI</span>
            </div>
            <span class="hidden sm:block">Jeric Izon</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="group relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-all duration-300 rounded-lg hover:bg-primary-50/50"
            @click="(e) => handleNavClick(link, e)"
          >
            <span class="relative z-10">{{ link.name }}</span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="#contact-section"
            @click.prevent="openContactForm"
            class="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-xl shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105"
          >
            <span>Hire Me</span>
            <Icon name="tabler:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden flex items-center gap-3">
          <!-- Mobile CTA -->
          <a
            href="#contact-section"
            @click.prevent="openContactForm"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-medium hover:shadow-large transition-all duration-300"
          >
            <span class="hidden sm:inline">Hire Me</span>
            <Icon name="tabler:mail" class="w-4 h-4" />
          </a>

          <!-- Mobile menu toggle -->
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-all duration-300"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Icon
              :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'"
              class="block w-6 h-6 transition-transform duration-300"
              :class="{ 'rotate-180': isMenuOpen }"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isMenuOpen"
      class="lg:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-large overflow-hidden transition-all duration-300 ease-in-out"
      :class="{ 'max-h-96 opacity-100': isMenuOpen, 'max-h-0 opacity-0': !isMenuOpen }"
    >
      <div class="px-4 py-6 space-y-2">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="group flex items-center gap-3 px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-xl transition-all duration-300"
          @click="(e) => handleNavClick(link, e)"
        >
          <Icon :name="getNavIcon(link.name)" class="w-5 h-5 text-neutral-500 group-hover:text-primary-600 transition-colors" />
          <span>{{ link.name }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>