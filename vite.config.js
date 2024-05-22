import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/nexter-unibox/',

  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
