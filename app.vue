<script setup lang="ts">
import { onMounted } from 'vue';

useSeoMeta({
  title: 'Jeric Izon | Senior Full Stack Engineer',
  ogTitle: 'Jeric Izon | Senior Full Stack Engineer',
  description: 'Senior Full Stack Engineer building production SaaS platforms, admin dashboards, and scalable systems.',
  ogDescription: 'Senior Full Stack Engineer building production SaaS platforms, admin dashboards, and scalable systems.',
  ogImage: 'https://jericizon.github.io/me/images/banner.png',
  ogType: 'website',
  ogUrl: 'https://jericizon.github.io/me/',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jeric Izon | Senior Full Stack Engineer',
  twitterDescription: 'Senior Full Stack Engineer building production SaaS platforms and scalable systems.',
  twitterImage: 'https://jericizon.github.io/me/images/banner.png',
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
    }
  ],
  script: [
    ({ type: 'application/ld+json', children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jeric Izon',
      jobTitle: 'Senior Full Stack Engineer',
      url: 'https://jericizon.github.io/me/',
      image: 'https://jericizon.github.io/me/images/about.jpg',
      description: 'Senior Full Stack Engineer building production SaaS platforms and scalable systems.',
      knowsAbout: ['SaaS Development', 'Full Stack Engineering', 'System Architecture', 'Vue.js', 'React', 'Node.js'],
      sameAs: [
        'https://github.com/jericizon',
        'https://www.linkedin.com/in/jericizon',
      ],
    }) } as any)
  ]
});

onMounted(() => {
  document.documentElement.setAttribute('lang', 'en');
  // Check system preference or use dark mode as default
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>

<template>
  <div class="app-wrapper min-h-screen bg-surface-light dark:bg-surface text-light-800 dark:text-base-50 font-sans antialiased selection:bg-coral-500/30 selection:text-base-50 transition-colors duration-300">
    <!-- Film grain overlay -->
    <div class="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" aria-hidden="true">
      <div class="absolute inset-0 bg-grain animate-grain"></div>
    </div>

    <!-- Cursor glow effect -->
    <div class="fixed inset-0 pointer-events-none z-40" id="cursor-glow" aria-hidden="true"></div>

    <NuxtLayout>
      <main id="main-content" class="relative">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
/* Global Design Tokens */
:root {
  --color-coral: #ff6b57;
  --color-gold: #d4a574;
}

.dark {
  --color-surface: #0d0d0d;
  --color-elevated: #141414;
  --color-card: #1a1a1a;
  --color-text: #f5f5f0;
  --color-text-muted: #888888;
  --border-subtle: rgba(255, 255, 255, 0.06);
}

.light {
  --color-surface: #faf9f6;
  --color-elevated: #f5f3ef;
  --color-card: #e8e6df;
  --color-text: #2a2822;
  --color-text-muted: #6b6758;
  --border-subtle: rgba(0, 0, 0, 0.06);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-surface);
}
::-webkit-scrollbar-thumb {
  background: var(--color-text-muted);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ff6b57;
}
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-text-muted) var(--color-surface);
}

/* Focus styles */
:focus-visible {
  outline: 1px solid #ff6b57;
  outline-offset: 4px;
}

/* Selection */
::selection {
  background: rgba(255, 107, 87, 0.3);
  color: #f5f5f0;
}

/* Grain animation */
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}

/* Text stroke utility */
.text-stroke {
  -webkit-text-stroke: 1px currentColor;
  -webkit-text-fill-color: transparent;
}

.text-stroke-2 {
  -webkit-text-stroke: 2px currentColor;
  -webkit-text-fill-color: transparent;
}

/* Line draw animation */
@keyframes lineDraw {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* Magnetic button effect placeholder */
.magnetic-btn {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Section watermark */
.section-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(8rem, 20vw, 16rem);
  font-weight: 700;
  line-height: 0.8;
  color: rgba(0, 0, 0, 0.02);
  user-select: none;
  pointer-events: none;
}

.dark .section-number {
  color: rgba(255, 255, 255, 0.02);
}

/* Horizontal scroll snap */
.snap-x-mandatory {
  scroll-snap-type: x mandatory;
}
.snap-center {
  scroll-snap-align: center;
}

/* Theme transitions */
.app-wrapper * {
  transition-property: background-color, border-color;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
