<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'accent' | 'surface' | 'outline'
  dot?: boolean
}>(), {
  variant: 'surface',
  dot: false,
})

const variantClasses: Record<NonNullable<typeof props.variant>, string> = {
  accent: 'border-accent/40 bg-accent-dim text-accent',
  surface: 'border-surface-border bg-surface-elevated text-text-secondary',
  outline: 'border-surface-border bg-transparent text-text-muted',
}
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs tracking-wide"
    :class="variantClasses[props.variant]"
  >
    <span
      v-if="props.dot"
      class="h-1.5 w-1.5 rounded-full bg-accent"
      aria-hidden="true"
    />
    <slot />
  </span>
</template>
