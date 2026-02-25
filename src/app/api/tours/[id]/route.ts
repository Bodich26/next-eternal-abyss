import { NextRequest, NextResponse } from "next/server";
import tours from "@/entities/tours/model/tours.json";

export async function GET(
  _: NextRequest,
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

    const currentTour = tours.find((tour) => tour.id === id);
    if (!currentTour) {
      return NextResponse.json({ error: "Тур не найден" }, { status: 404 });
    }

    return NextResponse.json(currentTour);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { message: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
