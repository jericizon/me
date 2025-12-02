export interface AnalyticsEventParams {
  // Flexible GA4 params (section, label, etc.)
  [key: string]: unknown
}

export function useAnalytics() {
  const trackEvent = (eventName: string, params: AnalyticsEventParams = {}) => {
    if (typeof window === 'undefined') return

    const w = window as unknown as {
      gtag?: (...args: any[]) => void
    }

    if (typeof w.gtag !== 'function') {
      return
    }

    w.gtag('event', eventName, params)
  }

  return { trackEvent }
}
