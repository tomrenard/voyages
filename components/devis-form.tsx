"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

const inputClass =
  "flex h-12 w-full rounded-md border border-input bg-white px-3.5 py-2 text-base placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50";

const selectClass = `${inputClass} appearance-none`;

type Status = "idle" | "loading" | "success" | "error";

export function DevisForm({
  defaultDestination = "",
  defaultPeriod = "",
  defaultAdults = "",
}: {
  defaultDestination?: string;
  defaultPeriod?: string;
  defaultAdults?: string;
}) {
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
      const res = await fetch("/api/devis", {
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
      <div
        className="bg-sand flex min-h-[420px] flex-col items-center justify-center p-10 text-center"
        role="status"
      >
        <CheckCircle2 className="text-primary mb-4 h-14 w-14" />
        <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
          Demande de devis envoyée, merci !
        </h3>
        <p className="max-w-md text-gray-600">
          Nous étudions votre projet et revenons vers vous très vite avec une
          première proposition personnalisée, sans engagement. Une question
          d'ici là ? Appelez le{" "}
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="text-primary font-medium underline underline-offset-4"
          >
            {siteConfig.phone}
          </a>
          .
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
    <form className="space-y-12" onSubmit={handleSubmit}>
      {/* Voyage */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-3xl text-gray-900">
          <span className="text-primary mr-3">1</span>Votre projet de voyage
        </legend>
        <p className="text-sm text-gray-600">
          Seuls les champs marqués d'un * sont obligatoires. Plus vous nous en
          dites, plus la première proposition sera juste.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="destination"
              className="text-sm font-medium text-gray-700"
            >
              Destination souhaitée *
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              className={inputClass}
              placeholder="Vietnam, Polynésie, à définir ensemble…"
              defaultValue={defaultDestination}
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="tripType"
              className="text-sm font-medium text-gray-700"
            >
              Type de voyage
            </label>
            <select id="tripType" name="tripType" className={selectClass}>
              <option value="">Sélectionnez…</option>
              <option>Voyage sur mesure</option>
              <option>Séjour</option>
              <option>Circuit</option>
              <option>Croisière</option>
              <option>Voyage de noces</option>
              <option>Week-end</option>
              <option>Autre</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="period"
              className="text-sm font-medium text-gray-700"
            >
              Période envisagée
            </label>
            <input
              id="period"
              name="period"
              type="text"
              className={inputClass}
              placeholder="Ex. : septembre 2027, flexible…"
              defaultValue={defaultPeriod}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="duration"
              className="text-sm font-medium text-gray-700"
            >
              Durée
            </label>
            <select id="duration" name="duration" className={selectClass}>
              <option value="">Sélectionnez…</option>
              <option>Week-end (2-4 jours)</option>
              <option>1 semaine</option>
              <option>2 semaines</option>
              <option>3 semaines ou plus</option>
              <option>Je ne sais pas encore</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label
              htmlFor="adults"
              className="text-sm font-medium text-gray-700"
            >
              Adultes
            </label>
            <input
              id="adults"
              name="adults"
              type="number"
              min={1}
              max={20}
              defaultValue={defaultAdults || 2}
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="children"
              className="text-sm font-medium text-gray-700"
            >
              Enfants
            </label>
            <input
              id="children"
              name="children"
              type="number"
              min={0}
              max={12}
              defaultValue={0}
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="budget"
              className="text-sm font-medium text-gray-700"
            >
              Budget / personne
            </label>
            <select id="budget" name="budget" className={selectClass}>
              <option value="">Sélectionnez…</option>
              <option>Moins de 1 000 €</option>
              <option>1 000 – 2 000 €</option>
              <option>2 000 – 3 500 €</option>
              <option>3 500 – 5 000 €</option>
              <option>Plus de 5 000 €</option>
              <option>Je ne sais pas encore</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Vos envies
          </label>
          <textarea
            id="message"
            name="message"
            className="border-input flex min-h-[140px] w-full rounded-md border bg-white px-3.5 py-3 text-base placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Plage ou aventure ? Hôtels de charme ? Occasions à fêter ? Dites-nous tout…"
          ></textarea>
        </div>
      </fieldset>

      {/* Coordonnées */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-3xl text-gray-900">
          <span className="text-primary mr-3">2</span>Vos coordonnées
        </legend>

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="postalCode"
              className="text-sm font-medium text-gray-700"
            >
              Code postal
            </label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              className={inputClass}
              placeholder="35170"
            />
          </div>
        </div>
      </fieldset>

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
        className="w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Recevoir mon devis gratuit"
        )}
      </Button>

      <p className="text-xs text-gray-600">
        Devis gratuit et sans engagement. En envoyant ce formulaire, vous
        acceptez que vos données soient utilisées pour traiter votre demande,
        conformément à notre{" "}
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
