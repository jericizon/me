<script setup lang="ts">
import { withBase } from 'ufo'
import { useRuntimeConfig } from '#imports'
import { useContactForm } from '@/composables/useContactForm'

const baseURL = useRuntimeConfig().app.baseURL
const iconSrc = (file: string) => withBase(`/icons/${file}`, baseURL)

const { openContactForm } = useContactForm()
</script>

<template>
  <section id="home-section" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
    <!-- Floating tech icons - Key highlights only -->
    <div class="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
      <!-- Top section - Core frameworks -->
      
      <div class="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-30 animate-float" style="animation-delay: 0.5s">
        <Icon name="tabler:brand-nodejs" class="w-full h-full text-accent-600" />
      </div>
       
      <!-- Center section - Key technologies -->
      <div class="absolute top-1/3 left-12 w-20 h-20 opacity-20 animate-float" style="animation-delay: 1.5s">
        <Icon name="tabler:brand-laravel" class="w-full h-full text-accent-600" />
      </div>
      <div class="absolute top-2/5 left-1/2 transform -translate-x-1/2 w-15 h-15 opacity-35 animate-float-slow" style="animation-delay: 2.0s">
        <Icon name="tabler:code" class="w-full h-full text-primary-600" />
      </div>
      <div class="absolute top-1/3 right-12 w-14 h-14 opacity-20 animate-float" style="animation-delay: 2.5s">
        <Icon name="tabler:brand-docker" class="w-full h-full text-secondary-700" />
      </div>
      
      <!-- Bottom section - Essential tools -->
      <div class="absolute bottom-24 left-20 w-12 h-12 opacity-18 animate-float-slow" style="animation-delay: 3.0s">
        <Icon name="tabler:brand-mysql" class="w-full h-full text-primary-700" />
      </div>
      <div class="absolute bottom-24 right-20 w-12 h-12 opacity-18 animate-float-slow" style="animation-delay: 4.0s">
        <Icon name="tabler:brand-aws" class="w-full h-full text-secondary-700" />
      </div>

    </div>

    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-20 animate-float-slow"></div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-lg opacity-25 animate-float" style="animation-delay: 1s"></div>
      <div class="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-accent-300 to-accent-500 rounded-full opacity-20 animate-float-slow" style="animation-delay: 2s"></div>
      <div class="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg opacity-25 animate-float" style="animation-delay: 3s"></div>
      
      <!-- Tech icons floating -->      
      <div class="absolute top-1/3 right-1/3 w-18 h-18 opacity-25 animate-float-slow" style="animation-delay: 1.5s">
        <Icon name="tabler:brand-vue" class="w-full h-full text-green-500" />
      </div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Main content -->
        <div class="text-center lg:text-left space-y-8 animate-slide-up">
          <!-- Greeting badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-soft animate-bounce-in" style="animation-delay: 0.1s">
            <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-neutral-700">Available for new projects</span>
          </div>

          <!-- Main heading -->
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              <span class="block text-neutral-900">Hi, I'm</span>
              <span class="block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-glow">Jeric Izon</span>
            </h1>
            <div class="flex flex-wrap justify-center lg:justify-start gap-2 text-lg sm:text-xl lg:text-2xl text-neutral-600 font-medium">
              <span>Full Stack</span>
              <span class="text-primary-600">Developer</span>
              <span>&</span>
              <span class="text-secondary-600">Problem Solver</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl animate-fade-in" style="animation-delay: 0.3s">
            I craft beautiful, scalable web applications with modern technologies.
            Passionate about clean code, great UX, and turning ideas into reality.
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-6 py-6 animate-fade-in" style="animation-delay: 0.4s">
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold text-primary-600">10+</div>
              <div class="text-sm text-neutral-600">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold text-secondary-600">100+</div>
              <div class="text-sm text-neutral-600">Projects Built</div>
            </div>
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold text-accent-600">100%</div>
              <div class="text-sm text-neutral-600">Client Satisfaction</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 animate-fade-in" style="animation-delay: 0.5s">
            <a
              href="#contact-section"
              @click.prevent="openContactForm"
              class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105"
            >
              <span>Let's Work Together</span>
              <Icon name="tabler:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects-section"
              class="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-neutral-900 font-semibold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-white/20"
            >
              <Icon name="tabler:eye" class="w-5 h-5" />
              <span>View My Work</span>
            </a>
          </div>

          <!-- Social links -->
          <div class="flex justify-center lg:justify-start gap-4 pt-8 animate-fade-in" style="animation-delay: 0.6s">
            <a href="https://github.com/jericizon" target="_blank" rel="noopener" class="group p-3 bg-white/60 backdrop-blur-sm hover:bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110 border border-white/20">
              <Icon name="tabler:brand-github" class="w-6 h-6 text-neutral-700 group-hover:text-primary-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/jericizon" target="_blank" rel="noopener" class="group p-3 bg-white/60 backdrop-blur-sm hover:bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110 border border-white/20">
              <Icon name="tabler:brand-linkedin" class="w-6 h-6 text-neutral-700 group-hover:text-secondary-600 transition-colors" />
            </a>
            <a href="#contact-section" @click.prevent="openContactForm" class="group p-3 bg-white/60 backdrop-blur-sm hover:bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110 border border-white/20">
              <Icon name="tabler:mail" class="w-6 h-6 text-neutral-700 group-hover:text-accent-600 transition-colors" />
            </a>
          </div>
        </div>

        <!-- Visual element -->
        <div class="relative hidden lg:block animate-slide-in-right" style="animation-delay: 0.2s">
          <div class="relative w-full max-w-md mx-auto">
            <!-- Main card -->
            <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-white/20 hover:shadow-xl transition-shadow duration-500">
              <div class="space-y-6">
                <!-- Profile image placeholder -->
                <div class="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                  <Icon name="tabler:user" class="w-12 h-12 text-white" />
                </div>
                
                <!-- Tech stack -->
                <div class="space-y-3">
                  <h3 class="text-lg font-semibold text-neutral-900 text-center">Tech Stack</h3>
                  <div class="flex flex-wrap justify-center gap-2">
                    <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Vue.js</span>
                    <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">Laravel</span>
                    <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">Node.js</span>
                    <span class="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">TypeScript</span>
                  </div>
                </div>

                <!-- Fun fact -->
                <div class="text-center p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-primary-100/50">
                  <p class="text-sm text-neutral-600">🚀 Building the future, one line of code at a time</p>
                </div>
              </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl shadow-medium animate-bounce-in" style="animation-delay: 0.8s"></div>
            <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl shadow-medium animate-bounce-in" style="animation-delay: 1s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-in" style="animation-delay: 1.2s">
      <div class="flex flex-col items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors cursor-pointer" onclick="document.getElementById('about-section').scrollIntoView({behavior: 'smooth'})">
        <span class="text-sm font-medium">Scroll to explore</span>
        <Icon name="tabler:chevron-down" class="w-6 h-6 animate-bounce" />
      </div>
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