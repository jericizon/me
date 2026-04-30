import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    const w = window as unknown as {
      dataLayer: any[]
      gtag?: (...args: any[]) => void
    }

    // Wait for gtag to be available (loaded by external script)
    const waitForGtag = (callback: () => void, maxAttempts = 50) => {
      let attempts = 0
      const check = () => {
        attempts++
        if (typeof w.gtag === 'function') {
          callback()
        } else if (attempts < maxAttempts) {
          setTimeout(check, 100)
        }
      }
      check()
    }

    // Track SPA navigation for Nuxt
    waitForGtag(() => {
      const originalPushState = history.pushState
      const originalReplaceState = history.replaceState

      const sendPageView = () => {
        w.gtag!('event', 'page_view', {
          page_location: window.location.href,
          page_path: window.location.pathname,
          page_title: document.title
        })
      }

      // Override pushState to track SPA navigation
      history.pushState = function (...args) {
        originalPushState.apply(this, args)
        sendPageView()
      }

      history.replaceState = function (...args) {
        originalReplaceState.apply(this, args)
        sendPageView()
      }

      // Listen for popstate (back/forward buttons)
      window.addEventListener('popstate', sendPageView)
    })
  }
})
