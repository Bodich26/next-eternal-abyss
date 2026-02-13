import { notFound } from "next/navigation";
import { IMerch } from "../model/type";

export const getMerch = async (): Promise<IMerch[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.MERCH_API_URL}`;
  if (!URL) {
    throw new Error("URL для получения мерча не задан");
  }

  const res = await fetch(URL, {
    cache: "force-cache",
    next: {
      revalidate: 60,
      tags: ["merch"],
    },
  });

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
