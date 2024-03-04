import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    alpine({
        integrations: [alpine({ entrypoint: '/src/entrypoint' })],
    }),
    tailwind(),
    sitemap()
  ],
  adapter: netlify({
    edgeMiddleware: true
  })
});
