import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const res = await fetch(
    "https://panel.danbot.host/api/client/servers/dfec9f90/resources",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return NextResponse.json({ state: "unknown" }, { status: 500 });
  }

  const json = await res.json();

  return NextResponse.json({
    state: json.attributes.current_state,
  });
}

