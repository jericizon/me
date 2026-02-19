import { useState } from '#imports'

export function useContactForm() {
  const contactFormOpen = useState<boolean>('contactFormOpen', () => false)
  const baseURL = useRuntimeConfig().app.baseURL

  const openContactForm = () => {
    contactFormOpen.value = true
    if (typeof window !== 'undefined') {
      // Defer to next tick to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById('contact-section')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          const target = `${baseURL}#contact-section`
          if (!location.pathname.startsWith(baseURL) || !location.hash.includes('contact-section')) {
            location.href = target
            return
          }
        }
        // Also update hash for deep-linking
        if (location.hash !== '#contact-section') {
          history.replaceState(null, '', '#contact-section')
        }
      }, 0)
    }
  }

  const closeContactForm = () => {
    contactFormOpen.value = false
  }

  return { contactFormOpen, openContactForm, closeContactForm }
}
