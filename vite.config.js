import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(() => {
  const shouldAnalyze = process.env.ANALYZE === 'true'

  return {
    plugins: [
      react(),
      compression({ algorithm: 'gzip', ext: '.gz', threshold: 0 }),
      compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 0 }),
      ...(shouldAnalyze
        ? [visualizer({ filename: 'dist/stats.html', open: false, gzipSize: true, brotliSize: true })]
        : []),
    ],
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      target: 'es2020',
      minify: 'esbuild',
      chunkSizeWarningLimit: 600,
      assetsInlineLimit: 0,
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  }
})
