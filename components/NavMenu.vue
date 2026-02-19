<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'
import { useAnalytics } from '@/composables/useAnalytics'

const props = defineProps<{
  hasScrolled?: boolean
}>()

const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

const navLinks = [
  { name: 'Services', href: '/services/custom-website-development' },
  { name: 'Hire',     href: '/hire-freelance-web-developer' },
  { name: 'About',    href: '/#about-section' },
  { name: 'Resume',   href: '/#resume-section' },
  { name: 'Stack',    href: '/#tools-section' },
  { name: 'Work',     href: '/#projects-section' },
  { name: 'Contact',  href: '/#contact-section' },
]

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
      'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500',
      hasScrolled
        ? 'bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-2xl border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-soft'
        : 'lg:bg-transparent bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-xl'
    ]"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-[68px]">

        <!-- Logo -->
        <NuxtLink
          to="/"
          class="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
          aria-label="Jeric Izon — home"
        >
          <div class="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center shadow-medium group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-105">
            <span class="font-display font-bold text-white text-sm tracking-tight">JI</span>
          </div>
          <span class="hidden sm:block font-display font-semibold text-neutral-900 dark:text-white text-base tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            Jeric Izon
          </span>
        </NuxtLink>

        <!-- Desktop nav links -->
        <div class="hidden lg:flex items-center gap-1" role="menubar">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="relative px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 rounded-lg hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 group"
            role="menuitem"
            @click="handleNavClick(link, $event)"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-500 rounded-full group-hover:w-4 transition-all duration-300"></span>
          </NuxtLink>
        </div>

        <!-- Desktop right actions -->
        <div class="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact-section"
            @click.prevent="() => { trackEvent('cta_click', { section: 'nav', label: 'hire_me' }); openContactForm(); }"
            class="btn btn-primary btn-sm"
            aria-label="Hire me — open contact form"
          >
            <span>Hire Me</span>
            <Icon name="tabler:arrow-up-right" class="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <!-- Mobile actions -->
        <div class="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            @click="toggleMenu"
            class="flex items-center justify-center w-9 h-9 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <Icon :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'" class="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="lg:hidden absolute top-full left-0 right-0 bg-surface-light/98 dark:bg-surface-dark/98 backdrop-blur-2xl border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-large"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div class="max-w-7xl mx-auto px-5 sm:px-8 py-5 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="flex items-center justify-between px-4 py-3.5 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 rounded-xl transition-all duration-200 group"
            role="menuitem"
            @click="handleNavClick(link, $event)"
          >
            <span>{{ link.name }}</span>
            <Icon name="tabler:arrow-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-primary-500" aria-hidden="true" />
          </NuxtLink>
          <div class="pt-3 border-t border-neutral-200/50 dark:border-neutral-800/50">
            <a
              href="#contact-section"
              @click.prevent="() => { openContactForm(); closeMenu(); }"
              class="btn btn-primary btn-md w-full justify-center"
            >
              <span>Hire Me</span>
              <Icon name="tabler:arrow-up-right" class="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>