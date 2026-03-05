import { z } from "zod";

export const merchFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Минимум 5 символов")
    .max(100, "Максимум 100 символов"),
  price: z.string().min(1, "Введите цену"),
  shortDescription: z
    .string()
    .trim()
    .min(10, "Минимум 10 символов")
    .max(150, "Максимум 150 символов"),
  sizes: z.array(z.string()),
  image: z.string({ message: "Укажите ссылка на картинку мерча" }).trim(),
});

export type FormValues = z.infer<typeof merchFormSchema>;
