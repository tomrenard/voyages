import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import { rateLimit } from "@/lib/rate-limit";

// Constructed per request rather than at module scope: Resend throws when
// the key is absent, and Next evaluates this module while collecting route
// data at build time — so a module-scope client made the *build* depend on a
// runtime secret (and pre-empted the explicit guard in the handler below).

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// French postal codes are exactly five digits.
const isPostalCode = (value: string) => /^\d{5}$/.test(value);

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

  // Require a JSON content type. Without it this route accepts a CORS *simple*
  // request (text/plain), which crosses origins with no preflight and no CSRF
  // guard, so any third-party page could make its visitors mail the agency —
  // each from their own IP, and so past the rate limit above.
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 415 });
  }

  // Parsed as `unknown` on purpose: a body of literal `null`, or a bare string
  // or number, parses without throwing, and the property access below would
  // then fail with an unhandled TypeError — a bare 500 instead of this 400.
  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
  const data = parsed as Record<string, unknown>;

  // Strip control characters from fields used in headers and cap lengths.
  const scalar = (value: unknown, max = 200) =>
    String(value ?? "")
      .replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ")
      .trim()
      .slice(0, max);

  const firstName = scalar(data.firstName);
  const lastName = scalar(data.lastName);
  const email = scalar(data.email);
  const phone = scalar(data.phone, 30);
  const postalCode = scalar(data.postalCode, 16);
  const message = String(data.message ?? "")
    .trim()
    .slice(0, 5000);
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
  // The postal code is only an internal lead-qualification hint, so a typo must
  // never cost the agency a lead: an unexpected value is forwarded flagged
  // rather than rejected. Escaped downstream like every other field.
  const postalCodeLabel = !postalCode
    ? "non renseigné"
    : isPostalCode(postalCode)
      ? postalCode
      : `${postalCode} (à vérifier)`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouvelle demande de voyage : ${fullName}`,
      text: [
        `Nom : ${fullName}`,
        `Email : ${email}`,
        `Téléphone : ${phone || "non renseigné"}`,
        `Code postal : ${postalCodeLabel}`,
        "",
        "Projet :",
        message,
      ].join("\n"),
      html: `
        <h2>Nouvelle demande depuis le site</h2>
        <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(phone || "non renseigné")}</p>
        <p><strong>Code postal :</strong> ${escapeHtml(postalCodeLabel)}</p>
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
