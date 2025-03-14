import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://linkarooie.deanlofts.xyz',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});