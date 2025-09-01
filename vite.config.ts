import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/FAB/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
