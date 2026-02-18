<script setup lang="ts">
import { onMounted } from 'vue';

useSeoMeta({
  title: 'Jeric Izon — Full Stack Developer',
  ogTitle: 'Jeric Izon — Full Stack Developer',
  description: 'Portfolio of Jeric Izon, a Full Stack Web Developer with 10+ years of experience building modern web applications using Vue.js, React, Node.js, PHP, and Laravel.',
  ogDescription: 'Portfolio of Jeric Izon, a Full Stack Web Developer with 10+ years of experience building modern web applications using Vue.js, React, Node.js, PHP, and Laravel.',
  ogImage: 'https://jericizon.github.io/me/images/banner.png',
  ogType: 'website',
  ogUrl: 'https://jericizon.github.io/me/',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://jericizon.github.io/me/images/banner.png',
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap'
    }
  ],
  script: [
    ({ type: 'application/ld+json', children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jeric Izon',
      jobTitle: 'Full Stack Web Developer',
      url: 'https://jericizon.github.io/me/',
      image: 'https://jericizon.github.io/me/images/about.jpg',
      description: 'Full Stack Web Developer with 10+ years of experience building modern web applications.',
      sameAs: [
        'https://github.com/jericizon',
        'https://www.linkedin.com/in/jericizon',
        'https://twitter.com/jericizon'
      ],
    }) } as any)
  ]
});

onMounted(() => {
  document.documentElement.setAttribute('lang', 'en');
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
  <div class="app-wrapper min-h-screen bg-surface-light dark:bg-surface-dark">
    <!-- Subtle ambient background -->
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-100 transition-opacity duration-700"></div>
      <!-- Soft ambient orbs -->
      <div class="absolute -top-32 -left-32 w-[700px] h-[700px] bg-primary-500/6 dark:bg-primary-500/8 rounded-full blur-[120px]"></div>
      <div class="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-secondary-500/5 dark:bg-secondary-500/7 rounded-full blur-[100px]"></div>
      <!-- Noise texture -->
      <div class="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] bg-noise bg-repeat" style="background-size: 200px 200px;"></div>
    </div>

    <NuxtLayout>
      <main id="main-content" class="relative">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
/* ============================================================
   GLOBAL DESIGN TOKENS & BASE STYLES
   ============================================================ */

:root {
  --color-primary:    #7c3aed;
  --color-secondary:  #f59e0b;
  --color-accent:     #f43f5e;
  --color-bg:         #fafaf9;
  --color-surface:    #ffffff;
  --color-text:       #1c1917;
  --color-text-muted: #78716c;
  --color-border:     rgba(28, 25, 23, 0.1);

  --radius-card: 1.25rem;
  --radius-btn:  0.75rem;
}

.dark {
  --color-bg:         #0c0a09;
  --color-surface:    #1c1917;
  --color-text:       #fafaf9;
  --color-text-muted: #a8a29e;
  --color-border:     rgba(250, 250, 249, 0.08);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 72px;
}

/* Refined scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 3px;
  opacity: 0.6;
}
::-webkit-scrollbar-thumb:hover { opacity: 1; }
* { scrollbar-width: thin; scrollbar-color: var(--color-primary) transparent; }

/* Focus */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 6px;
}

/* Selection */
::selection {
  background: rgba(124, 58, 237, 0.15);
  color: var(--color-text);
}

/* Skip link */
.skip-to-content {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 600;
  z-index: 9999;
  transition: top 0.3s ease;
}
.skip-to-content:focus { top: 0; }

/* Gradient text animation */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}

/* Fade-in-up animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Morph animation */
@keyframes morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50%       { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

/* Float animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-16px); }
}

/* Shimmer */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

/* Marquee */
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

/* Animate-fade-in-up utility */
.animate-fade-in-up {
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Theme transition */
.app-wrapper * {
  transition-property: background-color, border-color, color, box-shadow;
  transition-duration: 180ms;
  transition-timing-function: ease-out;
}
</style>