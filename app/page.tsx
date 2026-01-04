"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("loading");
  const [loading, setLoading] = useState(false);

  const loadStatus = async () => {
    const r = await fetch("/api/status");
    const j = await r.json();
    setStatus(j.state);
  };

  const start = async () => {
    setLoading(true);
    await fetch("/api/start", { method: "POST" });
    await loadStatus();
    setLoading(false);
  };

  useEffect(() => {
    loadStatus();
    const i = setInterval(loadStatus, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h2>Server Status</h2>

      <p>
        Status: <b>{status}</b>
      </p>

      <button
        onClick={start}
        disabled={status !== "offline" || loading}
      >
        {loading ? "Starting..." : "Start Server"}
      </button>
    </main>
  );
}
