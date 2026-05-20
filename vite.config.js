import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Clean plugin orchestration layer compatible with Vite v8 and Tailwind v4
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})