import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  plugins: [react()],
});

