import { NextResponse } from "next/server";

export async function GET() {
  const thoughts = [
    "Not everything needs a response.",
    "Silence is also an answer.",
    "Observing is underrated.",
  ];

  return NextResponse.json({
    thought: thoughts[Math.floor(Math.random() * thoughts.length)],
  });
}
