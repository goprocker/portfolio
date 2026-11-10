// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gopinath.loopfound.in",
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],
  devToolbar: { enabled: false },
  server: { host: true, port: 4321 },
  vite: { plugins: [tailwindcss()] },
});
