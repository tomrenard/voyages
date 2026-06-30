# Déploiement — Rêves de Voyages

Site Next.js (App Router). Domaines : **site = `revesdevoyages.com`**, **email = `revesdevoyages.fr` (Gandi)**.
Le domaine canonique est piloté par une seule variable d'environnement — changer de domaine ne demande aucune modification de code.

## Variables d'environnement

| Variable               | Rôle                                               | Valeur                                 |
| ---------------------- | -------------------------------------------------- | -------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site (metadata, sitemap, JSON-LD) | `https://www.revesdevoyages.com`       |
| `CONTACT_EMAIL`        | Boîte qui reçoit les demandes du formulaire        | `veronique.guyomard@revesdevoyages.fr` |
| `RESEND_API_KEY`       | Clé API Resend (envoi des emails)                  | _(secret — voir Resend)_               |
| `CONTACT_FROM`         | Expéditeur des emails du formulaire                | _(vide = expéditeur de test)_          |

> Ces variables sont dans `.env.local` en local (non versionné) et à reporter dans Vercel → Project → Settings → Environment Variables.

---

## Étape 1 — Déployer maintenant (sans domaine)

1. Pousser le repo sur GitHub/GitLab et l'importer dans [Vercel](https://vercel.com).
2. Renseigner les 4 variables ci-dessus dans Vercel.
3. Déployer → le site est en ligne sur une URL gratuite `…vercel.app`.

Le formulaire de contact fonctionne dès maintenant, mais avec l'expéditeur de test
Resend (`onboarding@resend.dev`) qui **ne délivre qu'à l'adresse du compte Resend**.
Voir l'étape 3 pour l'activer pour de vrai.

## Étape 2 — Rattacher le domaine `revesdevoyages.com`

Une fois l'accès récupéré chez l'ancien fournisseur :

1. Vercel → Project → Settings → **Domains** → ajouter `revesdevoyages.com` et `www.revesdevoyages.com`.
2. Suivre les enregistrements DNS indiqués par Vercel (A / CNAME) chez le registrar du `.com`.
3. `NEXT_PUBLIC_SITE_URL` reste `https://www.revesdevoyages.com` — rien d'autre à changer.

## Étape 3 — Activer l'envoi d'emails (domaine `.fr` chez Gandi)

1. Dans [Resend](https://resend.com) → **Domains** → _Add Domain_ → `revesdevoyages.fr`.
2. Resend affiche des enregistrements DNS (MX du sous-domaine d'envoi + TXT SPF/DKIM).
3. Ajouter ces enregistrements **dans la zone DNS Gandi** de `revesdevoyages.fr`.
4. Cliquer **Verify** dans Resend (vert sous quelques minutes à quelques heures).
5. Dans Vercel, définir `CONTACT_FROM=Rêves de Voyages <contact@revesdevoyages.fr>` et redéployer.

Les réponses arrivent dans la boîte du visiteur (champ `reply-to`), et les demandes
sont reçues sur `CONTACT_EMAIL` (`veronique.guyomard@revesdevoyages.fr`).

---

## À compléter avant la mise en production (obligations légales agence de voyages)

Dans `lib/site.ts`, champ `legal` :

- `atoutFrance` — numéro d'immatriculation Atout France (format `IM035……`).
- `guarantee` — garantie financière (APST ou équivalent).
- `insurance` — assurance responsabilité civile professionnelle.

Ces informations s'affichent sur `/mentions-legales`.

## Build local

```bash
pnpm install
pnpm dev      # développement
pnpm build    # build de production
pnpm start    # servir le build
```
