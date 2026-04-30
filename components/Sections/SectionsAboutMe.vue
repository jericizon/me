<script setup lang="ts">
const values = [
  { 
    title: 'Business First', 
    desc: 'I solve business problems, not just write code. Every feature ties back to revenue or user outcomes.' 
  },
  { 
    title: 'Ship Fast', 
    desc: 'AI-assisted workflows let me deliver MVPs in weeks. Speed without technical debt.' 
  },
  { 
    title: 'Scale Ready', 
    desc: 'Architecture that grows from hundreds to millions of users without rebuilding.' 
  },
  { 
    title: 'True Partner', 
    desc: 'I challenge assumptions, suggest improvements, and own outcomes alongside you.' 
  },
]

const stack = ['Vue.js', 'React', 'Node.js', 'Laravel', 'Supabase', 'PostgreSQL', 'AWS', 'Docker']
</script>

<template>
  <section id="about-section" class="relative py-24 lg:py-32">
    <!-- Section number watermark -->
    <div class="absolute top-8 right-8 lg:right-16 font-display font-bold text-[12rem] lg:text-[16rem] text-light-900/[0.02] dark:text-base-50/[0.02] leading-none select-none pointer-events-none">
      01
    </div>

    <div class="relative z-10 px-6 lg:px-16">
      <!-- Section header -->
      <div class="mb-16 lg:mb-24">
        <div class="flex items-center gap-4 mb-6">
          <span class="font-mono text-xs text-coral-500">01</span>
          <span class="w-12 h-px bg-coral-500"></span>
          <span class="font-mono text-xs text-light-500 dark:text-base-400 tracking-wider uppercase">About</span>
        </div>
        <h2 class="font-display font-bold text-4xl lg:text-6xl text-light-900 dark:text-base-50 leading-tight tracking-tight max-w-3xl">
          Engineering solutions that scale businesses
        </h2>
      </div>

      <!-- Split content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <!-- Left: Story -->
        <div class="space-y-8">
          <div class="space-y-6 text-light-600 dark:text-base-300 leading-relaxed text-lg">
            <p>
              I've spent <strong class="text-light-900 dark:text-base-50">10+ years</strong> building production systems for startups and scale-ups. From architecting video rendering pipelines processing thousands of exports daily to launching AI platforms with enterprise-grade security.
            </p>
            <p>
              My approach is simple: understand the business problem first, then build the most elegant technical solution. I specialize in SaaS platforms, admin dashboards, and API systems that need to scale.
            </p>
            <p>
              7+ years with Singapore-based tech companies taught me how to ship under pressure, communicate across time zones, and deliver systems that handle real user load.
            </p>
          </div>

          <!-- Stack tags -->
          <div class="pt-6 border-t border-light-300 dark:border-base-600/50">
            <div class="font-mono text-xs text-light-500 dark:text-base-400 mb-4 tracking-wider">STACK</div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in stack" 
                :key="tech"
                class="px-3 py-1.5 text-xs text-light-600 dark:text-base-300 border border-light-300 dark:border-base-600/50 hover:border-coral-500/50 hover:text-coral-500 transition-colors cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Values grid -->
        <div class="space-y-6">
          <div 
            v-for="(value, index) in values" 
            :key="value.title"
            class="group p-6 border border-light-300 dark:border-base-600/30 hover:border-coral-500/30 transition-all duration-300 hover:bg-surface-light-elevated/50 dark:hover:bg-surface-elevated/50"
          >
            <div class="flex items-start gap-4">
              <span class="font-mono text-xs text-coral-500">0{{ index + 1 }}</span>
              <div>
                <h3 class="font-display font-semibold text-lg text-light-900 dark:text-base-50 mb-2 group-hover:text-coral-500 transition-colors">
                  {{ value.title }}
                </h3>
                <p class="text-sm text-light-500 dark:text-base-400 leading-relaxed">
                  {{ value.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom stats -->
      <div class="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div class="space-y-2">
          <div class="font-display font-bold text-5xl lg:text-6xl text-coral-500">10+</div>
          <div class="text-sm text-light-500 dark:text-base-400">Years shipping production systems</div>
        </div>
        <div class="space-y-2">
          <div class="font-display font-bold text-5xl lg:text-6xl text-coral-500">100+</div>
          <div class="text-sm text-light-500 dark:text-base-400">SaaS platforms delivered</div>
        </div>
        <div class="space-y-2">
          <div class="font-display font-bold text-5xl lg:text-6xl text-coral-500">6+</div>
          <div class="text-sm text-light-500 dark:text-base-400">Countries — APAC to Europe</div>
        </div>
        <div class="space-y-2">
          <div class="font-display font-bold text-5xl lg:text-6xl text-coral-500">50+</div>
          <div class="text-sm text-light-500 dark:text-base-400">Happy clients</div>
        </div>
      </div>
    </div>
  </section>
</template>
