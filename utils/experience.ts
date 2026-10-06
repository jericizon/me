// Career milestones used for real-time experience metrics.
export const CAREER_START = '2013-11-01' // first web developer role (AGR Operations)
export const LARAVEL_START = '2016-01-01' // SKUBBS
export const VUE_START = '2018-04-01' // OFFEO

// Completed years since a start date; pairs with a "+" suffix ("12+" = at least 12).
export const yearsSince = (startDate: string): number => {
  const start = new Date(startDate)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years--
  }
  return years
}
