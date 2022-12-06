/// <reference types="./vite.config" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],

  optimizeDeps: {
    exclude: ["vue-meteor-tracker"],
  },

  meteor: {
    clientEntry: 'imports/ui/main.ts',
  },
})
