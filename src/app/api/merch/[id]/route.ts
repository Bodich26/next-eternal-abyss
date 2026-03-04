import { NextRequest, NextResponse } from "next/server";
import metch from "@/entities/merch/model/merch.json";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    if (!id) {
      return NextResponse.json(
        { error: "Id мерча не передан" },
        { status: 400 },
      );
    }

    const currentMetch = metch.find((metch) => metch.id === id);

    if (!currentMetch) {
      return NextResponse.json({ error: "Мерч не найден" }, { status: 404 });
    }

    return NextResponse.json(currentMetch);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { message: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
