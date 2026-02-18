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
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Section header -->
      <div class="mb-14 md:mb-16">
        <p class="eyebrow mb-4 animate-fade-in-up">
          <span class="eyebrow-line"></span>
          Tech Stack
        </p>
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 class="section-title animate-fade-in-up" style="animation-delay: 0.08s">
            Tools &amp; <span class="text-gradient">technologies.</span>
          </h2>
          <p class="text-neutral-500 dark:text-neutral-400 max-w-xs text-sm leading-relaxed animate-fade-in-up" style="animation-delay: 0.12s">
            A decade of hands-on experience across the full stack — from UI to infrastructure.
          </p>
        </div>
      </div>

      <!-- Category filter pills -->
      <div class="flex flex-wrap gap-2 mb-10 animate-fade-in-up" style="animation-delay: 0.14s" role="tablist" aria-label="Filter tools by category">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeFilter = category"
          class="px-4 py-1.5 text-sm font-medium rounded-full border transition-all duration-200"
          :class="activeFilter === category
            ? 'bg-primary-600 border-primary-600 text-white shadow-glow-primary'
            : 'bg-transparent border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white'"
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
          class="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 hover:border-primary-300 dark:hover:border-primary-700/50 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 cursor-default"
        >
          <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-50 dark:bg-neutral-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-950/40 transition-colors duration-200">
            <Icon
              :name="tool.icon"
              class="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"
              aria-hidden="true"
            />
          </div>
          <span class="text-xs font-medium text-neutral-600 dark:text-neutral-400 text-center leading-tight group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-200">{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
 