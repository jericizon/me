<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { useContactForm } from '@/composables/useContactForm';
import { useAnalytics } from '@/composables/useAnalytics';

// Animation refs
const titleRef = ref<HTMLElement | null>(null);
const formCardRef = ref<HTMLElement | null>(null);

// UI state from global composable
const { contactFormOpen } = useContactForm();

const { trackEvent } = useAnalytics();

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

// Ensure form section is visible when open state becomes true
watchEffect(() => {
  if (contactFormOpen.value) {
    // no-op here; actual scrolling is triggered in composable
  }
});
</script>

<template>
  <section id="contact-section" class="py-24 md:py-32 relative overflow-hidden" aria-labelledby="contact-title">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- Section header -->
      <div ref="titleRef" class="mb-14 opacity-0 translate-y-3 transition duration-700 ease-out">
        <p class="eyebrow mb-4">
          <span class="eyebrow-line"></span>
          Contact
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <!-- Left: headline -->
          <div>
            <h2 id="contact-title" class="section-title mb-5">
              Get in<br/>
              <span class="text-gradient">touch.</span>
            </h2>
            <p class="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-sm">
              Based in the Philippines, working remotely with clients in Singapore and worldwide. Available for part-time, freelance, and remote roles.
            </p>
          </div>

          <!-- Right: contact info cards -->
          <div class="space-y-4">
            <a
              href="mailto:im.jericizon@gmail.com"
              class="flex items-center gap-4 p-5 card group hover:border-primary-300 dark:hover:border-primary-700/50 transition-colors duration-200"
            >
              <div class="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                <Icon name="tabler:mail" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <div class="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-0.5">Email</div>
                <div class="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">im.jericizon@gmail.com</div>
              </div>
              <Icon name="tabler:arrow-up-right" class="w-4 h-4 text-neutral-400 group-hover:text-primary-500 ml-auto transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/jericizon"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-4 p-5 card group hover:border-primary-300 dark:hover:border-primary-700/50 transition-colors duration-200"
            >
              <div class="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                <Icon name="tabler:brand-linkedin" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <div class="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-0.5">LinkedIn</div>
                <div class="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">linkedin.com/in/jericizon</div>
              </div>
              <Icon name="tabler:arrow-up-right" class="w-4 h-4 text-neutral-400 group-hover:text-primary-500 ml-auto transition-colors" />
            </a>

            <a
              href="https://github.com/jericizon"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-4 p-5 card group hover:border-primary-300 dark:hover:border-primary-700/50 transition-colors duration-200"
            >
              <div class="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                <Icon name="tabler:brand-github" class="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <div class="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-0.5">GitHub</div>
                <div class="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">github.com/jericizon</div>
              </div>
              <Icon name="tabler:arrow-up-right" class="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 ml-auto transition-colors" />
            </a>
          </div>
        </div>

        <!-- Form trigger -->
        <div class="mt-10 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <button
            v-if="!contactFormOpen"
            type="button"
            class="btn btn-primary btn-lg group"
            @click="() => { contactFormOpen = true; trackEvent('contact_form_open', { section: 'contact_section', label: 'open_contact_form' }); }"
          >
            <span>Open Contact Form</span>
            <Icon name="tabler:send" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Google Form embed -->
      <div v-if="contactFormOpen" class="max-w-3xl">
        <div ref="formCardRef" class="card overflow-hidden opacity-0 translate-y-3 transition duration-700 ease-out">
          <div class="p-5 border-b border-neutral-200/50 dark:border-neutral-800/50">
            <div class="text-sm font-semibold text-neutral-900 dark:text-white">Send a Message</div>
            <div class="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">I'll get back to you within 24 hours.</div>
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdb9dnAFUolvGaSHco4QziKWRqojD8UfO5luLh6sMWKXPZO1w/viewform?embedded=true"
            width="100%"
            height="900"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Contact Form"
            aria-label="Contact form to get in touch with Jeric Izon"
            class="block w-full"
          >Loading…</iframe>
        </div>
      </div>
    </div>
  </section>
</template>