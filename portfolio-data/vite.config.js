import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-data-update/", // 🔴 OBLIGATOIRE pour GitHub Pages
})
