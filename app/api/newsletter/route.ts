import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const limit = rateLimit(`newsletter:${ip}`);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Trop de demandes. Merci de réessayer dans quelques minutes." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const email = String(data.email ?? "").trim();
  // Honeypot — bots fill hidden fields; humans leave it empty.
  const honeypot = String(data.company ?? "").trim();

  if (honeypot) {
    // Silently accept to avoid signalling the trap to bots.
    return NextResponse.json({ ok: true });
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Merci de renseigner une adresse email valide." },
      { status: 422 },
    );
  }

  // Contacts land in a Resend Audience; create one in the Resend dashboard
  // and set RESEND_AUDIENCE_ID. Double opt-in / unsubscribe are handled by
  // Resend's broadcast tooling.
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!process.env.RESEND_API_KEY || !audienceId) {
    console.error("RESEND_API_KEY or RESEND_AUDIENCE_ID is not configured.");
    return NextResponse.json(
      { error: "L'inscription est momentanément indisponible." },
      { status: 500 },
    );
  }

  try {
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    if (error) {
      console.error("Resend contacts error:", error);
      return NextResponse.json(
        { error: "L'inscription a échoué. Merci de réessayer." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Merci de réessayer." },
      { status: 500 },
    );
  }
}
