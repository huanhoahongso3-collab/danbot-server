import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const res = await fetch(
    `${process.env.PTERO_PANEL}/api/client/servers/${process.env.PTERO_SERVER_ID}/resources`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PTERO_API_KEY}`,
        Accept: "Application/vnd.pterodactyl.v1+json",
      },
      cache: "no-store",
    }
  );

  const json = await res.json();

  return NextResponse.json({
    state: json.attributes.current_state, // ✅ FIXED
  });
}

