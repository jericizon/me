<script setup lang="ts">
import { withBase } from 'ufo'
import { useRuntimeConfig } from '#imports'
import { useContactForm } from '@/composables/useContactForm'

const baseURL = useRuntimeConfig().app.baseURL
const iconSrc = (file: string) => withBase(`/icons/${file}`, baseURL)

const { openContactForm } = useContactForm()

const scrollToAbout = () => {
  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home-section" class="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-20">
    <!-- Animated gradient mesh background -->
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <!-- Gradient orbs -->
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/30 dark:bg-primary-500/20 rounded-full blur-3xl animate-morph"></div>
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-500/25 dark:bg-secondary-500/15 rounded-full blur-3xl animate-morph" style="animation-delay: -4s;"></div>
      <div class="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <!-- Floating tech icons -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute top-20 left-[15%] w-12 h-12 opacity-20 dark:opacity-10 animate-float" style="animation-delay: 0.5s">
        <Icon name="tabler:brand-nodejs" class="w-full h-full text-secondary-500" />
      </div>
      <div class="absolute top-1/4 right-[20%] w-10 h-10 opacity-15 dark:opacity-10 animate-float-slow" style="animation-delay: 1s">
        <Icon name="tabler:brand-vue" class="w-full h-full text-primary-500" />
      </div>
      <div class="absolute bottom-1/3 left-[10%] w-14 h-14 opacity-15 dark:opacity-10 animate-float" style="animation-delay: 2s">
        <Icon name="tabler:brand-laravel" class="w-full h-full text-accent-500" />
      </div>
      <div class="absolute bottom-1/4 right-[15%] w-10 h-10 opacity-20 dark:opacity-10 animate-float-slow" style="animation-delay: 3s">
        <Icon name="tabler:brand-docker" class="w-full h-full text-primary-400" />
      </div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Main content -->
        <div class="text-center lg:text-left space-y-8">
          <!-- Availability badge -->
          <div class="inline-flex items-center gap-3 px-5 py-2.5 glass-badge animate-fade-in-up" style="animation-delay: 0.1s">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary-500"></span>
            </span>
            <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Available for freelance & remote work</span>
          </div>

          <!-- Main heading -->
          <div class="space-y-4 animate-fade-in-up" style="animation-delay: 0.2s">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight tracking-tight">
              <span class="block text-neutral-900 dark:text-white">Hi, I'm</span>
              <span class="block text-gradient">Jeric Izon</span>
            </h1>
            <div class="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1 text-xl sm:text-2xl lg:text-3xl font-medium">
              <span class="text-neutral-600 dark:text-neutral-400">Full Stack</span>
              <span class="text-primary-600 dark:text-primary-400">Developer</span>
              <span class="text-neutral-400 dark:text-neutral-500">&</span>
              <span class="text-secondary-600 dark:text-secondary-400">Problem Solver</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl animate-fade-in-up" style="animation-delay: 0.3s">
            Building modern web applications with Vue.js, React, Node.js, PHP, Laravel, and Supabase. 
            I focus on clean code, secure APIs, and exceptional user experiences.
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-8 py-4 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="text-center lg:text-left">
              <div class="text-3xl sm:text-4xl font-bold text-gradient">10+</div>
              <div class="text-sm text-neutral-500 dark:text-neutral-400">Years Experience</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl sm:text-4xl font-bold text-gradient">100+</div>
              <div class="text-sm text-neutral-500 dark:text-neutral-400">Projects Built</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl sm:text-4xl font-bold text-gradient">100%</div>
              <div class="text-sm text-neutral-500 dark:text-neutral-400">Client Satisfaction</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 animate-fade-in-up" style="animation-delay: 0.5s">
            <a
              href="#contact-section"
              @click.prevent="openContactForm"
              class="btn btn-lg btn-primary group"
            >
              <span>Let's Work Together</span>
              <Icon name="tabler:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#projects-section"
              class="btn btn-lg btn-secondary group"
            >
              <Icon name="tabler:eye" class="w-5 h-5" aria-hidden="true" />
              <span>View My Work</span>
            </a>
          </div>

          <!-- Social links -->
          <div class="flex justify-center lg:justify-start gap-3 pt-6 animate-fade-in-up" style="animation-delay: 0.6s">
            <a 
              href="https://github.com/jericizon" 
              target="_blank" 
              rel="noopener" 
              class="group p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Icon name="tabler:brand-github" class="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jericizon" 
              target="_blank" 
              rel="noopener" 
              class="group p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Icon name="tabler:brand-linkedin" class="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors" aria-hidden="true" />
            </a>
            <a 
              href="#contact-section" 
              @click.prevent="openContactForm" 
              class="group p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300"
              aria-label="Contact Me"
            >
              <Icon name="tabler:mail" class="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Visual element - Profile Card -->
        <div class="relative hidden lg:block animate-fade-in-up" style="animation-delay: 0.3s">
          <div class="relative w-full max-w-md mx-auto">
            <!-- Main glassmorphic card -->
            <div class="glass-card p-8 rounded-3xl">
              <div class="space-y-6">
                <!-- Profile image -->
                <div class="relative w-28 h-28 mx-auto">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl animate-morph opacity-80"></div>
                  <img
                    src="/images/about.jpg"
                    alt="Jeric Izon"
                    class="relative w-full h-full object-cover rounded-2xl shadow-large"
                    loading="eager"
                  />
                </div>
                
                <!-- Why hire me -->
                <div class="space-y-3">
                  <h3 class="text-lg font-semibold text-neutral-900 dark:text-white text-center">Why Work With Me</h3>
                  <ul class="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li class="flex items-center gap-2">
                      <Icon name="tabler:circle-check-filled" class="w-4 h-4 text-secondary-500 flex-shrink-0" aria-hidden="true" />
                      <span>Ship fast, iterate faster</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="tabler:circle-check-filled" class="w-4 h-4 text-secondary-500 flex-shrink-0" aria-hidden="true" />
                      <span>Clean, maintainable code</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="tabler:circle-check-filled" class="w-4 h-4 text-secondary-500 flex-shrink-0" aria-hidden="true" />
                      <span>Clear communication</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA mini -->
                <a 
                  href="#contact-section"
                  @click.prevent="openContactForm"
                  class="block w-full text-center py-3 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Let's Talk
                </a>
              </div>
            </div>

            <!-- Decorative floating elements -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-glow-primary animate-float" style="animation-delay: 0.5s"></div>
            <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl shadow-glow-secondary animate-float-slow"></div>
            <div class="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg shadow-glow-accent animate-float" style="animation-delay: 1s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style="animation-delay: 1s">
      <button 
        @click="scrollToAbout"
        class="flex flex-col items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer group"
      >
        <span class="text-sm font-medium">Scroll to explore</span>
        <div class="p-2 glass-card-subtle rounded-full group-hover:scale-110 transition-transform">
          <Icon name="tabler:chevron-down" class="w-5 h-5 animate-bounce" aria-hidden="true" />
        </div>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations for the fresh design */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes glow {
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(20, 184, 166, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(20, 184, 166, 0.6));
  }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out forwards;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite alternate;
}
</style>