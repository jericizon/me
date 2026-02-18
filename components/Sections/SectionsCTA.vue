<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useContactForm } from '@/composables/useContactForm'

const { openContactForm } = useContactForm()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const stats = [
  { value: '10+', label: 'Years Experience', icon: 'tabler:briefcase' },
  { value: '100+', label: 'Projects Delivered', icon: 'tabler:file-check' },
  { value: '50+', label: 'Happy Clients', icon: 'tabler:users' },
]
</script>

<template>
  <section 
    ref="sectionRef"
    id="cta-section" 
    class="relative py-24 lg:py-32 overflow-hidden"
  >
    <!-- Background gradient -->
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-b from-dark via-surface-elevated to-dark"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/10 rounded-full blur-[150px]"></div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Stats -->
        <div 
          class="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 transition-all duration-1000"
          :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        >
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="text-center"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="font-display text-4xl md:text-5xl font-semibold gradient-text-gold mb-2">
              {{ stat.value }}
            </div>
            <div class="flex items-center justify-center gap-2 text-text-secondary text-sm">
              <Icon :name="stat.icon" class="w-4 h-4" />
              {{ stat.label }}
            </div>
          </div>
        </div>

        <!-- CTA Content -->
        <div 
          class="transition-all duration-1000 delay-300"
          :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        >
          <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary mb-6 leading-tight">
            Ready to build<br />
            <span class="gradient-text-gold">something great?</span>
          </h2>
          
          <p class="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and remote opportunities. 
            Let's discuss how I can help bring your vision to life.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <button 
              @click="openContactForm"
              class="btn btn-primary text-lg px-8 py-4"
            >
              <span>Start a conversation</span>
              <Icon name="tabler:arrow-right" class="w-5 h-5" />
            </button>
            
            <a 
              href="https://calendly.com/jericizon"
              target="_blank"
              rel="noopener"
              class="btn btn-secondary text-lg px-8 py-4"
            >
              <Icon name="tabler:calendar" class="w-5 h-5" />
              <span>Schedule a call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>