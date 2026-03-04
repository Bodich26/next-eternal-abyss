import { sizeEnumMerch } from "@/entities/merch";
import { z } from "zod";

export const merchFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Минимум 5 символов")
    .max(100, "Максимум 100 символов"),
  price: z.string().trim().min(1, "Минимум 1 цифра"),
  currency: z
    .string()
    .trim()
    .length(3, "Валюта должна состоять из 3 символов")
    .toUpperCase(),
  shortDescription: z
    .string()
    .trim()
    .min(10, "Минимум 10 символов")
    .max(150, "Максимум 150 символов"),
  sizes: z.array(sizeEnumMerch),
  image: z.string({ message: "Укажите ссылка на картинку мерча" }).trim(),
});

export type FormValues = z.infer<typeof merchFormSchema>;
