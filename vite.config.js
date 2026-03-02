import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_BASE_PATH = '/portfolio/'

// Use repo base path for production builds so GitHub Pages project URLs resolve assets.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? REPO_BASE_PATH : '/',
}))
