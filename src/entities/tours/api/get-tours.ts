import { notFound } from "next/navigation";
import { ITour } from "../model/type";

export const getTours = async (): Promise<ITour[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.TOURS_API_URL}`;
  if (!URL) {
    throw new Error("URL для получения туров не задан");
  }

  const res = await fetch(URL, {
    cache: "force-cache",
    next: {
      revalidate: 60,
      tags: ["tours"],
    },
  });

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
