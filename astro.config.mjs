import 'dotenv/config';
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';
import core from '@documental-xyz/core';

const SITE = process.env.SITE || 'http://localhost';

let BASE_PATH = process.env.BASE_PATH || '';
if (BASE_PATH) {
  if (!BASE_PATH.startsWith('/')) BASE_PATH = `/${BASE_PATH}`;
  if (!BASE_PATH.endsWith('/')) BASE_PATH = `${BASE_PATH}/`;
}

/**
 * Detect GitHub repo automatically:
 * 1. GITHUB_REPOSITORY env var (set by GitHub Actions, format: "org/repo")
 * 2. process.env.REPO (.env override)
 * 3. Git remote origin URL (local dev)
 * 4. Fallback: 'YOUR_ORG/YOUR_REPO'
 */
function detectRepo() {
  if (process.env.GITHUB_REPOSITORY) return process.env.GITHUB_REPOSITORY;
  if (process.env.REPO) return process.env.REPO;
  try {
    const url = execSync('git remote get-url origin', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    const match = url.match(/github\.com[:/]([^/]+\/[^/]+?)(\.git)?$/);
    if (match) return match[1];
  } catch {}
  return 'YOUR_ORG/YOUR_REPO';
}

/**
 * Detect branch automatically:
 * 1. GITHUB_REF_NAME env var (set by GitHub Actions)
 * 2. process.env.BRANCH (.env override)
 * 3. Current git branch (local dev)
 * 4. Fallback: 'main'
 */
function detectBranch() {
  if (process.env.GITHUB_REF_NAME) return process.env.GITHUB_REF_NAME;
  if (process.env.BRANCH) return process.env.BRANCH;
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
  } catch {}
  return 'main';
}

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  output: 'static',
  integrations: [
    core({
      repo: detectRepo(),
      branch: detectBranch(),
      authBaseUrl: process.env.AUTH_BASE_URL,
      pagesFolder: 'pages',
      mediaFolder: process.env.MEDIA_FOLDER,
      publicFolder: process.env.PUBLIC_FOLDER,
    }),
  ],
});
