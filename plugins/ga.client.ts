import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    const w = window as unknown as {
      dataLayer?: any[]
      gtag?: (...args: any[]) => void
    }

    w.dataLayer = w.dataLayer || []

    w.gtag = w.gtag || function (...args: any[]) {
      w.dataLayer?.push(args)
    }

    w.gtag('js', new Date())
    w.gtag('config', 'G-TZV9SR0KHH')
  }
})
