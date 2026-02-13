import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['firebase/compat/app', 'firebase/compat/analytics', 'firebase/compat/firestore'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Chunk Firebase séparément (gros bundle)
          firebase: ['firebase/compat/app', 'firebase/compat/analytics', 'firebase/compat/firestore'],
          // Chunk les dépendances principales
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Réduire la taille des chunks
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  // Optimiser les préchargements
  server: {
    preTransformRequests: true,
  },
})
