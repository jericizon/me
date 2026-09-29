// Contact details stored base64-encoded so plaintext email/phone never appear in
// served HTML or the JS bundle. Obfuscation against bulk scraping only — the real
// values still ship inside the downloadable PDF, which is intentional.
const EMAIL_B64 = 'aW0uamVyaWNpem9uQGdtYWlsLmNvbQ=='
const PHONE_B64 = 'KzYzIDk3MCAyMTUgMTU5Mg=='

const deob = (value: string): string =>
  typeof atob === 'function'
    ? atob(value)
    : Buffer.from(value, 'base64').toString()

export const contactEmail = (): string => deob(EMAIL_B64)
export const contactPhone = (): string => deob(PHONE_B64)
export const contactMailto = (subject?: string): string =>
  `mailto:${deob(EMAIL_B64)}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
