<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Before writing code, I understand your business model, user pain points, and success metrics. I ask hard questions that surface assumptions.',
    outcome: 'Clear scope & success criteria'
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'I design the system architecture first — database schema, API contracts, and infrastructure. Technical decisions that enable future growth.',
    outcome: 'Scalable foundation'
  },
  {
    number: '03',
    title: 'Build',
    description: 'AI-assisted development for speed, but every line reviewed. Clean code, proper tests, and continuous integration from day one.',
    outcome: 'Production-ready code'
  },
  {
    number: '04',
    title: 'Ship',
    description: 'Deploy with monitoring, error tracking, and performance metrics. Documentation and handoff that let your team take ownership.',
    outcome: 'Live system + knowledge transfer'
  }
]
</script>

<template>
  <section id="how-i-work" class="relative py-24 lg:py-32">
    <!-- Section number watermark -->
    <div class="absolute top-8 right-8 lg:right-16 font-display font-bold text-[12rem] lg:text-[16rem] text-light-900/[0.02] dark:text-base-50/[0.02] leading-none select-none pointer-events-none">
      04
    </div>

    <div class="relative z-10 px-6 lg:px-16">
      <!-- Section header -->
      <div class="mb-16 lg:mb-24">
        <div class="flex items-center gap-4 mb-6">
          <span class="font-mono text-xs text-coral-500">04</span>
          <span class="w-12 h-px bg-coral-500"></span>
          <span class="font-mono text-xs text-light-500 dark:text-base-400 tracking-wider uppercase">Process</span>
        </div>
        <h2 class="font-display font-bold text-4xl lg:text-6xl text-light-900 dark:text-base-50 leading-tight tracking-tight max-w-2xl">
          How I deliver high-impact systems
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-[19px] lg:left-[23px] top-0 bottom-0 w-px bg-light-300 dark:bg-base-600/30"></div>

        <!-- Steps -->
        <div class="space-y-12 lg:space-y-16">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="relative pl-16 lg:pl-20"
          >
            <!-- Number circle -->
            <div class="absolute left-0 top-0 w-10 h-10 lg:w-12 lg:h-12 border border-coral-500 bg-surface-light dark:bg-surface flex items-center justify-center">
              <span class="font-mono text-sm lg:text-base text-coral-500">{{ step.number }}</span>
            </div>

            <!-- Content -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 pt-2">
              <!-- Title -->
              <div class="lg:col-span-1">
                <h3 class="font-display font-bold text-2xl lg:text-3xl text-light-900 dark:text-base-50">
                  {{ step.title }}
                </h3>
              </div>

              <!-- Description -->
              <div class="lg:col-span-1">
                <p class="text-light-600 dark:text-base-300 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>

              <!-- Outcome -->
              <div class="lg:col-span-1">
                <div class="inline-flex items-center gap-2 px-4 py-2 border border-coral-500/30">
                  <Icon name="tabler:check" class="w-4 h-4 text-coral-500" />
                  <span class="text-sm text-coral-500 font-medium">{{ step.outcome }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust signals -->
      <div class="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="p-6 border border-light-300 dark:border-base-600/30">
          <Icon name="tabler:clock" class="w-6 h-6 text-coral-500 mb-4" />
          <h4 class="font-display font-semibold text-lg text-light-900 dark:text-base-50 mb-2">Timezone Flexible</h4>
          <p class="text-sm text-light-500 dark:text-base-400">APAC, US, EU — I adapt to your schedule with async updates and clear documentation.</p>
        </div>
        <div class="p-6 border border-light-300 dark:border-base-600/30">
          <Icon name="tabler:shield-check" class="w-6 h-6 text-coral-500 mb-4" />
          <h4 class="font-display font-semibold text-lg text-light-900 dark:text-base-50 mb-2">IP Protection</h4>
          <p class="text-sm text-light-500 dark:text-base-400">NDA-friendly with clear ownership transfer. Your code, your IP, period.</p>
        </div>
        <div class="p-6 border border-light-300 dark:border-base-600/30">
          <Icon name="tabler:file-check" class="w-6 h-6 text-coral-500 mb-4" />
          <h4 class="font-display font-semibold text-lg text-light-900 dark:text-base-50 mb-2">Clear Deliverables</h4>
          <p class="text-sm text-light-500 dark:text-base-400">Milestone-based payments with detailed SOWs. No surprises, no scope creep.</p>
        </div>
      </div>
    </div>
  </section>
</template>
