<script setup lang="ts">
import { withBase } from 'ufo'

const config = useRuntimeConfig()
const baseURL = config.app.baseURL || '/'
const withBasePath = (p: string) => withBase(p, baseURL)

const projects = [
  {
    id: 1,
    name: 'Expressway PH',
    category: 'Transportation',
    image: '/images/projects/expresswayph.png',
    url: 'https://expresswayph.com',
    year: '2025',
    impact: '50K+ monthly users, 99.9% uptime'
  },
  {
    id: 2,
    name: 'ALAGA Now',
    category: 'Healthcare',
    image: '/images/projects/alaganow.png',
    url: 'https://alaganow.pages.dev',
    year: '2024',
    impact: 'MVP • 10,000+ care sessions facilitated'
  },
  {
    id: 3,
    name: 'Bubio AI',
    category: 'AI Platform',
    image: '/images/projects/bubio.png',
    url: 'https://bubio.ai',
    year: '2025',
    impact: 'Enterprise-grade security, 200ms API response'
  },
  {
    id: 4,
    name: 'Lunch Online',
    category: 'E-Commerce',
    image: '/images/projects/lunchonline.png',
    url: 'https://lunchonline.us',
    year: '2017',
    impact: '$500K+ transactions, 90% error reduction'
  },
  {
    id: 5,
    name: 'OFFEO',
    category: 'SaaS Platform',
    image: '/images/projects/offeo.png',
    url: 'https://offeo.com',
    year: '2018-2023',
    impact: '100K+ users, thousands of daily renders'
  }
]

const scrollContainer = ref<HTMLElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    const scrollAmount = direction === 'left' ? -400 : 400
    scrollContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="projects-section" class="relative py-24 lg:py-32">
    <!-- Section number watermark -->
    <div class="absolute top-8 right-8 lg:right-16 font-display font-bold text-[12rem] lg:text-[16rem] text-light-900/[0.02] dark:text-base-50/[0.02] leading-none select-none pointer-events-none">
      03
    </div>

    <div class="relative z-10">
      <!-- Section header -->
      <div class="px-6 lg:px-16 mb-12 lg:mb-16">
        <div class="flex items-center gap-4 mb-6">
          <span class="font-mono text-xs text-coral-500">03</span>
          <span class="w-12 h-px bg-coral-500"></span>
          <span class="font-mono text-xs text-light-500 dark:text-base-400 tracking-wider uppercase">Selected Work</span>
        </div>
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 class="font-display font-bold text-4xl lg:text-6xl text-light-900 dark:text-base-50 leading-tight tracking-tight">
            Systems that<br/>ship & scale
          </h2>
          <div class="flex items-center gap-4">
            <button 
              @click="scroll('left')"
              class="w-12 h-12 border border-light-300 dark:border-base-600/50 flex items-center justify-center text-light-500 dark:text-base-300 hover:border-coral-500 hover:text-coral-500 transition-colors"
              aria-label="Scroll left"
            >
              <Icon name="tabler:arrow-left" class="w-5 h-5" />
            </button>
            <button 
              @click="scroll('right')"
              class="w-12 h-12 border border-light-300 dark:border-base-600/50 flex items-center justify-center text-light-500 dark:text-base-300 hover:border-coral-500 hover:text-coral-500 transition-colors"
              aria-label="Scroll right"
            >
              <Icon name="tabler:arrow-right" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Horizontal scroll gallery -->
      <div 
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto snap-x-mandatory pb-8 px-6 lg:px-16 scrollbar-hide"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group flex-shrink-0 w-[85vw] lg:w-[500px] snap-center"
        >
          <a 
            :href="project.url" 
            target="_blank" 
            rel="noopener"
            class="block relative aspect-[4/3] overflow-hidden mb-4"
          >
            <!-- Image -->
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              :style="{ backgroundImage: `url(${withBasePath(project.image)})` }"
            ></div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-surface-light dark:from-surface via-surface-light/20 dark:via-surface/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            <!-- Content overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="font-mono text-xs text-coral-500">{{ project.year }}</span>
                <span class="w-8 h-px bg-light-400 dark:bg-base-600"></span>
                <span class="text-xs text-light-500 dark:text-base-400">{{ project.category }}</span>
              </div>
              <h3 class="font-display font-bold text-2xl lg:text-3xl text-light-900 dark:text-base-50 group-hover:text-coral-500 transition-colors">
                {{ project.name }}
              </h3>
            </div>

            <!-- Hover arrow -->
            <div class="absolute top-6 right-6 w-10 h-10 border border-light-400 dark:border-base-50/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Icon name="tabler:arrow-up-right" class="w-4 h-4 text-light-900 dark:text-base-50" />
            </div>
          </a>
          
          <!-- Impact text below image -->
          <p class="text-sm text-light-500 dark:text-base-400 pl-2 border-l border-coral-500/30">
            {{ project.impact }}
          </p>
        </div>

        <!-- End spacer -->
        <div class="flex-shrink-0 w-6 lg:w-16"></div>
      </div>
    </div>
  </section>
</template>
