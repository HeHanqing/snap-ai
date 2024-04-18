import { z } from "zod";

export const CreateGenerateImage = z.object({
  name: z.string({ required_error: "Name is required" }).min(3, {
    message: "Name is too short",
  }),
  prompt: z
    .string({
      required_error: "Prompt is required",
      invalid_type_error: "Prompt is required",
    })
    .min(3, {
      message: "Prompt is too short",
    }),
  generatedImageUrl: z.string(),
});
