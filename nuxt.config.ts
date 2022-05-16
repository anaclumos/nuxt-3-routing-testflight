import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/svg', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~/assets/styles/tokens.scss']
  },
})