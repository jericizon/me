<script setup lang="ts">
const stack = ['Laravel', 'Vue / Nuxt', 'NestJS', 'AWS']
</script>

<template>
  <section
    class="flex min-h-[100dvh] flex-col justify-center pt-20 md:pt-24"
    aria-label="Introduction"
  >
    <AppContainer>
      <div class="flex max-w-3xl flex-col gap-6">
        <p
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="font-mono text-xs uppercase tracking-widest text-accent"
        >
          Senior Full-Stack Engineer
        </p>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
        >
          I build software that survives production.
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="max-w-xl text-lg leading-relaxed text-text-secondary"
        >
          I design, build and operate web systems from architecture to deployment.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="flex flex-col gap-6 pt-2"
        >
          <ul class="flex flex-wrap gap-2" aria-label="Core stack">
            <li v-for="item in stack" :key="item">
              <BaseBadge variant="surface">{{ item }}</BaseBadge>
            </li>
          </ul>

          <div class="flex flex-wrap items-center gap-3">
            <BaseButton href="#work" variant="primary">
              View selected work
            </BaseButton>
            <BaseButton href="#contact" variant="secondary">
              Let's talk
            </BaseButton>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
