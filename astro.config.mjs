import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://linkarooie.deanlofts.xyz',
  base: '/',
  integrations: [],
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});