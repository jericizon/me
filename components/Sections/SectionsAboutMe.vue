<script setup lang="ts">
const myAge = computed(() => {
  const birthDate = new Date("2013-11-01");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
});

const values = [
  { icon: 'tabler:code', label: 'Clean Code', desc: 'Readable, maintainable, and built to scale.' },
  { icon: 'tabler:rocket', label: 'Performance', desc: 'Fast load times and optimized user flows.' },
  { icon: 'tabler:shield-check', label: 'Security', desc: 'Secure APIs, RLS policies, and best practices.' },
  { icon: 'tabler:messages', label: 'Communication', desc: 'Clear, proactive, and async-friendly.' },
]
</script>

<template>
  <section id="about-section" class="py-24 md:py-32 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Section header -->
      <div class="mb-16 md:mb-20">
        <p class="eyebrow mb-4 animate-fade-in-up">
          <span class="eyebrow-line"></span>
          About Me
        </p>
        <h2 class="section-title max-w-3xl animate-fade-in-up" style="animation-delay: 0.08s">
          A developer who cares about<br/>
          <span class="text-gradient">craft and outcomes.</span>
        </h2>
      </div>

      <!-- Main content grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">

        <!-- Left: Narrative -->
        <div class="space-y-10">

          <!-- Story paragraphs -->
          <div class="space-y-5 animate-fade-in-up" style="animation-delay: 0.1s">
            <p class="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I started writing code <strong class="text-neutral-900 dark:text-white font-semibold">{{ myAge }} years ago</strong> out of pure curiosity — and never stopped. Today I work as a full-stack developer, helping teams and founders build web products that are fast, secure, and genuinely enjoyable to use.
            </p>
            <p class="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              My background spans both frontend and backend — from crafting pixel-perfect Vue.js and React interfaces to architecting REST APIs with Laravel and NestJS, managing PostgreSQL schemas, and deploying on AWS. I've worked with Singapore-based product companies for over 7 years, shipping features for platforms used by thousands of users daily.
            </p>
            <p class="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              I'm currently open to <strong class="text-neutral-700 dark:text-neutral-300 font-medium">remote, freelance, and part-time roles</strong>. If you're building something meaningful, I'd love to be part of it.
            </p>
          </div>

          <!-- Values grid -->
          <div class="animate-fade-in-up" style="animation-delay: 0.18s">
            <div class="rule-label mb-6">What I bring</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="v in values"
                :key="v.label"
                class="card-subtle p-5 rounded-xl group hover:border-primary-200 dark:hover:border-primary-800/50 transition-colors duration-200"
              >
                <div class="flex items-start gap-3">
                  <div class="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                    <Icon :name="v.icon" class="w-4.5 h-4.5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white text-sm mb-0.5">{{ v.label }}</div>
                    <div class="text-sm text-neutral-500 dark:text-neutral-400">{{ v.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA row -->
          <div class="flex flex-wrap gap-3 pt-2 animate-fade-in-up" style="animation-delay: 0.24s">
            <DownloadCV />
            <a href="#contact-section" class="btn btn-secondary btn-md">
              <Icon name="tabler:message" class="w-4 h-4" />
              <span>Let's Chat</span>
            </a>
          </div>
        </div>

        <!-- Right: Info sidebar -->
        <div class="space-y-5 animate-fade-in-up" style="animation-delay: 0.15s">

          <!-- Quick facts card -->
          <div class="card p-5 space-y-4">
            <div class="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600">Quick Facts</div>
            <div class="space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-500 dark:text-neutral-400">Location</span>
                <span class="font-medium text-neutral-900 dark:text-white">Philippines 🇵🇭</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-500 dark:text-neutral-400">Experience</span>
                <span class="font-medium text-neutral-900 dark:text-white">10+ years</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-500 dark:text-neutral-400">Timezone</span>
                <span class="font-medium text-neutral-900 dark:text-white">UTC+8 (PHT)</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-neutral-500 dark:text-neutral-400">Availability</span>
                <span class="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open to work
                </span>
              </div>
            </div>
          </div>

          <!-- Stack tags -->
          <div class="card p-5">
            <div class="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-3">Core Stack</div>
            <div class="flex flex-wrap gap-2">
              <span class="tag tag-primary">Vue.js</span>
              <span class="tag tag-primary">React</span>
              <span class="tag tag-neutral">Node.js</span>
              <span class="tag tag-neutral">Laravel</span>
              <span class="tag tag-secondary">TypeScript</span>
              <span class="tag tag-neutral">Supabase</span>
              <span class="tag tag-neutral">Docker</span>
              <span class="tag tag-neutral">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>