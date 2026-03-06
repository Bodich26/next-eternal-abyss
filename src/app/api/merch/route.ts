import { NextResponse } from "next/server";
import merch from "@/entities/merch/model/merch.json";

export async function GET() {
  try {
    if (!merch || merch.length === 0) {
      return NextResponse.json({ error: "Мерч не найден" }, { status: 404 });
    }
    return NextResponse.json(merch);
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
