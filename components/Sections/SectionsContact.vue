<script setup lang="ts">
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdb9dnAFUolvGaSHco4QziKWRqojD8UfO5luLh6sMWKXPZO1w/viewform'

const handleContactFormClick = () => {
  window.open(googleFormUrl, '_blank')
}
</script>

<template>
  <section id="contact-section" class="relative py-24 lg:py-32">
    <!-- Section number watermark -->
    <div class="absolute top-8 right-8 lg:right-16 font-display font-bold text-[12rem] lg:text-[16rem] text-light-900/[0.02] dark:text-base-50/[0.02] leading-none select-none pointer-events-none">
      05
    </div>

    <div class="relative z-10 px-6 lg:px-16">
      <!-- Section header -->
      <div class="mb-16 lg:mb-24">
        <div class="flex items-center gap-4 mb-6">
          <span class="font-mono text-xs text-coral-500">05</span>
          <span class="w-12 h-px bg-coral-500"></span>
          <span class="font-mono text-xs text-light-500 dark:text-base-400 tracking-wider uppercase">Contact</span>
        </div>
        <h2 class="font-display font-bold text-4xl lg:text-6xl text-light-900 dark:text-base-50 leading-tight tracking-tight max-w-3xl">
          Let's build something that matters
        </h2>
      </div>

      <!-- Contact grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <!-- Left: CTA text -->
        <div class="space-y-8">
          <p class="text-xl lg:text-2xl text-light-600 dark:text-base-300 leading-relaxed">
            I'm selective about projects and only partner with founders serious about building substantial systems.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-center gap-4 text-light-500 dark:text-base-400">
              <span class="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span>Accepting new projects</span>
            </div>
            <div class="flex items-center gap-4 text-light-500 dark:text-base-400">
              <Icon name="tabler:clock" class="w-5 h-5 text-coral-500" />
              <span>Typical response time: under 24 hours</span>
            </div>
          </div>

          <!-- Social links as text -->
          <div class="pt-8 border-t border-light-300 dark:border-base-600/30 space-y-4">
            <div class="font-mono text-xs text-light-600 dark:text-base-500 tracking-wider">CONNECT</div>
            <div class="flex flex-col gap-3">
              <a 
                href="https://www.linkedin.com/in/jericizon" 
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-3 text-lg text-light-600 dark:text-base-300 hover:text-coral-500 transition-colors"
              >
                <span>linkedin.com/in/jericizon</span>
                <Icon name="tabler:arrow-up-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://github.com/jericizon" 
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-3 text-lg text-light-600 dark:text-base-300 hover:text-coral-500 transition-colors"
              >
                <span>github.com/jericizon</span>
                <Icon name="tabler:arrow-up-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Action buttons -->
        <div class="space-y-6">
          <button
            @click="handleContactFormClick"
            class="group w-full p-8 border border-coral-500 hover:bg-coral-500/10 transition-all duration-300 text-left"
          >
            <div class="flex items-start justify-between">
              <div>
                <div class="font-mono text-xs text-coral-500 mb-2">START A PROJECT</div>
                <h3 class="font-display font-bold text-2xl text-light-900 dark:text-base-50">Send project details</h3>
                <p class="text-light-500 dark:text-base-400 mt-2 text-sm">Fill out a quick form about your project scope, timeline, and budget.</p>
              </div>
              <Icon name="tabler:arrow-up-right" class="w-6 h-6 text-coral-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>

          <a
            href="https://cal.com/jericizon" 
            target="_blank"
            rel="noopener"
            class="group block w-full p-8 border border-light-300 dark:border-base-600/50 hover:border-coral-500/50 hover:bg-surface-light-elevated/30 dark:hover:bg-surface-elevated/30 transition-all duration-300"
          >
            <div class="flex items-start justify-between">
              <div>
                <div class="font-mono text-xs text-light-500 dark:text-base-400 mb-2">PREFER TO TALK?</div>
                <h3 class="font-display font-bold text-2xl text-light-900 dark:text-base-50">Schedule a call</h3>
                <p class="text-light-500 dark:text-base-400 mt-2 text-sm">Book a 30-minute discovery call to discuss your project in detail.</p>
              </div>
              <Icon name="tabler:calendar" class="w-6 h-6 text-light-500 dark:text-base-400 group-hover:text-coral-500 transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
