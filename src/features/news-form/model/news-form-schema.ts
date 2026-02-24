import z from "zod";

export const newsFormSchema = z.object({
  email: z.email({
    message: "Укажите вашу почту.",
  }),
  firstName: z
    .string()
    .min(3, "Имя слишком короткое")
    .max(20, "Имя слишком длинное"),
});

export type FormValues = z.infer<typeof newsFormSchema>;
