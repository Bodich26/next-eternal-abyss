"use server";
import { cookies } from "next/headers";
import { FormValues, tourFormSchema } from "../model/tour-form-schema";

export async function editTour(formData: FormValues) {
  try {
    const parsed = tourFormSchema.safeParse(formData);
    if (!parsed.success) {
      return {
        success: false,
        error: "Неверные данные: " + parsed.error.message,
      };
    }

    const currentChanges = JSON.parse(
      (await cookies()).get("tourChanges")?.value || "[]",
    );

    const updatedChanges = currentChanges.filter(
      (t: any) => t.id !== parsed.data.id,
    );
    updatedChanges.push(parsed.data);

    (await cookies()).set("tourChanges", JSON.stringify(updatedChanges), {
      path: "/",
      maxAge: 60 * 60 * 24 * 1,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

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
