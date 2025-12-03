// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/me/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Jeric Izon - Full Stack Web Developer | Available for Work',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Primary Meta Tags
        { name: 'title', content: 'Jeric Izon - Full Stack Web Developer | Available for Work' },
        { name: 'description', content: 'Portfolio of Jeric Izon, a Full Stack Web Developer available for work with over 10 years of experience creating modern web applications using Vue.js, React, Node.js, PHP, and Laravel.' },
        { name: 'author', content: 'Jeric Izon' },
        { name: 'keywords', content: 'full stack developer available for hire, full stack web developer available for work, remote full stack developer, web developer, frontend developer, backend developer, vue.js, react.js, node.js, php, laravel, portfolio' },
        { name: 'google-site-verification', content: 'kmTBng2HLaFg6QEQSMBmOAhOa8Ger8VtzcQsgLhURPU' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jericizon.github.io/me/' },
        { property: 'og:title', content: 'Jeric Izon - Full Stack Web Developer | Available for Work' },
        { property: 'og:description', content: 'Portfolio of Jeric Izon, a Full Stack Web Developer available for work with over 10 years of experience creating modern web applications using Vue.js, React, Node.js, PHP, and Laravel.' },
        { property: 'og:image', content: 'https://jericizon.github.io/me/images/banner.png' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://jericizon.github.io/me/' },
        { property: 'twitter:title', content: 'Jeric Izon - Full Stack Web Developer | Available for Work' },
        { property: 'twitter:description', content: 'Portfolio of Jeric Izon, a Full Stack Web Developer available for work with over 10 years of experience creating modern web applications using Vue.js, React, Node.js, PHP, and Laravel.' },
        { property: 'twitter:image', content: 'https://jericizon.github.io/me/images/banner.png' },
        
        // Theme color
        { name: 'theme-color', content: '#111827' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://jericizon.github.io/me/' }
      ],
      script: [
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
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss'
  ],
  // @ts-ignore - colorMode module configuration
  colorMode: {
    classSuffix: '',
    preference: 'system',  // Adapts to device preference
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Space+Grotesk': [300, 400, 500, 600, 700]
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
      crawlLinks: true
    }
  }
})