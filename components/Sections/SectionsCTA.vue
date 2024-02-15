<script setup>
const totalDaysInIndustry = () => {
  const date = new Date(2013, 11, 1); // January 1, 2023
  // Get the current date
  var currentDate = new Date();

  // Calculate the difference in years, months, and days
  var yearsDiff = currentDate.getFullYear() - date.getFullYear();
  var monthsDiff = currentDate.getMonth() - date.getMonth();
  var daysDiff = currentDate.getDate() - date.getDate();

  // Adjust for negative differences
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    monthsDiff += 12;
  }
  if (daysDiff < 0) {
    monthsDiff--;
    var tempDate = new Date(date);
    tempDate.setMonth(tempDate.getMonth() + 1, 0); // Get the last day of the previous month
    daysDiff = tempDate.getDate() - date.getDate() + currentDate.getDate();
  }

  return `${yearsDiff}y ${monthsDiff}m ${daysDiff}d`;
};
</script>
<template>
  <section
    class="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
    id="section-counter"
  >
    <div class="container">
      <div class="row d-md-flex align-items-center">
        <div class="col-md d-flex justify-content-center counter-wrap">
          <div class="block-18">
            <div class="text">
              <strong class="number" data-number="100">{{
                totalDaysInIndustry()
              }}</strong>
              <span>Been in industry</span>
            </div>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center counter-wrap">
          <div class="block-18">
            <div class="text">
              <strong class="number" data-number="1200">300</strong>
              <span>Complete Projects</span>
            </div>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center counter-wrap">
          <div class="block-18">
            <div class="text">
              <strong class="number" data-number="1200">200</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
        <div class="col-md d-flex justify-content-center counter-wrap">
          <div class="block-18">
            <div class="text">
              <strong class="number" data-number="500">500</strong>
              <span>Cups of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="ftco-section ftco-hireme img margin-top"
    style="background-image: url(images/cta-bg.jpg)"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 text-center">
          <h2>I'm <span>Available</span> for freelancing</h2>
          <p>
            Embrace the opportunity to turn ideas into reality. Let's embark on
            this freelance journey together.
          </p>
          <p class="mb-0">
            <a
              href="mailto:im.jericizon@gmail.com?subject=Hiring%20Full%20stack%20developer%20ref(portfolio)"
              class="btn btn-primary py-3 px-5"
              >Hire me</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>