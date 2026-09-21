<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}>(), {
  variant: 'primary',
  href: undefined,
  external: false,
  type: 'button',
  ariaLabel: undefined,
})

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200 active:translate-y-px focus-visible:outline-none'

const variantClasses: Record<NonNullable<typeof props.variant>, string> = {
  primary: 'bg-accent text-ink hover:bg-accent/90',
  secondary:
    'border border-surface-border bg-surface text-text-primary hover:border-accent/40 hover:bg-surface-elevated',
  ghost: 'text-text-secondary hover:text-accent',
}

const linkAttrs = computed(() =>
  props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {},
)
</script>

<template>
  <a
    v-if="props.href"
    :href="props.href"
    :class="[baseClasses, variantClasses[props.variant]]"
    :aria-label="props.ariaLabel"
    v-bind="linkAttrs"
  >
    <slot />
  </a>
  <button
    v-else
    :type="props.type"
    :class="[baseClasses, variantClasses[props.variant]]"
    :aria-label="props.ariaLabel"
  >
    <slot />
  </button>
</template>
