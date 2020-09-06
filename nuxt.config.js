import colors from 'vuetify/es5/util/colors'

const page = {
  title: 'Resume Generator',
  short_name: 'Resume Generator',
  description: 'Create your resume with a couple of clicks',
  safeImg: {
    url: '/images/safe_image2.png',
    alt: 'Image of Resume Generator',
  },
  favicon: '/images/logo_original.ico',
  author: `Mauricio Hernan Cabrera`,
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: 'Resume Generator',
    title: 'Resume Generator',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
      { hid: 'author', name: 'author', content: `${page.author}` },
      {
        hid: 'description',
        name: 'description',
        content: `${page.description}`,
      },
      { hid: 'twitter-card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter-title', name: 'twitter:title', content: `${page.title}` },
      {
        hid: 'twitter-description',
        name: 'twitter:description',
        content: `${page.description}`,
      },

      {
        hid: 'twitter-image',
        name: 'twitter:image',
        content: `${page.safeImg.url}`,
      },
      {
        hid: 'twitter-image-alt',
        name: 'twitter:image:alt',
        content: `${page.safeImg.alt}`,
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: `${page.title}` },
      { hid: 'og-image', property: 'og:image', content: `${page.safeImg.url}` },
      {
        hid: 'og-site_name',
        property: 'og:site_name',
        content: `${page.title}`,
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content: `${page.description}`,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: page.favicon },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/i18n.js', { src: '~/plugins/ga', mode: 'client' }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  loading: { color: '#ffffff' },

  axios: {},

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://rapitienda.net/images/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'rapitienda-images',
          cacheExpiration: {
            maxEntries: 10000,
            maxAgeSeconds: 86400,
          },
        },
      },
    ],
  },

  manifest: {
    name: page.title,
    short_name: page.short_name,
    lang: 'en-US',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#f52e41',
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
