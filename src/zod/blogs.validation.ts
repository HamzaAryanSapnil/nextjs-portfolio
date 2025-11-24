import z from "zod";
export const createBlogZodSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.optional(z.string().min(1)),
  content: z.optional(z.string().min(1)),
  category: z.optional(z.string().min(1)),
  tags: z
    .optional(z.array(z.string()).min(1, "Tags array cannot be empty"))
    .default([]),
  featuredImage: z.optional(z.string().min(1)),
});