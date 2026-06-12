import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const meetings = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/meetings',
  }),
  schema: z.object({
    date: z.string(),
    time: z.string(),
    startsAt: z.string(),
    status: z.enum(['scheduled', 'weather-watch', 'canceled']),
    notes: z.string(),
  }),
});

export const collections = {
  meetings,
};
