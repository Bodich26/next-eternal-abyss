import { NextResponse } from "next/server";
import albums from "@/entities/albums/model/albums.json";

export async function GET() {
  try {
    if (!albums || albums.length === 0) {
      return NextResponse.json(
        { error: "Альбомы не найдены" },
        { status: 404 },
      );
    }
    return NextResponse.json(albums);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { message: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
