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
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-20 right-20 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-flex items-center gap-2 glass-badge mb-6 animate-fade-in-up">
          <Icon name="tabler:user" class="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span class="text-sm font-medium">About Me</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4 animate-fade-in-up" style="animation-delay: 0.1s">
          Full-stack developer
          <span class="text-gradient">available for new opportunities</span>
        </h2>
        <p class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
          I'm a full-stack web developer, currently open to new roles, who loves turning complex problems into fast, secure, and user-friendly web applications.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Column - Personal Story -->
        <div class="space-y-8 animate-fade-in-up" style="animation-delay: 0.3s">
          <!-- Main intro card -->
          <div class="glass-card p-8 rounded-3xl">
            <div class="flex items-start gap-4 mb-6">
              <div class="icon-box icon-box-md flex-shrink-0">
                <Icon name="tabler:heart" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">My Journey</h3>
                <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Started coding {{ myAge }} years ago, and I've been hooked ever since. What began as curiosity has evolved into a career as a full-stack web developer crafting digital solutions that make a real difference for clients and teams.
                </p>
              </div>
            </div>

            <!-- Fun facts -->
            <div class="grid grid-cols-2 gap-4">
              <div class="stat-card text-center">
                <div class="text-2xl font-bold text-gradient mb-1">10+</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Years Coding</div>
              </div>
              <div class="stat-card text-center">
                <div class="text-2xl font-bold text-gradient mb-1">100+</div>
                <div class="text-sm text-neutral-600 dark:text-neutral-400">Projects Built</div>
              </div>
            </div>
          </div>

          <!-- Skills overview -->
          <div class="glass-card p-8 rounded-3xl">
            <h3 class="text-xl font-display font-bold text-neutral-900 dark:text-white mb-6">What I Bring to the Table</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="glass-card-subtle p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <div class="flex items-start gap-3">
                  <Icon name="tabler:code" class="w-6 h-6 text-primary-600 dark:text-primary-400 mt-0.5" />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">Clean Code</div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">Maintainable & scalable solutions</div>
                  </div>
                </div>
              </div>
              <div class="glass-card-subtle p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <div class="flex items-start gap-3">
                  <Icon name="tabler:rocket" class="w-6 h-6 text-secondary-600 dark:text-secondary-400 mt-0.5" />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">Performance</div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">Fast, optimized applications</div>
                  </div>
                </div>
              </div>
              <div class="glass-card-subtle p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <div class="flex items-start gap-3">
                  <Icon name="tabler:users" class="w-6 h-6 text-accent-600 dark:text-accent-400 mt-0.5" />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">User-Focused</div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">Intuitive, accessible experiences</div>
                  </div>
                </div>
              </div>
              <div class="glass-card-subtle p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <div class="flex items-start gap-3">
                  <Icon name="tabler:brain" class="w-6 h-6 text-neutral-600 dark:text-neutral-400 mt-0.5" />
                  <div>
                    <div class="font-semibold text-neutral-900 dark:text-white">Problem Solver</div>
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">Creative solutions to challenges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Visual -->
        <div class="animate-fade-in-up" style="animation-delay: 0.4s">
          <div class="relative">
            <!-- Main profile card -->
            <div class="glass-card p-8 rounded-3xl">
              <div class="flex flex-col items-center text-center space-y-6">
                <!-- Profile image -->
                <div class="relative w-32 h-32 mx-auto">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-3xl animate-morph opacity-80"></div>
                  <img
                    src="/images/about.jpg"
                    alt="Jeric Izon - Full Stack Developer"
                    class="relative w-full h-full object-cover rounded-3xl shadow-large"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <!-- Name and title -->
                <div>
                  <h3 class="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">Jeric Izon</h3>
                  <p class="text-lg text-neutral-600 dark:text-neutral-400">Full Stack Web Developer</p>
                </div>

                <!-- Tech stack badges -->
                <div class="flex flex-wrap justify-center gap-2">
                  <span class="tag tag-primary">Vue.js</span>
                  <span class="tag tag-secondary">Node.js</span>
                  <span class="tag tag-accent">TypeScript</span>
                  <span class="tag tag-neutral">Laravel</span>
                </div>

                <!-- Fun quote -->
                <div class="glass-card-subtle p-4 rounded-xl w-full">
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 italic">"Code is poetry in motion"</p>
                </div>
              </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-glow-primary animate-float"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl shadow-glow-secondary animate-float-slow"></div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.5s">
        <div class="flex flex-wrap justify-center gap-4">
          <DownloadCV />
          <a href="#contact-section" class="btn btn-lg btn-secondary group">
            <Icon name="tabler:message" class="w-5 h-5" />
            <span>Let's Chat</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>