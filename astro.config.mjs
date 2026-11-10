import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://scan-perks.com',
  output: 'static',
  compressHTML: true,
  redirects: {
    '/press': '/',
    '/blog/qr-code-loyalty-program-guide': '/qr-code-loyalty-program/',
  },
});
