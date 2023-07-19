import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jspm from "vite-plugin-jspm"

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [jspm(), react()],
})
