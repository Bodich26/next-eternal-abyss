import tours from "@/entities/tours/model/tours.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const currentTour = tours.find((tour) => tour.id === id);
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
