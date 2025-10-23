import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const file = await req.body();

    if (!file) {
      return NextResponse.json({ message: "No file found" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
