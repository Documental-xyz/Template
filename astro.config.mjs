import { defineConfig } from 'astro/config';
import core from '@documental-xyz/core';

export default defineConfig({
  site: process.env.SITE || 'http://localhost',
  integrations: [
    core({
      repo: 'documental-xyz/starter',
      branch: 'main',
      authBaseUrl: 'https://sveltia-cms-auth.example.workers.dev',
      pagesFolder: 'pages',
      mediaFolder: 'uploads',
    }),
  ],
});