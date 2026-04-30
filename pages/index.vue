<template>
  <div>
    <!-- Fixed vertical nav (desktop) + mobile nav handled in component -->
    <NavMenu />
    
    <SectionsBanner />
    <SectionsAboutMe />
    <SectionsServices />
    <SectionsProjects />
    <SectionsHowIWork />
    <SectionsResume />
    <SectionsTools />
    <SectionsCTA />
    <SectionsContact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Jeric Izon | Senior Full Stack Engineer for SaaS & Startups',
  description: 'Senior Full Stack Engineer with 10+ years experience building production SaaS platforms, admin dashboards, and scalable systems. Available for select projects.',
  ogTitle: 'Jeric Izon | Senior Full Stack Engineer for SaaS & Startups',
  ogDescription: 'I help startups and scale-ups build revenue-generating systems. 10+ years shipping production SaaS platforms, APIs, and dashboards.',
  twitterTitle: 'Jeric Izon | Senior Full Stack Engineer for SaaS & Startups',
  twitterDescription: 'Systems builder for serious founders. SaaS platforms, admin dashboards, and scalable APIs that drive business growth.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Senior Full Stack Engineer for SaaS & Startup Systems',
        url: 'https://jericizon.github.io/me/',
        description: 'Senior Full Stack Engineer specializing in SaaS platforms, admin dashboards, and scalable API systems for startups and growth-stage companies.',
        about: ['Full Stack Engineer', 'SaaS Development', 'System Architecture', 'Startup Engineering', 'API Development']
      })
    }
  ]
})
</script>
