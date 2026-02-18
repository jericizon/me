<script setup lang="ts">
import { onMounted } from 'vue';

// Define SEO metadata
useSeoMeta({
  title: 'Jeric Izon — Full Stack Developer',
  ogTitle: 'Jeric Izon — Full Stack Developer',
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
  <div class="app-wrapper min-h-screen bg-surface text-text-primary antialiased selection:bg-accent-gold/30 selection:text-white dark:selection:bg-accent-gold/30">
    <!-- Premium grain texture overlay -->
    <div class="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] dark:opacity-[0.03]" aria-hidden="true">
      <div class="absolute inset-0 bg-grain"></div>
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
/* Premium design system with light/dark mode support */
:root {
  /* Light mode (default) - High contrast */
  --color-bg: #ffffff;
  --color-bg-elevated: #f8f8f9;
  --color-bg-higher: #f1f1f2;
  --color-bg-highest: #e8e8e9;
  
  /* Accent colors - sophisticated palette */
  --color-accent-gold: #d97706;
  --color-accent-violet: #6d28d9;
  --color-accent-teal: #0d9488;
  --color-accent-rose: #e11d48;
  
  /* Text colors - High contrast for light mode */
  --color-text-primary: #111111;
  --color-text-secondary: #374151;
  --color-text-tertiary: #6b7280;
  --color-text-muted: #9ca3af;
  
  /* Border colors */
  --color-border: rgba(0, 0, 0, 0.08);
  --color-border-strong: rgba(0, 0, 0, 0.12);
  
  /* Glow effects */
  --glow-gold: 0 0 60px rgba(217, 119, 6, 0.25);
  --glow-violet: 0 0 60px rgba(109, 40, 217, 0.25);
  --glow-teal: 0 0 60px rgba(13, 148, 136, 0.25);
}

/* Dark mode overrides */
.dark {
  /* Dark mode - warm dark palette */
  --color-bg: #0a0a0b;
  --color-bg-elevated: #131316;
  --color-bg-higher: #1c1c1f;
  --color-bg-highest: #252529;
  
  /* Accent colors - brighter for dark mode */
  --color-accent-gold: #f59e0b;
  --color-accent-violet: #8b5cf6;
  --color-accent-teal: #14b8a6;
  --color-accent-rose: #f43f5e;
  
  /* Text colors - High contrast for dark mode */
  --color-text-primary: #ffffff;
  --color-text-secondary: #d1d5db;
  --color-text-tertiary: #9ca3af;
  --color-text-muted: #6b7280;
  
  /* Border colors */
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.12);
  
  /* Glow effects - stronger for dark mode */
  --glow-gold: 0 0 60px rgba(245, 158, 11, 0.35);
  --glow-violet: 0 0 60px rgba(139, 92, 246, 0.35);
  --glow-teal: 0 0 60px rgba(20, 184, 166, 0.35);
}

/* Tailwind CSS custom utilities */
.bg-surface {
  background-color: var(--color-bg);
}

.bg-surface-elevated {
  background-color: var(--color-bg-elevated);
}

.bg-surface-higher {
  background-color: var(--color-bg-higher);
}

.bg-surface-highest {
  background-color: var(--color-bg-highest);
}

.text-text-primary {
  color: var(--color-text-primary);
}

.text-text-secondary {
  color: var(--color-text-secondary);
}

.text-text-tertiary {
  color: var(--color-text-tertiary);
}

.text-text-muted {
  color: var(--color-text-muted);
}

.text-accent-gold {
  color: var(--color-accent-gold);
}

.text-accent-violet {
  color: var(--color-accent-violet);
}

.text-accent-teal {
  color: var(--color-accent-teal);
}

.text-accent-rose {
  color: var(--color-accent-rose);
}

.bg-accent-gold {
  background-color: var(--color-accent-gold);
}

.bg-accent-violet {
  background-color: var(--color-accent-violet);
}

.bg-accent-teal {
  background-color: var(--color-accent-teal);
}

.bg-accent-rose {
  background-color: var(--color-accent-rose);
}

.border-border {
  border-color: var(--color-border);
}

.border-border-strong {
  border-color: var(--color-border-strong);
}

/* Typography - refined scale */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}

/* Custom scrollbar - refined */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--color-text-muted);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-secondary);
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-text-muted) var(--color-bg);
}

/* Selection */
::selection {
  background: rgba(245, 158, 11, 0.3);
  color: var(--color-text-primary);
}

/* Skip link */
.skip-to-content {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-accent-gold);
  color: var(--color-bg);
  padding: 1rem 2rem;
  border-radius: 0 0 1rem 1rem;
  font-weight: 600;
  z-index: 9999;
  transition: top 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.skip-to-content:focus {
  top: 0;
}

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--color-accent-gold);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Premium button styles */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-weight: 500;
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-accent-gold), #d97706);
  color: var(--color-bg);
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.4);
}

.btn-secondary {
  background: var(--color-bg-elevated);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  background: var(--color-bg-higher);
  border-color: var(--color-border-strong);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
}

.btn-ghost:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.03);
}

/* Card styles - premium glassmorphism */
.card {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-4px);
}

/* Tag/Badge styles */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.875rem;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-secondary);
  transition: all 0.2s ease;
}

.tag:hover {
  border-color: var(--color-accent-gold);
  color: var(--color-accent-gold);
}

.tag-gold {
  border-color: rgba(245, 158, 11, 0.3);
  color: var(--color-accent-gold);
  background: rgba(245, 158, 11, 0.08);
}

.tag-violet {
  border-color: rgba(124, 58, 237, 0.3);
  color: var(--color-accent-violet);
  background: rgba(124, 58, 237, 0.08);
}

/* Section headers */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
}

.section-label::before {
  content: '';
  width: 2rem;
  height: 1px;
  background: var(--color-accent-gold);
}

.section-title {
  font-family: 'Clash Display', 'Inter', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--color-text-primary);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--color-accent-gold) 0%, var(--color-accent-violet) 50%, var(--color-accent-teal) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-text-gold {
  background: linear-gradient(135deg, #fcd34d 0%, var(--color-accent-gold) 50%, #d97706 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Link hover effect */
.link-hover {
  position: relative;
  color: var(--color-text-secondary);
  transition: color 0.3s ease;
}

.link-hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent-gold);
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.link-hover:hover {
  color: var(--color-text-primary);
}

.link-hover:hover::after {
  width: 100%;
}

/* Decorative elements */
.dot-pattern {
  background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Grid decoration */
.grid-decoration {
  background-image: 
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Animation utilities */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animation delays */
.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
.stagger-5 { transition-delay: 0.5s; }

/* Smooth transitions for theme changes - disabled to prevent flashing */
.app-wrapper * {
  transition-property: background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

/* Disable transitions for performance on scroll */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>