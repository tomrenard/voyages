"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      form.reset();
      setStatus("success");
      track("newsletter_subscribed");
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
      <p className="pt-2 text-sm text-gray-300">
        Merci ! Vous recevrez nos prochaines idées de voyages. ✨
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 pt-2" noValidate>
      <label
        htmlFor="newsletter-email"
        className="block text-sm font-medium text-white"
      >
        Recevez nos idées de voyages
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="votre@email.fr"
          className="focus:ring-primary h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 text-sm text-white placeholder:text-gray-500 focus:ring-2 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-primary hover:bg-primary/90 flex h-10 shrink-0 items-center rounded-md px-4 text-sm font-medium text-white transition-colors disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "S'inscrire"
          )}
        </button>
      </div>
      {/* Honeypot field — hidden from users, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="newsletter-company">Société</label>
        <input
          id="newsletter-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {status === "error" && (
        <p className="text-xs text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
      <p className="text-xs text-gray-500">
        Désinscription en un clic, à tout moment —{" "}
        <a
          href="/politique-de-confidentialite"
          className="underline hover:text-gray-300"
        >
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}
