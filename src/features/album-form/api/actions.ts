"use server";
import { revalidatePath, updateTag } from "next/cache";
import { PUBLIC_ROUTES } from "../../../../routes";
import { albumFormSchema, FormValues } from "../model/album-form-schema";

type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function editAlbum(formData: FormValues): Promise<ActionResult> {
  try {
    const parsed = albumFormSchema.safeParse(formData);
    if (!parsed.success) {
      return {
        success: false,
        error: "Неверные данные: " + parsed.error.message,
      };
    }

    updateTag("albums");
    revalidatePath(
      `${PUBLIC_ROUTES.ADMIN}${PUBLIC_ROUTES.ALBUMS}/${formData.id}`,
    );

    return {
      success: true,
      message: "Альбом успешно обновлен!",
    };
  } catch (error) {
    return {
      success: false,
      error: "Произошла непредвиденная ошибка. Попробуйте позже.",
    };
  }
}
