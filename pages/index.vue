<script setup lang="ts">
useSeoMeta({
  title: 'Jeric Izon - Senior AI & Full-Stack Engineer',
  description:
    'Jeric Izon is a senior AI and full-stack engineer specializing in Laravel, Node.js, NestJS, Vue/Nuxt, AWS, AI agents, and production SaaS systems.',
  ogTitle: 'Jeric Izon - Senior AI & Full-Stack Engineer',
  ogDescription:
    'Building production web systems from architecture to deployment.',
  ogType: 'website',
  ogUrl: 'https://jericizon.github.io/me/',
  ogImage: 'https://jericizon.github.io/me/images/banner.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jeric Izon - Senior AI & Full-Stack Engineer',
  twitterDescription:
    'Building production web systems from architecture to deployment.',
  twitterImage: 'https://jericizon.github.io/me/images/banner.png',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            name: 'Jeric Izon',
            jobTitle: 'Senior AI & Full-Stack Engineer',
            url: 'https://jericizon.github.io/me/',
            image: 'https://jericizon.github.io/me/images/about.jpg',
            description:
              'Senior AI and full-stack engineer specializing in Laravel, Node.js, NestJS, Vue/Nuxt, AWS, AI agents, and production SaaS systems.',
            knowsAbout: [
              'Laravel',
              'Vue.js',
              'Nuxt',
              'NestJS',
              'AWS',
              'PostgreSQL',
              'System Architecture',
            ],
            sameAs: [
              'https://github.com/jericizon',
              'https://www.linkedin.com/in/jericizon',
            ],
          },
          {
            '@type': 'WebSite',
            name: 'Jeric Izon - Senior AI & Full-Stack Engineer',
            url: 'https://jericizon.github.io/me/',
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <ProofMetrics />
    <SelectedWork />
    <WhatIBuild />
    <EngineeringPhilosophy />
    <ExperienceTimeline />
    <TechStackMatrix />
    <AIWorkflowSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>
