<script setup>
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
      "Our team specializes in creating custom website applications, ranging from simple dashboards to complex e-commerce websites. We take web design mockups and turn them into real, functional websites, ensuring that our clients' visions come to life online. Managing multiple projects from different clients is our forte, as we excel in communication to gather project requirements and scope directly from clients. Delegating tasks and maintaining a balanced workload among team members is crucial for us to deliver projects efficiently. We meticulously plan and structure websites and applications to ensure optimal functionality and user experience. Additionally, we handle the deployment of projects to the cloud, making sure they are seamlessly integrated and accessible. Supporting our team members by analyzing and simplifying required functions is part of our collaborative approach to achieving success in every project we undertake.",
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
      "Creating a website starts with envisioning its layout and aesthetics, often accomplished by crafting a design template using tools like Photoshop. This initial stage involves conceptualizing the site's structure, color scheme, and graphical elements. Once the design is finalized, the next step is to translate those visual concepts into a functional website. This implementation phase requires coding expertise in HTML and CSS to bring the static images to life on the web. By meticulously transforming design elements into code, the website gains interactivity and responsiveness, ensuring a seamless user experience across different devices and browsers.",
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

const convertToMonthYear = (dateString) => {
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

const calculateMonthDifference = (startDate, endDate = null) => {
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
</script>

<template>
  <section class="ftco-section ftco-no-pb" id="resume-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-10 heading-section text-center">
          <h1 class="big big-2">Resume</h1>
          <h2 class="mb-4">Resume</h2>
          <p>
            Over the past decade, I've achieved and gained valuable experience
            through my work, consistently meeting goals and overcoming
            challenges.
          </p>
        </div>
      </div>
      <div class="row justify-content-center pt-2">
        <div
          v-for="(experience, key) in experiences"
          class="col-md-8"
          :key="key"
        >
          <div
            class="resume-wrap"
            :class="{ 'is-present': experience.end === null }"
          >
            <span class="date"
              >{{ convertToMonthYear(experience.start) }} -
              {{ convertToMonthYear(experience.end) }}
              <span class="total-years-months">
                ({{
                  calculateMonthDifference(experience.start, experience.end)
                }})
              </span>
            </span>
            <h2>
              {{ experience.company }}
              <a v-if="experience.url" :href="experience.url" target="_blank"
                ><i class="icon icon-open_in_new"></i
              ></a>
            </h2>

            <span class="position">{{ experience.position }}</span>
            <p class="mt-4">
              {{ experience.description }}
            </p>

            <div class="tools">
              <div
                class="badge badge-light mx-1"
                v-for="(tools, toolKey) in experience.tools"
                :key="toolKey"
              >
                <span>{{ tools }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-6 text-center">
          <p>
            <DownloadCV />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.total-years-months {
  color: #999999;
  font-size: 14px;
  font-weight: normal;
}
.resume-wrap {
  transform: scale(0.9);
  &.is-present {
    transform: scale(1);
  }
}
</style>