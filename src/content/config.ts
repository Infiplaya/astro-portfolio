import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      github: z.string().optional(),
      link: z.string().optional(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      logo: z.string().optional(),
    }),
  }),
};
