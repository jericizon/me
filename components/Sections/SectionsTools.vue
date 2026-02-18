<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

// Organized tools by category with skill levels
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'tabler:layout',
    color: 'gold',
    skills: [
      { name: 'Vue.js', level: 95, icon: 'simple-icons:vuedotjs' },
      { name: 'Nuxt.js', level: 90, icon: 'simple-icons:nuxtdotjs' },
      { name: 'React', level: 85, icon: 'simple-icons:react' },
      { name: 'TypeScript', level: 90, icon: 'simple-icons:typescript' },
      { name: 'TailwindCSS', level: 95, icon: 'simple-icons:tailwindcss' },
      { name: 'Electron', level: 80, icon: 'simple-icons:electron' },
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'tabler:server',
    color: 'violet',
    skills: [
      { name: 'Node.js', level: 90, icon: 'simple-icons:nodedotjs' },
      { name: 'NestJS', level: 88, icon: 'simple-icons:nestjs' },
      { name: 'Laravel', level: 92, icon: 'simple-icons:laravel' },
      { name: 'PHP', level: 90, icon: 'simple-icons:php' },
      { name: 'Express', level: 85, icon: 'simple-icons:express' },
      { name: 'WebSockets', level: 80, icon: 'simple-icons:socketdotio' },
    ]
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'tabler:database',
    color: 'teal',
    skills: [
      { name: 'PostgreSQL', level: 88, icon: 'simple-icons:postgresql' },
      { name: 'MySQL', level: 90, icon: 'simple-icons:mysql' },
      { name: 'Supabase', level: 92, icon: 'simple-icons:supabase' },
      { name: 'Redis', level: 85, icon: 'simple-icons:redis' },
      { name: 'MongoDB', level: 75, icon: 'simple-icons:mongodb' },
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: 'tabler:cloud',
    color: 'rose',
    skills: [
      { name: 'AWS', level: 88, icon: 'simple-icons:amazonaws' },
      { name: 'Docker', level: 85, icon: 'simple-icons:docker' },
      { name: 'Terraform', level: 80, icon: 'simple-icons:terraform' },
      { name: 'GitHub Actions', level: 82, icon: 'simple-icons:githubactions' },
      { name: 'Vercel', level: 90, icon: 'simple-icons:vercel' },
    ]
  },
  {
    id: 'ai',
    name: 'AI & Modern Tools',
    icon: 'tabler:sparkles',
    color: 'gold',
    skills: [
      { name: 'OpenAI API', level: 88, icon: 'simple-icons:openai' },
      { name: 'Claude', level: 90, icon: 'simple-icons:anthropic' },
      { name: 'Figma', level: 85, icon: 'simple-icons:figma' },
      { name: 'Git', level: 92, icon: 'simple-icons:git' },
    ]
  }
]

// Other tools for the marquee
const otherTools = [
  'WordPress', 'Strapi', 'MariaDB', 'Sass', 'Redis', 
  'WebSocket', 'FFmpeg', 'Electron', 'NPM', 'Yarn'
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const activeCategory = ref('frontend')

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
    { threshold: 0.2 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const activeSkills = computed(() => {
  return skillCategories.find(cat => cat.id === activeCategory.value)?.skills || []
})

const getColorClass = (color: string) => {
  const colors: Record<string, string> = {
    gold: 'bg-accent-gold',
    violet: 'bg-accent-violet',
    teal: 'bg-accent-teal',
    rose: 'bg-accent-rose'
  }
  return colors[color] || colors.gold
}
</script>

<template>
  <section 
    ref="sectionRef"
    id="tools-section" 
    class="relative py-24 lg:py-32 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Section header -->
      <div 
        class="max-w-3xl mb-16 transition-all duration-1000"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <span class="section-label">Tech Stack</span>
        <h2 class="section-title mb-6">
          Tools I use to<br />
          <span class="gradient-text-gold">bring ideas to life</span>
        </h2>
        <p class="text-xl text-text-secondary leading-relaxed">
          A decade of experience has given me deep expertise across the modern web stack. 
          I choose the right tools for each unique challenge.
        </p>
      </div>

      <!-- Skills visualization -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Category navigation -->
        <div 
          class="lg:col-span-4 space-y-3 transition-all duration-1000 delay-200"
          :class="{ 'opacity-0 translate-x-[-20px]': !isVisible, 'opacity-100 translate-x-0': isVisible }"
        >
          <button
            v-for="category in skillCategories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="w-full card p-4 flex items-center gap-4 text-left transition-all duration-300"
            :class="activeCategory === category.id ? 'border-accent-gold/50 bg-surface-higher' : 'hover:border-border-strong'"
          >
            <div 
              class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
              :class="activeCategory === category.id ? `bg-${category.color === 'gold' ? 'accent-gold' : category.color === 'violet' ? 'accent-violet' : category.color === 'teal' ? 'accent-teal' : 'accent-rose'}/20` : 'bg-surface-highest'"
            >
              <Icon 
                :name="category.icon" 
                class="w-6 h-6"
                :class="activeCategory === category.id ? `text-${category.color === 'gold' ? 'accent-gold' : category.color === 'violet' ? 'accent-violet' : category.color === 'teal' ? 'accent-teal' : 'accent-rose'}` : 'text-text-secondary'"
              />
            </div>
            <div class="flex-1">
              <h3 
                class="font-medium transition-colors"
                :class="activeCategory === category.id ? 'text-text-primary' : 'text-text-secondary'"
              >
                {{ category.name }}
              </h3>
              <p class="text-sm text-text-tertiary">{{ category.skills.length }} technologies</p>
            </div>
            <Icon 
              name="tabler:chevron-right" 
              class="w-5 h-5 transition-all"
              :class="activeCategory === category.id ? 'text-accent-gold translate-x-1' : 'text-text-muted'"
            />
          </button>
        </div>

        <!-- Skills display -->
        <div 
          class="lg:col-span-8 transition-all duration-1000 delay-300"
          :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
        >
          <div class="card p-8 h-full">
            <h3 class="font-display text-2xl font-semibold text-text-primary mb-8">
              {{ skillCategories.find(c => c.id === activeCategory)?.name }}
            </h3>

            <div class="space-y-6">
              <div 
                v-for="skill in activeSkills" 
                :key="skill.name"
                class="group"
              >
                <div class="flex items-center gap-4 mb-2">
                  <Icon :name="skill.icon" class="w-6 h-6 text-text-secondary" />
                  <span class="font-medium text-text-primary flex-1">{{ skill.name }}</span>
                  <span class="text-sm text-text-tertiary font-mono">{{ skill.level }}%</span>
                </div>
                <div class="h-2 bg-surface-highest rounded-full overflow-hidden">
                  <div 
                    class="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110"
                    :class="getColorClass(skillCategories.find(c => c.id === activeCategory)?.color || 'gold')"
                    :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools marquee -->
      <div 
        class="mt-16 transition-all duration-1000 delay-500"
        :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
      >
        <p class="text-center text-text-tertiary text-sm mb-6">Also experienced with</p>
        <div class="relative overflow-hidden">
          <div class="flex gap-4 animate-marquee">
            <span 
              v-for="tool in [...otherTools, ...otherTools]" 
              :key="tool"
              class="tag whitespace-nowrap"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>