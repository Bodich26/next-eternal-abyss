import z from "zod";

export const newsFormSchema = z.object({
  email: z.email({
    message: "Enter your Email.",
  }),
  firstName: z.string().trim().min(3, {
    message: "Name must be at least 3 characters.",
  }),
});
