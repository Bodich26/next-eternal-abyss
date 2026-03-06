import { notFound } from "next/navigation";
import { IAlbum } from "../model/type";
import { API_ROUTES } from "@/../routes";

export const getAlbumId = async (id: string): Promise<IAlbum> => {
  try {
    if (!id) {
      throw new Error("Id альбома не передан");
    }

    const URL = `${API_ROUTES.BASE_API}/${API_ROUTES.ALBUMS}/${id}`;

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

    const album: IAlbum = await res.json();
    if (!album) {
      throw new Error("Ошибка при получении альбома");
    }

    return album;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
