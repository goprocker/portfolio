// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://gopinath.loopfound.in",
  devToolbar: { enabled: false },
  server: { host: true, port: 4321 },
  vite: { plugins: [tailwindcss()] },
});
