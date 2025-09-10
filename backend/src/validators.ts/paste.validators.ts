import { z } from "zod";
export const createPasteSchema = z.object({
  content: z.string().min(1, { message: "Content can not be Empty" }),
  expiresAt: z.date(),
});
