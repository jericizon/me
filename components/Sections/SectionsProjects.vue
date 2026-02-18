<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { withBase } from 'ufo'

// Rich project data with case study details
const projects = [
  {
    id: 1,
    name: "Expressway PH",
    tagline: "High-performance logistics platform for expressway toll management",
    category: "Custom Platform",
    image: "/images/projects/expresswayph.png",
    url: "https://expresswayph.com",
    year: "2024",
    role: "Full Stack Developer",
    description: "Designed and developed a comprehensive toll management system serving thousands of daily users. Implemented real-time transaction processing and analytics dashboard.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
    highlights: ["50% faster processing", "99.9% uptime", "Real-time analytics"]
  },
  {
    id: 2,
    name: "Bubio AI",
    tagline: "AI-powered content generation platform for creators",
    category: "AI Platform",
    image: "/images/projects/bubio.png",
    url: "https://bubio.ai/",
    year: "2025",
    role: "Senior Backend Developer",
    description: "Led backend development for an AI content platform handling millions of API requests. Architected scalable microservices infrastructure with NestJS and Supabase.",
    technologies: ["NestJS", "Supabase", "React", "Docker"],
    highlights: ["2M+ API calls/day", "40% latency reduction", "99.5% accuracy"]
  },
  {
    id: 3,
    name: "IMAGINARY ONES",
    tagline: "Web3 brand platform for NFT collection and community",
    category: "Custom Website",
    image: "/images/projects/imaginaryones.png",
    url: "https://imaginaryones.com",
    year: "2023",
    role: "Senior Backend Developer",
    description: "Built robust backend systems supporting high-traffic NFT drops and community features. Implemented secure wallet integration and blockchain data synchronization.",
    technologies: ["NestJS", "Vue.js", "MySQL", "AWS Lambda"],
    highlights: ["100K+ users", "Secure wallet integration", "Sub-second response"]
  },
  {
    id: 4,
    name: "OFFEO",
    tagline: "Video creation platform empowering marketers worldwide",
    category: "SaaS Platform",
    image: "/images/projects/offeo.png",
    url: "https://offeo.com",
    year: "2018-2023",
    role: "Senior Full Stack Developer",
    description: "Core developer for a video creation SaaS used by Fortune 500 companies. Built rendering infrastructure processing millions of videos monthly with FFmpeg and Node.js.",
    technologies: ["Laravel", "Vue.js", "Node.js", "FFmpeg", "AWS"],
    highlights: ["5 years tenure", "1M+ videos rendered", "Enterprise clients"]
  },
  {
    id: 5,
    name: "ALAGA Now",
    tagline: "Healthcare coordination platform for Filipino families",
    category: "Healthcare App",
    image: "/images/projects/alaganow.png",
    url: "https://alaganow.pages.dev",
    year: "2024",
    role: "Full Stack Developer",
    description: "Developed a healthcare management platform connecting families with medical services. Features include appointment booking, health records, and real-time notifications.",
    technologies: ["Nuxt.js", "Supabase", "TailwindCSS"],
    highlights: ["HIPAA-compliant", "Real-time sync", "Mobile-first"]
  },
  {
    id: 6,
    name: "Lunch On Line",
    tagline: "E-commerce platform revolutionizing corporate meal ordering",
    category: "E-Commerce",
    image: "/images/projects/lunchonline.png",
    url: "https://lunchonline.us",
    year: "2023",
    role: "Full Stack Developer",
    description: "Created a comprehensive food ordering platform with real-time kitchen integration, inventory management, and enterprise ordering workflows.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
    highlights: ["Enterprise workflows", "Kitchen integration", "Real-time orders"]
  }
]

