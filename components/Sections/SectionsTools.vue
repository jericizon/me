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
  <section id="tools-section" class="py-24 md:py-32 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div ref="titleRef" class="text-center mb-16 opacity-0 translate-y-3 transition duration-700 ease-out">
        <div class="inline-flex items-center gap-2 glass-badge mb-6">
          <Icon name="tabler:tools" class="w-4 h-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
          <span class="text-sm font-medium">Tech Stack</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
          Tools & <span class="text-gradient">Technologies</span>
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
          Throughout my decade-long journey as a web developer, I've honed my
          skills using a diverse array of tools, empowering me to design,
          develop, and deploy robust and user-friendly web applications.
        </p>
      </div>
      
      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter tools by category">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeFilter = category"
          class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300"
          :class="[
            activeFilter === category
              ? 'bg-primary-500 text-white shadow-glow-primary'
              : 'glass-card-subtle text-neutral-700 dark:text-neutral-300 hover:bg-white/80 dark:hover:bg-neutral-800/80'
          ]"
          role="tab"
          :aria-selected="activeFilter === category"
          :aria-controls="'tools-grid'"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>
      
      <!-- Tools Grid -->
      <div 
        ref="toolsContainerRef"
        id="tools-grid"
        role="tabpanel"
        aria-label="Tools and technologies grid"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 opacity-0 transition-opacity duration-700"
      >
        <div 
          v-for="tool in filteredTools" 
          :key="tool.name"
          class="transition duration-300 ease-out"
        >
          <div class="glass-card h-full flex flex-col items-center justify-center p-5 text-center hover:scale-105 rounded-2xl group">
            <div class="mb-3 p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 border border-white/10 dark:border-white/5 flex items-center justify-center group-hover:shadow-glow-primary transition-shadow duration-300">
              <Icon
                :name="tool.icon"
                class="w-7 h-7 md:w-8 md:h-8 text-primary-600 dark:text-primary-400"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-sm font-medium text-neutral-800 dark:text-neutral-200">{{ tool.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 