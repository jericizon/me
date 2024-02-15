<script setup>
const maxShow = ref(12);
const tools = reactive([
  {
    name: "LARAVEL",
    icon: "laravel.svg",
  },
  {
    name: "VUEJS",
    icon: "vuejs.svg",
  },
  {
    name: "NESTJS",
    icon: "nestjs.svg",
  },
  {
    name: "NUXTJS",
    icon: "nuxtjs.svg",
  },
  {
    name: "DOCKER",
    icon: "docker.svg",
  },
  {
    name: "PHP",
    icon: "php.svg",
  },
  {
    name: "wordpress",
    icon: "wordpress.svg",
  },
  {
    name: "MYSQL",
    icon: "mysql.svg",
  },
  {
    name: "MARIADB",
    icon: "mariadb.svg",
  },
  {
    name: "FIGMA",
    icon: "figma.svg",
  },
  {
    name: "GIT",
    icon: "git.svg",
  },
  {
    name: "GITHUB",
    icon: "github.svg",
    addBg: true,
  },
  {
    name: "BITBUCKET",
    icon: "bitbucket.svg",
  },
  {
    name: "GITLAB",
    icon: "gitlab.svg",
  },
  {
    name: "AWS SERVICES",
    icon: "aws.svg",
  },

  {
    name: "terraform",
    icon: "terraform.svg",
  },
  {
    name: "NODEJS",
    icon: "nodejs.svg",
  },

  {
    name: "STRAPI",
    icon: "strapi.svg",
  },
  {
    name: "NPM",
    icon: "npm.svg",
    addBg: true,
  },
  {
    name: "YARN",
    icon: "yarn.svg",
    addBg: true,
  },
  {
    name: "JAVASCRIPT",
    icon: "javascript.svg",
  },
  {
    name: "ELECTRON JS",
    icon: "electronjs.svg",
  },
  {
    name: "HTML",
    icon: "html.svg",
  },
  {
    name: "CSS",
    icon: "css.svg",
  },
  {
    name: "SCSS",
    icon: "scss.svg",
    addBg: true,
  },
  {
    name: "EXPRESS JS",
    icon: "expressjs.svg",
    addBg: true,
  },
  {
    name: "REDIS",
    icon: "redis.svg",
    addBg: true,
  },
  {
    name: "JSON",
    icon: "json.svg",
    addBg: true,
  },
]);

const moreTools = computed(() => {
  return tools.length - maxShow.value;
});
</script>
<template>
  <section class="ftco-section" id="tools-section">
    <div class="container">
      <div class="row justify-content-center py-5 mt-5">
        <div class="col-md-12 heading-section text-center">
          <h1 class="big big-2">Tools</h1>
          <h2 class="mb-4">Tools</h2>
          <p>
            Throughout my decade-long journey as a web developer, I've honed my
            skills using a diverse array of tools, empowering me to design,
            develop, and deploy robust and user-friendly web applications
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-3 text-center d-flex"
          v-for="(tool, key) in tools"
          :key="key"
        >
          <a
            :href="tool.url || '#tools-section'"
            class="services-1"
            v-if="key < maxShow"
          >
            <span class="icon">
              <img
                :src="`/me/icons/${tool.icon}`"
                :alt="tool.name"
                :class="{ 'add-bg': tool.addBg || false }"
              />
            </span>
            <div class="desc">
              <h3 class="mb-5">{{ tool.name }}</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="row justify-content-center" v-if="moreTools > 1">
        <div class="col-auto">
          <button
            class="btn btn-primary py-4 px-5"
            @click="maxShow = tools.length"
          >
            Show more ({{ moreTools }})
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services-1 {
  &:hover {
    .icon {
      img {
        background: none !important;
      }
    }
  }
  .icon {
    img {
      width: 80px;
      transition: 0.3s ease-in-out;

      &.add-bg {
        background: #fff;
      }
    }
  }
}
</style>