<script setup lang="ts">
const { openContactForm } = useContactForm()

const scrollToAbout = () => {
  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home-section" class="relative min-h-screen flex flex-col justify-end pb-16 lg:pb-24 overflow-hidden">
    
    <!-- Background name (massive outlined text) -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="font-display font-bold text-stroke-2 text-transparent text-[25vw] lg:text-[20vw] tracking-tighter leading-none opacity-[0.03]">
        JERIC
      </span>
    </div>

    <!-- Gradient orb accent -->
    <div class="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-coral-500/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Main content -->
    <div class="relative z-10 w-full px-6 lg:px-16">
      
      <!-- Top meta line -->
      <div class="flex items-center gap-4 mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
        <span class="w-12 h-px bg-coral-500"></span>
        <span class="font-mono text-xs text-base-300 tracking-wider uppercase">Available for select projects</span>
      </div>

      <!-- Giant headline -->
      <div class="max-w-[1400px]">
        <h1 class="font-display font-bold text-base-50 leading-[0.95] tracking-tighter animate-fade-in-up" style="font-size: clamp(3rem, 12vw, 10rem); animation-delay: 0.3s">
          Senior<br/>
          <span class="text-coral-500">Full Stack</span><br/>
          Engineer
        </h1>
      </div>

      <!-- Supporting text -->
      <div class="mt-8 lg:mt-12 max-w-xl animate-fade-in-up" style="animation-delay: 0.5s">
        <p class="text-lg lg:text-xl text-base-300 leading-relaxed">
          Building production SaaS platforms, scalable APIs, and internal tools that drive business growth. 10+ years shipping systems for startups worldwide.
        </p>
      </div>

      <!-- CTA row -->
      <div class="mt-10 flex flex-wrap items-center gap-6 animate-fade-in-up" style="animation-delay: 0.6s">
        <button
          @click="openContactForm"
          class="group flex items-center gap-3 px-8 py-4 bg-coral-500 text-surface font-semibold text-sm tracking-wide hover:bg-coral-400 transition-all duration-300"
        >
          <span>Start a project</span>
          <Icon name="tabler:arrow-up-right" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        
        <button
          @click="scrollToAbout"
          class="group flex items-center gap-3 text-base-300 hover:text-base-50 transition-colors"
        >
          <span class="text-sm tracking-wide">Learn more</span>
          <Icon name="tabler:arrow-down" class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      <!-- Bottom stats strip -->
      <div class="mt-16 lg:mt-24 pt-8 border-t border-base-600/50 animate-fade-in-up" style="animation-delay: 0.7s">
        <div class="grid grid-cols-3 gap-8 lg:gap-16 max-w-3xl">
          <div>
            <div class="font-display font-bold text-3xl lg:text-4xl text-base-50">10+</div>
            <div class="text-xs text-base-400 mt-1">Years experience</div>
          </div>
          <div>
            <div class="font-display font-bold text-3xl lg:text-4xl text-base-50">100+</div>
            <div class="text-xs text-base-400 mt-1">Projects shipped</div>
          </div>
          <div>
            <div class="font-display font-bold text-3xl lg:text-4xl text-base-50">6+</div>
            <div class="text-xs text-base-400 mt-1">Countries served</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 animate-fade-in" style="animation-delay: 1s">
      <span class="font-mono text-xs text-base-400 tracking-wider uppercase" style="writing-mode: vertical-rl">Scroll</span>
      <div class="w-px h-16 bg-base-600 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-coral-500 animate-slide-down"></div>
      </div>
    </div>
  </section>
</template>