const config = useRuntimeConfig()
const baseURL = config.app.baseURL || '/'
const withBasePath = (p: string) => withBase(p, baseURL)

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const expandedProject = ref<number | null>(1)

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
    { threshold: 0.1 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const toggleExpand = (id: number) => {
  expandedProject.value = expandedProject.value === id ? null : id
}
</script>

<template>
  <section 
    ref="sectionRef"
    id="projects-section" 
    class="relative py-24 lg:py-32 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Section header -->
      <div 
        class="max-w-3xl mb-16 transition-all duration-1000"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <span class="section-label">Selected Work</span>
        <h2 class="section-title mb-6">
          Case studies in<br />
          <span class="gradient-text-gold">digital craftsmanship</span>
        </h2>
        <p class="text-xl text-text-secondary leading-relaxed">
          Each project represents a unique challenge solved through strategic thinking, 
          technical expertise, and collaborative execution.
        </p>
      </div>

      <!-- Featured project (first one expanded by default) -->
      <div 
        class="mb-8 transition-all duration-1000 delay-200"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <div 
          v-for="project in projects.slice(0, 1)" 
          :key="project.id"
          class="card overflow-hidden group cursor-pointer"
          @click="toggleExpand(project.id)"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Image -->
            <div class="relative aspect-video lg:aspect-auto lg:min-h-[500px] overflow-hidden">
              <img 
                :src="withBasePath(project.image)"
                :alt="project.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent lg:bg-gradient-to-r"></div>
              
              <!-- Year badge -->
              <div class="absolute top-6 left-6 tag tag-gold">
                {{ project.year }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-sm text-accent-gold font-medium">{{ project.category }}</span>
                <span class="w-1 h-1 rounded-full bg-text-muted"></span>
                <span class="text-sm text-text-tertiary">{{ project.role }}</span>
              </div>

              <h3 class="font-display text-3xl lg:text-4xl font-semibold text-text-primary mb-4">
                {{ project.name }}
              </h3>

              <p class="text-lg text-text-secondary mb-6">
                {{ project.tagline }}
              </p>

              <p class="text-text-tertiary leading-relaxed mb-8">
                {{ project.description }}
              </p>

              <!-- Highlights -->
              <div class="flex flex-wrap gap-3 mb-8">
                <div 
                  v-for="highlight in project.highlights" 
                  :key="highlight"
                  class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-higher border border-border"
                >
                  <Icon name="tabler:check" class="w-4 h-4 text-accent-teal" />
                  <span class="text-sm text-text-secondary">{{ highlight }}</span>
                </div>
              </div>

              <!-- Tech stack -->
              <div class="flex flex-wrap gap-2 mb-8">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tag"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- CTA -->
              <a 
                :href="project.url"
                target="_blank"
                rel="noopener"
                class="btn btn-primary inline-flex w-fit"
                @click.stop
              >
                <span>Visit site</span>
                <Icon name="tabler:external-link" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Project grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <div 
          v-for="(project, index) in projects.slice(1)" 
          :key="project.id"
          class="card overflow-hidden group cursor-pointer"
          :class="{ 'lg:col-span-2': index === 1 }"
          @click="toggleExpand(project.id)"
        >
          <!-- Image -->
          <div class="relative aspect-[16/10] overflow-hidden">
            <img 
              :src="withBasePath(project.image)"
              :alt="project.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
            
            <!-- Overlay content -->
            <div class="absolute inset-0 p-6 flex flex-col justify-between">
              <div class="flex justify-between items-start">
                <span class="tag tag-gold">{{ project.year }}</span>
                <a 
                  :href="project.url"
                  target="_blank"
                  rel="noopener"
                  class="w-10 h-10 rounded-full bg-surface-elevated/80 backdrop-blur-sm flex items-center justify-center text-text-primary hover:bg-accent-gold hover:text-dark transition-colors"
                  @click.stop
                >
                  <Icon name="tabler:external-link" class="w-5 h-5" />
                </a>
              </div>

              <div>
                <span class="text-sm text-accent-gold font-medium mb-2 block">{{ project.category }}</span>
                <h3 class="font-display text-2xl font-semibold text-text-primary mb-2">
                  {{ project.name }}
                </h3>
                <p class="text-text-secondary text-sm line-clamp-2">
                  {{ project.tagline }}
                </p>
              </div>
            </div>
          </div>

          <!-- Expanded content -->
          <div 
            class="overflow-hidden transition-all duration-500"
            :class="expandedProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="p-6 border-t border-border">
              <p class="text-text-tertiary text-sm mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="tag text-xs"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View all CTA -->
      <div 
        class="mt-16 text-center transition-all duration-1000 delay-600"
        :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
      >
        <p class="text-text-tertiary mb-4">These are just a few highlights</p>
        <a 
          href="https://github.com/jericizon"
          target="_blank"
          rel="noopener"
          class="btn btn-secondary"
        >
          <Icon name="tabler:brand-github" class="w-5 h-5" />
          <span>Explore more on GitHub</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>