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
  <section id="stats-section" class="py-16 md:py-20 border-y border-base-600/30" aria-label="Career statistics">
    <div class="px-6 lg:px-16">
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
            <div class="font-display font-bold text-3xl md:text-4xl text-coral-500 tracking-tight mb-1">
              {{ typeof stat.value === 'function' ? stat.value() : stat.value }}
            </div>
            <div class="text-sm text-base-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section
    ref="ctaRef"
    class="py-24 md:py-32 relative overflow-hidden opacity-0 transition-all duration-700 ease-out bg-surface"
  >
    <!-- Subtle ambient glow -->
    <div class="absolute top-0 left-1/3 w-[600px] h-[600px] bg-coral-500/10 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[80px]"></div>

    <div class="relative z-10">
      <div class="px-6 lg:px-16">
      <div
        ref="ctaContentRef"
        class="opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div>
          <!-- Eyebrow -->
          <div class="flex items-center gap-4 mb-6">
            <span class="w-8 h-px bg-coral-500"></span>
            <span class="font-mono text-xs text-base-400 tracking-wider uppercase">Ready to build?</span>
          </div>

          <!-- Headline -->
          <h2 class="font-display font-bold text-base-50 tracking-tighter mb-8 leading-[0.95]" style="font-size: clamp(2.5rem, 6vw, 5rem);">
            Let's turn your idea<br/>
            into a <span class="text-coral-500">revenue-generating</span><br/>
            system.
          </h2>

          <p class="text-lg text-base-300 max-w-xl leading-relaxed mb-10">
            I'm a systems builder for serious founders. If you're looking for a partner who can architect, build, and scale your product — not just write code — let's talk.
          </p>

          <div class="flex flex-wrap gap-4">
            <button
              @click="() => { trackEvent('cta_click', { section: 'sections_cta', label: 'hire_me' }); openContactForm(); }"
              class="group flex items-center gap-3 px-8 py-4 bg-coral-500 text-surface font-semibold text-sm tracking-wide hover:bg-coral-400 transition-all duration-300"
              aria-label="Open contact form"
            >
              <span>Let's Build Your System</span>
              <Icon name="tabler:arrow-up-right" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </button>
            <NuxtLink
              to="/#services-section"
              class="flex items-center gap-3 px-8 py-4 border border-base-600/50 text-base-300 hover:border-coral-500/50 hover:text-base-50 transition-all duration-300"
            >
              <Icon name="tabler:briefcase" class="w-4 h-4" />
              <span>See What I Build</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
 