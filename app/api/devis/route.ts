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
  // Rate limit per client IP to curb spam (shared limiter with the contact form).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const limit = rateLimit(`devis:${ip}`);
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

  const field = (key: string) => String(data[key] ?? "").trim();

  const firstName = field("firstName");
  const lastName = field("lastName");
  const email = field("email");
  const phone = field("phone");
  const destination = field("destination");
  const tripType = field("tripType");
  const period = field("period");
  const duration = field("duration");
  const adults = field("adults");
  const children = field("children");
  const budget = field("budget");
  const message = field("message");
  // Honeypot — bots fill hidden fields; humans leave it empty.
  const honeypot = field("company");

  if (honeypot) {
    // Silently accept to avoid signalling the trap to bots.
    return NextResponse.json({ ok: true });
  }

  if (!firstName || !lastName || !destination || !isEmail(email)) {
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
  // Until revesdevoyages.fr is verified in Resend, falls back to the test sender
  // (which only delivers to the Resend account owner). Set CONTACT_FROM to
  // "Rêves de Voyages <contact@revesdevoyages.fr>" once the domain is verified.
  const from =
    process.env.CONTACT_FROM ?? "Rêves de Voyages <onboarding@resend.dev>";
  const fullName = `${firstName} ${lastName}`;

  const rows: [string, string][] = [
    ["Nom", fullName],
    ["Email", email],
    ["Téléphone", phone || "non renseigné"],
    ["Destination", destination],
    ["Type de voyage", tripType || "non précisé"],
    ["Période envisagée", period || "non précisée"],
    ["Durée", duration || "non précisée"],
    [
      "Voyageurs",
      `${adults || "?"} adulte(s)${children && children !== "0" ? `, ${children} enfant(s)` : ""}`,
    ],
    ["Budget par personne", budget || "non précisé"],
  ];

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Demande de devis — ${destination} — ${fullName}`,
      text: [
        ...rows.map(([label, value]) => `${label} : ${value}`),
        "",
        "Envies / précisions :",
        message || "—",
      ].join("\n"),
      html: `
        <h2>Nouvelle demande de devis</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><td style="border:1px solid #ddd"><strong>${escapeHtml(label)}</strong></td><td style="border:1px solid #ddd">${escapeHtml(value)}</td></tr>`,
            )
            .join("")}
        </table>
        <p><strong>Envies / précisions :</strong></p>
        <p>${escapeHtml(message || "—").replace(/\n/g, "<br>")}</p>
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
    console.error("Devis form error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Merci de réessayer." },
      { status: 500 },
    );
  }
}
