import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'sherzod-personal-website'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          lottie: ['lottie-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lottie-react']
  }
})
