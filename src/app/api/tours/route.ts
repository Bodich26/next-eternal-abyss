import { NextResponse } from "next/server";
import tours from "@/entities/tours/model/tours.json";

export async function GET() {
  try {
    if (!tours || tours.length === 0) {
      return NextResponse.json({ error: "Туры не найдены" }, { status: 404 });
    }
    return NextResponse.json(tours);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { message: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
