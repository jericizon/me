<script setup lang="ts">
// Calculate age dynamically
const myAge = computed(() => {
  const birthDate = new Date("1992-02-04");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
});

// Removed on-scroll animations and related refs
</script>

<template>
  <section id="about-section" class="py-20 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-10 md:mb-14">
        <h2 class="section-title">About Me</h2>
        <div class="section-subtitle">Get to know me better</div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <!-- Content Column -->
        <div class="space-y-6 order-2 lg:order-1">
          <!-- About copy -->
          <div class="p-6 md:p-8 glass-card rounded-2xl">
            <h3 class="text-xl md:text-2xl font-semibold mb-3 text-secondary-900">Full Stack Developer</h3>
            <p class="text-base md:text-lg leading-relaxed text-secondary-800">
              I build secure, scalable, and maintainable web apps with Vue/Nuxt and Node/Laravel. I love clean UIs, fast APIs, and developer-friendly DX.
            </p>
          </div>

          

          <!-- Services / What I can help with -->
          <div class="glass-card rounded-2xl p-6 md:p-8">
            <h3 class="text-lg md:text-xl font-semibold mb-3 text-secondary-900">What I can help with</h3>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-secondary-800 text-sm">
              <li class="flex items-start gap-2">
                <Icon name="tabler:code" class="w-5 h-5 text-primary-600 mt-0.5" />
                Frontend apps with Vue/Nuxt, accessible UI
              </li>
              <li class="flex items-start gap-2">
                <Icon name="tabler:server" class="w-5 h-5 text-primary-600 mt-0.5" />
                APIs with Node/Express or Laravel
              </li>
              <li class="flex items-start gap-2">
                <Icon name="tabler:cloud" class="w-5 h-5 text-primary-600 mt-0.5" />
                AWS, CI/CD and containerized deploys
              </li>
              <li class="flex items-start gap-2">
                <Icon name="tabler:gauge" class="w-5 h-5 text-primary-600 mt-0.5" />
                Performance, SEO and best practices
              </li>
            </ul>
          </div>

          <!-- Highlights / Quick stats (moved after services) -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div class="glass-card rounded-2xl p-5 md:p-6 text-center flex flex-col items-center min-h-[136px] md:min-h-[152px]">
              <Icon name="tabler:clock-hour-4" class="w-6 h-6 text-primary-600 mb-1.5" />
              <div class="text-3xl md:text-4xl font-extrabold text-secondary-900">10+</div>
              <div class="text-xs md:text-sm text-secondary-600 mt-auto">years</div>
            </div>
            <div class="glass-card rounded-2xl p-5 md:p-6 text-center flex flex-col items-center min-h-[136px] md:min-h-[152px]">
              <Icon name="tabler:folder" class="w-6 h-6 text-primary-600 mb-1.5" />
              <div class="text-3xl md:text-4xl font-extrabold text-secondary-900">300+</div>
              <div class="text-xs md:text-sm text-secondary-600 mt-auto">projects</div>
            </div>
            <div class="glass-card rounded-2xl p-5 md:p-6 text-center flex flex-col items-center min-h-[136px] md:min-h-[152px]">
              <Icon name="tabler:users" class="w-6 h-6 text-primary-600 mb-1.5" />
              <div class="text-3xl md:text-4xl font-extrabold text-secondary-900">200+</div>
              <div class="text-xs md:text-sm text-secondary-600 mt-auto">happy customers</div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 md:gap-4">
            <DownloadCV class="glass-btn" />
            <a href="#contact-section" class="glass-btn bg-secondary-50 text-secondary-900 border-secondary-200 hover:bg-secondary-100" aria-label="Go to contact section">
              <Icon name="tabler:message" class="w-5 h-5" />
              Contact me
            </a>
          </div>
        </div>

        <!-- Image Column -->
        <div class="order-1 lg:order-2">
          <div class="p-3 rounded-2xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur-md shadow-lg">
            <div class="relative rounded-xl overflow-hidden aspect-square">
              <img
                src="/images/about.jpg"
                alt="Jeric Izon - About Me"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <!-- Decorative elements -->
              <div class="absolute -bottom-6 -left-6 h-24 w-24 bg-primary-500/20 rounded-full blur-2xl"></div>
              <div class="absolute -top-6 -right-6 h-20 w-20 bg-cyan-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>