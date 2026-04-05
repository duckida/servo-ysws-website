import adapter from '@sveltejs/adapter-auto';
import { relative, sep } from 'node:path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // Set to '404.html' for SPA mode
      precompress: false,
      strict: true
    })
  }
};
