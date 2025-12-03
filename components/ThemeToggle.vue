<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value: boolean) {
    colorMode.preference = value ? 'dark' : 'light'
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}

// Get the current icon based on mode
const currentIcon = computed(() => {
  if (colorMode.value === 'dark') {
    return 'tabler:moon-filled'
  }
  return 'tabler:sun-filled'
})

const nextMode = computed(() => {
  return colorMode.value === 'dark' ? 'Light' : 'Dark'
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="theme-toggle group relative"
    :aria-label="`Switch to ${nextMode} mode`"
    :title="`Switch to ${nextMode} mode`"
  >
    <!-- Button background with glass effect -->
    <span class="
      relative flex items-center justify-center
      w-10 h-10 rounded-xl
      bg-white/60 dark:bg-neutral-800/60
      backdrop-blur-md
      border border-white/30 dark:border-white/10
      shadow-soft dark:shadow-glass-dark-sm
      transition-all duration-300 ease-out
      group-hover:scale-110
      group-hover:shadow-medium dark:group-hover:shadow-glass-dark
      group-hover:border-primary-500/30 dark:group-hover:border-primary-400/30
      group-active:scale-95
    ">
      <!-- Sun icon (light mode) -->
      <Icon
        name="tabler:sun-filled"
        class="
          absolute w-5 h-5
          text-amber-500
          transition-all duration-300
          dark:opacity-0 dark:rotate-90 dark:scale-0
          opacity-100 rotate-0 scale-100
        "
      />
      
      <!-- Moon icon (dark mode) -->
      <Icon
        name="tabler:moon-filled"
        class="
          absolute w-5 h-5
          text-primary-400
          transition-all duration-300
          dark:opacity-100 dark:rotate-0 dark:scale-100
          opacity-0 -rotate-90 scale-0
        "
      />
    </span>
    
    <!-- Glow effect on hover -->
    <span class="
      absolute inset-0 rounded-xl
      bg-gradient-to-r from-amber-500/20 to-primary-500/20
      dark:from-primary-500/20 dark:to-secondary-500/20
      opacity-0 group-hover:opacity-100
      blur-xl transition-opacity duration-300
      -z-10
    "></span>
  </button>
</template>

<style scoped>
.theme-toggle {
  @apply relative cursor-pointer;
}
</style>
