import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    type: z.enum(['entry', 'link', 'note', 'quote']).default('entry'),
    url: z.string().optional(), // For links
    author: z.string().optional(), // For quotes
  }),
});

export const collections = { posts };
