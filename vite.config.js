import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true'

// GitHub Pages serves project sites from /<repo>/, not /
export default defineConfig({
  plugins: [react()],
  base: isGitHubPagesBuild && repository ? `/${repository}/` : '/',
})
