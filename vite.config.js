import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
   root: './src',
   server: {
      watch: {
         usePolling: true
      }
   }
});
