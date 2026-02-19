<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useContactForm } from '@/composables/useContactForm';
import { useAnalytics } from '@/composables/useAnalytics';

// Calculate total time in industry (reactive even in static builds)
// `now` updates on client to keep the value fresh after hydration
const now = ref<Date | null>(null);
let nowTimer: number | undefined;

const totalDaysInIndustry = computed(() => {
  const startDate = new Date(2013, 11, 1); // December 1, 2013
  const currentDate = now.value ?? new Date();

  let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - startDate.getMonth();
  let daysDiff = currentDate.getDate() - startDate.getDate();

  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    monthsDiff += 12;
  }
  if (daysDiff < 0) {
    monthsDiff--;
    const tempDate = new Date(startDate);
    tempDate.setMonth(tempDate.getMonth() + 1, 0);
    daysDiff = tempDate.getDate() - startDate.getDate() + currentDate.getDate();
  }

  return `${yearsDiff}y ${monthsDiff}m ${daysDiff}d`;
});

// Stats data
interface StatItem {
  value: string | (() => string);
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { value: () => totalDaysInIndustry.value, label: 'In Industry', icon: 'tabler:briefcase' },
  { value: '100+', label: 'Projects Completed', icon: 'tabler:file-check' },
  { value: '100+', label: 'Happy Clients', icon: 'tabler:mood-smile' },
  { value: '500+', label: 'Cups of Coffee', icon: 'tabler:coffee' }
];

// Animation refs (container-level only)
const statsRef = ref<HTMLElement | null>(null);
const ctaRef = ref<HTMLElement | null>(null);
const ctaContentRef = ref<HTMLElement | null>(null);

// Initialize animations
onMounted(() => {
  // keep `now` updated hourly on client to ensure reactivity post-hydration
  now.value = new Date();
  nowTimer = window.setInterval(() => {
    now.value = new Date();
  }, 60 * 60 * 1000);

  // Animate stats section
  setTimeout(() => {
    if (statsRef.value) {
      statsRef.value.style.opacity = '1';
      statsRef.value.style.transform = 'translateY(0)';
    }
  }, 200);
  
  // Animate CTA section
  setTimeout(() => {
    if (ctaRef.value) {
      ctaRef.value.style.opacity = '1';
    }
  }, 600);
  
  // Animate CTA content
  setTimeout(() => {
    if (ctaContentRef.value) {
      ctaContentRef.value.style.opacity = '1';
      ctaContentRef.value.style.transform = 'translateY(0)';
    }
  }, 800);
});

onUnmounted(() => {
  if (nowTimer) window.clearInterval(nowTimer);
});

const { openContactForm } = useContactForm();

const { trackEvent } = useAnalytics();

// Ensure asset URLs respect the app base URL (e.g., GitHub Pages subpath)
const baseURL = useRuntimeConfig().app.baseURL;
</script>

<template>
  <!-- Stats strip -->
  <section id="stats-section" class="py-16 md:py-20 border-y border-neutral-200/50 dark:border-neutral-800/50" aria-label="Career statistics">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div
        ref="statsRef"
        class="opacity-0 translate-y-6 transition-all duration-700 ease-out"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center md:text-left"
          >
            <div class="font-display font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight mb-1">
              {{ typeof stat.value === 'function' ? stat.value() : stat.value }}
            </div>
            <div class="text-sm text-neutral-500 dark:text-neutral-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section
    ref="ctaRef"
    class="py-24 md:py-32 relative overflow-hidden opacity-0 transition-all duration-700 ease-out bg-neutral-950 dark:bg-neutral-950"
  >
    <!-- Subtle ambient glow -->
    <div class="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[80px]"></div>
    <!-- Grid overlay -->
    <div class="absolute inset-0 opacity-[0.04]"
      style="background-image: linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 60px 60px;">
    </div>

    <div class="relative z-10">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div
        ref="ctaContentRef"
        class="opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div>
          <!-- Eyebrow -->
          <p class="eyebrow mb-6" style="color: rgba(255,255,255,0.5);">
            <span class="inline-block w-8 h-px bg-primary-500 mr-2 align-middle"></span>
            Let's build something
          </p>

          <!-- Headline -->
          <h2 class="font-display font-bold text-white tracking-tighter mb-8 leading-[1.0]" style="font-size: clamp(2.5rem, 6vw, 5.5rem);">
            Have a project<br/>
            in mind? <span class="text-gradient">Let's talk.</span>
          </h2>

          <p class="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            I'm available for freelance, remote, and part-time roles. Whether you need a full product built from scratch or want to level up an existing codebase — I'm in.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="#contact-section"
              @click.prevent="() => { trackEvent('cta_click', { section: 'sections_cta', label: 'hire_me' }); openContactForm(); }"
              class="btn btn-lg group"
              style="background: #7c3aed; color: white; box-shadow: 0 0 40px rgba(124,58,237,0.4);"
              aria-label="Open contact form"
            >
              <span>Start a Conversation</span>
              <Icon name="tabler:arrow-up-right" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/jericizon"
              target="_blank"
              rel="noopener"
              class="btn btn-lg"
              style="background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.8);"
            >
              <Icon name="tabler:brand-github" class="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
 