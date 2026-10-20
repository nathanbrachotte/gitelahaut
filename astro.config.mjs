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
      filter: (page) => !page.includes("/avis/"),
      lastmod: new Date(),
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: cloudflare(),
});
