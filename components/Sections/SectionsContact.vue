<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Contact data (without phone)
const contactMethods = [
  {
    id: 1,
    title: 'Email Address',
    value: 'im.jericizon@gmail.com',
    link: 'mailto:im.jericizon@gmail.com',
    icon: 'tabler:mail'
  },
  {
    id: 2,
    title: 'LinkedIn',
    value: 'linkedin.com/in/jericizon',
    link: 'https://www.linkedin.com/in/jericizon',
    icon: 'tabler:brand-linkedin'
  },
  {
    id: 3,
    title: 'GitHub',
    value: 'github.com/jericizon',
    link: 'https://github.com/jericizon',
    icon: 'tabler:brand-github'
  }
];

// Animation refs
const titleRef = ref<HTMLElement | null>(null);
const contactRefs = ref<HTMLElement[]>([]);

// Initialize animations
onMounted(() => {
  // Animate title
  setTimeout(() => {
    if (titleRef.value) {
      titleRef.value.style.opacity = '1';
      titleRef.value.style.transform = 'translateY(0)';
    }
  }, 200);
  
  // Animate contact cards with staggered delay
  contactRefs.value.forEach((el, index) => {
    setTimeout(() => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    }, 500 + (index * 150));
  });
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
      </div>
      
      <!-- Contact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div 
          v-for="(contact, index) in contactMethods" 
          :key="contact.id"
          :ref="el => { if (el) contactRefs[index] = el as HTMLElement }"
          class="opacity-0 translate-y-8 transition duration-700 ease-out"
          :style="{ transitionDelay: `${index * 120}ms` }"
        >
          <div class="p-6 rounded-xl h-full flex flex-col items-center justify-center text-center bg-white/10 border border-white/10 shadow-lg backdrop-blur-md">
            <!-- Icon -->
            <div class="contact-icon mb-5 p-4 rounded-full bg-primary-500/10">
              <Icon :name="contact.icon" class="w-8 h-8 text-primary-300" />
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold mb-3">{{ contact.title }}</h3>
            
            <!-- Value with link -->
            <a 
              :href="contact.link" 
              target="_blank" 
              class="text-primary-200 hover:text-primary-300 transition-colors flex items-center gap-1"
            >
              {{ contact.value }}
              <Icon 
                v-if="contact.link.startsWith('http')" 
                name="tabler:external-link" 
                class="w-4 h-4" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>