<template>
  <a
    :href="props.href"
    target="_blank"
    rel="noopener"
    :download="props.download ? '' : null"
    class="glass-btn"
    aria-label="Download CV"
  >
    <Icon name="tabler:download" class="w-5 h-5" />
    {{ props.label }}
  </a>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  href?: string
  label?: string
  download?: boolean
}>(), {
  href: 'https://drive.google.com/file/d/1n845sYvuU7txNPNTx8s69pOKPBAAqebH/view?usp=sharing',
  label: 'Download CV',
  download: false
})
</script>