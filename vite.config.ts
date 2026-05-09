import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import reactSsg from 'vite-plugin-react-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactSsg()],
})
