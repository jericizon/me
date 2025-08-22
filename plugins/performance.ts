import { defineNuxtPlugin } from '#app'
import { withBase } from 'ufo'
import { useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      // Lazy load images with Intersection Observer
      const lazyImages = document.querySelectorAll('img[loading="lazy"]')
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              const src = img.getAttribute('data-src')
              
              if (src) {
                img.src = src
                img.removeAttribute('data-src')
              }
              
              imageObserver.unobserve(img)
            }
          })
        })
        
        lazyImages.forEach(img => {
          imageObserver.observe(img)
        })
      } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyImages.forEach(img => {
          const src = img.getAttribute('data-src')
          if (src) {
            (img as HTMLImageElement).src = src
            img.removeAttribute('data-src')
          }
        })
      }
      
      // Preload critical resources (respect baseURL)
      const baseURL = useRuntimeConfig().app.baseURL
      const preloadLinks = [
        { rel: 'preload', href: withBase('/icons/vue.svg', baseURL), as: 'image' },
        { rel: 'preload', href: withBase('/icons/nuxt.svg', baseURL), as: 'image' },
        { rel: 'preload', href: withBase('/icons/tailwind.svg', baseURL), as: 'image' }
      ]
      
      preloadLinks.forEach(link => {
        const linkEl = document.createElement('link')
        linkEl.rel = link.rel
        linkEl.href = link.href
        linkEl.as = link.as
        document.head.appendChild(linkEl)
      })
    })
  }
})
