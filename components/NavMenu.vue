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
</script>

<template>
  <nav
    :class="[
      'glass-nav sticky top-0 z-50 transition-all duration-300',
      { 'py-2 shadow-glass-sm': hasScrolled, 'py-4': !hasScrolled }
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
            @click="closeMenu"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Mobile menu button (right aligned) -->
        <div class="md:hidden absolute right-0">
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
      class="md:hidden glass-card m-4 mt-2 overflow-hidden transition-all duration-300 ease-in-out bg-white/40 border border-secondary-200"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a 
          v-for="link in navLinks" 
          :key="link.name"
          :href="link.href"
          class="block px-3 py-2 text-base font-medium text-secondary-900 hover:bg-accent-500/10 transition-colors"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>