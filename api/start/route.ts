import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST() {
  try {
    const res = await fetch(
      `${process.env.PTERO_PANEL}/api/client/servers/${process.env.PTERO_SERVER_ID}/power`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PTERO_API_KEY}`,
          Accept: "Application/vnd.pterodactyl.v1+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ signal: "start" }),
      }
    );

    if (!res.ok) throw new Error("Failed");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
