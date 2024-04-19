import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  server: {
    port: 8282
  },
  preview: {
    port: 8081,
    strictPort: true
  },
  build: {
    // sourcemap: true
  }
})