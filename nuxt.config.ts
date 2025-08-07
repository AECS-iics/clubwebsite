// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: process.env.BASE_URL ?? '/clubwebsite/',
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  runtimeConfig: {
    public: {
      GOOGLE_SCRIPT_URL: process.env.NUXT_PUBLIC_GOOGLE_SCRIPT_URL,
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
