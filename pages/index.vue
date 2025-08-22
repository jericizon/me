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
          'left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen',
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