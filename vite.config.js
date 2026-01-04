import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/claude-playground/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sensors: resolve(__dirname, 'apps/sensors/index.html'),
        audio: resolve(__dirname, 'apps/audio/index.html'),
        recipes: resolve(__dirname, 'apps/recipes/index.html'),
        'recipes-ribeye': resolve(__dirname, 'apps/recipes/ribeye/index.html'),
        fluid: resolve(__dirname, 'apps/fluid/index.html'),
        istanbul: resolve(__dirname, 'apps/istanbul/index.html'),
        water: resolve(__dirname, 'apps/water/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
