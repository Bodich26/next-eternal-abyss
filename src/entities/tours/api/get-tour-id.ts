import { notFound } from "next/navigation";
import { ITour } from "../model/type";
import { API_ROUTES } from "@/../routes";

export const getTourId = async (id: string): Promise<ITour> => {
  try {
    if (!id) {
      throw new Error("Id тура не передан");
    }

    const URL = `${API_ROUTES.BASE_API}/${API_ROUTES.TOURS}/${id}`;

    if (!URL) {
      throw new Error("URL для получения туров не задан");
    }

    const res = await fetch(URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error(`HTTP error: ${res.status}`);
    }

    const tour: ITour = await res.json();
    if (!tour) {
      throw new Error("Ошибка при получении тура");
    }

    return tour;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
