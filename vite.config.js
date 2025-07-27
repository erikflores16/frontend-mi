import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    allowedHosts: [
      'frontend-mi-12.onrender.com',
      'frontend-mi-bo3p.onrender.com' // ← este es el nuevo host
    ]
  }
})
