<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Animation refs
const titleRef = ref<HTMLElement | null>(null);
const formCardRef = ref<HTMLElement | null>(null);

// UI state
const showForm = ref(false);

// Initialize animations
onMounted(() => {
  setTimeout(() => {
    if (titleRef.value) {
      titleRef.value.style.opacity = '1';
      titleRef.value.style.transform = 'translateY(0)';
    }
  }, 150);

  setTimeout(() => {
    if (formCardRef.value) {
      formCardRef.value.style.opacity = '1';
      formCardRef.value.style.transform = 'translateY(0)';
    }
  }, 350);
});
</script>

<template>
  <section id="contact-section" class="py-20 md:py-24 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div ref="titleRef" class="text-center mb-16 opacity-0 translate-y-3 transition duration-700 ease-out">
        <h2 class="section-title">Contact</h2>
        <div class="section-subtitle">Get In Touch</div>
        <p class="mt-4 max-w-2xl mx-auto text-lg">
          Got an idea you're itching to bring to life? I'm all ears and ready
          to help you execute it flawlessly. Let's chat soon! 🚀
        </p>
        <!-- Reveal Form Button -->
        <div class="mt-8">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            @click="showForm = true"
            v-if="!showForm"
          >
            <span>Open Contact Form</span>
            <Icon name="tabler:send" class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <!-- Contact form only -->
      <div class="max-w-3xl mx-auto" v-if="showForm">
        <!-- Google Form Embed -->
        <div ref="formCardRef" class="transition duration-700 ease-out">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0E5mceDIGOL7A3terd0T5QU_qQ-1bn0UiUvQM6NFebSx1dA/viewform?embedded=true" width="640" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
  </section>
</template>