<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggle = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary"
    aria-label="Toggle dark mode preview"
    title="Toggle dark mode preview"
    @click="toggle"
  >
    <ClientOnly>
      <Icon
        :name="isDark ? 'tabler:sun' : 'tabler:moon'"
        class="h-5 w-5"
        aria-hidden="true"
      />
      <template #fallback>
        <span class="inline-block h-5 w-5" aria-hidden="true" />
      </template>
    </ClientOnly>
  </button>
</template>
