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
        sensors: resolve(__dirname, 'sensors/index.html'),
        audio: resolve(__dirname, 'audio/index.html'),
        recipes: resolve(__dirname, 'recipes/index.html'),
        'recipes-ribeye': resolve(__dirname, 'recipes/ribeye/index.html'),
        fluid: resolve(__dirname, 'fluid/index.html'),
        istanbul: resolve(__dirname, 'istanbul/index.html'),
        water: resolve(__dirname, 'water/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
