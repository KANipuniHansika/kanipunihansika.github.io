import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration.
// The dev server runs on http://localhost:5173 by default.
// `npm run build` outputs static files to /dist for deployment.
export default defineConfig({
  plugins: [react()],
})
