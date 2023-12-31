import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
  plugins: [handlebars()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index";',
      },
    },
  },
});
