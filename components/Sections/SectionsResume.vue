<script setup lang="ts">
import { ref, onMounted } from 'vue'

const experiences = [
  {
    id: 1,
    company: "BUBIO",
    location: "Singapore",
    position: "Senior Backend Developer",
    start: "Apr 2025",
    end: "Present",
    description: "Responsible for database security, REST API backend development, and admin dashboard features. Implemented Supabase Edge Functions for backend processes and configured Row Level Security (RLS) policies.",
    technologies: ["Supabase", "NestJS", "React", "PostgreSQL", "AWS"],
    type: "primary"
  },
  {
    id: 2,
    company: "IMAGINARY ONES",
    location: "Singapore",
    position: "Senior Backend Developer",
    start: "Dec 2023",
    end: "Apr 2025",
    duration: "1 yr 5 mos",
    description: "Created REST APIs using NestJS and optimized backend queries for faster frontend-database communication. Architected scalable infrastructure for Web3 applications.",
    technologies: ["NestJS", "Vue.js", "MySQL", "AWS Lambda", "Docker"],
    type: "secondary"
  },
  {
    id: 3,
    company: "OFFEO",
    location: "Singapore",
    position: "Senior Full Stack Developer",
    start: "Apr 2018",
    end: "Dec 2023",
    duration: "5 yrs 9 mos",
    description: "Core developer for video creation SaaS platform. Built rendering infrastructure processing millions of videos monthly. Managed AWS infrastructure, conducted code reviews, and led frontend development.",
    technologies: ["Laravel", "Vue.js", "Node.js", "FFmpeg", "AWS", "Electron"],
    type: "primary"
  },
  {
    id: 4,
    company: "Skubbs Inc.",
    location: "Philippines",
    position: "Senior Developer / Team Lead",
    start: "Jan 2016",
    end: "Mar 2018",
    duration: "2 yrs 3 mos",
    description: "Led a team developing custom web applications for diverse clients. Managed project requirements gathering, task delegation, and maintained balanced workloads across team members.",
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
    type: "secondary"
  },
  {
    id: 5,
    company: "Open Access BPO",
    location: "Philippines",
    position: "Web Developer",
    start: "May 2014",
    end: "Jan 2016",
    duration: "1 yr 9 mos",
    description: "Primary overseer of internal WordPress websites. Collaborated with CTO to enhance functionality and optimize as marketing assets. Created custom WordPress templates and plugins.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Photoshop"],
    type: "secondary"
  },
  {
    id: 6,
    company: "AGR Operations Manila",
    location: "Philippines",
    position: "Web Developer",
    start: "Nov 2013",
    end: "Apr 2014",
    duration: "6 mos",
    description: "Designed website layouts using Photoshop and translated visual concepts into functional websites using WordPress and custom PHP development.",
    technologies: ["WordPress", "PHP", "MySQL", "Photoshop", "HTML/CSS"],
    type: "secondary"
  }
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const expandedId = ref<number | null>(null)

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
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<template>
  <section 
    ref="sectionRef"
    id="resume-section" 
    class="relative py-24 lg:py-32 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Section header -->
      <div 
        class="max-w-3xl mb-16 transition-all duration-1000"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <span class="section-label">Experience</span>
        <h2 class="section-title mb-6">
          A decade of<br />
          <span class="gradient-text-gold">building & leading</span>
        </h2>
        <p class="text-xl text-text-secondary leading-relaxed">
          From startups to enterprise, I've delivered solutions that scale. 
          Each role has shaped my approach to crafting exceptional digital experiences.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-gold via-accent-violet to-accent-teal opacity-30"></div>

        <!-- Experience items -->
        <div class="space-y-8">
          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.id"
            class="relative pl-12 md:pl-16 transition-all duration-700"
            :class="{ 
              'opacity-0 translate-x-[-20px]': !isVisible, 
              'opacity-100 translate-x-0': isVisible 
            }"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Timeline dot -->
            <div 
              class="absolute left-0 top-2 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center"
              :class="exp.type === 'primary' 
                ? 'border-accent-gold bg-accent-gold/20' 
                : 'border-accent-violet bg-accent-violet/20'"
            >
              <div 
                class="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                :class="exp.type === 'primary' ? 'bg-accent-gold' : 'bg-accent-violet'"
              ></div>
            </div>

            <!-- Content card -->
            <div class="card p-6 md:p-8 group cursor-pointer" @click="toggleExpand(exp.id)">
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="font-display text-xl md:text-2xl font-semibold text-text-primary">
                      {{ exp.company }}
                    </h3>
                    <span class="text-sm text-text-tertiary">{{ exp.location }}</span>
                  </div>
                  <p class="text-accent-gold font-medium">{{ exp.position }}</p>
                </div>
                
                <div class="flex items-center gap-3">
                  <span class="text-sm text-text-tertiary font-mono">
                    {{ exp.start }} — {{ exp.end }}
                  </span>
                  <span v-if="exp.duration" class="tag text-xs">
                    {{ exp.duration }}
                  </span>
                </div>
              </div>

              <!-- Description - always visible -->
              <p class="text-text-secondary leading-relaxed mb-4">
                {{ exp.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="tag text-xs"
                  :class="exp.type === 'primary' ? 'tag-gold' : 'tag-violet'"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Download CV CTA -->
      <div 
        class="mt-16 flex flex-wrap gap-4 transition-all duration-1000"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        style="transition-delay: 600ms"
      >
        <DownloadCV />
        <a href="#contact-section" class="btn btn-secondary">
          <Icon name="tabler:message" class="w-5 h-5" />
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  </section>
</template>