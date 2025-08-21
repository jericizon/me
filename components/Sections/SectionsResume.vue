<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

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

// Calculate duration between dates
const calculateMonthDifference = (startDate: string, endDate: string | null = null): string => {
  try {
    const start = new Date(startDate);
    const end = endDate === null ? new Date() : new Date(endDate);
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

// Animation refs
const titleRef = ref<HTMLElement | null>(null);
const timelineRef = ref<HTMLElement | null>(null);
const experienceRefs = ref<HTMLElement[]>([]);

// Initialize animation refs
onMounted(() => {
  // Animate title
  setTimeout(() => {
    if (titleRef.value) {
      titleRef.value.style.opacity = '1';
      titleRef.value.style.transform = 'translateY(0)';
    }
  }, 200);
  
  // Animate timeline
  setTimeout(() => {
    if (timelineRef.value) {
      timelineRef.value.style.opacity = '1';
      timelineRef.value.style.height = '100%';
    }
  }, 500);
  
  // Animate experience cards with staggered delay
  experienceRefs.value.forEach((el, index) => {
    setTimeout(() => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      }
    }, 700 + (index * 200));
  });
});
</script>

<template>
  <section id="resume-section" class="py-20 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div ref="titleRef" class="text-center mb-16 opacity-0 translate-y-3 transition duration-700 ease-out">
        <h2 class="section-title">Resume</h2>
        <div class="section-subtitle">My Professional Journey</div>
        <p class="mt-4 max-w-2xl mx-auto text-lg">
          Over the past decade, I've gained valuable experience through my work,
          consistently meeting goals and overcoming challenges.
        </p>
      </div>
      
      <!-- Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Timeline line -->
        <div ref="timelineRef" class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary-500/30 transform -translate-x-1/2 opacity-0 h-0 transition-all duration-1500 ease-out"></div>
        
        <!-- Experience Cards -->
        <div class="space-y-12">
          <div 
            v-for="(experience, key) in experiences" 
            :key="key"
            :ref="el => { if (el) experienceRefs[key] = el as HTMLElement }"
            class="relative opacity-0 transition duration-800 ease-out"
            :class="[
              key % 2 !== 0 ? 'ml-auto md:ml-0 -translate-x-6 md:translate-x-0' : 'mr-auto md:mr-0 translate-x-6 md:translate-x-0'
            ]"
            :style="{ transitionDelay: `${key * 140}ms` }"
          >
            <!-- Timeline dot -->
            <div class="hidden md:block absolute top-8 left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-400 shadow-glow-sm transform -translate-x-1/2 z-10"></div>
            
            <!-- Card -->
            <div 
              class="p-6 md:p-8 backdrop-blur-md w-full md:w-[calc(50%-2rem)] bg-white/10 border border-white/10 shadow-lg rounded-xl"
              :class="{'md:ml-auto': key % 2 !== 0, 'md:mr-auto': key % 2 === 0}"
              
            >
              <!-- Date -->
              <div class="flex justify-between items-center mb-4">
                <span class="text-primary-300 font-medium">
                  {{ convertToMonthYear(experience.start) }} - {{ convertToMonthYear(experience.end) }}
                </span>
                <span class="text-sm text-slate-400">
                  ({{ calculateMonthDifference(experience.start, experience.end) }})
                </span>
              </div>
              
              <!-- Company & Position -->
              <h3 class="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                {{ experience.company }}
                <a 
                  v-if="experience.url" 
                  :href="experience.url" 
                  target="_blank"
                  class="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Icon name="tabler:external-link" class="w-5 h-5" />
                </a>
              </h3>
              
              <div class="text-lg text-primary-200 font-medium mb-4">{{ experience.position }}</div>
              
              <!-- Description -->
              <p class="mb-6 text-slate-300 leading-relaxed">
                {{ experience.description }}
              </p>
              
              <!-- Tools -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(tool, toolKey) in experience.tools" 
                  :key="toolKey"
                  class="skill-badge"
                >
                  {{ tool.toLowerCase() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Download CV -->
      <div class="text-center mt-16">
        <DownloadCV class="px-6 py-3 rounded-full font-medium inline-flex items-center bg-primary-500/20 border border-primary-500/30 shadow-md backdrop-blur-md hover:scale-105 transition-transform" />
      </div>
    </div>
  </section>
</template>