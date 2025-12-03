<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Define SEO metadata
useSeoMeta({
  title: 'Jeric Izon - Full Stack Web Developer | Available for Work',
  ogTitle: 'Jeric Izon - Full Stack Web Developer | Available for Work',
  description: 'Portfolio of Jeric Izon, a Full Stack Web Developer available for work with over 10 years of experience creating modern web applications using Vue.js, React, Node.js, PHP, and Laravel.',
  ogDescription: 'Portfolio of Jeric Izon, a Full Stack Web Developer available for work with over 10 years of experience creating modern web applications using Vue.js, React, Node.js, PHP, and Laravel.',
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
  description: 'Full Stack Web Developer available for work with over 10 years of experience in creating modern web applications and websites.',
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
  <div class="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30">
    <!-- Main content -->
    <NuxtLayout>
      <main id="main-content" class="relative">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
/* Fresh and modern global styles */
:root {
  /* Fresh color palette */
  --color-primary: #14b8a6; /* Teal */
  --color-secondary: #d946ef; /* Purple */
  --color-accent: #f97316; /* Orange */
  --color-background: #ffffff;
  --color-neutral: #171717;

  /* Enhanced accessibility */
  --min-text-contrast: 4.5;
}

/* Modern scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #14b8a6, #d946ef);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #0d9488, #c026d3);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Enhanced focus styles */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Selection styling */
::selection {
  background: rgba(20, 184, 166, 0.2);
  color: var(--color-neutral);
}

/* Custom animations */
@keyframes float-gentle {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

@keyframes glow-soft {
  0%, 100% {
    box-shadow: 0 0 20px rgba(20, 184, 166, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(20, 184, 166, 0.5);
  }
}

.animate-float-gentle {
  animation: float-gentle 4s ease-in-out infinite;
}

.animate-glow-soft {
  animation: glow-soft 3s ease-in-out infinite;
}

/* Glass morphism utilities */
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.glass-card-dark {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.18);
}
</style>