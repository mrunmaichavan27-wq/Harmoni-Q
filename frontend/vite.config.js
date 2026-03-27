import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output the production build to backend-/public so the Node.js server can serve it
    outDir: path.resolve(__dirname, '../backend-/public'),
    emptyOutDir: true,
  },
})