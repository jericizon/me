<script setup lang="ts">
import { withBase } from 'ufo';

const config = useRuntimeConfig();
const baseURL = config.app.baseURL || '/';
const withBasePath = (p: string) => withBase(p, baseURL);

const projects = [
  {
    id: 1,
    name: "Expressway PH",
    category: "Custom Platform",
    type: "Web Platform",
    image: "/images/projects/expresswayph.png",
    url: "https://expresswayph.com",
    stack: ["Vue.js", "Laravel", "MySQL"],
    highlight: "Real-time traffic & expressway information platform for Philippine motorists.",
    featured: true,
  },
  {
    id: 2,
    name: "ALAGA Now",
    category: "Custom Web App",
    type: "Healthcare App",
    image: "/images/projects/alaganow.png",
    url: "https://alaganow.pages.dev",
    stack: ["Vue.js", "Supabase", "Node.js"],
    highlight: "Caregiver-patient matching platform with real-time booking and scheduling.",
    featured: true,
  },
  {
    id: 3,
    name: "Bubio AI",
    category: "AI Platform",
    type: "SaaS Product",
    image: "/images/projects/bubio.png",
    url: "https://bubio.ai/",
    stack: ["React", "NestJS", "Supabase", "AWS"],
    highlight: "AI-powered platform with secure backend, RLS policies, and edge functions.",
    featured: true,
  },
  {
    id: 4,
    name: "IMAGINARY ONES",
    category: "Custom Website",
    type: "NFT / Web3",
    image: "/images/projects/imaginaryones.png",
    url: "https://imaginaryones.com",
    stack: ["Nuxt.js", "NestJS", "MariaDB"],
    highlight: "High-traffic NFT brand website with optimized API and media delivery.",
    featured: false,
  },
  {
    id: 5,
    name: "OFFEO",
    category: "SaaS Platform",
    type: "Video Creation Tool",
    image: "/images/projects/offeo.png",
    url: "https://offeo.com",
    stack: ["Vue.js", "Laravel", "FFMPEG", "AWS"],
    highlight: "Online video editor with export pipeline, WebSocket progress, and ElectronJS desktop app.",
    featured: false,
  },
  {
    id: 6,
    name: "Hey Socials",
    category: "WordPress Website",
    type: "Agency Site",
    image: "/images/projects/heysocials.png",
    url: "https://heysocials.co",
    stack: ["WordPress", "PHP", "CSS"],
    highlight: "Custom WordPress theme for a social media marketing agency.",
    featured: false,
  },
  {
    id: 7,
    name: "Lunch On Line",
    category: "E-Commerce",
    type: "Food Ordering Platform",
    image: "/images/projects/lunchonline.png",
    url: "https://lunchonline.us",
    stack: ["Laravel", "Vue.js", "MySQL"],
    highlight: "Full-featured food ordering platform with cart, checkout, and order management.",
    featured: false,
  },
  {
    id: 8,
    name: "Lunch On Line Admin",
    category: "Admin Dashboard",
    type: "Internal Tool",
    image: "/images/projects/lunchonline-admin.png",
    url: "https://lunchonline.us",
    stack: ["Vue.js", "Laravel", "MySQL"],
    highlight: "Custom admin panel for managing menus, orders, and restaurant operations.",
    featured: false,
  },
  {
    id: 9,
    name: "Kreston Menon",
    category: "WordPress Website",
    type: "Corporate Site",
    image: "/images/projects/krestonmenon.png",
    url: "https://krestonmenon.com",
    stack: ["WordPress", "PHP", "Custom Theme"],
    highlight: "Corporate website for a leading UAE accounting and advisory firm.",
    featured: false,
  }
];

const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);
</script>

<template>
  <section id="projects-section" class="py-24 md:py-32 relative overflow-hidden" aria-labelledby="projects-title">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Section header -->
      <div class="mb-16 md:mb-20">
        <p class="eyebrow mb-4 animate-fade-in-up">
          <span class="eyebrow-line"></span>
          Selected Work
        </p>
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 id="projects-title" class="section-title animate-fade-in-up" style="animation-delay: 0.08s">
            Projects that<br/>
            <span class="text-gradient">ship and scale.</span>
          </h2>
          <p class="text-neutral-500 dark:text-neutral-400 max-w-sm text-base leading-relaxed animate-fade-in-up" style="animation-delay: 0.12s">
            A decade of building products across industries — from AI platforms to e-commerce systems.
          </p>
        </div>
      </div>

      <!-- Featured projects — large editorial cards -->
      <div class="space-y-6 mb-8">
        <div
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="group relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 animate-fade-in-up"
          :style="{ animationDelay: `${0.1 + index * 0.08}s` }"
        >
          <div class="grid grid-cols-1 lg:grid-cols-[1fr_420px] min-h-[320px]">
            <!-- Content side -->
            <div class="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 mb-5">
                  <span class="tag tag-primary">{{ project.category }}</span>
                  <span class="text-xs text-neutral-400 dark:text-neutral-600 font-mono">{{ project.type }}</span>
                </div>
                <h3 class="font-display font-bold text-2xl md:text-3xl text-neutral-900 dark:text-white tracking-tight mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {{ project.name }}
                </h3>
                <p class="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed mb-6 max-w-md">
                  {{ project.highlight }}
                </p>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span v-for="tech in project.stack" :key="tech" class="tag tag-neutral">{{ tech }}</span>
                </div>
              </div>
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
                :aria-label="`View ${project.name} (opens in new tab)`"
              >
                <span>View Project</span>
                <Icon name="tabler:arrow-up-right" class="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            <!-- Image side -->
            <div class="relative overflow-hidden lg:rounded-r-2xl min-h-[220px] lg:min-h-0">
              <div
                class="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-700 scale-[1.03] group-hover:scale-110"
                :style="{ backgroundImage: `url(${withBasePath(project.image)})` }"
              ></div>
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 dark:from-neutral-900/20 to-transparent lg:block hidden"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other projects — compact grid -->
      <div class="mb-12">
        <div class="rule-label mb-8">More projects</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <a
            v-for="(project, index) in otherProjects"
            :key="project.id"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
            :style="{ animationDelay: `${0.2 + index * 0.06}s` }"
            :aria-label="`View ${project.name} project (opens in new tab)`"
          >
            <!-- Image -->
            <div class="relative overflow-hidden h-44">
              <div
                class="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-500 scale-[1.04] group-hover:scale-110"
                :style="{ backgroundImage: `url(${withBasePath(project.image)})` }"
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent"></div>
            </div>
            <!-- Content -->
            <div class="p-5">
              <div class="flex items-center justify-between mb-2">
                <span class="tag tag-neutral text-xs">{{ project.category }}</span>
                <Icon name="tabler:arrow-up-right" class="w-4 h-4 text-neutral-400 group-hover:text-primary-500 transition-colors" aria-hidden="true" />
              </div>
              <h3 class="font-display font-bold text-neutral-900 dark:text-white text-base tracking-tight mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ project.name }}
              </h3>
              <p class="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">{{ project.highlight }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>