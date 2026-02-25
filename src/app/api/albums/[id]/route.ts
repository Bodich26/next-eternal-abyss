import { NextRequest, NextResponse } from "next/server";
import albums from "@/entities/albums/model/albums.json";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    if (!id) {
      return NextResponse.json(
        { error: "Id альбома не передан" },
        { status: 400 },
      );
    }

    const currentAlbum = albums.find((album) => album.id === id);

    if (!currentAlbum) {
      return NextResponse.json({ error: "Альбом не найден" }, { status: 404 });
    }

    return NextResponse.json(currentAlbum);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { message: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
