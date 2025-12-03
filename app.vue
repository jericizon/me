<script setup lang="ts">
import { onMounted } from 'vue';

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
  script: [
    ({ type: 'application/ld+json', children: JSON.stringify(jsonLd) } as any)
  ]
});

// Improve accessibility on mount
onMounted(() => {
  document.documentElement.setAttribute('lang', 'en');
  
  // Add skip to main content link for keyboard users
  if (!document.querySelector('.skip-to-content')) {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
});
</script>

<template>
  <div class="app-wrapper min-h-screen transition-colors duration-300 bg-surface-light dark:bg-surface-dark">
    <!-- Animated mesh gradient background -->
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <!-- Light mode background -->
      <div class="absolute inset-0 bg-mesh-light dark:opacity-0 opacity-100 transition-opacity duration-500"></div>
      <!-- Dark mode background -->
      <div class="absolute inset-0 bg-mesh-dark opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Animated gradient orbs -->
      <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-morph"></div>
      <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full blur-3xl animate-morph" style="animation-delay: -4s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <!-- Subtle noise texture overlay -->
      <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');"></div>
    </div>

    <!-- Main content -->
    <NuxtLayout>
      <main id="main-content" class="relative">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
/* Modern professional global styles */
:root {
  /* Modern color palette - Light mode */
  --color-primary: #6366f1;
  --color-secondary: #14b8a6;
  --color-accent: #ec4899;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #18181b;
  --color-text-muted: #71717a;
  
  /* Glass properties */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

.dark {
  /* Modern color palette - Dark mode */
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f4f4f5;
  --color-text-muted: #a1a1aa;
  
  /* Glass properties - Dark mode */
  --glass-bg: rgba(30, 41, 59, 0.8);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

/* Modern scrollbar - Light mode */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: 5px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  background-clip: padding-box;
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;
}

/* Enhanced focus styles */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 6px;
}

/* Selection styling */
::selection {
  background: rgba(99, 102, 241, 0.2);
  color: var(--color-text);
}

.dark ::selection {
  background: rgba(99, 102, 241, 0.3);
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 500;
  z-index: 9999;
  transition: top 0.3s ease;
}

.skip-to-content:focus {
  top: 0;
}

/* Glassmorphism utilities - Enhanced */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  transition: all 0.3s ease;
}

.dark .glass-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.15);
}

.dark .glass-card:hover {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent));
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Glow effects */
.glow-primary {
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
}

.glow-secondary {
  box-shadow: 0 0 40px rgba(20, 184, 166, 0.4);
}

.glow-accent {
  box-shadow: 0 0 40px rgba(236, 72, 153, 0.4);
}

/* Animation utilities */
.animate-float-gentle {
  animation: float-gentle 4s ease-in-out infinite;
}

@keyframes float-gentle {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Smooth transitions for theme change */
.app-wrapper * {
  transition-property: background-color, border-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

/* Disable transitions during theme change to prevent flashing */
.app-wrapper.theme-transitioning * {
  transition: none !important;
}
</style>