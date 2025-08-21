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
    end: null,
    company: "OFFEO, Singapore",
    url: "https://offeo.com",
    position: "Senior Backend Developer",
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

    let _return = "";

    if (years) {
      _return += `${years}yrs. `;
    }

    if (remainingMonths) {
      _return += `${remainingMonths}mos.`;
    }

    return _return;
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
  <section id="resume-section" class="py-20 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-title text-secondary-900">Resume</h2>
        <div class="section-subtitle text-primary-600 font-medium">My Professional Journey</div>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-secondary-700">
          Highlights of my experience, responsibilities, and impact.
        </p>
      </div>

      <!-- Timeline (left-aligned) -->
      <div class="relative max-w-4xl mx-auto">
        <div class="border-l-2 border-primary-400 pl-6 md:pl-8">
          <div
            v-for="(experience, key) in experiences"
            :key="key"
            class="relative mb-10 last:mb-0"
          >
            <!-- Timeline dot -->
            <div class="absolute -left-[10px] top-2 w-5 h-5 rounded-full bg-primary-500 border-2 border-white shadow-lg shadow-primary-500/30"></div>

            <!-- Card -->
            <div class="glass-card rounded-2xl p-6 md:p-7 border border-secondary-200 bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <!-- Header: Dates and Duration -->
              <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div class="inline-flex items-center gap-2 text-primary-600">
                  <Icon name="tabler:calendar" class="w-5 h-5 text-primary-600" />
                  <span class="font-medium">
                    {{ convertToMonthYear(experience.start) }} - {{ convertToMonthYear(experience.end) }}
                  </span>
                </div>
                <ClientOnly>
                  <span class="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 border border-primary-200 shadow-sm">
                    {{ calculateMonthDifference(experience.start, experience.end, now) }}
                  </span>
                </ClientOnly>
              </div>

              <!-- Company, Link, and Position -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <h3 class="text-xl md:text-2xl font-bold text-secondary-900 flex items-center gap-2">
                  {{ experience.company }}
                  <a
                    v-if="experience.url"
                    :href="experience.url"
                    target="_blank"
                    rel="noopener"
                    aria-label="Open company website"
                    class="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Icon name="tabler:external-link" class="w-5 h-5" />
                  </a>
                </h3>
                <span class="px-4 py-1.5 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800 border border-secondary-200 shadow-sm self-start sm:self-auto">
                  {{ experience.position }}
                </span>
              </div>

              <!-- Description -->
              <p class="mb-4 text-secondary-700 leading-relaxed">
                {{ expandedKeys.has(key) ? experience.description : (experience.description.length > 220 ? experience.description.slice(0, 220) + '…' : experience.description) }}
              </p>

              <button
                v-if="experience.description.length > 220"
                class="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors mb-4"
                type="button"
                @click="toggleExpand(key)"
                :aria-expanded="expandedKeys.has(key) ? 'true' : 'false'"
              >
                <Icon :name="expandedKeys.has(key) ? 'tabler:chevron-up' : 'tabler:chevron-down'" class="w-4 h-4" />
                {{ expandedKeys.has(key) ? 'Show less' : 'Show more' }}
              </button>

              <!-- Tools -->
              <div class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="(tool, toolKey) in experience.tools"
                  :key="toolKey"
                  class="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                >
                  {{ tool.toLowerCase() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Download CV -->
      <div class="text-center mt-14 md:mt-16">
        <DownloadCV class="px-6 py-3 rounded-full font-medium inline-flex items-center bg-primary-100 text-primary-700 border border-primary-200 shadow-lg backdrop-blur-md hover:scale-105 hover:bg-primary-200 transition-all duration-300" />
      </div>
    </div>
  </section>
</template>