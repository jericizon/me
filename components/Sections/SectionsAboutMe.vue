<script setup lang="ts">
// Calculate age dynamically
const myAge = computed(() => {
  const birthDate = new Date("2013-11-01");
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
  <section id="about-section" class="py-24 md:py-32 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-white to-secondary-50/20" aria-hidden="true"></div>
    <div class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-300/10 to-secondary-300/10 rounded-full blur-3xl" aria-hidden="true"></div>
    <div class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent-300/5 to-primary-300/5 rounded-full blur-3xl" aria-hidden="true"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-20 animate-fade-in">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-soft mb-6 animate-bounce-in" style="animation-delay: 0.1s">
          <Icon name="tabler:user" class="w-4 h-4 text-primary-600" />
          <span class="text-sm font-medium text-neutral-700">About Me</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 animate-slide-up" style="animation-delay: 0.2s">
          Full-stack developer
          <span class="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">available for new opportunities</span>
        </h2>
        <p class="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style="animation-delay: 0.3s">
          I'm a full-stack web developer, currently open to new roles, who loves turning complex problems into fast, secure, and user-friendly web applications.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Column - Personal Story -->
        <div class="space-y-8 animate-slide-in-left" style="animation-delay: 0.4s">
          <!-- Main intro card -->
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-white/20 hover:shadow-xl transition-shadow duration-500 group">
            <div class="flex items-start gap-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-large transition-shadow duration-300">
                <Icon name="tabler:heart" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-display font-bold text-neutral-900 mb-2">My Journey</h3>
                <p class="text-neutral-600 leading-relaxed">
                  Started coding {{ myAge }} years ago, and I've been hooked ever since. What began as curiosity has evolved into a career as a full-stack web developer crafting digital solutions that make a real difference for clients and teams.
                </p>
              </div>
            </div>

            <!-- Fun facts -->
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-4 border border-primary-100/50">
                <div class="text-2xl font-bold text-primary-600 mb-1">10+</div>
                <div class="text-sm text-neutral-600">Years Coding</div>
              </div>
              <div class="bg-gradient-to-br from-secondary-50 to-secondary-100/50 rounded-2xl p-4 border border-secondary-100/50">
                <div class="text-2xl font-bold text-secondary-600 mb-1">100+</div>
                <div class="text-sm text-neutral-600">Projects Built</div>
              </div>
            </div>
          </div>

          <!-- Skills overview -->
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-white/20 hover:shadow-xl transition-shadow duration-500">
            <h3 class="text-xl font-display font-bold text-neutral-900 mb-6">What I Bring to the Table</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-primary-50/50 to-primary-100/30 rounded-2xl border border-primary-100/30 hover:scale-105 transition-transform duration-300">
                <Icon name="tabler:code" class="w-6 h-6 text-primary-600 mt-0.5" />
                <div>
                  <div class="font-semibold text-neutral-900">Clean Code</div>
                  <div class="text-sm text-neutral-600">Maintainable & scalable solutions</div>
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-secondary-50/50 to-secondary-100/30 rounded-2xl border border-secondary-100/30 hover:scale-105 transition-transform duration-300">
                <Icon name="tabler:rocket" class="w-6 h-6 text-secondary-600 mt-0.5" />
                <div>
                  <div class="font-semibold text-neutral-900">Performance</div>
                  <div class="text-sm text-neutral-600">Fast, optimized applications</div>
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-accent-50/50 to-accent-100/30 rounded-2xl border border-accent-100/30 hover:scale-105 transition-transform duration-300">
                <Icon name="tabler:users" class="w-6 h-6 text-accent-600 mt-0.5" />
                <div>
                  <div class="font-semibold text-neutral-900">User-Focused</div>
                  <div class="text-sm text-neutral-600">Intuitive, accessible experiences</div>
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-neutral-50/50 to-neutral-100/30 rounded-2xl border border-neutral-100/30 hover:scale-105 transition-transform duration-300">
                <Icon name="tabler:brain" class="w-6 h-6 text-neutral-600 mt-0.5" />
                <div>
                  <div class="font-semibold text-neutral-900">Problem Solver</div>
                  <div class="text-sm text-neutral-600">Creative solutions to challenges</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Visual -->
        <div class="animate-slide-in-right" style="animation-delay: 0.5s">
          <div class="relative">
            <!-- Main profile card -->
            <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-white/20 hover:shadow-xl transition-shadow duration-500 group">
              <div class="flex flex-col items-center text-center space-y-6">
                <!-- Profile image -->
                <div class="relative w-32 h-32 mx-auto">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl shadow-medium animate-float-gentle"></div>
                  <img
                    src="/images/about.jpg"
                    alt="Jeric Izon - Full Stack Developer"
                    class="relative w-full h-full object-cover rounded-3xl shadow-medium"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <!-- Name and title -->
                <div>
                  <h3 class="text-2xl font-display font-bold text-neutral-900 mb-2">Jeric Izon</h3>
                  <p class="text-lg text-neutral-600">Full Stack Web Developer</p>
                </div>

                <!-- Tech stack badges -->
                <div class="flex flex-wrap justify-center gap-2">
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Vue.js</span>
                  <span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">Node.js</span>
                  <span class="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">TypeScript</span>
                  <span class="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">Laravel</span>
                </div>

                <!-- Fun quote -->
                <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-4 border border-primary-100/50 w-full">
                  <p class="text-sm text-neutral-600 italic">"Code is poetry in motion"</p>
                </div>
              </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl shadow-medium animate-bounce-in" style="animation-delay: 0.8s"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl shadow-medium animate-bounce-in" style="animation-delay: 1s"></div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 animate-fade-in" style="animation-delay: 0.6s">
        <div class="flex flex-wrap justify-center gap-4">
          <DownloadCV />
          <a href="#contact-section" class="group inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-neutral-900 font-semibold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-white/20 hover:scale-105">
            <Icon name="tabler:message" class="w-5 h-5" />
            <span>Let's Chat</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>