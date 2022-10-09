/* eslint-disable @typescript-eslint/no-explicit-any */
import eslintPlugin from 'eslint-plugin-vue'

export default defineNuxtConfig({
  ssr: true,
  typescript: {
    strict: true,
    shim: false
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '/api'
    }
  },
  vite: {
    plugins: [eslintPlugin],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (source: any, fp: any) =>
            fp.endsWith('variables.module.scss') ? source : `@use '@/assets/_global.scss' as *; ${source}`
        }
      }
    }
  }
})
