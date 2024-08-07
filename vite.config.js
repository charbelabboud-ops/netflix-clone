import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure that .git and other unnecessary files are not included in the build
    rollupOptions: {
      external: ['.git/*']
    },
    // Optionally specify what directories/files to exclude from the build
    // Vite itself does not directly support a 'exclude' option, but this is a common approach
  },
});
