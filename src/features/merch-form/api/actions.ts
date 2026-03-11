"use server";
import { revalidatePath, updateTag } from "next/cache";
import { FormValues, merchFormSchema } from "../model/merch-form-schema";
import { PUBLIC_ROUTES } from "../../../../routes";

type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function editMerch(formData: FormValues): Promise<ActionResult> {
  try {
    const parsed = merchFormSchema.safeParse(formData);
    if (!parsed.success) {
      return {
        success: false,
        error: "Неверные данные: " + parsed.error.message,
      };
    }

    updateTag("merch");
    revalidatePath(
      `${PUBLIC_ROUTES.ADMIN}${PUBLIC_ROUTES.MERCH}/${formData.id}`,
    );

    return {
      success: true,
      message: "Мерч успешно обновлен!",
    };
  } catch (error) {
    return {
      success: false,
      error: "Произошла непредвиденная ошибка. Попробуйте позже.",
    };
  }
}
