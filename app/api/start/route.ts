import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  const res = await fetch(
    "https://panel.danbot.host/api/client/servers/dfec9f90/power",
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

