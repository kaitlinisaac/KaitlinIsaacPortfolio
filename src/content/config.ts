import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
    draft: z.boolean().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'writing': writingCollection,
  'blog': blogCollection,
  'projects': projectsCollection,
  artifacts: defineCollection({
    schema: z.object({
      title: z.string(),
      type: z.enum(['image', 'audio', 'video', 'link']),
      content: z.string(),
    }),
  }),
}; 