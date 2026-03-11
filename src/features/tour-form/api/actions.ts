"use server";
import { PUBLIC_ROUTES } from "@/../routes";
import { FormValues, tourFormSchema } from "../model/tour-form-schema";
import { revalidatePath, updateTag } from "next/cache";

type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function editTour(formData: FormValues): Promise<ActionResult> {
  try {
    const parsed = tourFormSchema.safeParse(formData);
    if (!parsed.success) {
      return {
        success: false,
        error: "Неверные данные: " + parsed.error.message,
      };
    }

    updateTag("tours");
    revalidatePath(
      `${PUBLIC_ROUTES.ADMIN}${PUBLIC_ROUTES.TOURS}/${formData.id}`,
    );

    return {
      success: true,
      message: "Тур успешно обновлен!",
    };
  } catch (error) {
    return {
      success: false,
      error: "Произошла непредвиденная ошибка. Попробуйте позже.",
    };
  }
}
