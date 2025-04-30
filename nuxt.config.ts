// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  components: true,
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    'usebootstrap',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:8000/api/'
    }
  },

})