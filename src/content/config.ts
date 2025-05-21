import { defineCollection, z } from 'astro:content';

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

const lessonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    downloadUrl: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    imageUrl: z.string().optional(),
    embedUrl: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    embedUrl: z.string().optional(),
    thumbnail: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
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
  'blog': blogCollection,
  'projects': projectsCollection,
  'lessons': lessonsCollection,
  'videos': videosCollection,
  artifacts: defineCollection({
    schema: z.object({
      title: z.string(),
      type: z.enum(['image', 'audio', 'video', 'link']),
      content: z.string(),
    }),
  }),
}; 