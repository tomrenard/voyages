import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  // Rate limit per client IP to curb spam (max 5 submissions / 10 min).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const limit = rateLimit(`contact:${ip}`);
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

  const firstName = String(data.firstName ?? "").trim();
  const lastName = String(data.lastName ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const message = String(data.message ?? "").trim();
  // Honeypot — bots fill hidden fields; humans leave it empty.
  const honeypot = String(data.company ?? "").trim();

  if (honeypot) {
    // Silently accept to avoid signalling the trap to bots.
    return NextResponse.json({ ok: true });
  }

  if (!firstName || !lastName || !message || !isEmail(email)) {
    return NextResponse.json(
      { error: "Merci de renseigner les champs obligatoires." },
      { status: 422 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Le service d'envoi est momentanément indisponible." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;
  // revesdevoyages.fr is verified in Resend — default to the branded sender;
  // CONTACT_FROM can still override (e.g. for staging).
  const from =
    process.env.CONTACT_FROM ?? "Rêves de Voyages <contact@revesdevoyages.fr>";
  const fullName = `${firstName} ${lastName}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouvelle demande de voyage — ${fullName}`,
      text: [
        `Nom : ${fullName}`,
        `Email : ${email}`,
        `Téléphone : ${phone || "non renseigné"}`,
        "",
        "Projet :",
        message,
      ].join("\n"),
      html: `
        <h2>Nouvelle demande depuis le site</h2>
        <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(phone || "non renseigné")}</p>
        <p><strong>Projet :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "L'envoi a échoué. Merci de réessayer." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Merci de réessayer." },
      { status: 500 },
    );
  }
}
