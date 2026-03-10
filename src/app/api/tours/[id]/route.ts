import { NextRequest, NextResponse } from "next/server";
import tours from "@/entities/tours/model/tours.json";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    if (!id) {
      return NextResponse.json(
        { error: "Id тура не передан" },
        { status: 400 },
      );
    }

    const baseTour = tours.find((tour) => tour.id === id);
    const changesStr = req.cookies.get("tourChanges")?.value;

    let changes: any[] = [];

    if (changesStr) {
      try {
        changes = JSON.parse(changesStr);
      } catch {
        changes = [];
      }
    }

    const change = changes.find((c) => c.id === id);

    if (change?.deleted) {
      return NextResponse.json({ error: "Тур удалён" }, { status: 404 });
    }

    const currentTour = change
      ? baseTour
        ? { ...baseTour, ...change }
        : change
      : baseTour;

    if (!currentTour) {
      return NextResponse.json({ error: "Тур не найден" }, { status: 404 });
    }

    return NextResponse.json(currentTour);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      {
        error: "Server error",
        message: (error as Error).message || "Внутренняя ошибка сервера",
      },
      { status: 500 },
    );
  }
}
