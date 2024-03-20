import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  renderers: ['@astrojs/renderer-react'],
  integrations: [tailwind(), sitemap(), react()],
  adapter: netlify({
    edgeMiddleware: true
  })
});