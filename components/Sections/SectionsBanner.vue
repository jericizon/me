<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'

const { openContactForm } = useContactForm()

const scrollToAbout = () => {
  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
}

const techStack = ['Vue.js', 'React', 'Node.js', 'Laravel', 'Supabase', 'TypeScript', 'Docker', 'AWS']
</script>

<template>
  <section id="home-section" class="relative min-h-screen flex flex-col justify-center overflow-hidden w-full">

    <!-- Decorative grid lines -->
    <div class="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style="background-image: linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px); background-size: 80px 80px;">
      </div>
      <!-- Ambient glow -->
      <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/15 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary-500/8 dark:bg-secondary-500/12 rounded-full blur-[80px]"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-20">

      <!-- Top label row -->
      <div class="flex items-center gap-4 mb-12 animate-fade-in-up" style="animation-delay: 0.05s">
        <div class="badge-available">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for work</span>
        </div>
        <span class="hidden sm:block text-xs text-neutral-400 dark:text-neutral-600 font-mono tracking-wider">Philippines · Remote</span>
      </div>

      <!-- Main hero grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">

        <!-- Left: Headline block -->
        <div>
          <!-- Eyebrow -->
          <p class="eyebrow mb-5 animate-fade-in-up" style="animation-delay: 0.1s">
            <span class="eyebrow-line"></span>
            Full Stack Developer
          </p>

          <!-- Giant headline -->
          <h1 class="font-display font-bold text-neutral-900 dark:text-white leading-[1.0] tracking-tighter mb-8 animate-fade-in-up" style="animation-delay: 0.15s; font-size: clamp(3rem, 8vw, 7rem);">
            Building<br/>
            <span class="text-gradient">digital</span><br/>
            products<br/>
            <span class="text-neutral-400 dark:text-neutral-600">that matter.</span>
          </h1>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl mb-10 animate-fade-in-up" style="animation-delay: 0.2s">
            I'm <strong class="text-neutral-900 dark:text-white font-semibold">Jeric Izon</strong> — a full-stack developer with 10+ years of experience crafting fast, secure, and beautifully engineered web applications.
          </p>

          <!-- CTA row -->
          <div class="flex flex-wrap gap-3 mb-12 animate-fade-in-up" style="animation-delay: 0.25s">
            <a
              href="#contact-section"
              @click.prevent="openContactForm"
              class="btn btn-primary btn-lg group"
            >
              <span>Start a Project</span>
              <Icon name="tabler:arrow-up-right" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
            <a href="#projects-section" class="btn btn-secondary btn-lg">
              <span>View My Work</span>
            </a>
          </div>

          <!-- Stats row -->
          <div class="flex flex-wrap gap-8 animate-fade-in-up" style="animation-delay: 0.3s">
            <div>
              <div class="font-display font-bold text-3xl text-neutral-900 dark:text-white tracking-tight">10+</div>
              <div class="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">Years experience</div>
            </div>
            <div class="w-px bg-neutral-200 dark:bg-neutral-800 self-stretch"></div>
            <div>
              <div class="font-display font-bold text-3xl text-neutral-900 dark:text-white tracking-tight">100+</div>
              <div class="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">Projects shipped</div>
            </div>
            <div class="w-px bg-neutral-200 dark:bg-neutral-800 self-stretch"></div>
            <div>
              <div class="font-display font-bold text-3xl text-neutral-900 dark:text-white tracking-tight">6+</div>
              <div class="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">Countries served</div>
            </div>
          </div>
        </div>

        <!-- Right: Profile card -->
        <div class="hidden lg:block animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="relative w-[300px]">
            <!-- Profile image -->
            <div class="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-large">
              <img
                src="/images/about.jpg"
                alt="Jeric Izon — Full Stack Developer"
                class="w-full h-full object-cover"
                loading="eager"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
              <!-- Bottom label -->
              <div class="absolute bottom-0 left-0 right-0 p-5">
                <div class="font-display font-bold text-white text-xl tracking-tight">Jeric Izon</div>
                <div class="text-white/70 text-sm mt-0.5">Full Stack Developer</div>
              </div>
            </div>

            <!-- Social links floating card -->
            <div class="absolute -right-5 top-6 card p-3 flex flex-col gap-2 shadow-card">
              <a href="https://github.com/jericizon" target="_blank" rel="noopener"
                class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                aria-label="GitHub">
                <Icon name="tabler:brand-github" class="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/jericizon" target="_blank" rel="noopener"
                class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                aria-label="LinkedIn">
                <Icon name="tabler:brand-linkedin" class="w-5 h-5 text-neutral-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
              </a>
              <a href="#contact-section" @click.prevent="openContactForm"
                class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                aria-label="Email">
                <Icon name="tabler:mail" class="w-5 h-5 text-neutral-500 group-hover:text-accent-500 transition-colors" />
              </a>
            </div>

            <!-- Accent dot decoration -->
            <div class="absolute -bottom-3 -left-3 w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center shadow-glow-primary animate-float">
              <Icon name="tabler:code" class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <!-- Tech marquee strip -->
      <div class="mt-16 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 animate-fade-in-up" style="animation-delay: 0.4s">
        <div class="flex items-center gap-6 overflow-hidden">
          <span class="flex-shrink-0 text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600">Stack</span>
          <div class="flex gap-6 overflow-hidden">
            <div class="flex gap-6 animate-marquee">
              <span v-for="tech in [...techStack, ...techStack]" :key="tech + Math.random()"
                class="flex-shrink-0 text-sm font-medium text-neutral-500 dark:text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <button
      @click="scrollToAbout"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer group animate-fade-in-up"
      style="animation-delay: 0.6s"
      aria-label="Scroll to about section"
    >
      <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
      <div class="w-5 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-start justify-center pt-1.5 group-hover:border-primary-400 transition-colors">
        <div class="w-1 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full animate-bounce group-hover:bg-primary-500 transition-colors"></div>
      </div>
    </button>
  </section>
</template>