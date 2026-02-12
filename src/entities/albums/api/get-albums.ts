import { notFound } from "next/navigation";
import { IAlbum } from "../model/type";

export const getAlbums = async (): Promise<IAlbum[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.ALBUMS_API_URL}`;
  if (!URL) {
    throw new Error("URL для получения альбомов не задан");
  }

  const res = await fetch(URL, {
    cache: "force-cache",
    next: {
      revalidate: 60,
      tags: ["albums"],
    },
  });

  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const albums: IAlbum[] = await res.json();

  if (!Array.isArray(albums)) {
    throw new Error("Некорректный формат ответа");
  }

  return albums;
};
