import { NextResponse } from "next/server";

export const runtime = "nodejs"; // 🔥 IMPORTANT

export async function POST() {
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

  return NextResponse.json({ ok: res.ok });
}

