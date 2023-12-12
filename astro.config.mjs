import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    svelte(),
  ],
  image: {
    domains: ["astro.build"],
  },
});
