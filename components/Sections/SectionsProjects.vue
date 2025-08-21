<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Project data
const projects = [
  {
    id: 1,
    name: "IMAGINARY ONES",
    category: "Custom Website",
    image: "/images/projects/imaginaryones.png",
    url: "https://imaginaryones.com",
    size: "medium" // medium = 1/3 width on desktop
  },
  {
    id: 2,
    name: "OFFEO",
    category: "Custom Website",
    image: "/images/projects/offeo.png",
    url: "https://offeo.com",
    size: "large" // large = 2/3 width on desktop
  },
  {
    id: 3,
    name: "Hey Socials",
    category: "WordPress Website",
    image: "/images/projects/heysocials.png",
    url: "https://heysocial.co",
    size: "medium-tall" // medium-tall = 1/2 width, taller height
  },
  {
    id: 4,
    name: "Lunch On Line Admin",
    category: "Custom Admin Dashboard",
    image: "/images/projects/lunchonline-admin.png",
    url: "https://lunchonline.us",
    size: "medium-tall" // medium-tall = 1/2 width, taller height
  },
  {
    id: 5,
    name: "Kreston Menon",
    category: "WordPress Website",
    image: "/images/projects/krestonmenon.png",
    url: "https://krestonmenon.com",
    size: "small" // small = 1/3 width, shorter height
  },
  {
    id: 6,
    name: "Lunch On Line",
    category: "Custom E-Commerce",
    image: "/images/projects/lunchonline.png",
    url: "https://lunchonline.us",
    size: "small" // small = 1/3 width, shorter height
  }
];

// Animation refs
const titleRef = ref<HTMLElement | null>(null);
const projectRefs = ref<HTMLElement[]>([]);

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
  <section id="projects-section" class="py-20 md:py-24 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-40 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-40 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div ref="titleRef" class="text-center mb-16 opacity-0 translate-y-3 transition duration-700 ease-out">
        <h2 class="section-title">Projects</h2>
        <div class="section-subtitle">My Recent Work</div>
        <p class="mt-4 max-w-3xl mx-auto text-lg">
          Over a decade in web development, I've crafted a diverse portfolio
          of projects, each designed to innovate and solve specific challenges.
          From dynamic e-commerce platforms to sleek corporate websites, my creations
          blend cutting-edge technology with intuitive design.
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          :ref="el => { if (el) projectRefs[index] = el as HTMLElement }"
          :class="{
            'md:col-span-2': project.size === 'large',
            'md:col-span-1': project.size === 'medium' || project.size === 'small',
            'row-span-2 md:h-[606px]': project.size === 'medium-tall',
            'row-span-1': project.size === 'small'
          }"
          class="relative group overflow-hidden rounded-xl opacity-0 translate-y-8 transition duration-700 ease-out h-[300px]"
        >
          <!-- Project Image -->
          <div 
            class="project-image w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            :style="{ backgroundImage: `url(${project.image})` }"
          ></div>
          
          <!-- Glass Overlay -->
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Project Info -->
          <div class="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div class="backdrop-blur-md p-6 rounded-xl bg-white/20 border border-white/10 shadow-lg">
              <h3 class="text-xl md:text-2xl font-bold mb-2">
                <a :href="project.url" target="_blank" class="hover:text-primary-300 transition-colors flex items-center gap-2">
                  {{ project.name }}
                  <Icon name="tabler:external-link" class="w-5 h-5" />
                </a>
              </h3>
              <p class="text-primary-200">{{ project.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>