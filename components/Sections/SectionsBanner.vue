<script setup lang="ts">
// Define refs for animation elements with proper typing
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)

// Apply animations when component is mounted
onMounted(() => {
  // Use setTimeout to create staggered animations
  setTimeout(() => {
    if (titleRef.value) {
      titleRef.value.style.opacity = '1'
      titleRef.value.style.transform = 'translateY(0)'
    }
  }, 200)
  
  setTimeout(() => {
    if (subtitleRef.value) {
      subtitleRef.value.style.opacity = '1'
      subtitleRef.value.style.transform = 'translateY(0)'
    }
  }, 400)
  
  setTimeout(() => {
    if (ctaRef.value) {
      ctaRef.value.style.opacity = '1'
      ctaRef.value.style.transform = 'translateY(0)'
    }
  }, 600)
  
  setTimeout(() => {
    if (imageRef.value) {
      imageRef.value.style.opacity = '1'
      imageRef.value.style.transform = 'scale(1)'
    }
  }, 200)
})
</script>

<template>
  <section id="home-section" class="min-h-screen flex items-center py-20 md:py-0">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="order-2 md:order-1 pt-8 md:pt-0">
          <!-- Glass Card for Text -->
          <div class="glass-card p-8 md:p-10 backdrop-blur-md">
            <!-- Greeting -->
            <div ref="titleRef" class="overflow-hidden animate-item">
              <span class="text-primary-300 font-medium text-lg md:text-xl mb-4 block">Hello!</span>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
                I'm <span class="text-primary-400">Jeric Izon</span>
              </h1>
            </div>
            
            <!-- Role -->
            <div ref="subtitleRef" class="overflow-hidden animate-item">
              <h2 class="text-xl md:text-2xl text-slate-300 mb-8">
                A Full Stack Web Developer
              </h2>
            </div>
            
            <!-- CTA Buttons -->
            <div ref="ctaRef" class="flex flex-wrap gap-4 animate-item">
              <a
                href="mailto:im.jericizon@gmail.com?subject=Hiring%20Full%20stack%20developer%20ref(portfolio)"
                class="glass-button primary px-6 py-3 rounded-full font-medium"
              >
                Hire me
              </a>
              <a
                href="#projects-section"
                class="glass-button px-6 py-3 rounded-full font-medium"
              >
                My works
              </a>
            </div>
          </div>
        </div>
        
        <!-- Image -->
        <div class="order-1 md:order-2 relative">
          <div ref="imageRef" class="relative animate-item">
            <!-- Glass frame for image -->
            <div class="glass-card p-2 md:p-3 overflow-hidden rounded-2xl shadow-glass-lg">
              <div class="relative rounded-xl overflow-hidden aspect-square">
                <img 
                  src="/images/banner.png" 
                  alt="Jeric Izon - Full Stack Web Developer" 
                  class="w-full h-full object-cover"
                />
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -bottom-4 -right-4 h-24 w-24 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div class="absolute -top-4 -left-4 h-16 w-16 bg-cyan-500/20 rounded-full blur-lg animate-float"></div>
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

[ref="imageRef"] {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 1s ease, transform 1s ease;
}
</style>