import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://gitelahaut.com",
  output: "hybrid",
  integrations: [
    sitemap({
      filter: (page) =>
        !["/avis/", "/404/"].some((path) => page.endsWith(path)),
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: cloudflare(),
});
