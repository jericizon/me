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
  <NuxtLayout
    data-spy="scroll"
    data-target=".site-navbar-target"
    data-offset="300"
  >
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

html {
  scroll-behavior: smooth;
}
</style>