<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'
import { ref, onMounted } from 'vue'

const { openContactForm } = useContactForm()

const heroRef = ref<HTMLElement | null>(null)
const isLoaded = ref(false)

onMounted(() => {
  // Trigger entrance animations
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const scrollToWork = () => {
  document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section 
    ref="heroRef"
    id="home-section" 
    class="relative min-h-screen flex items-center overflow-hidden"
  >
    <!-- Dynamic background -->
    <div class="absolute inset-0" aria-hidden="true">
      <!-- Gradient orbs -->
      <div class="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-accent-gold/10 rounded-full blur-[100px] animate-pulse-glow"></div>
      <div class="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[100px] animate-pulse-glow" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-teal/5 rounded-full blur-[120px]"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 grid-decoration opacity-50"></div>
      
      <!-- Noise texture -->
      <div class="absolute inset-0 bg-noise opacity-[0.015]"></div>
    </div>

    <!-- Content container -->
    <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
        
        <!-- Left content - Asymmetric text block -->
        <div class="lg:col-span-7 space-y-8">
          <!-- Status badge -->
          <div 
            class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-gold/30 bg-accent-gold/5 backdrop-blur-sm transition-all duration-700"
            :class="{ 'opacity-0 translate-y-4': !isLoaded, 'opacity-100 translate-y-0': isLoaded }"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-gold"></span>
            </span>
            <span class="text-sm font-medium text-accent-gold">Available for new projects</span>
          </div>

          <!-- Main heading with character animation -->
          <div class="space-y-2">
            <p 
              class="font-mono text-sm text-text-secondary uppercase tracking-widest transition-all duration-700 delay-100"
              :class="{ 'opacity-0 translate-y-4': !isLoaded, 'opacity-100 translate-y-0': isLoaded }"
            >
              Full Stack Developer
            </p>
            
            <h1 
              class="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95] transition-all duration-700 delay-200"
              :class="{ 'opacity-0 translate-y-8': !isLoaded, 'opacity-100 translate-y-0': isLoaded }"
            >
              <span class="block text-text-primary">Jeric</span>
              <span class="block gradient-text-gold">Izon</span>
            </h1>
            
            <p 
              class="font-editorial text-xl sm:text-2xl lg:text-3xl text-text-secondary italic mt-6 transition-all duration-700 delay-300"
              :class="{ 'opacity-0 translate-y-4': !isLoaded, 'opacity-100 translate-y-0': isLoaded }"
            >
              Crafting digital experiences<br class="hidden sm:block" />
              that leave a lasting impression
            </p>
          </div>

          <!-- Description -->
          <p 
            class="text-lg text-text-tertiary max-w-xl leading-relaxed transition-all duration-700 delay-400"
            :class="{ 'opacity-0 translate-y-4': !isLoaded, 'opacity-100 translate-y-0': isLoaded }"
          >
            With over a decade of experience, I transform complex problems into 
            elegant, high-performance web applications. Specializing in Vue.js, 
            React, Node.js, and cloud architecture.
          </p>

          <!-- CTA buttons -->
          <div 
            class="flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-500"
            :class="{ 'opacity-0 translate-y-4': !isLoaded, 'opacity-100 translate-y-0': isLoaded }"
          >
            <button 
              @click="openContactForm"
              class="btn btn-primary group"
            >
              <span>Start a project</span>
              <Icon name="tabler:arrow-up-right" class="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            
            <button 
              @click="scrollToWork"
              class="btn btn-secondary"
            >
              <Icon name="tabler:eye" class="w-5 h-5" />
              <span>View work</span>
            </button>
          </div>

          <!-- Stats -->
          <div 
            class="flex flex-wrap gap-8 pt-8 border-t border-border transition-all duration-700 delay-600"
            :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
          >
            <div>
              <div class="font-display text-3xl font-semibold text-text-primary">10+</div>
              <div class="text-sm text-text-tertiary mt-1">Years Experience</div>
            </div>
            <div>
              <div class="font-display text-3xl font-semibold text-text-primary">100+</div>
              <div class="text-sm text-text-tertiary mt-1">Projects Delivered</div>
            </div>
            <div>
              <div class="font-display text-3xl font-semibold text-text-primary">50+</div>
              <div class="text-sm text-text-tertiary mt-1">Happy Clients</div>
            </div>
          </div>
        </div>

        <!-- Right content - Visual element -->
        <div 
          class="lg:col-span-5 relative hidden lg:block transition-all duration-1000 delay-300"
          :class="{ 'opacity-0 scale-95': !isLoaded, 'opacity-100 scale-100': isLoaded }"
        >
          <!-- Profile card with depth -->
          <div class="relative">
            <!-- Decorative elements behind -->
            <div class="absolute -top-8 -left-8 w-32 h-32 border border-accent-gold/20 rounded-2xl"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 border border-accent-violet/20 rounded-2xl"></div>
            
            <!-- Main image container -->
            <div class="relative card p-2 overflow-hidden">
              <div class="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-surface-elevated to-surface-higher">
                <img
                  src="/images/about.jpg"
                  alt="Jeric Izon"
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <!-- Floating badge -->
              <div class="absolute -bottom-4 -left-4 card px-4 py-3 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <Icon name="tabler:code" class="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <div class="text-sm font-medium text-text-primary">Full Stack</div>
                  <div class="text-xs text-text-tertiary">Developer</div>
                </div>
              </div>
            </div>

            <!-- Tech stack floating tags -->
            <div class="absolute -right-4 top-1/4 tag tag-gold animate-float">
              Vue.js
            </div>
            <div class="absolute -left-4 top-1/2 tag tag-violet animate-float" style="animation-delay: 1s;">
              Node.js
            </div>
            <div class="absolute right-0 bottom-1/4 tag animate-float" style="animation-delay: 2s;">
              TypeScript
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom gradient fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
  </section>
</template>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>