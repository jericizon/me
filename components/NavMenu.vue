<script setup lang="ts">
const props = defineProps<{
  hasScrolled?: boolean
}>()

const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

const navLinks = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'services', label: 'Services', number: '02' },
  { id: 'work', label: 'Work', number: '03' },
  { id: 'process', label: 'Process', number: '04' },
  { id: 'contact', label: 'Contact', number: '05' },
]

const { openContactForm } = useContactForm()

const activeSection = ref('')

const scrollToSection = (id: string) => {
  closeMenu()
  if (id === 'contact') {
    openContactForm()
    return
  }
  const sectionMap: Record<string, string> = {
    'about': 'about-section',
    'services': 'services-section',
    'work': 'projects-section',
    'process': 'how-i-work'
  }
  const sectionId = sectionMap[id]
  if (sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
}

// Track active section on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idMap: Record<string, string> = {
            'about-section': 'about',
            'services-section': 'services',
            'projects-section': 'work',
            'how-i-work': 'process'
          }
          activeSection.value = idMap[entry.target.id] || ''
        }
      })
    },
    { threshold: 0.3 }
  )

  navLinks.forEach(link => {
    const sectionMap: Record<string, string> = {
      'about': 'about-section',
      'services': 'services-section',
      'work': 'projects-section',
      'process': 'how-i-work'
    }
    const el = document.getElementById(sectionMap[link.id])
    if (el) observer.observe(el)
  })
})
</script>

<template>
  <!-- Desktop Vertical Navigation -->
  <nav class="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-start gap-6" role="navigation" aria-label="Main navigation">
    <div class="flex flex-col gap-4">
      <button
        v-for="link in navLinks"
        :key="link.id"
        @click="scrollToSection(link.id)"
        class="group flex items-center gap-3 text-left"
        :class="activeSection === link.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'"
      >
        <span 
          class="font-mono text-xs transition-all duration-300"
          :class="activeSection === link.id ? 'text-coral-500' : 'text-light-400 dark:text-base-300 group-hover:text-light-600 dark:group-hover:text-base-100'"
        >
          {{ link.number }}
        </span>
        <span 
          class="text-sm font-medium tracking-wide transition-all duration-300"
          :class="activeSection === link.id ? 'text-light-900 dark:text-base-50 translate-x-1' : 'text-light-600 dark:text-base-300 group-hover:text-light-800 dark:group-hover:text-base-100'"
        >
          {{ link.label }}
        </span>
        <span 
          class="h-px bg-coral-500 transition-all duration-300"
          :class="activeSection === link.id ? 'w-8 opacity-100' : 'w-0 opacity-0'"
        ></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Navigation -->
  <nav class="lg:hidden fixed top-0 left-0 right-0 z-50 px-4 py-4" role="navigation" aria-label="Mobile navigation">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-lg font-display font-bold text-light-900 dark:text-base-50 tracking-tight">
        JI
      </NuxtLink>

      <!-- Theme Toggle -->
      <ThemeToggle />

      <!-- Menu Toggle -->
      <button
        @click="toggleMenu"
        class="w-10 h-10 flex items-center justify-center text-light-900 dark:text-base-50"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <div class="relative w-6 h-5">
          <span 
            class="absolute left-0 w-full h-0.5 bg-current transition-all duration-300"
            :class="isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'"
          ></span>
          <span 
            class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span 
            class="absolute left-0 w-full h-0.5 bg-current transition-all duration-300"
            :class="isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'"
          ></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="fixed inset-0 top-0 bg-surface-light dark:bg-surface z-40 flex flex-col justify-center px-8"
      >
        <div class="flex flex-col gap-6">
          <button
            v-for="(link, index) in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="group flex items-baseline gap-4 text-left animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <span class="font-mono text-sm text-coral-500">{{ link.number }}</span>
            <span class="font-display text-4xl font-bold text-light-900 dark:text-base-50 tracking-tight group-hover:text-coral-500 transition-colors">
              {{ link.label }}
            </span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Desktop Logo (fixed top-left) -->
  <div class="hidden lg:block fixed top-8 left-8 z-50">
    <NuxtLink to="/" class="font-display font-bold text-xl text-light-900 dark:text-base-50 tracking-tight hover:text-coral-500 transition-colors">
      JI
    </NuxtLink>
  </div>

  <!-- Theme Toggle (fixed top-right) -->
  <div class="hidden lg:block fixed top-8 right-8 z-50">
    <ThemeToggle />
  </div>
</template>
