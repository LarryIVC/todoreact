import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
});

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// ...