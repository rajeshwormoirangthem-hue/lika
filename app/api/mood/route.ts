import { NextResponse } from "next/server";

export async function GET() {
  const moods = ["Calm", "Neutral", "Thoughtful", "Detached"];

  return NextResponse.json({
    mood: moods[Math.floor(Math.random() * moods.length)],
  });
}
