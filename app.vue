<script setup>
useSeoMeta({
  // meta title and description should be in content/licens-agreement.md
  ogTitle: "Jeric Izon - Freelance website developer.",
  ogType: "website",
  // ogImage: '/images/home/main.jpg',
  // ogDescription: '',
  ogUrl: useRoute()?.path,
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>