<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

// Calculate total time in industry
const totalDaysInIndustry = computed(() => {
  const startDate = new Date(2013, 11, 1); // December 1, 2013
  const currentDate = new Date();

  // Calculate the difference in years, months, and days
  let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - startDate.getMonth();
  let daysDiff = currentDate.getDate() - startDate.getDate();

  // Adjust for negative differences
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    monthsDiff += 12;
  }
  if (daysDiff < 0) {
    monthsDiff--;
    const tempDate = new Date(startDate);
    tempDate.setMonth(tempDate.getMonth() + 1, 0); // Get the last day of the previous month
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
  { value: () => totalDaysInIndustry.value, label: 'In Industry', icon: 'heroicons:briefcase' },
  { value: '300+', label: 'Projects Completed', icon: 'heroicons:document-check' },
  { value: '200+', label: 'Happy Clients', icon: 'heroicons:face-smile' },
  { value: '500+', label: 'Cups of Coffee', icon: 'heroicons:beaker' }
];

// Animation refs
const statsRef = ref<HTMLElement | null>(null);
const statItemRefs = ref<HTMLElement[]>([]);
const ctaRef = ref<HTMLElement | null>(null);
const ctaContentRef = ref<HTMLElement | null>(null);

// Initialize animations
onMounted(() => {
  // Animate stats section
  setTimeout(() => {
    if (statsRef.value) {
      statsRef.value.style.opacity = '1';
      statsRef.value.style.transform = 'translateY(0)';
    }
  }, 200);
  
  // Animate stat items with staggered delay
  statItemRefs.value.forEach((el, index) => {
    setTimeout(() => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      }
    }, 400 + (index * 150));
  });
  
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
</script>

<template>
  <!-- Stats Section -->
  <section id="stats-section" class="py-16 md:py-20 relative overflow-hidden">
    <div class="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div 
        ref="statsRef"
        class="stats-container"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            :ref="el => { if (el) statItemRefs[index] = el as HTMLElement }"
            class="stat-item"
          >
            <div class="glass-card p-6 md:p-8 text-center rounded-xl h-full flex flex-col items-center justify-center">
              <div class="stat-icon mb-4 p-3 rounded-full bg-primary-500/10">
                <Icon :name="stat.icon" class="w-8 h-8 text-primary-300" />
              </div>
              <div class="stat-value text-2xl md:text-3xl font-bold mb-2">
                {{ typeof stat.value === 'function' ? stat.value() : stat.value }}
              </div>
              <div class="stat-label text-sm text-slate-300">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section 
    ref="ctaRef"
    class="py-20 md:py-24 relative overflow-hidden cta-section"
    style="background-image: url(/images/cta-bg.jpg); background-size: cover; background-position: center;"
  >
    <!-- Overlay with blur -->
    <div class="absolute inset-0 backdrop-blur-sm bg-black/40"></div>
    
    <!-- Decorative elements -->
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div 
        ref="ctaContentRef"
        class="max-w-3xl mx-auto text-center cta-content"
      >
        <div class="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-md">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            I'm <span class="text-primary-300">Available</span> for Freelancing
          </h2>
          
          <p class="text-lg mb-8 max-w-xl mx-auto">
            Embrace the opportunity to turn ideas into reality. Let's embark on
            this freelance journey together and create something extraordinary.
          </p>
          
          <a
            href="mailto:im.jericizon@gmail.com?subject=Hiring%20Full%20stack%20developer%20ref(portfolio)"
            class="glass-button primary px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <span>Hire Me</span>
            <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-container {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.stat-item {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.cta-section {
  opacity: 0;
  transition: opacity 1s ease;
}

.cta-content {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.glass-card {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-button {
  background: rgba(var(--color-primary-500), 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--color-primary-500), 0.3);
  box-shadow: 0 4px 16px rgba(var(--color-primary-500), 0.15);
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(var(--color-primary-500), 0.3);
  border-color: rgba(var(--color-primary-500), 0.5);
}
</style>