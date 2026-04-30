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
  <section id="tools-section" class="relative py-24 lg:py-32">
    <div class="relative z-10 px-6 lg:px-16">

      <!-- Section header -->
      <div class="mb-16 lg:mb-24">
        <div class="flex items-center gap-4 mb-6">
          <span class="font-mono text-xs text-coral-500">TECH</span>
          <span class="w-12 h-px bg-coral-500"></span>
          <span class="font-mono text-xs text-light-500 dark:text-base-400 tracking-wider uppercase">Stack</span>
        </div>
        <h2 class="font-display font-bold text-4xl lg:text-6xl text-light-900 dark:text-base-50 leading-tight tracking-tight">
          Tools & technologies
        </h2>
      </div>

      <!-- Category filter -->
      <div class="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filter tools by category">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeFilter = category"
          class="px-4 py-2 text-sm font-medium border transition-all duration-200"
          :class="activeFilter === category
            ? 'bg-coral-500/20 border-coral-500 text-coral-500'
            : 'bg-transparent border-light-300 dark:border-base-600/50 text-light-500 dark:text-base-400 hover:border-light-400 dark:hover:border-base-500 hover:text-light-700 dark:hover:text-base-200'"
          role="tab"
          :aria-selected="activeFilter === category"
          aria-controls="tools-grid"
        >
          {{ category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>

      <!-- Tools grid -->
      <div
        ref="toolsContainerRef"
        id="tools-grid"
        role="tabpanel"
        aria-label="Tools and technologies"
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4 opacity-0 transition-opacity duration-500"
      >
        <div
          v-for="tool in filteredTools"
          :key="tool.name"
          class="group flex flex-col items-center gap-2.5 p-4 border border-light-300 dark:border-base-600/30 hover:border-coral-500/50 hover:bg-surface-light-elevated/30 dark:hover:bg-surface-elevated/30 transition-all duration-200 cursor-default"
        >
          <div class="w-10 h-10 flex items-center justify-center bg-surface-light-elevated dark:bg-surface-elevated group-hover:bg-coral-500/10 transition-colors duration-200">
            <Icon
              :name="tool.icon"
              class="w-6 h-6 text-light-500 dark:text-base-400 group-hover:text-coral-500 transition-colors duration-200"
              aria-hidden="true"
            />
          </div>
          <span class="text-xs font-medium text-light-500 dark:text-base-400 text-center leading-tight group-hover:text-light-700 dark:group-hover:text-base-200 transition-colors duration-200">{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
 