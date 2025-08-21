<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Contact data (without phone)
const contactMethods = [
  {
    id: 1,
    title: 'Email Address',
    value: 'im.jericizon@gmail.com',
    link: 'mailto:im.jericizon@gmail.com',
    icon: 'heroicons:envelope'
  },
  {
    id: 2,
    title: 'LinkedIn',
    value: 'linkedin.com/in/jericizon',
    link: 'https://www.linkedin.com/in/jericizon',
    icon: 'mdi:linkedin'
  },
  {
    id: 3,
    title: 'GitHub',
    value: 'github.com/jericizon',
    link: 'https://github.com/jericizon',
    icon: 'mdi:github'
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
      <div ref="titleRef" class="text-center mb-16 animate-item">
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
          class="contact-card"
        >
          <div class="glass-card p-6 rounded-xl h-full flex flex-col items-center justify-center text-center">
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
                name="heroicons:arrow-top-right-on-square" 
                class="w-4 h-4" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.contact-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.glass-card {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-primary-300);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(var(--color-primary-500), 0.2);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>