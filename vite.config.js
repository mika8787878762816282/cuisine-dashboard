import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cuisine-dashboard/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
  },
})
