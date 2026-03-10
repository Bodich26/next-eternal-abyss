import { NextResponse, NextRequest } from "next/server";
import tours from "@/entities/tours/model/tours.json";

export async function GET(req: NextRequest) {
  try {
    const changesStr = req.cookies.get("tourChanges")?.value;

    // копия базовых данных
    let userTours = [...tours];

    // безопасный парсинг cookie
    let changes: any[] = [];

    if (changesStr) {
      try {
        changes = JSON.parse(changesStr);
      } catch {
        changes = [];
      }
    }

    for (const change of changes) {
      if (change.deleted) {
        // удаление
        userTours = userTours.filter((tour) => tour.id !== change.id);
        continue;
      }

      const index = userTours.findIndex((tour) => tour.id === change.id);

      if (index !== -1) {
        // update
        userTours[index] = {
          ...userTours[index],
          ...change,
        };
      } else {
        // create new
        userTours.push(change);
      }
    }

    if (!userTours.length) {
      return NextResponse.json({ error: "Туры не найдены" }, { status: 404 });
    }

    return NextResponse.json(userTours);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error: "Server error",
        message: (error as Error).message ?? "Внутренняя ошибка сервера",
      },
      { status: 500 },
    );
  }
}
