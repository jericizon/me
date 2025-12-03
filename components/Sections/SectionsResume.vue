<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted, computed } from 'vue';

// Experience data
const experiences = reactive([
  {
    groupId: "bubio-imaginary-offeo",
    groupLabel: "BUBIO / IMAGINARY ONES / OFFEO, Singapore",
    branchLabel: "BUBIO",
    start: "2025-04",
    end: "2025-12",
    company: "BUBIO, Singapore",
    position: "Senior Backend Developer",
    description:
      "Responsible for database security, REST API backend development, and admin dashboard features. Implemented Supabase Edge Functions for backend processes and configured Row Level Security (RLS) policies to ensure data protection and access control.",
    tools: [
      "SUPABASE",
      "REACTJS",
      "NESTJS",
      "NODEJS",
      "DOCKER",
      "TERRAFORM",
      "POSTGRESQL",
      "HTML",
      "CSS",
      "SCSS",
      "GIT",
      "BITBUCKET",
      "NPM",
      "YARN",
      "JAVASCRIPT",
      "TYPESCRIPT",
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
    groupId: "bubio-imaginary-offeo",
    groupLabel: "BUBIO / IMAGINARY ONES / OFFEO, Singapore",
    branchLabel: "IMAGINARY ONES",
    start: "2023-12",
    end: "2025-04",
    company: "IMAGINARY ONES, Singapore",
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
    groupId: "bubio-imaginary-offeo",
    groupLabel: "BUBIO / IMAGINARY ONES / OFFEO, Singapore",
    branchLabel: "OFFEO",
    start: "2018-04",
    end: "2023-12",
    company: "OFFEO, Singapore",
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

// Group experiences by company/branch where applicable
type ExperienceItem = any;

type ExperienceGroup = {
  id: string;
  label: string;
  start: string;
  end: string | null;
  items: ExperienceItem[];
};

const groupedExperiences = computed<ExperienceGroup[]>(() => {
  const groups: Record<string, ExperienceGroup> = {};

  experiences.forEach((exp, index) => {
    const anyExp = exp as any;
    const groupId: string = anyExp.groupId ?? exp.company;
    const groupLabel: string = anyExp.groupLabel ?? exp.company;

    if (!groups[groupId]) {
      groups[groupId] = {
        id: groupId,
        label: groupLabel,
        start: exp.start,
        end: (exp as any).end ?? null,
        items: [],
      };
    } else {
      if (exp.start < groups[groupId].start) {
        groups[groupId].start = exp.start;
      }

      const groupEnd = groups[groupId].end;
      const expEnd = (exp as any).end ?? null;

      if (groupEnd === null) {
        groups[groupId].end = null;
      } else if (expEnd === null) {
        groups[groupId].end = null;
      } else if (expEnd > groupEnd) {
        groups[groupId].end = expEnd;
      }
    }

    const withIndex: ExperienceItem = {
      ...(exp as any),
      originalIndex: index,
    };

    groups[groupId].items.push(withIndex);
  });

  return Object.values(groups);
});

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
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-10 left-10 w-72 h-72 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-flex items-center gap-2 glass-badge mb-6 animate-fade-in-up">
          <Icon name="tabler:file-text" class="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span class="text-sm font-medium">Experience</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4 animate-fade-in-up" style="animation-delay: 0.1s">
          My <span class="text-gradient">Professional Journey</span>
        </h2>
        <p class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
          A timeline of experiences that shaped my expertise in full-stack development
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" aria-hidden="true"></div>

        <div
          v-for="(group, groupIndex) in groupedExperiences"
          :key="group.id"
          class="relative mb-12 last:mb-0 animate-fade-in-up"
          :style="{ animationDelay: `${0.3 + groupIndex * 0.1}s` }"
        >
          <!-- Timeline dot -->
          <div class="absolute left-4 top-8 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-neutral-900 shadow-large flex items-center justify-center z-10">
            <Icon name="tabler:briefcase" class="w-4 h-4 text-white" />
          </div>

          <!-- Experience card -->
          <div class="ml-20 glass-card p-8 rounded-3xl group">
            <!-- Header -->
            <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div>
                <div class="flex flex-wrap items-center gap-3 mb-3">
                  <h3 class="text-2xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ group.items.length > 1 ? 'Singaporean Company' : group.label }}</h3>
                </div>
                <p class="text-sm text-secondary-600 dark:text-secondary-400 font-medium" v-if="group.items.length > 1">
                  Multiple roles across the same company group
                </p>
                <p class="text-lg text-secondary-600 dark:text-secondary-400 font-medium" v-else>
                  {{ group.items[0].position }}
                </p>
              </div>

              <!-- Date and duration (overall company group span) -->
              <div class="flex flex-col items-start lg:items-end gap-2">
                <div class="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 glass-card-subtle px-3 py-1 rounded-full">
                  <Icon name="tabler:calendar" class="w-4 h-4" />
                  <span class="text-sm font-medium">{{ convertToMonthYear(group.start) }} - {{ convertToMonthYear(group.end) }}</span>
                </div>
                <ClientOnly>
                  <span class="tag tag-primary text-sm font-semibold">
                    {{ calculateMonthDifference(group.start, group.end, now) }}
                  </span>
                </ClientOnly>
              </div>
            </div>

            <!-- Single experience behaves like original card -->
            <div v-if="group.items.length === 1">
              <!-- Description -->
              <div class="mb-6">
                <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {{ expandedKeys.has(group.items[0].originalIndex as number) ? group.items[0].description : (group.items[0].description.length > 200 ? group.items[0].description.slice(0, 200) + '…' : group.items[0].description) }}
                </p>
                <button
                  v-if="group.items[0].description.length > 200"
                  class="inline-flex items-center gap-2 mt-3 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                  type="button"
                  @click="toggleExpand(group.items[0].originalIndex as number)"
                  :aria-expanded="expandedKeys.has(group.items[0].originalIndex as number) ? 'true' : 'false'"
                >
                  <Icon :name="expandedKeys.has(group.items[0].originalIndex as number) ? 'tabler:chevron-up' : 'tabler:chevron-down'" class="w-4 h-4" />
                  <span>{{ expandedKeys.has(group.items[0].originalIndex as number) ? 'Show less' : 'Read more' }}</span>
                </button>
              </div>

              <!-- Tech stack -->
              <div>
                <h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wide">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tool, toolKey) in group.items[0].tools.slice(0, expandedKeys.has(group.items[0].originalIndex as number) ? group.items[0].tools.length : 8)"
                    :key="toolKey"
                    class="tag tag-primary hover:scale-105 transition-transform duration-200"
                  >
                    {{ tool.toLowerCase() }}
                  </span>
                  <span
                    v-if="!expandedKeys.has(group.items[0].originalIndex as number) && group.items[0].tools.length > 8"
                    class="tag tag-neutral cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    @click="toggleExpand(group.items[0].originalIndex as number)"
                  >
                    +{{ group.items[0].tools.length - 8 }} more
                  </span>
                </div>
              </div>
            </div>

            <!-- Grouped experiences (multiple roles/branches) -->
            <div v-else class="space-y-6">
              <div
                v-for="item in group.items"
                :key="item.originalIndex"
                class="glass-card-subtle rounded-2xl p-5"
              >
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                  <div>
                    <p class="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
                      {{ (item as any).branchLabel ?? item.company }}
                    </p>
                    <p class="text-base md:text-lg text-secondary-700 dark:text-secondary-300 font-medium">
                      {{ item.position }}
                    </p>
                  </div>

                  <div class="flex flex-col items-start md:items-end gap-1">
                    <div class="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 glass-card-subtle px-3 py-1 rounded-full">
                      <Icon name="tabler:calendar" class="w-4 h-4" />
                      <span class="text-[8px] md:text-xs font-medium">{{ convertToMonthYear(item.start) }} - {{ convertToMonthYear((item as any).end ?? null) }}</span>
                    </div>
                    <ClientOnly>
                      <span class="tag tag-primary text-xs md:text-sm font-semibold">
                        {{ calculateMonthDifference(item.start, (item as any).end ?? null, now) }}
                      </span>
                    </ClientOnly>
                  </div>
                </div>

                <!-- Description -->
                <div class="mb-4">
                  <p class="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {{ expandedKeys.has(item.originalIndex as number) ? item.description : (item.description.length > 200 ? item.description.slice(0, 200) + '…' : item.description) }}
                  </p>
                  <button
                    v-if="item.description.length > 200"
                    class="inline-flex items-center gap-2 mt-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                    type="button"
                    @click="toggleExpand(item.originalIndex as number)"
                    :aria-expanded="expandedKeys.has(item.originalIndex as number) ? 'true' : 'false'"
                  >
                    <Icon :name="expandedKeys.has(item.originalIndex as number) ? 'tabler:chevron-up' : 'tabler:chevron-down'" class="w-4 h-4" />
                    <span>{{ expandedKeys.has(item.originalIndex as number) ? 'Show less' : 'Read more' }}</span>
                  </button>
                </div>

                <!-- Tech stack -->
                <div>
                  <h4 class="text-xs md:text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">Technologies Used</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tool, toolKey) in item.tools.slice(0, expandedKeys.has(item.originalIndex as number) ? item.tools.length : 8)"
                      :key="toolKey"
                      class="tag tag-primary text-xs md:text-sm hover:scale-105 transition-transform duration-200"
                    >
                      {{ tool.toLowerCase() }}
                    </span>
                    <span
                      v-if="!expandedKeys.has(item.originalIndex as number) && item.tools.length > 8"
                      class="tag tag-neutral text-xs md:text-sm cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      @click="toggleExpand(item.originalIndex as number)"
                    >
                      +{{ item.tools.length - 8 }} more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.5s">
        <div class="flex flex-wrap justify-center gap-4">
          <DownloadCV />
          <a href="#contact-section" class="btn btn-lg btn-primary group">
            <Icon name="tabler:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span>Let's Work Together</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>