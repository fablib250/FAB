import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ Fix: Set base to root
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
