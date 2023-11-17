import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';

console.log(handlebars);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [handlebars()],
});
