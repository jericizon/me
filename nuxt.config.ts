// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app: {
  //   baseURL: '/me/', // baseURL: '/<repository>/'
  //   buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  // },
  css: [
    '~/assets/css/open-iconic-bootstrap.min.css',
    '~/assets/css/animate.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/owl.theme.default.min.css',
    // '~/assets/css/magnific-popup.css',
    // '~/assets/css/aos.css',
    '~/assets/css/ionicons.min.css',
    // '~/assets/css/flaticon.css',
    '~/assets/css/icomoon.css',
    '~/assets/css/style.css'
  ],
})