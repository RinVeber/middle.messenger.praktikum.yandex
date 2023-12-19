import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [handlebars(),
    checker({
      typescript: true,
    })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index";',
      },
    },
  },
});
