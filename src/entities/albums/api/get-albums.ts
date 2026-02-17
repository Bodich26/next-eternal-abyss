import { notFound } from "next/navigation";
import { AlbumCached, IAlbum } from "../model/type";
import { API_ROUTES } from "@/../routes";

export const getAlbums = async ({
  isCached,
}: AlbumCached): Promise<IAlbum[]> => {
  const URL = `${API_ROUTES.BASE_API}/${API_ROUTES.ALBUMS}`;

  if (!URL) {
    throw new Error("URL для получения альбомов не задан");
  }

  const fetchOptions = isCached
    ? {
        cache: "force-cache" as const,
        next: {
          revalidate: 60,
          tags: ["albums"],
        },
      }
    : { cache: "no-store" as const };

  const res = await fetch(URL, fetchOptions);

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
