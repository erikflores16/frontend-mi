import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const allowedHostsFromEnv = process.env.VITE_ALLOWED_HOSTS?.split(',') || []

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    allowedHosts: allowedHostsFromEnv
  }
})
