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
  <section id="resume-section" class="relative py-24 lg:py-32">
    <div class="absolute top-8 right-8 lg:right-16 font-display font-bold text-[12rem] lg:text-[16rem] text-base-50/[0.02] leading-none select-none pointer-events-none">
      EXP
    </div>
    <div class="relative z-10 px-6 lg:px-16">

      <!-- Section header -->
      <div class="mb-16 lg:mb-24">
        <div class="flex items-center gap-4 mb-6">
          <span class="font-mono text-xs text-coral-500">EXP</span>
          <span class="w-12 h-px bg-coral-500"></span>
          <span class="font-mono text-xs text-base-400 tracking-wider uppercase">Experience</span>
        </div>
        <h2 class="font-display font-bold text-4xl lg:text-6xl text-base-50 leading-tight tracking-tight">
          Professional journey
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-0 top-2 bottom-2 w-px bg-base-600/30 hidden md:block" aria-hidden="true"></div>

        <div class="space-y-10">
          <div
            v-for="(group, groupIndex) in groupedExperiences"
            :key="group.id"
            class="relative animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + groupIndex * 0.08}s` }"
          >
            <!-- Timeline dot (desktop) -->
            <div class="absolute -left-[5px] top-6 w-[11px] h-[11px] bg-coral-500 border-2 border-surface hidden md:block z-10" aria-hidden="true"></div>

            <!-- Card -->
            <div class="md:ml-10 p-7 md:p-8 border border-base-600/30 hover:border-coral-500/30 transition-colors group">

              <!-- Header row -->
              <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
                <div>
                  <h3 class="font-display font-bold text-xl md:text-2xl text-base-50 tracking-tight mb-1 group-hover:text-coral-500 transition-colors duration-200">
                    {{ group.items.length > 1 ? 'Singapore Tech Group' : group.label }}
                  </h3>
                  <p class="text-sm text-base-400" v-if="group.items.length > 1">
                    Multiple roles across the same company group
                  </p>
                  <p class="text-base font-medium text-coral-500" v-else>
                    {{ group.items[0].position }}
                  </p>
                </div>

                <div class="flex flex-wrap items-center gap-2 flex-shrink-0">
                  <span class="text-sm text-base-400 font-mono">
                    {{ convertToMonthYear(group.start) }} — {{ convertToMonthYear(group.end) }}
                  </span>
                  <ClientOnly>
                    <span class="px-2 py-1 text-xs font-medium bg-coral-500/20 text-coral-500">
                      {{ calculateMonthDifference(group.start, group.end, now) }}
                    </span>
                  </ClientOnly>
                </div>
              </div>

              <!-- Single role -->
              <div v-if="group.items.length === 1">
                <p class="text-base-300 leading-relaxed text-sm md:text-base mb-5">
                  {{ expandedKeys.has(group.items[0].originalIndex as number)
                    ? group.items[0].description
                    : (group.items[0].description.length > 220 ? group.items[0].description.slice(0, 220) + '…' : group.items[0].description) }}
                </p>
                <button
                  v-if="group.items[0].description.length > 220"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-coral-500 hover:text-coral-400 transition-colors mb-5"
                  type="button"
                  @click="toggleExpand(group.items[0].originalIndex as number)"
                  :aria-expanded="expandedKeys.has(group.items[0].originalIndex as number) ? 'true' : 'false'"
                >
                  <Icon :name="expandedKeys.has(group.items[0].originalIndex as number) ? 'tabler:chevron-up' : 'tabler:chevron-down'" class="w-3.5 h-3.5" />
                  {{ expandedKeys.has(group.items[0].originalIndex as number) ? 'Show less' : 'Read more' }}
                </button>

                <div>
                  <div class="text-xs font-semibold tracking-widest uppercase text-base-500 mb-3">Stack</div>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="(tool, toolKey) in group.items[0].tools.slice(0, expandedKeys.has(group.items[0].originalIndex as number) ? group.items[0].tools.length : 10)"
                      :key="toolKey"
                      class="px-2 py-1 text-xs text-base-400 border border-base-600/30"
                    >{{ tool.toLowerCase() }}</span>
                    <button
                      v-if="!expandedKeys.has(group.items[0].originalIndex as number) && group.items[0].tools.length > 10"
                      class="px-2 py-1 text-xs text-coral-500 border border-coral-500/30 cursor-pointer hover:bg-coral-500/10 transition-colors"
                      @click="toggleExpand(group.items[0].originalIndex as number)"
                    >+{{ group.items[0].tools.length - 10 }} more</button>
                  </div>
                </div>
              </div>

              <!-- Multiple roles (grouped) -->
              <div v-else class="space-y-5">
                <div
                  v-for="item in group.items"
                  :key="item.originalIndex"
                  class="card-subtle rounded-xl p-5"
                >
                  <div class="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                    <div>
                      <p class="text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-0.5">
                        {{ (item as any).branchLabel ?? item.company }}
                      </p>
                      <p class="font-semibold text-neutral-900 dark:text-white text-sm md:text-base">
                        {{ item.position }}
                      </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-2 flex-shrink-0">
                      <span class="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                        {{ convertToMonthYear(item.start) }} — {{ convertToMonthYear((item as any).end ?? null) }}
                      </span>
                      <ClientOnly>
                        <span class="tag tag-primary text-xs font-semibold">
                          {{ calculateMonthDifference(item.start, (item as any).end ?? null, now) }}
                        </span>
                      </ClientOnly>
                    </div>
                  </div>

                  <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                    {{ expandedKeys.has(item.originalIndex as number)
                      ? item.description
                      : (item.description.length > 180 ? item.description.slice(0, 180) + '…' : item.description) }}
                  </p>
                  <button
                    v-if="item.description.length > 180"
                    class="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-3"
                    type="button"
                    @click="toggleExpand(item.originalIndex as number)"
                    :aria-expanded="expandedKeys.has(item.originalIndex as number) ? 'true' : 'false'"
                  >
                    <Icon :name="expandedKeys.has(item.originalIndex as number) ? 'tabler:chevron-up' : 'tabler:chevron-down'" class="w-3 h-3" />
                    {{ expandedKeys.has(item.originalIndex as number) ? 'Show less' : 'Read more' }}
                  </button>

                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="(tool, toolKey) in item.tools.slice(0, expandedKeys.has(item.originalIndex as number) ? item.tools.length : 8)"
                      :key="toolKey"
                      class="tag tag-neutral"
                    >{{ tool.toLowerCase() }}</span>
                    <button
                      v-if="!expandedKeys.has(item.originalIndex as number) && item.tools.length > 8"
                      class="tag tag-primary cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                      @click="toggleExpand(item.originalIndex as number)"
                    >+{{ item.tools.length - 8 }} more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>