import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'framer-motion': path.resolve(__dirname, './src/animations/motion-shim.tsx'),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    force: true,
  },
  server: {
    port: 5173,
    host: true,
  },
});
