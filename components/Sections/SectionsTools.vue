<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';

// No pagination: show all tools

// Tools data with icon names for the global Icon component (Iconify)
const tools = reactive([
  {
    name: "Laravel",
    icon: "simple-icons:laravel",
    category: "backend"
  },
  {
    name: "Vue.js",
    icon: "simple-icons:vuedotjs",
    category: "frontend"
  },
  {
    name: "NestJS",
    icon: "simple-icons:nestjs",
    category: "backend"
  },
  {
    name: "Nuxt.js",
    icon: "simple-icons:nuxtdotjs",
    category: "frontend"
  },
  {
    name: "Docker",
    icon: "simple-icons:docker",
    category: "devops"
  },
  {
    name: "PHP",
    icon: "simple-icons:php",
    category: "backend"
  },
  {
    name: "WordPress",
    icon: "simple-icons:wordpress",
    category: "cms"
  },
  {
    name: "MySQL",
    icon: "simple-icons:mysql",
    category: "database"
  },
  {
    name: "MariaDB",
    icon: "simple-icons:mariadb",
    category: "database"
  },
  {
    name: "Figma",
    icon: "simple-icons:figma",
    category: "design"
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    category: "devops"
  },
  {
    name: "GitHub",
    icon: "simple-icons:github",
    addBg: true,
    category: "devops"
  },
  {
    name: "Bitbucket",
    icon: "simple-icons:bitbucket",
    category: "devops"
  },
  {
    name: "GitLab",
    icon: "simple-icons:gitlab",
    category: "devops"
  },
  {
    name: "AWS Services",
    icon: "simple-icons:amazonaws",
    category: "cloud"
  },
  {
    name: "Terraform",
    icon: "simple-icons:terraform",
    category: "devops"
  },
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
    category: "backend"
  },
  {
    name: "Strapi",
    icon: "simple-icons:strapi",
    category: "cms"
  },
  {
    name: "NPM",
    icon: "simple-icons:npm",
    addBg: true,
    category: "devops"
  },
  {
    name: "Yarn",
    icon: "simple-icons:yarn",
    addBg: true,
    category: "devops"
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    category: "frontend"
  },
  {
    name: "Electron JS",
    icon: "simple-icons:electron",
    category: "frontend"
  },
  {
    name: "HTML",
    icon: "simple-icons:html5",
    category: "frontend"
  },
  {
    name: "CSS",
    icon: "simple-icons:css3",
    category: "frontend"
  },
  {
    name: "SCSS",
    icon: "simple-icons:sass",
    addBg: true,
    category: "frontend"
  },
  {
    name: "Express JS",
    icon: "simple-icons:express",
    addBg: true,
    category: "backend"
  },
  {
    name: "Redis",
    icon: "simple-icons:redis",
    addBg: true,
    category: "database"
  },
  {
    name: "JSON",
    icon: "mdi:code-json",
    addBg: true,
    category: "frontend"
  },
  {
    name: "OpenAI",
    icon: "simple-icons:openai",
    category: "ai"
  },
  {
    name: "Claude Code",
    icon: "simple-icons:anthropic",
    category: "ai"
  },
  {
    name: "Gemini",
    icon: "logos:google-gemini",
    category: "ai"
  },
  {
    name: "Supabase",
    icon: "simple-icons:supabase",
    category: "database"
  },
  {
    name: "ReactJS",
    icon: "simple-icons:react",
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
          class="btn btn-outline btn-sm text-secondary-900"
          :class="{
            'bg-primary-500/20 border-primary-500/30': activeFilter === category
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
            <div class="mb-3 p-3 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
              <Icon
                :name="tool.icon"
                class="w-7 h-7 md:w-8 md:h-8 text-primary-600"
              />
            </div>
            <h3 class="text-sm font-medium">{{ tool.name }}</h3>
          </div>
        </div>
      </div>
      
      
    </div>
  </section>
</template>
 