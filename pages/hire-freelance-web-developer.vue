<script setup lang="ts">
import { useAnalytics } from '@/composables/useAnalytics'

const { trackEvent } = useAnalytics()
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdb9dnAFUolvGaSHco4QziKWRqojD8UfO5luLh6sMWKXPZO1w/viewform'

const handleStartConversation = () => {
  trackEvent('contact_form_open', { section: 'hire_page', label: 'start_conversation' })
  window.open(googleFormUrl, '_blank')
}

useSeoMeta({
  title: 'Hire a Freelance Web Developer | Senior Developer for Projects',
  description: 'Hire Jeric Izon, a senior freelance web developer for custom websites, redesigns, and ongoing freelance development support.',
  ogTitle: 'Hire a Freelance Web Developer | Senior Developer for Projects',
  ogDescription: 'Need to hire a freelancer for website development? Work with a senior developer for fast, reliable delivery.',
  twitterTitle: 'Hire a Freelance Web Developer | Senior Developer for Projects',
  twitterDescription: 'Senior freelance developer available for custom builds, rebuilds, and long-term product development.'
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
        Hire
      </p>

      <h1 class="section-title mb-6">
        Hire a freelance web developer
        <span class="text-gradient">for your next project.</span>
      </h1>

      <p class="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mb-10">
        I work with businesses that need senior execution without agency overhead. From custom website development to feature delivery and maintenance, I help teams ship outcomes quickly.
      </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div class="card p-5">
            <div class="text-sm text-neutral-500 dark:text-neutral-400">Experience</div>
            <div class="font-display font-bold text-2xl text-neutral-900 dark:text-white mt-1">10+ years</div>
          </div>
          <div class="card p-5">
            <div class="text-sm text-neutral-500 dark:text-neutral-400">Projects shipped</div>
            <div class="font-display font-bold text-2xl text-neutral-900 dark:text-white mt-1">100+</div>
          </div>
          <div class="card p-5">
            <div class="text-sm text-neutral-500 dark:text-neutral-400">Countries served</div>
            <div class="font-display font-bold text-2xl text-neutral-900 dark:text-white mt-1">6+</div>
          </div>
        </div>

        <article class="card p-6 md:p-8 mb-8">
          <h2 class="font-display text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Engagement options</h2>
          <ul class="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li>• End-to-end custom website development</li>
            <li>• Part-time senior developer support</li>
            <li>• Existing website optimization and rebuilds</li>
            <li>• Monthly freelance retainers for ongoing work</li>
          </ul>
        </article>

        <div class="flex flex-wrap gap-3">
          <button type="button" class="btn btn-primary btn-lg" @click="handleStartConversation">
            Start a Conversation
          </button>
          <NuxtLink to="/services/custom-website-development" class="btn btn-secondary btn-lg">
            View Services
          </NuxtLink>
          <NuxtLink to="/" class="btn btn-secondary btn-lg">
            Back to Homepage
          </NuxtLink>
        </div>
      </div>

    </section>

    <Footer />
  </div>
</template>
