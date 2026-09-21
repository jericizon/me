// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/me/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Jeric Izon - Senior Full-Stack Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

        // Primary Meta Tags
        { name: 'title', content: 'Jeric Izon - Senior Full-Stack Engineer' },
        { name: 'description', content: 'Jeric Izon is a senior full-stack engineer specializing in Laravel, Vue/Nuxt, NestJS, AWS and production web systems.' },
        { name: 'author', content: 'Jeric Izon' },
        { name: 'keywords', content: 'senior full-stack engineer, laravel, vue, nuxt, nestjs, aws, postgresql, production web systems, backend architecture' },
        { name: 'google-site-verification', content: 'kmTBng2HLaFg6QEQSMBmOAhOa8Ger8VtzcQsgLhURPU' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jericizon.github.io/me/' },
        { property: 'og:title', content: 'Jeric Izon - Senior Full-Stack Engineer' },
        { property: 'og:description', content: 'Building production web systems from architecture to deployment.' },
        { property: 'og:image', content: 'https://jericizon.github.io/me/images/banner.png' },

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://jericizon.github.io/me/' },
        { property: 'twitter:title', content: 'Jeric Izon - Senior Full-Stack Engineer' },
        { property: 'twitter:description', content: 'Building production web systems from architecture to deployment.' },
        { property: 'twitter:image', content: 'https://jericizon.github.io/me/images/banner.png' },

        // Theme color
        { name: 'theme-color', content: '#0A0A0A' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://jericizon.github.io/me/' }
      ],
      script: [
        {
          // Initialize dataLayer BEFORE the external GA script loads
          innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TZV9SR0KHH');`,
          type: 'text/javascript'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-TZV9SR0KHH',
          async: true
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    'nuxt-icon'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  // @ts-ignore - colorMode module configuration
  colorMode: {
    classSuffix: '',
    preference: 'dark',  // Dark-only design system
    fallback: 'dark',
    storageKey: 'nuxt-color-mode'
  },
  googleFonts: {
    families: {
      'Space Grotesk': [400, 500, 600, 700],
      Inter: [300, 400, 500, 600],
      'JetBrains Mono': [400, 500]
    },
    display: 'swap'
  },
  // Ensure Vite bundler is used and allow project-level config
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  typescript: {
    strict: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/services/custom-website-development',
        '/hire-freelance-web-developer'
      ]
    }
  }
})