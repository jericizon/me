<template>
  <a
    :href="props.href"
    target="_blank"
    rel="noopener"
    :download="props.download ? '' : null"
    class="btn btn-primary btn-lg"
    aria-label="Download CV"
  >
    <span>{{ props.label }}</span>
    <Icon name="tabler:download" class="w-5 h-5" />
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