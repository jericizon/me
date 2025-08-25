<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useContactForm } from '@/composables/useContactForm';

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
  { value: '300+', label: 'Projects Completed', icon: 'tabler:file-check' },
  { value: '200+', label: 'Happy Clients', icon: 'tabler:mood-smile' },
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

// Ensure asset URLs respect the app base URL (e.g., GitHub Pages subpath)
const baseURL = useRuntimeConfig().app.baseURL;
</script>

<template>
  <!-- Stats Section -->
  <section id="stats-section" class="py-16 md:py-20 relative overflow-hidden">
    <div class="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-primary-500/20 to-secondary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div 
        ref="statsRef"
        class="opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="transition-all duration-500 ease-out"
          >
            <div class="p-6 md:p-8 text-center rounded-2xl h-full flex flex-col items-center justify-center bg-white/10/50 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20">
              <div class="stat-icon mb-4 p-3 rounded-full bg-gradient-to-br from-primary-500/15 to-secondary-500/10 ring-1 ring-white/10">
                <Icon :name="stat.icon" class="w-8 h-8 text-primary-600" />
              </div>
              <div class="stat-value text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
                {{ typeof stat.value === 'function' ? stat.value() : stat.value }}
              </div>
              <div class="stat-label text-xs md:text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section 
    ref="ctaRef"
    class="py-20 md:py-24 relative overflow-hidden opacity-0 transition-all duration-1000 ease-out bg-cover bg-center"
    :style="{ backgroundImage: `url(${baseURL}images/cta-bg.jpg)` }"
  >
    <!-- Overlay with blur -->
    <div class="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
    
    <!-- Decorative elements -->
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div 
        ref="ctaContentRef"
        class="max-w-3xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-800 ease-out"
      >
        <div class="p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/15 shadow-2xl">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-white">
            I'm <span class="text-primary-300">Available</span> for Freelancing
          </h2>
          
          <p class="text-base md:text-lg mb-8 max-w-xl mx-auto text-white/90">
            Embrace the opportunity to turn ideas into reality. Let's embark on
            this freelance journey together and create something extraordinary.
          </p>
          
          <a
            href="#contact-section"
            @click.prevent="openContactForm"
            class="btn btn-primary btn-lg"
          >
            <span>Hire Me</span>
            <Icon name="tabler:send" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
 