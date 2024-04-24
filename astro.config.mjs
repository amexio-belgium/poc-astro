import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import alpine from '@astrojs/alpinejs';

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    alpine({
      entrypoint: '/src/entrypoint'
    }), 
    tailwind(), 
    sitemap(),
    sanity({
      projectId: "py2sag3w",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
    react()],
  adapter: netlify({
    edgeMiddleware: true
  })
});