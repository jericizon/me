<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from 'vue';

// Experience data
const experiences = reactive([
  {
    start: "2023-12",
    end: null,
    company: "IMAGINARY ONES, Singapore",
    url: "https://imaginaryones.com",
    position: "Senior Backend Developer",
    description:
      "Responsible for creating REST APIs using NESTJS and creating and optimizing backend queries to make the communication between front-end and database faster and smoothly.",
    tools: [
      "NESTJS",
      "NODEJS",
      "VUEJS",
      "NUXTJS",
      "DOCKER",
      "TERRAFORM",
      "MYSQL",
      "MARIADB",
      "SEQUALIZER",
      "HTML",
      "CSS",
      "SCSS",
      "GIT",
      "BITBUCKET",
      "NPM",
      "YARN",
      "JAVASCRIPT",
      "FIGMA",
      "JSON",
      "REST API",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS LAMBDA",
      "AWS ECR",
      "AWS AUTOSCALE",
      "AWS SECURITY GROUP",
    ],
  },
  {
    start: "2018-04",
    end: "2025-04",
    company: "OFFEO, Singapore",
    url: "https://offeo.com",
    position: "Senior Full Stack Developer",
    description:
      "I created REST APIs using Laravel, optimized backend queries to improve frontend-database communication. I structured backend logic and MariaDB database schemas, managing table relationships for web applications. I managed export servers, combining NODEJS for rendering previews, FFMPEG for video/audio compilation, and Laravel for AWS S3 storage. I set up LAMP stack in Ubuntu, contributed to frontend development with VueJs and NuxtJs, and built a project dashboard. I managed repositories, conducted code reviews, automated deployments, compiled web apps with NodeJs, utilized websockets for exporting progress, and developed desktop apps using ElectronJs.",
    tools: [
      "LARAVEL",
      "VUEJS",
      "NUXTJS",
      "HTML",
      "CSS",
      "SCSS",
      "PHP",
      "MYSQL",
      "MARIADB",
      "NODEJS",
      "GIT",
      "BITBUCKET",
      "GITHUB",
      "NPM",
      "YARN",
      "JAVASCRIPT",
      "REDIS",
      "WEBSOCKET",
      "PHOTOSHOP",
      "FIGMA",
      "JSON",
      "REST API",
      "ELECTRONJS",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS LAMBDA",
    ],
  },
  {
    start: "2016-01",
    end: "2018-03",
    company: "Skubbs Inc., Philippines",
    position: "Senior Developer / Team Lead",
    description:
      "Our team specializes in creating custom website applications, ranging from simple dashboards to complex e-commerce websites. We take web design mockups and turn them into real, functional websites, ensuring that our clients' visions come to life online. Managing multiple projects from different clients is our forte, as we excel in communication to gather project requirements and scope directly from clients. Delegating tasks and maintaining a balanced workload among team members is crucial for us to deliver projects efficiently.",
    tools: [
      "LARAVEL",
      "VUEJS",
      "NUXTJS",
      "HTML",
      "CSS",
      "SCSS",
      "PHP",
      "MYSQL",
      "MARIADB",
      "NODEJS",
      "GIT",
      "BITBUCKET",
      "GITHUB",
      "NPM",
      "YARN",
      "JAVASCRIPT",
      "PHOTOSHOP",
      "JSON",
      "REST API",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS LAMBDA",
    ],
  },
  {
    start: "2014-05",
    end: "2016-01",
    company: "Open Access BPO, Philippines",
    position: "Web Developer",
    description:
      "As the primary overseer of numerous internal WordPress websites, I collaborate closely with the Chief Technology Officer to enhance their functionality and optimize them as effective marketing assets for the company. My duties encompass the continual maintenance and refreshing of website content, alongside the creation of bespoke WordPress templates and plugins tailored to our specific needs, ensuring seamless user experiences and alignment with our branding objectives.",
    tools: [
      "HTML",
      "CSS",
      "PHP",
      "MYSQL",
      "JQUERY",
      "JAVASCRIPT",
      "WORDPRESS",
      "PHOTOSHOP",
    ],
  },
  {
    start: "2013-11",
    end: "2014-04",
    company: "AGR Operations Manila, Philippines",
    position: "Web Developer",
    description:
      "Creating a website starts with envisioning its layout and aesthetics, often accomplished by crafting a design template using tools like Photoshop. This initial stage involves conceptualizing the site's structure, color scheme, and graphical elements. Once the design is finalized, the next step is to translate those visual concepts into a functional website.",
    tools: [
      "HTML",
      "CSS",
      "PHP",
      "MYSQL",
      "JQUERY",
      "JAVASCRIPT",
      "WORDPRESS",
      "PHOTOSHOP",
    ],
  },
]);

// Format date to Month Year format
const convertToMonthYear = (dateString: string | null): string => {
  try {
    if (dateString === null) {
      return "Present";
    }
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    const monthYearString =
      date.toLocaleString("default", { month: "long" }) + " " + year;
    return monthYearString;
  } catch (error) {
    return "";
  }
};

// Reactive "now" that updates on client to keep durations fresh
const now = ref<Date>(new Date());
let _nowTimer: number | undefined;

onMounted(() => {
  // Update roughly every hour; cheap and keeps durations accurate without SSR issues
  _nowTimer = window.setInterval(() => {
    now.value = new Date();
  }, 60 * 60 * 1000);
});

