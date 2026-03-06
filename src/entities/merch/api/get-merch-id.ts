import { notFound } from "next/navigation";
import { IMerch } from "../model/type";
import { API_ROUTES } from "@/../routes";

export const getMerchId = async (id: string): Promise<IMerch> => {
  try {
    if (!id) {
      throw new Error("Id мерча не передан");
    }

    const URL = `${API_ROUTES.BASE_API}/${API_ROUTES.MERCH}/${id}`;

    if (!URL) {
      throw new Error("URL для получения мерча не задан");
    }

    const res = await fetch(URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error(`HTTP error: ${res.status}`);
    }

    const merch: IMerch = await res.json();
    if (!merch) {
      throw new Error("Ошибка при получении мерча");
    }

    return merch;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
