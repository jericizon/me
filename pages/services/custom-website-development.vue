<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'

const { openContactForm } = useContactForm()

useSeoMeta({
  title: 'Custom Website Development Services | Freelance Senior Developer',
  description: 'Custom website development by Jeric Izon, a senior freelance developer. Hire me for fast, scalable, SEO-ready websites and web app builds.',
  ogTitle: 'Custom Website Development Services | Freelance Senior Developer',
  ogDescription: 'Hire a senior freelance website developer for custom website development, redesigns, and long-term technical support.',
  twitterTitle: 'Custom Website Development Services | Freelance Senior Developer',
  twitterDescription: 'Senior freelance developer for custom website development and business-focused web builds.'
})
</script>

<template>
  <div>
    <NavMenu :has-scrolled="true" />
    <div class="hidden lg:block fixed top-8 right-8 z-50">
      <ThemeToggle />
    </div>
    <div class="lg:hidden fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>

    <section class="pt-28 pb-16 md:pt-32 md:pb-20">
      <div class="max-w-5xl mx-auto">
      <p class="eyebrow mb-4">
        <span class="eyebrow-line"></span>
        Services
      </p>

      <h1 class="section-title mb-6">
        Custom website development
        <span class="text-gradient">for businesses ready to grow.</span>
      </h1>

      <p class="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mb-8">
        I build high-performance websites and web applications for founders, teams, and service businesses. If you need a senior freelance developer who can ship quickly with clean architecture, I can help.
      </p>

      <div class="flex flex-wrap gap-3 mb-12">
        <button type="button" class="btn btn-primary btn-lg" @click="openContactForm">
          Start a Project
        </button>
        <NuxtLink to="/hire-freelance-web-developer" class="btn btn-secondary btn-lg">
          Hire a Senior Developer
        </NuxtLink>
        <NuxtLink to="/" class="btn btn-secondary btn-lg">
          Back to Homepage
        </NuxtLink>
      </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="card p-6">
            <h2 class="font-display text-2xl font-bold mb-3 text-neutral-900 dark:text-white">What I build</h2>
            <ul class="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Custom business websites (marketing + conversion focused)</li>
              <li>• Web app MVPs and internal dashboards</li>
              <li>• Website redesigns and rebuilds</li>
              <li>• API integrations and backend development</li>
            </ul>
          </article>

          <article class="card p-6">
            <h2 class="font-display text-2xl font-bold mb-3 text-neutral-900 dark:text-white">Why clients hire me</h2>
            <ul class="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• 10+ years of full-stack experience</li>
              <li>• Senior-level architecture and code quality</li>
              <li>• Clear communication and reliable delivery</li>
              <li>• Flexible freelance engagement (project or retainer)</li>
            </ul>
          </article>
        </div>
      </div>

    </section>

    <Footer />
  </div>
</template>
