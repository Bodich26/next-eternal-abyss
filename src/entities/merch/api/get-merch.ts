import { notFound } from "next/navigation";
import { IMerch, MerchCached } from "../model/type";
import { API_ROUTES } from "@/../routes";

export const getMerch = async ({
  isCached,
}: MerchCached): Promise<IMerch[]> => {
  const URL = `${API_ROUTES.BASE_API}/${API_ROUTES.MERCH}`;

  if (!URL) {
    throw new Error("URL для получения мерча не задан");
  }

  const fetchOptions = isCached
    ? {
        cache: "force-cache" as const,
        next: {
          revalidate: 60,
          tags: ["merch"],
        },
      }
    : { cache: "no-store" as const };

  const res = await fetch(URL, fetchOptions);

  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const merch: IMerch[] = await res.json();

  if (!Array.isArray(merch)) {
    throw new Error("Некорректный формат ответа");
  }

  return merch;
};
