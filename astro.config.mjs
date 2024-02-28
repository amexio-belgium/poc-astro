import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import axios from "axios";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind(), sitemap()]
});

axios.defaults.baseURL = 'http://localhost:1337/api';