import { defineCollection } from 'astro:content';
import { createPagesLoader, pagesSchema } from '@documental-xyz/core/loader';

const pages = defineCollection({
  loader: createPagesLoader({ base: './pages' }),
  schema: pagesSchema,
});

export const collections = { pages };
