import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base: './'` keeps asset paths relative so the build works on Netlify,
// Vercel, and GitHub Pages (project subpaths) without extra configuration.
export default defineConfig({
  plugins: [react()],
  base: './',
})
