<script setup lang="ts">
import { withBase } from 'ufo'
import { useRuntimeConfig } from '#imports'
import { useContactForm } from '@/composables/useContactForm'

const baseURL = useRuntimeConfig().app.baseURL
const iconSrc = (file: string) => withBase(`/icons/${file}`, baseURL)
const phrases = [
  'Custom Dashboards & Systems That Drive Efficiency',
  'Building Reliable Systems That Grow With You',
  'Turning Complex Ideas Into Seamless Platforms'
]

const phraseIndex = ref(0)
const currentPhrase = computed(() => phrases[phraseIndex.value])

const { openContactForm } = useContactForm()

let rotator: number | undefined
const rotate = () => {
  phraseIndex.value = (phraseIndex.value + 1) % phrases.length
}

onMounted(() => {
  rotator = window.setInterval(rotate, 3000) // change every 3s
})

onBeforeUnmount(() => {
  if (rotator) window.clearInterval(rotator)
})
</script>

<template>
  <section id="home-section" class="min-h-screen flex items-center justify-center py-24 md:py-28 lg:py-32 relative overflow-hidden">
        
    <!-- Floating developer icons (viewport-relative positions, avoid center) -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <!-- Laravel (top-right, outside center) -->
      <img :src="iconSrc('laravel.svg')" alt="Laravel" class="block absolute top-[10vh] right-[4vw] w-14 h-14 md:w-20 md:h-20 opacity-40 drop-shadow-sm animate-float motion-reduce:animate-none" :style="{ animationDelay: '0.1s' }" />
      <!-- Vue.js (top-left, outside center) -->
      <img :src="iconSrc('vuejs.svg')" alt="Vue.js" class="block absolute top-[8vh] left-[4vw] w-14 h-14 md:w-20 md:h-20 opacity-40 drop-shadow-sm animate-float-slow motion-reduce:animate-none" :style="{ animationDelay: '0.6s' }" />
      <!-- Nuxt.js (bottom-left, outside center) -->
      <img :src="iconSrc('nuxtjs.svg')" alt="Nuxt.js" class="block absolute bottom-[10vh] left-[6vw] w-14 h-14 md:w-20 md:h-20 opacity-40 drop-shadow-sm animate-float motion-reduce:animate-none" :style="{ animationDelay: '1.2s' }" />
      <!-- NestJS (bottom-right, outside center) -->
      <img :src="iconSrc('nestjs.svg')" alt="NestJS" class="block absolute bottom-[12vh] right-[6vw] w-14 h-14 md:w-20 md:h-20 opacity-40 drop-shadow-sm animate-float-slow motion-reduce:animate-none" :style="{ animationDelay: '1.8s' }" />

      <!-- Small fundamentals (viewport-relative) -->
      <!-- HTML -->
      <img :src="iconSrc('html.svg')" alt="HTML" class="hidden md:block absolute top-[20vh] left-[12vw] w-10 h-10 opacity-20 animate-float motion-reduce:animate-none" :style="{ animationDelay: '0.3s' }" />
      <!-- CSS -->
      <img :src="iconSrc('css.svg')" alt="CSS" class="hidden lg:block absolute top-[22vh] right-[12vw] w-10 h-10 opacity-20 animate-float-slow motion-reduce:animate-none" :style="{ animationDelay: '0.9s' }" />
      <!-- JavaScript -->
      <img :src="iconSrc('javascript.svg')" alt="JavaScript" class="hidden md:block absolute bottom-[18vh] left-[14vw] w-10 h-10 opacity-20 animate-float motion-reduce:animate-none" :style="{ animationDelay: '1.5s' }" />
      <!-- Node.js -->
      <img :src="iconSrc('nodejs.svg')" alt="Node.js" class="hidden lg:block absolute bottom-[16vh] right-[14vw] w-10 h-10 opacity-20 animate-float-slow motion-reduce:animate-none" :style="{ animationDelay: '2.1s' }" />
    </div>
    <div class="w-full">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 items-center justify-items-center">
        <!-- Text Content -->
        <div class="pt-8 md:pt-0 w-full max-w-3xl mx-auto">
          <div class="text-center relative z-10 reveal">
            <!-- Greeting (no entrance animation) -->
            <div>
              <span class="text-accent-500 font-medium text-base md:text-lg mb-3 block">Hello!</span>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display mb-6 text-secondary-900">
                I'm <span class="text-primary-600">Jeric Izon</span>
              </h1>
            </div>
            
            <!-- Role -->
            <div class="reveal" style="animation-delay: .08s;">
              <h2 class="text-lg md:text-xl lg:text-2xl text-secondary-700 font-medium tracking-tight mb-6">
                <span class="phrase-roller">
                  <transition name="phrase-roll" mode="out-in">
                    <span class="text-primary-700 inline-block whitespace-nowrap" :key="currentPhrase">{{ currentPhrase }}</span>
                  </transition>
                </span>
              </h2>
              <!-- Brief bio -->
              <p class="text-secondary-700 text-base md:text-lg mb-8 leading-relaxed reveal" style="animation-delay: .16s;">
                I craft secure, scalable, and maintainable web apps using Vue, Node, and Laravel. I love building clean UIs and performant APIs that solve real problems.
              </p>

              <!-- Highlights -->
              <div class="flex flex-wrap justify-center gap-2 mb-10 reveal" style="animation-delay: .24s;">
                <span class="px-3 py-1 rounded-full text-[13px] md:text-sm font-medium bg-primary-50 text-primary-700 border border-primary-200">10+ yrs experience</span>
                <span class="px-3 py-1 rounded-full text-[13px] md:text-sm font-medium bg-accent-50 text-accent-700 border border-accent-200">Full-stack</span>
                <span class="px-3 py-1 rounded-full text-[13px] md:text-sm font-medium bg-secondary-100 text-secondary-700 border border-secondary-200">Performance-first</span>
              </div>

              <!-- Social links -->
              <div class="flex flex-wrap items-center justify-center gap-4 mb-10 reveal" style="animation-delay: .32s;">
                <a href="https://github.com/jericizon" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-secondary-700 hover:text-primary-700 transition-colors">
                  <Icon name="tabler:brand-github" class="w-5 h-5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/jericizon" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-secondary-700 hover:text-primary-700 transition-colors">
                  <Icon name="tabler:brand-linkedin" class="w-5 h-5" /> LinkedIn
                </a>
                <a href="#contact-section" @click.prevent="openContactForm" class="inline-flex items-center gap-2 text-secondary-700 hover:text-primary-700 transition-colors">
                  <Icon name="tabler:mail" class="w-5 h-5" /> Email
                </a>
              </div>
            </div>
            
            <!-- CTA Buttons (no entrance animation) -->
            <div class="flex flex-wrap justify-center gap-4 reveal" style="animation-delay: .4s;">
              <a
                href="#contact-section"
                @click.prevent="openContactForm"
                class="btn btn-primary btn-lg"
              >
                <span>Hire me</span>
                <Icon name="tabler:send" class="w-5 h-5" />
              </a>
              <a
                href="#projects-section"
                class="btn btn-secondary btn-lg"
              >
                My works
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Subtle fade-up animation for banner content */
.reveal {
  opacity: 0;
  transform: translateY(12px);
  animation: fade-up 600ms ease-out forwards;
}

@keyframes fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Crossfade + slight slide for rotating role phrases */
.phrase-fade-enter-active,
.phrase-fade-leave-active {
  transition: opacity 450ms ease, transform 450ms ease;
}
.phrase-fade-enter-from,
.phrase-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* Rolling up ticker-style transition */
.phrase-roller {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 1.5em; /* lock height to avoid layout shift */
  vertical-align: bottom;
}

.phrase-roll-enter-active,
.phrase-roll-leave-active {
  transition: transform 450ms ease, opacity 450ms ease;
}
.phrase-roll-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.phrase-roll-enter-to {
  transform: translateY(0%);
  opacity: 1;
}
.phrase-roll-leave-from {
  transform: translateY(0%);
  opacity: 1;
}
.phrase-roll-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>