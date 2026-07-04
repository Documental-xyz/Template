import 'dotenv/config';
import { defineConfig } from 'astro/config';
import core from '@documental-xyz/core';

const SITE = process.env.SITE || 'http://localhost';

let BASE_PATH = process.env.BASE_PATH || '';
if (BASE_PATH) {
  if (!BASE_PATH.startsWith('/')) BASE_PATH = `/${BASE_PATH}`;
  if (!BASE_PATH.endsWith('/')) BASE_PATH = `${BASE_PATH}/`;
}

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  output: 'static',
  integrations: [
    core({
      repo: process.env.REPO || 'YOUR_ORG/YOUR_REPO',
      branch: process.env.BRANCH || 'main',
      authBaseUrl: process.env.AUTH_BASE_URL,
      pagesFolder: 'pages',
      mediaFolder: process.env.MEDIA_FOLDER,
      publicFolder: process.env.PUBLIC_FOLDER,
    }),
  ],
});
