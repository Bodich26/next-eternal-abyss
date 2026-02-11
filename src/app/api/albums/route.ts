import { NextResponse } from "next/server";
import albums from "@/entities/albums/model/albums.json";

export async function GET() {
  return NextResponse.json(albums);
}
