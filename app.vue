<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Define SEO metadata
useSeoMeta({
  title: 'Jeric Izon - Full Stack Web Developer',
  ogTitle: 'Jeric Izon - Full Stack Web Developer',
  description: 'Portfolio of Jeric Izon, a Full Stack Web Developer with over 10 years of experience in creating modern web applications and websites.',
  ogDescription: 'Portfolio of Jeric Izon, a Full Stack Web Developer with over 10 years of experience in creating modern web applications and websites.',
  ogImage: 'https://jericizon.github.io/me/images/banner.png',
  ogType: 'website',
  ogUrl: 'https://jericizon.github.io/me/',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://jericizon.github.io/me/images/banner.png',
})

// Add JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jeric Izon',
  jobTitle: 'Full Stack Web Developer',
  url: 'https://jericizon.github.io/me/',
  image: 'https://jericizon.github.io/me/images/about.jpg',
  description: 'Full Stack Web Developer with over 10 years of experience in creating modern web applications and websites.',
  sameAs: [
    'https://github.com/jericizon',
    'https://www.linkedin.com/in/jericizon',
    'https://twitter.com/jericizon'
  ],
  knowsAbout: [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Vue.js',
    'React.js',
    'Node.js',
    'PHP',
    'Laravel'
  ]
};

// Inject JSON-LD using useHead to avoid side-effect tags in template
useHead({
  // Cast to any to satisfy TS types for JSON-LD children text
  script: [
    ({ type: 'application/ld+json', children: JSON.stringify(jsonLd) } as any)
  ]
});

// Set default color mode to light and improve accessibility
onMounted(() => {
  // Set color mode
  document.documentElement.classList.add('light');
  document.documentElement.classList.remove('dark');
  
  // Improve accessibility
  document.documentElement.setAttribute('lang', 'en');
  
  // Add skip to main content link for keyboard users
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-to-content';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);
});
</script>

<template>
  <div class="min-h-screen bg-secondary-50">
    <!-- Main content -->
    <NuxtLayout>
      <main id="main-content">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
/* Accessibility: Skip to content link */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: #2563eb; /* Primary blue */
  color: white;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-to-content:focus {
  top: 0;
}

/* Ensure focus styles are visible for accessibility */
:focus {
  outline: 2px solid #2563eb; /* Primary blue */
  outline-offset: 2px;
}

/* Ensure proper contrast for text */
:root {
  --min-text-contrast: 4.5;
  --color-primary: #2563eb; /* Primary blue */
  --color-secondary: #1E293B; /* Secondary slate */
  --color-accent: #F59E0B; /* Accent amber */
  --color-background: #F8FAFC; /* Background light gray */
  --color-text: #0F172A; /* Text deep navy */
}
</style>