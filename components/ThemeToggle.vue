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

const setSystem = () => {
  colorMode.preference = 'system'
}

const currentIcon = computed(() => {
  if (colorMode.value === 'dark') return 'tabler:moon'
  return 'tabler:sun'
})
</script>

<template>
  <div class="flex items-center gap-1 p-1 rounded-xl bg-surface-elevated border border-border">
    <!-- Light mode button -->
    <button
      @click="colorMode.preference = 'light'"
      class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
      :class="colorMode.value === 'light' 
        ? 'bg-surface-highest text-accent-gold shadow-sm' 
        : 'text-text-tertiary hover:text-text-primary'"
      aria-label="Light mode"
      title="Light mode"
    >
      <Icon name="tabler:sun" class="w-5 h-5" />
    </button>
    
    <!-- System preference button -->
    <button
      @click="setSystem"
      class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
      :class="colorMode.preference === 'system'
        ? 'bg-surface-highest text-accent-gold shadow-sm'
        : 'text-text-tertiary hover:text-text-primary'"
      aria-label="System preference"
      title="System preference"
    >
      <Icon name="tabler:device-desktop" class="w-5 h-5" />
    </button>
    
    <!-- Dark mode button -->
    <button
      @click="colorMode.preference = 'dark'"
      class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
      :class="colorMode.value === 'dark'
        ? 'bg-surface-highest text-accent-gold shadow-sm'
        : 'text-text-tertiary hover:text-text-primary'"
      aria-label="Dark mode"
      title="Dark mode"
    >
      <Icon name="tabler:moon" class="w-5 h-5" />
    </button>
  </div>
</template>
