export async function POST(request: Request) {
  const { email, password } = (await request.json()) as { email?: string; password?: string };

  if (password !== process.env.BRIEFING_PASSWORD) {
    return Response.json({ error: "Incorrect password" }, { status: 401 });
  }

  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const timestamp = new Date().toISOString();

  try {
    await fetch(process.env.BRIEFING_LOG_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, ip, timestamp }),
    });
  } catch (err) {
    console.error("[briefing-log] webhook failed:", err);
  }

  return Response.json({ ok: true });
}
