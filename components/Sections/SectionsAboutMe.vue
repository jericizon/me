<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useContactForm } from '@/composables/useContactForm'

const { openContactForm } = useContactForm()
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

// Calculate age dynamically
const myAge = computed(() => {
  const birthDate = new Date("2013-11-01")
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
})
</script>

<template>
  <section 
    ref="sectionRef"
    id="about-section" 
    class="relative py-24 lg:py-32 overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Section header -->
      <div 
        class="max-w-3xl mb-20 transition-all duration-1000"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <span class="section-label">About Me</span>
        <h2 class="section-title mb-6">
          Developer by day,<br />
          <span class="gradient-text-gold">problem solver</span> by nature
        </h2>
        <p class="text-xl text-text-secondary leading-relaxed">
          I don't just write code—I craft solutions that balance technical excellence 
          with human-centered design. Every project is an opportunity to create something meaningful.
        </p>
      </div>

      <!-- Asymmetric grid layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <!-- Left column - Large statement -->
        <div 
          class="lg:col-span-5 space-y-8 transition-all duration-1000 delay-200"
          :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        >
          <div class="card p-8 lg:p-10 h-full flex flex-col">
            <div class="flex-1">
              <p class="font-editorial text-2xl lg:text-3xl text-text-primary leading-relaxed mb-8">
                "Started coding {{ myAge }} years ago, and I've been hooked ever since. 
                What began as curiosity has evolved into a passion for building 
                <span class="text-accent-gold">digital experiences</span> that matter."
              </p>
            </div>
            
            <div class="pt-8 border-t border-border">
              <div class="flex items-center gap-4">
                <img 
                  src="/images/about.jpg" 
                  alt="Jeric Izon" 
                  class="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <div class="font-medium text-text-primary">Jeric Izon</div>
                  <div class="text-sm text-text-tertiary">Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column - Skills & approach -->
        <div class="lg:col-span-7 space-y-8">
          <!-- Philosophy cards -->
          <div 
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-300"
            :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          >
            <div class="card p-6 group hover:border-accent-gold/30 transition-colors">
              <div class="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="tabler:bulb" class="w-6 h-6 text-accent-gold" />
              </div>
              <h3 class="font-medium text-text-primary mb-2">Innovation First</h3>
              <p class="text-sm text-text-tertiary">
                I stay ahead of the curve, adopting new technologies that genuinely improve outcomes.
              </p>
            </div>

            <div class="card p-6 group hover:border-accent-violet/30 transition-colors">
              <div class="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="tabler:users" class="w-6 h-6 text-accent-violet" />
              </div>
              <h3 class="font-medium text-text-primary mb-2">User-Centered</h3>
              <p class="text-sm text-text-tertiary">
                Every line of code serves the people who will use the final product.
              </p>
            </div>

            <div class="card p-6 group hover:border-accent-teal/30 transition-colors">
              <div class="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="tabler:rocket" class="w-6 h-6 text-accent-teal" />
              </div>
              <h3 class="font-medium text-text-primary mb-2">Performance</h3>
              <p class="text-sm text-text-tertiary">
                Fast, optimized applications that deliver exceptional user experiences.
              </p>
            </div>

            <div class="card p-6 group hover:border-accent-rose/30 transition-colors">
              <div class="w-12 h-12 rounded-xl bg-accent-rose/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="tabler:shield-check" class="w-6 h-6 text-accent-rose" />
              </div>
              <h3 class="font-medium text-text-primary mb-2">Reliability</h3>
              <p class="text-sm text-text-tertiary">
                Clean, maintainable code built to scale and stand the test of time.
              </p>
            </div>
          </div>

          <!-- Tech expertise -->
          <div 
            class="card p-8 transition-all duration-1000 delay-400"
            :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          >
            <h3 class="font-medium text-text-primary mb-6">Technical Expertise</h3>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="tag tag-gold">Vue.js / Nuxt.js</span>
              <span class="tag tag-violet">React / Next.js</span>
              <span class="tag">Node.js</span>
              <span class="tag tag-violet">TypeScript</span>
              <span class="tag">PHP / Laravel</span>
              <span class="tag tag-gold">Supabase</span>
              <span class="tag tag-teal">AWS</span>
              <span class="tag">Docker</span>
              <span class="tag tag-violet">PostgreSQL</span>
            </div>

            <p class="text-text-tertiary text-sm">
              My stack is always evolving, but my commitment to quality remains constant. 
              I choose the right tools for each unique challenge.
            </p>
          </div>

          <!-- CTA -->
          <div 
            class="flex flex-wrap gap-4 transition-all duration-1000 delay-500"
            :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          >
            <button 
              @click="openContactForm"
              class="btn btn-primary"
            >
              <Icon name="tabler:message" class="w-5 h-5" />
              <span>Let's collaborate</span>
            </button>
            <a href="#resume-section" class="btn btn-secondary">
              <Icon name="tabler:file-text" class="w-5 h-5" />
              <span>View experience</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>