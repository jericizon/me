import { useState } from '#imports'

export function useContactForm() {
  const contactFormOpen = useState<boolean>('contactFormOpen', () => false)

  const openContactForm = () => {
    contactFormOpen.value = true
    if (typeof window !== 'undefined') {
      // Defer to next tick to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById('contact-section')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Also update hash for deep-linking
        if (location.hash !== '#contact-section') {
          history.replaceState(null, '', '#contact-section')
        }
      }, 0)
    }
  }

  return { contactFormOpen, openContactForm }
}
