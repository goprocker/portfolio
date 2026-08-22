import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(["design", "code", "websites"]),
    featured: z.boolean().default(false),
    thumbnail: z.string(),
    images: z.array(z.string()).default([]),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
