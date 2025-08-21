<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';

// Initial number of tools to show
const maxShow = ref(12);

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

// Compute remaining tools count
const moreTools = computed(() => {
  return tools.length - maxShow.value;
});

// Animation refs
const titleRef = ref<HTMLElement | null>(null);
const toolsContainerRef = ref<HTMLElement | null>(null);
const toolRefs = ref<HTMLElement[]>([]);

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

// Show all tools
const showAllTools = () => {
  maxShow.value = tools.length;
};

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
  
  // Animate tool cards with staggered delay
  toolRefs.value.forEach((el, index) => {
    setTimeout(() => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      }
    }, 600 + (index * 100));
  });
});
</script>

<template>
  <section id="tools-section" class="py-20 md:py-24 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div ref="titleRef" class="text-center mb-16 animate-item">
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
          class="glass-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="{
            'active': activeFilter === category,
            'hover:scale-105': activeFilter !== category
          }"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>
      
      <!-- Tools Grid -->
      <div 
        ref="toolsContainerRef"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 tools-container"
      >
        <div 
          v-for="(tool, key) in filteredTools.slice(0, maxShow)" 
          :key="key"
          :ref="el => { if (el) toolRefs[key] = el as HTMLElement }"
          class="tool-card"
        >
          <div class="glass-card tool-inner h-full flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105">
            <div class="tool-icon-wrapper mb-3 p-3 rounded-full">
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
      
      <!-- Show More Button -->
      <div class="text-center mt-10" v-if="moreTools > 0">
        <button 
          @click="showAllTools"
          class="glass-button primary px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
        >
          <span>Show more</span>
          <span class="text-sm">({{ moreTools }})</span>
          <Icon name="heroicons:chevron-down" class="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.tools-container {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.tool-card {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.tool-icon-wrapper {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-button.active {
  background: rgba(var(--color-primary-500), 0.2);
  border-color: rgba(var(--color-primary-500), 0.3);
  transform: scale(1.05);
}
</style>