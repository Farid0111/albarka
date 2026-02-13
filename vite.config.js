import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['firebase/compat/app', 'firebase/compat/analytics', 'firebase/compat/firestore'],
  },
  build: {
    // Target moderne pour réduire la taille
    target: 'ES2020',
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: ['firebase/compat/app', 'firebase/compat/analytics', 'firebase/compat/firestore'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Optimisations avancées
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    // Augmenter le limit de chunk size warning
    chunkSizeWarningLimit: 600,
    // Réduire les outputs inutiles
    emptyOutDirs: true,
    // Optimiser la sortie des assets
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
  },
  server: {
    preTransformRequests: true,
  },
})
