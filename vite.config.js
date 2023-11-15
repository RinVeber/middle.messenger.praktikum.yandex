// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [handlebars()],
});
