<template>
  <div>
    <SectionsBanner />
    <!-- Main navigation placed after banner (full-bleed) -->
    <div ref="navOuterRef">
      <!-- Spacer prevents layout jump when nav becomes fixed (mobile always, desktop only when fixed) -->
      <div v-show="isMobile || (!isMobile && isNavFixed)" :style="{ height: spacerHeight + 'px' }" aria-hidden="true"></div>
      <div
        ref="navInnerRef"
        :class="[
          'w-full left-0 right-0',
          isMobile ? 'fixed top-0 z-[100]' : (isNavFixed ? 'fixed top-0 z-[100]' : 'relative z-20')
        ]"
      >
        <NavMenu :has-scrolled="isMobile ? true : isNavFixed" />
      </div>
    </div>
    <SectionsAboutMe />
    <SectionsResume />
    <SectionsTools />
    <SectionsProjects />
    <SectionsCTA />
    <SectionsContact />
    <Footer />
  </div>
  
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Hire Freelance Website Developer | Senior Full-Stack Developer',
  description: 'Need a custom website or web app? Hire Jeric Izon, a senior freelance web developer for custom website development, rebuilds, and ongoing freelance projects.',
  ogTitle: 'Hire Freelance Website Developer | Senior Full-Stack Developer',
  ogDescription: 'Senior freelance website developer for custom builds, website redesigns, and scalable web apps for businesses ready to ship.',
  twitterTitle: 'Hire Freelance Website Developer | Senior Full-Stack Developer',
  twitterDescription: 'Custom website development and freelance senior developer support for growth-focused businesses.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Freelance Website Developer for Hire',
        url: 'https://jericizon.github.io/me/',
        description: 'Freelance website developer services including custom website development, senior engineering support, and long-term freelance projects.',
        about: ['Website Developer', 'Freelance Web Developer', 'Senior Developer', 'Custom Website Development']
      })
    }
  ]
})

const isNavFixed = ref(false)
const isMobile = ref(false)
const navOuterRef = ref<HTMLElement | null>(null)
const navInnerRef = ref<HTMLElement | null>(null)
const spacerHeight = ref(0)
let thresholdTop = 0

const onScroll = () => {
  if (!navOuterRef.value) return
  const shouldFix = window.scrollY >= thresholdTop
  if (shouldFix !== isNavFixed.value) {
    isNavFixed.value = shouldFix
  }
}

const recalc = () => {
  if (navOuterRef.value) thresholdTop = navOuterRef.value.offsetTop
  if (navInnerRef.value) spacerHeight.value = navInnerRef.value.offsetHeight
  onScroll()
}

onMounted(() => {
  nextTick(() => {
    // detect mobile
    const mql = window.matchMedia('(max-width: 767px)')
    const setMobile = () => { isMobile.value = mql.matches }
    setMobile()
    mql.addEventListener ? mql.addEventListener('change', setMobile) : mql.addListener(setMobile)

    recalc()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', recalc, { passive: true } as any)
    // Recalculate after fonts/images load to capture final heights
    window.addEventListener('load', recalc)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', recalc as any)
  window.removeEventListener('load', recalc)
  const mql = window.matchMedia('(max-width: 767px)')
  const setMobile = () => {}
  mql.removeEventListener ? mql.removeEventListener('change', setMobile) : mql.removeListener(setMobile)
})

watch(isNavFixed, () => {
  nextTick(() => {
    if (navInnerRef.value) spacerHeight.value = navInnerRef.value.offsetHeight
  })
})

watch(isMobile, () => {
  nextTick(() => {
    if (navInnerRef.value) spacerHeight.value = navInnerRef.value.offsetHeight
  })
})
</script>