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
      // Mobile: transparent, no shadow/border; Desktop (md+): glass style
      'z-50 w-full transition-all duration-300 md:glass-nav bg-transparent shadow-none border-0 backdrop-blur-0',
      hasScrolled ? 'py-2 md:shadow-glass-sm' : 'py-4'
    ]"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-center h-16">
        <!-- Desktop Navigation (centered) -->
        <div class="hidden md:flex space-x-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            class="text-sm font-medium text-secondary-900 hover:text-accent-500 transition-colors"
            @click="(e) => handleNavClick(link, e)"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Mobile menu button (fixed to top-right on mobile) -->
        <div class="md:hidden fixed top-3 right-4 z-[110]">
          <button 
            @click="toggleMenu" 
            class="inline-flex items-center justify-center p-2 text-secondary-900 hover:text-accent-500 focus:outline-none"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg 
              v-if="!isMenuOpen" 
              class="block h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open -->
            <svg 
              v-else 
              class="block h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isMenuOpen" 
      class="md:hidden fixed top-14 left-4 right-4 z-[105] overflow-hidden max-h-[70vh] overflow-y-auto transition-all duration-300 ease-in-out bg-white border border-secondary-200 shadow-lg rounded-xl"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="block px-3 py-2 text-base font-medium text-secondary-900 hover:bg-accent-500/10 transition-colors"
          @click="(e) => handleNavClick(link, e)"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>