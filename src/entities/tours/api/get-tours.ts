import { notFound } from "next/navigation";
import { ITour, TourCached } from "../model/type";
import { API_ROUTES } from "@/../routes";

export const getTours = async ({ isCached }: TourCached): Promise<ITour[]> => {
  const URL = `${API_ROUTES.BASE_API}/${API_ROUTES.TOURS}`;

  if (!URL) {
    throw new Error("URL для получения туров не задан");
  }

  const fetchOptions = isCached
    ? {
        cache: "force-cache" as const,
        next: {
          revalidate: 60,
          tags: ["tours"],
        },
      }
    : { cache: "no-store" as const };

  const res = await fetch(URL, fetchOptions);

  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const tours: ITour[] = await res.json();

  if (!Array.isArray(tours)) {
    throw new Error("Некорректный формат ответа");
  }

  return tours;
};
