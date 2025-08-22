<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';

// No pagination: show all tools

// Tools data with icons
const tools = reactive([
  {
    name: "Laravel",
    icon: "laravel.svg",
    category: "backend"
  },
  {
    name: "Vue.js",
    icon: "vuejs.svg",
    category: "frontend"
  },
  {
    name: "NestJS",
    icon: "nestjs.svg",
    category: "backend"
  },
  {
    name: "Nuxt.js",
    icon: "nuxtjs.svg",
    category: "frontend"
  },
  {
    name: "Docker",
    icon: "docker.svg",
    category: "devops"
  },
  {
    name: "PHP",
    icon: "php.svg",
    category: "backend"
  },
  {
    name: "WordPress",
    icon: "wordpress.svg",
    category: "cms"
  },
  {
    name: "MySQL",
    icon: "mysql.svg",
    category: "database"
  },
  {
    name: "MariaDB",
    icon: "mariadb.svg",
    category: "database"
  },
  {
    name: "Figma",
    icon: "figma.svg",
    category: "design"
  },
  {
    name: "Git",
    icon: "git.svg",
    category: "devops"
  },
  {
    name: "GitHub",
    icon: "github.svg",
    addBg: true,
    category: "devops"
  },
  {
    name: "Bitbucket",
    icon: "bitbucket.svg",
    category: "devops"
  },
  {
    name: "GitLab",
    icon: "gitlab.svg",
    category: "devops"
  },
  {
    name: "AWS Services",
    icon: "aws.svg",
    category: "cloud"
  },
  {
    name: "Terraform",
    icon: "terraform.svg",
    category: "devops"
  },
  {
    name: "Node.js",
    icon: "nodejs.svg",
    category: "backend"
  },
  {
    name: "Strapi",
    icon: "strapi.svg",
    category: "cms"
  },
  {
    name: "NPM",
    icon: "npm.svg",
    addBg: true,
    category: "devops"
  },
  {
    name: "Yarn",
    icon: "yarn.svg",
    addBg: true,
    category: "devops"
  },
  {
    name: "JavaScript",
    icon: "javascript.svg",
    category: "frontend"
  },
  {
    name: "Electron JS",
    icon: "electronjs.svg",
    category: "frontend"
  },
  {
    name: "HTML",
    icon: "html.svg",
    category: "frontend"
  },
  {
    name: "CSS",
    icon: "css.svg",
    category: "frontend"
  },
  {
    name: "SCSS",
    icon: "scss.svg",
    addBg: true,
    category: "frontend"
  },
  {
    name: "Express JS",
    icon: "expressjs.svg",
    addBg: true,
    category: "backend"
  },
  {
    name: "Redis",
    icon: "redis.svg",
    addBg: true,
    category: "database"
  },
  {
    name: "JSON",
    icon: "json.svg",
    addBg: true,
    category: "frontend"
  },
]);

// No remaining tools computation needed

// Animation refs (container/title only)
const titleRef = ref<HTMLElement | null>(null);
const toolsContainerRef = ref<HTMLElement | null>(null);

// Filter state
const activeFilter = ref('all');
const categories = computed(() => {
  const uniqueCategories = new Set(tools.map(tool => tool.category));
  return ['all', ...Array.from(uniqueCategories)];
});

// Filtered tools based on active category
const filteredTools = computed(() => {
  if (activeFilter.value === 'all') {
    return tools;
  }
  return tools.filter(tool => tool.category === activeFilter.value);
});


// Initialize animations
onMounted(() => {
  // Animate title
  setTimeout(() => {
    if (titleRef.value) {
      titleRef.value.style.opacity = '1';
      titleRef.value.style.transform = 'translateY(0)';
    }
  }, 200);
  
  // Animate tools container
  setTimeout(() => {
    if (toolsContainerRef.value) {
      toolsContainerRef.value.style.opacity = '1';
    }
  }, 400);
  
  // Removed per-item animations to avoid conflicts on filter changes
});
</script>

<template>
  <section id="tools-section" class="py-20 md:py-24 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div ref="titleRef" class="text-center mb-16 opacity-0 translate-y-3 transition duration-700 ease-out">
        <h2 class="section-title">Tools & Technologies</h2>
        <div class="section-subtitle">My Technical Arsenal</div>
        <p class="mt-4 max-w-2xl mx-auto text-lg">
          Throughout my decade-long journey as a web developer, I've honed my
          skills using a diverse array of tools, empowering me to design,
          develop, and deploy robust and user-friendly web applications.
        </p>
      </div>
      
      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeFilter = category"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 border border-white/10 backdrop-blur-md hover:scale-105"
          :class="{
            'bg-primary-500/20 border-primary-500/30 scale-105': activeFilter === category
          }"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>
      
      <!-- Tools Grid -->
      <div 
        ref="toolsContainerRef"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 opacity-0 transition-opacity duration-700"
      >
        <div 
          v-for="tool in filteredTools" 
          :key="tool.name"
          class="transition duration-300 ease-out"
        >
          <div class="h-full flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105 bg-white/10 border border-white/10 shadow-md backdrop-blur-md rounded-xl">
            <div class="mb-3 p-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <img 
                :src="`/icons/${tool.icon}`" 
                :alt="tool.name"
                :class="{ 'bg-white rounded': tool.addBg || false }"
                class="w-12 h-12 object-contain"
              />
            </div>
            <h3 class="text-sm font-medium">{{ tool.name }}</h3>
          </div>
        </div>
      </div>
      
      
    </div>
  </section>
</template>
 