import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import externalGlobals from 'rollup-plugin-external-globals'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        externalGlobals({
          'chart.js': 'Chart',
        }),
      ],
    },
  },
  plugins: [react()],
})
