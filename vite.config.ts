import { defineConfig } from "vite";
import vituum from "vituum";
import handlebars from "@vituum/vite-plugin-handlebars";
import postcss from "@vituum/vite-plugin-postcss";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
export default defineConfig({
  plugins: [
    vituum(),
    handlebars({
      partials: {
        directory: "src/partials",
        extname: false,
      },
    }),
    postcss({
      overrideBrowsersList: ["last 2 versions", "> 1%"],
    }),
    ViteImageOptimizer(),
  ],
});
