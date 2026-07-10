"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

const inputClass =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      form.reset();
      setStatus("success");
      track("contact_submitted");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Merci de réessayer.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border-primary/20 bg-accent/40 flex min-h-[420px] flex-col items-center justify-center rounded-2xl border p-10 text-center">
        <CheckCircle2 className="text-primary mb-4 h-14 w-14" />
        <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
          Message envoyé, merci !
        </h3>
        <p className="max-w-md text-gray-600">
          Nous avons bien reçu votre demande et reviendrons vers vous dans les
          plus brefs délais pour construire ensemble votre voyage idéal.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700"
          >
            Prénom *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClass}
            placeholder="Jean"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700"
          >
            Nom *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            className={inputClass}
            placeholder="Dupont"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          placeholder="jean.dupont@exemple.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="06 12 34 56 78"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[140px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Décrivez vos envies, destinations, dates, nombre de voyageurs, budget…"
          required
        ></textarea>
      </div>

      {/* Honeypot field — hidden from users, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Société</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p className="text-destructive text-sm" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="bg-primary hover:bg-primary/90 w-full text-white"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </Button>

      <p className="text-xs text-gray-400">
        En envoyant ce formulaire, vous acceptez que vos données soient
        utilisées pour traiter votre demande, conformément à notre{" "}
        <a
          href="/politique-de-confidentialite"
          className="hover:text-primary underline"
        >
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}
