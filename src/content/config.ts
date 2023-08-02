import { defineCollection, z } from "astro:content";

const defaultTitle = "Astro";
const defaultDescription = "The best way to build faster websites with Astro";
const defaultLanguage = "en-us";

const connect = defineCollection({
  schema: z.object({
    title: z.string().default(defaultTitle),
    description: z.string().default(defaultDescription),
    lang: z.literal("en-us").default(defaultLanguage),
    dir: z.union([z.literal("ltr"), z.literal("rtl")]).default("ltr"),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    ogLocale: z.string().optional(),
  }),
});

const civil = defineCollection({
  schema: z.object({
    title: z.string().default(defaultTitle),
    description: z.string().default(defaultDescription),
  }),
});

export const collections = { connect, civil };