onUnmounted(() => {
  if (_nowTimer) window.clearInterval(_nowTimer);
});

// Calculate duration between dates (accepts optional currentTime for reactivity)
const calculateMonthDifference = (startDate: string, endDate: string | null = null, currentTime?: Date): string => {
  try {
    const start = new Date(startDate);
    const end = endDate === null ? (currentTime ?? new Date()) : new Date(endDate);
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const parts: string[] = [];

    if (years) {
      parts.push(`${years}${years === 1 ? ' yr.' : ' yrs.'}`);
    }

    if (remainingMonths) {
      parts.push(`${remainingMonths}${remainingMonths === 1 ? ' mo.' : ' mos.'}`);
    }

    if (parts.length === 0) {
      return '0 mo.';
    }

    return parts.join(' ').trim();
  } catch (error) {
    return "";
  }
};

// Expanded items state for Show more/less
const expandedKeys = ref<Set<number>>(new Set());

const toggleExpand = (key: number) => {
  if (expandedKeys.value.has(key)) {
    expandedKeys.value.delete(key);
  } else {
    expandedKeys.value.add(key);
  }
  // Force reactivity on Set
  expandedKeys.value = new Set(expandedKeys.value);
};

</script>

<template>
  <section id="resume-section" class="py-24 md:py-32 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-secondary-50/20 via-white to-primary-50/20" aria-hidden="true"></div>
    <div class="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-accent-300/5 to-primary-300/5 rounded-full blur-3xl" aria-hidden="true"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-secondary-300/5 to-accent-300/5 rounded-full blur-3xl" aria-hidden="true"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-20 animate-fade-in">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-soft mb-6 animate-bounce-in" style="animation-delay: 0.1s">
          <Icon name="tabler:file-text" class="w-4 h-4 text-primary-600" />
          <span class="text-sm font-medium text-neutral-700">Experience</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4 animate-slide-up" style="animation-delay: 0.2s">
          My <span class="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">Professional Journey</span>
        </h2>
        <p class="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style="animation-delay: 0.3s">
          A timeline of experiences that shaped my expertise in full-stack development
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" aria-hidden="true"></div>

        <div
          v-for="(experience, key) in experiences"
          :key="key"
          class="relative mb-12 last:mb-0 animate-fade-in"
          :style="{ animationDelay: `${0.4 + key * 0.1}s` }"
        >
          <!-- Timeline dot -->
          <div class="absolute left-4 top-8 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-large flex items-center justify-center z-10">
            <Icon name="tabler:briefcase" class="w-4 h-4 text-white" />
          </div>

          <!-- Experience card -->
          <div class="ml-20 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-white/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
            <!-- Header -->
            <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div>
                <div class="flex flex-wrap items-center gap-3 mb-3">
                  <h3 class="text-2xl font-display font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">{{ experience.company }}</h3>
                  <a
                    v-if="experience.url"
                    :href="experience.url"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors border border-primary-100"
                  >
                    <Icon name="tabler:external-link" class="w-4 h-4" />
                    <span>Visit</span>
                  </a>
                </div>
                <p class="text-lg text-secondary-600 font-medium">{{ experience.position }}</p>
              </div>

              <!-- Date and duration -->
              <div class="flex flex-col items-start lg:items-end gap-2">
                <div class="inline-flex items-center gap-2 text-neutral-600 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100">
                  <Icon name="tabler:calendar" class="w-4 h-4" />
                  <span class="text-sm font-medium">{{ convertToMonthYear(experience.start) }} - {{ convertToMonthYear(experience.end) }}</span>
                </div>
                <ClientOnly>
                  <span class="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-semibold border border-primary-200 shadow-soft">
                    {{ calculateMonthDifference(experience.start, experience.end, now) }}
                  </span>
                </ClientOnly>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-6">
              <p class="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
                {{ expandedKeys.has(key) ? experience.description : (experience.description.length > 200 ? experience.description.slice(0, 200) + '…' : experience.description) }}
              </p>
              <button
                v-if="experience.description.length > 200"
                class="inline-flex items-center gap-2 mt-3 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                type="button"
                @click="toggleExpand(key)"
                :aria-expanded="expandedKeys.has(key) ? 'true' : 'false'"
              >
                <Icon :name="expandedKeys.has(key) ? 'tabler:chevron-up' : 'tabler:chevron-down'" class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>{{ expandedKeys.has(key) ? 'Show less' : 'Read more' }}</span>
              </button>
            </div>

            <!-- Tech stack -->
            <div>
              <h4 class="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tool, toolKey) in experience.tools.slice(0, expandedKeys.has(key) ? experience.tools.length : 8)"
                  :key="toolKey"
                  class="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 rounded-xl text-sm font-medium border border-primary-100 hover:scale-105 transition-transform duration-200 hover:shadow-soft"
                >
                  {{ tool.toLowerCase() }}
                </span>
                <span
                  v-if="!expandedKeys.has(key) && experience.tools.length > 8"
                  class="px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-xl text-sm font-medium border border-neutral-200 cursor-pointer hover:bg-neutral-200 transition-colors"
                  @click="toggleExpand(key)"
                >
                  +{{ experience.tools.length - 8 }} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 animate-fade-in" style="animation-delay: 0.8s">
        <div class="flex flex-wrap justify-center gap-4">
          <DownloadCV />
          <a href="#contact-section" class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105">
            <Icon name="tabler:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span>Let's Work Together</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>