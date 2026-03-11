"use server";
import { FormValues, newsFormSchema } from "../model/news-form-schema";

type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function newsSubscription(
  formData: FormValues,
): Promise<ActionResult> {
  try {
    const parsed = newsFormSchema.safeParse(formData);
    if (!parsed.success) {
      return {
        success: false,
        error: "Неверные данные: " + parsed.error.message,
      };
    }

    return {
      success: true,
      message: "Вы успешно подписались на новости!",
    };
  } catch (error) {
    return {
      success: false,
      error: "Произошла непредвиденная ошибка. Попробуйте позже.",
    };
  }
}
