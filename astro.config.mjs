import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ava.raahelbaig.com',
  // Temporarily use /ava-blog/ base until custom domain is active
  // Then change back to base: '/'
  base: '/ava-blog/',
});
