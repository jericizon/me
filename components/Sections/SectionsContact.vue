<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useContactForm } from '@/composables/useContactForm'

const { contactFormOpen, openContactForm } = useContactForm()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section 
    ref="sectionRef"
    id="contact-section" 
    class="relative py-24 lg:py-32 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Section header -->
      <div 
        class="max-w-3xl mx-auto text-center mb-12 transition-all duration-1000"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <span class="section-label">Contact</span>
        <h2 class="section-title mb-6">
          Let's create<br />
          <span class="gradient-text-gold">something together</span>
        </h2>
        <p class="text-xl text-text-secondary leading-relaxed">
          Have a project in mind? I'm always open to discussing new opportunities 
          and creative collaborations.
        </p>
      </div>

      <!-- Contact options -->
      <div 
        class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <a 
          href="mailto:hey@jericizon.com"
          class="card p-6 text-center group hover:border-accent-gold/30"
        >
          <div class="w-14 h-14 rounded-2xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Icon name="tabler:mail" class="w-7 h-7 text-accent-gold" />
          </div>
          <h3 class="font-medium text-text-primary mb-1">Email</h3>
          <p class="text-sm text-text-tertiary">hey@jericizon.com</p>
        </a>

        <a 
          href="https://calendly.com/jericizon"
          target="_blank"
          rel="noopener"
          class="card p-6 text-center group hover:border-accent-violet/30"
        >
          <div class="w-14 h-14 rounded-2xl bg-accent-violet/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Icon name="tabler:calendar" class="w-7 h-7 text-accent-violet" />
          </div>
          <h3 class="font-medium text-text-primary mb-1">Schedule</h3>
          <p class="text-sm text-text-tertiary">Book a call</p>
        </a>

        <button 
          @click="openContactForm"
          class="card p-6 text-center group hover:border-accent-teal/30 text-left w-full"
        >
          <div class="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Icon name="tabler:message" class="w-7 h-7 text-accent-teal" />
          </div>
          <h3 class="font-medium text-text-primary mb-1">Form</h3>
          <p class="text-sm text-text-tertiary">Send a message</p>
        </button>
      </div>

      <!-- Contact form embed -->
      <div 
        v-if="contactFormOpen"
        class="max-w-2xl mx-auto transition-all duration-700"
        :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <div class="card overflow-hidden">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdb9dnAFUolvGaSHco4QziKWRqojD8UfO5luLh6sMWKXPZO1w/viewform?embedded=true" 
            width="100%" 
            height="800" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            title="Contact Form"
            class="w-full"
          >Loading…</iframe>
        </div>
      </div>
    </div>
  </section>
</template>