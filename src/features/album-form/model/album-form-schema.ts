import z from "zod";

export const albumFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Минимум 5 символов")
    .max(50, "Максимум 50 символов"),
  releaseYear: z.number().min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры"),
  shortDescription: z
    .string()
    .trim()
    .min(15, "Минимум 15 символов")
    .max(60, "Максимум 60 символов"),
  tracklist: z
    .string()
    .min(1, "Введите хотя бы один трек")
    .transform((value) =>
      value
        .split("\n")
        .map((t) => t.trim())
        .filter(Boolean),
    ),
  image: z.string({ message: "Укажите ссылка на картинку альбома" }).trim(),
});

export type FormValues = z.infer<typeof albumFormSchema>;
