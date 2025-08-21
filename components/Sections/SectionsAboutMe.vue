<script setup lang="ts">
// Calculate age dynamically
const myAge = computed(() => {
  const birthDate = new Date("1992-02-04");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
});

// Define refs for animation elements
const imageRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const infoRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);

// Apply animations when component is mounted
onMounted(() => {
  // Use setTimeout to create staggered animations
  setTimeout(() => {
    if (imageRef.value) {
      imageRef.value.style.opacity = '1';
      imageRef.value.style.transform = 'translateX(0)';
    }
  }, 200);
  
  setTimeout(() => {
    if (contentRef.value) {
      contentRef.value.style.opacity = '1';
      contentRef.value.style.transform = 'translateY(0)';
    }
  }, 400);
  
  setTimeout(() => {
    if (infoRef.value) {
      infoRef.value.style.opacity = '1';
      infoRef.value.style.transform = 'translateY(0)';
    }
  }, 600);
  
  setTimeout(() => {
    if (buttonRef.value) {
      buttonRef.value.style.opacity = '1';
      buttonRef.value.style.transform = 'translateY(0)';
    }
  }, 800);
});
</script>

<template>
  <section id="about-section" class="py-20 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="section-title">About Me</h2>
        <div class="section-subtitle">Get to know me better</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Image Column -->
        <div ref="imageRef" class="animate-item-x">
          <div class="glass-card p-3 rounded-2xl shadow-glass-lg overflow-hidden">
            <div class="relative rounded-xl overflow-hidden aspect-square">
              <img 
                src="/images/about.jpg" 
                alt="Jeric Izon - About Me" 
                class="w-full h-full object-cover"
              />
              <!-- Decorative elements -->
              <div class="absolute -bottom-4 -left-4 h-20 w-20 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div class="absolute -top-4 -right-4 h-16 w-16 bg-cyan-500/20 rounded-full blur-lg animate-float"></div>
            </div>
          </div>
        </div>
        
        <!-- Content Column -->
        <div class="space-y-8">
          <!-- Bio Content -->
          <div ref="contentRef" class="glass-card p-6 md:p-8 backdrop-blur-md animate-item">
            <p class="text-lg leading-relaxed">
              With over a decade of experience as a full stack web developer,
              I specialize in Laravel and Vue.js frameworks, crafting
              efficient, scalable web applications. Proficient in front-end
              and back-end development, I leverage HTML, CSS, JavaScript, and
              PHP to deliver exceptional user experiences. Continuously
              learning and adapting to emerging trends, my passion for web
              development fuels innovative solutions that empower businesses
              in the digital landscape.
            </p>
          </div>
          
          <!-- Personal Info -->
          <div ref="infoRef" class="glass-card p-6 md:p-8 backdrop-blur-md animate-item">
            <h3 class="text-xl font-semibold mb-4 text-primary-300">Personal Information</h3>
            <ul class="space-y-3">
              <li class="flex flex-wrap">
                <span class="w-24 font-medium text-slate-300">Name:</span>
                <span>Jeric Izon</span>
              </li>
              <li class="flex flex-wrap">
                <span class="w-24 font-medium text-slate-300">Age:</span>
                <span>{{ myAge }}</span>
              </li>
              <li class="flex flex-wrap">
                <span class="w-24 font-medium text-slate-300">Location:</span>
                <span>City of Santa Rosa, Laguna, Philippines</span>
              </li>
              <li class="flex flex-wrap">
                <span class="w-24 font-medium text-slate-300">Email:</span>
                <a href="mailto:im.jericizon@gmail.com" class="text-primary-400 hover:text-primary-300 transition-colors">
                  im.jericizon@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Download CV Button -->
          <div ref="buttonRef" class="animate-item">
            <DownloadCV class="glass-button primary px-6 py-3 rounded-full font-medium inline-flex items-center" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-item-x {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
</style>