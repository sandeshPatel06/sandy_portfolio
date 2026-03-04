import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sandeshpatel06.github.io',
  base: '/SandyPortfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});