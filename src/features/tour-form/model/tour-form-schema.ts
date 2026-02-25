import z from "zod";

export const tourFormSchema = z.object({
  date: z
    .string()
    .trim()
    .min(5, "Минимум 5 символов")
    .max(25, "Максимум 25 символов"),
  time: z
    .string()
    .trim()
    .min(5, "Минимум 4 символа")
    .max(5, "Максимум 5 символов"),
  location: z
    .string()
    .trim()
    .min(5, "Минимум 5 символов")
    .max(50, "Максимум 50 символов"),
  venue: z.string().min(3, "Минимум 3 символа").max(25, "Максимум 25 символов"),
  venueName: z
    .string()
    .trim()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов"),
  ticketsUrl: z.httpUrl({ message: "Только полная ссылка" }).trim(),
});

export type FormValues = z.infer<typeof tourFormSchema>;
