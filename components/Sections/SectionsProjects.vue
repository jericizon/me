<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { withBase } from 'ufo';

// Project data
const projects = [
  {
    id: 1,
    name: "Expressway PH",
    category: "Custom Platform",
    image: "/images/projects/expresswayph.png",
    url: "https://expresswayph.com"
  },
  {
    id: 2,
    name: "ALAGA Now",
    category: "Custom Web App",
    image: "/images/projects/alaganow.png",
    url: "https://alaganow.pages.dev"
  },
  {
    id: 3,
    name: "Bubio AI",
    category: "AI Platform",
    image: "/images/projects/bubio.png",
    url: "https://bubio.ai/"
  },
  {
    id: 4,
    name: "IMAGINARY ONES",
    category: "Custom Website",
    image: "/images/projects/imaginaryones.png",
    url: "https://imaginaryones.com"
  },
  {
    id: 5,
    name: "OFFEO",
    category: "Custom Website",
    image: "/images/projects/offeo.png",
    url: "https://offeo.com"
  },
  {
    id: 6,
    name: "Hey Socials",
    category: "WordPress Website",
    image: "/images/projects/heysocials.png",
    url: "https://heysocials.co"
  },
  {
    id: 7,
    name: "Lunch On Line",
    category: "Custom E-Commerce",
    image: "/images/projects/lunchonline.png",
    url: "https://lunchonline.us"
  },
  {
    id: 8,
    name: "Lunch On Line Admin",
    category: "Custom Admin Dashboard",
    image: "/images/projects/lunchonline-admin.png",
    url: "https://lunchonline.us"
  },
  {
    id: 9,
    name: "Kreston Menon",
    category: "WordPress Website",
    image: "/images/projects/krestonmenon.png",
    url: "https://krestonmenon.com"
  }
];

// Animation refs
const titleRef = ref<HTMLElement | null>(null);
const projectRefs = ref<HTMLElement[]>([]);

// Base-aware asset helper
const config = useRuntimeConfig();
const baseURL = config.app.baseURL || '/';
const withBasePath = (p: string) => withBase(p, baseURL);

// Initialize animations
onMounted(() => {
  // Animate title
  setTimeout(() => {
    if (titleRef.value) {
      titleRef.value.style.opacity = '1';
      titleRef.value.style.transform = 'translateY(0)';
    }
  }, 200);
  
  // Animate project cards with staggered delay
  projectRefs.value.forEach((el, index) => {
    setTimeout(() => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    }, 500 + (index * 150));
  });
});
</script>

<template>
  <section id="projects-section" class="py-20 md:py-24 relative overflow-hidden" aria-labelledby="projects-title">
    <!-- Decorative elements -->
    <div class="absolute top-40 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
    <div class="absolute bottom-40 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div ref="titleRef" class="text-center mb-16 opacity-0 translate-y-3 transition duration-700 ease-out">
        <h2 id="projects-title" class="section-title">Projects</h2>
        <div class="section-subtitle">My Recent Work</div>
        <p class="mt-4 max-w-3xl mx-auto text-lg">
          Over a decade in web development, I've crafted a diverse portfolio
          of projects, each designed to innovate and solve specific challenges.
          From dynamic e-commerce platforms to sleek corporate websites, my creations
          blend cutting-edge technology with intuitive design.
        </p>
      </div>
      
      <!-- Projects Grid - Clean 3-column layout -->
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Portfolio projects">
        <li 
          v-for="(project, index) in projects" 
          :key="project.id"
          :ref="el => { if (el) projectRefs[index] = el as HTMLElement }"
          class="relative group overflow-hidden rounded-2xl opacity-0 translate-y-8 transition duration-700 ease-out h-[260px] sm:h-[280px] lg:h-[320px] bg-dark-800"
        >
          <!-- Project Image -->
          <div 
            class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 scale-110 group-hover:scale-125"
            :style="{ backgroundImage: `url(${withBasePath(project.image)})` }"
          ></div>
          
          <!-- Gradient Overlay - stronger for better text contrast -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500"></div>
          
          <!-- Project Info -->
          <div class="absolute inset-0 flex flex-col justify-end p-5">
            <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span class="inline-block px-3 py-1 text-xs font-semibold bg-primary-500/30 text-primary-200 rounded-full mb-3 backdrop-blur-md border border-primary-400/40 shadow-lg">
                {{ project.category }}
              </span>
              <h3 class="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {{ project.name }}
              </h3>
              <a 
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm text-primary-300 hover:text-primary-200 transition-colors opacity-0 group-hover:opacity-100 duration-500"
                :aria-label="`View ${project.name} project (opens in new tab)`"
              >
                View Project
                <Icon name="tabler:arrow-up-right" class="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>