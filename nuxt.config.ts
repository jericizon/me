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
      title: 'Jeric Izon - Full Stack Web Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Primary Meta Tags
        { name: 'title', content: 'Jeric Izon - Full Stack Web Developer' },
        { name: 'description', content: 'Portfolio of Jeric Izon, a Full Stack Web Developer with over 10 years of experience in creating modern web applications and websites.' },
        { name: 'author', content: 'Jeric Izon' },
        { name: 'keywords', content: 'web developer, full stack developer, frontend developer, backend developer, vue.js, react.js, node.js, php, laravel, portfolio' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jericizon.github.io/me/' },
        { property: 'og:title', content: 'Jeric Izon - Full Stack Web Developer' },
        { property: 'og:description', content: 'Portfolio of Jeric Izon, a Full Stack Web Developer with over 10 years of experience in creating modern web applications and websites.' },
        { property: 'og:image', content: 'https://jericizon.github.io/me/images/banner.png' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://jericizon.github.io/me/' },
        { property: 'twitter:title', content: 'Jeric Izon - Full Stack Web Developer' },
        { property: 'twitter:description', content: 'Portfolio of Jeric Izon, a Full Stack Web Developer with over 10 years of experience in creating modern web applications and websites.' },
        { property: 'twitter:image', content: 'https://jericizon.github.io/me/images/banner.png' },
        
        // Theme color
        { name: 'theme-color', content: '#111827' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://jericizon.github.io/me/' }
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
    preference: 'light',
    fallback: 'light'
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