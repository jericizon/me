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
      title: 'Freelance Website Developer | Senior Full-Stack Developer for Hire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        
        // Primary Meta Tags
        { name: 'title', content: 'Freelance Website Developer | Senior Full-Stack Developer for Hire' },
        { name: 'description', content: 'Hire Jeric Izon, a senior freelance website developer with 10+ years of experience in custom website development, web app builds, and ongoing freelance projects for global clients.' },
        { name: 'author', content: 'Jeric Izon' },
        { name: 'keywords', content: 'website developer, freelance web developer, senior developer for hire, hire freelance developer, custom website development, freelance website developer, full stack developer freelance, remote web developer, contract web developer, freelance projects' },
        { name: 'google-site-verification', content: 'kmTBng2HLaFg6QEQSMBmOAhOa8Ger8VtzcQsgLhURPU' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jericizon.github.io/me/' },
        { property: 'og:title', content: 'Freelance Website Developer | Senior Full-Stack Developer for Hire' },
        { property: 'og:description', content: 'Senior freelance website developer offering custom website development, scalable web apps, and long-term freelance support for growth-focused businesses.' },
        { property: 'og:image', content: 'https://jericizon.github.io/me/images/banner.png' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://jericizon.github.io/me/' },
        { property: 'twitter:title', content: 'Freelance Website Developer | Senior Full-Stack Developer for Hire' },
        { property: 'twitter:description', content: 'Hire a senior freelance web developer for custom websites, modern web apps, and ongoing freelance development projects.' },
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
      crawlLinks: true,
      routes: [
        '/',
        '/services/custom-website-development',
        '/hire-freelance-web-developer'
      ]
    }
  }
})