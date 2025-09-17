import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-mi-1.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    allowedHosts: ['frontend-mi-12.onrender.com'],
  },
})
