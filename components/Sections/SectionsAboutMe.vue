<script setup>
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
</script>
<template>
  <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-6 col-lg-5 d-flex">
          <div class="img-about img d-flex align-items-stretch">
            <div class="overlay"></div>
            <div
              class="img d-flex align-self-stretch align-items-center"
              style="background-image: url(images/about.jpg)"
            ></div>
          </div>
        </div>
        <div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
          <div class="row justify-content-start pb-3">
            <div
              class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated"
            >
              <h1 class="big">About</h1>
              <h2 class="mb-4">About Me</h2>
              <p>
                With over a decade of experience as a full stack web developer,
                I specialize in Laravel and Vue.js frameworks, crafting
                efficient, scalable web applications. Proficient in front-end
                and back-end development, I leverage HTML, CSS, JavaScript, and
                PHP to deliver exceptional user experiences. Continuously
                learning and adapting to emerging trends, my passion for web
                development fuels innovative solutions that empower businesses
                in the digital landscape. Excited about new challenges, I
                eagerly apply my skills to deliver high-quality web solutions.
              </p>
              <ul class="about-info mt-4 px-md-0 px-2">
                <li class="d-flex">
                  <span>Name:</span> <span>Jeric Izon</span>
                </li>
                <li class="d-flex">
                  <span>Age:</span> <span>{{ myAge }}</span>
                </li>
                <li class="d-flex">
                  <span>Address:</span>
                  <span>City of Santa Rosa, Laguna, Philippines</span>
                </li>
                <li class="d-flex"><span>Zip code:</span> <span>4026</span></li>
                <li class="d-flex">
                  <span>Email:</span>
                  <span
                    ><a href="mailto:im.jericizon@gmail.com"
                      >im.jericizon@gmail.com</a
                    ></span
                  >
                </li>
                <li class="d-flex">
                  <span>Phone: </span> <span>+639760168258</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated"
          >
            <div class="text">
              <p>
                <DownloadCV />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>