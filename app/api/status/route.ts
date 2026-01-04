import { NextResponse } from "next/server";

export const runtime = "edge"; // optional but fast on Vercel

export async function GET() {
  try {
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

    if (!res.ok) throw new Error("Pterodactyl error");

    const json = await res.json();

    return NextResponse.json({
      state: json.attributes.current_state, // running | offline | starting
    });
  } catch {
    return NextResponse.json({ state: "unknown" }, { status: 500 });
  }
}
