# Déploiement — Rêves de Voyages

Site Next.js (App Router). Domaines : **site = `revesdevoyages.com`**, **email = `revesdevoyages.fr`** — les deux gérés chez **Gandi**.
Le domaine canonique est piloté par une seule variable d'environnement — changer de domaine ne demande aucune modification de code.

## Variables d'environnement

| Variable               | Rôle                                               | Valeur                                 |
| ---------------------- | -------------------------------------------------- | -------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site (metadata, sitemap, JSON-LD) | `https://www.revesdevoyages.com`       |
| `CONTACT_EMAIL`        | Boîte qui reçoit les demandes du formulaire        | `veronique.guyomard@revesdevoyages.fr` |
| `RESEND_API_KEY`       | Clé API Resend (envoi des emails)                  | _(secret — voir Resend)_               |
| `CONTACT_FROM`         | Expéditeur des emails du formulaire                | _(optionnel — défaut : `Rêves de Voyages <contact@revesdevoyages.fr>`)_ |

> Ces variables sont dans `.env.local` en local (non versionné) et à reporter dans Vercel → Project → Settings → Environment Variables.

---

## Étape 1 — Déployer maintenant (sans domaine)

1. Pousser le repo sur GitHub/GitLab et l'importer dans [Vercel](https://vercel.com).
2. Renseigner les 4 variables ci-dessus dans Vercel.
3. Déployer → le site est en ligne sur une URL gratuite `…vercel.app`.

Le formulaire de contact fonctionne dès maintenant : le domaine `revesdevoyages.fr`
est vérifié dans Resend et les emails partent de `contact@revesdevoyages.fr` par
défaut (voir l'étape 3 pour les détails DNS). Définir `CONTACT_FROM` uniquement
pour surcharger cet expéditeur (ex. staging).

## Étape 2 — Rattacher le domaine `revesdevoyages.com`

Le `.com` est désormais chez **Gandi** (comme le `.fr`). Attention : le DNS pointe
encore vers l'ancien site WordPress tant que les enregistrements ne sont pas
basculés — le basculement remplace l'ancien site par ce build (les redirections
301 des anciennes URL WordPress sont gérées dans `next.config.ts`).

1. Vercel → Project → Settings → **Domains** → ajouter `revesdevoyages.com` et `www.revesdevoyages.com`.
2. Reporter les enregistrements DNS indiqués par Vercel (A pour l'apex, CNAME pour `www`) dans la zone DNS **Gandi** du `.com`.
3. `NEXT_PUBLIC_SITE_URL` reste `https://www.revesdevoyages.com` — rien d'autre à changer côté code (le définir explicitement dans Vercel prod pour éviter qu'un build preview n'expose une URL `*.vercel.app` canonique).
4. Après propagation, vérifier quelques redirections 301 (anciennes URL WordPress) sur le domaine en ligne.

## Étape 3 — Activer l'envoi d'emails (domaine `.fr` chez Gandi)

1. Dans [Resend](https://resend.com) → **Domains** → _Add Domain_ → `revesdevoyages.fr`.
2. Resend affiche des enregistrements DNS (MX du sous-domaine d'envoi + TXT SPF/DKIM).
3. Ajouter ces enregistrements **dans la zone DNS Gandi** de `revesdevoyages.fr`.
4. Cliquer **Verify** dans Resend (vert sous quelques minutes à quelques heures).
5. Aucune action supplémentaire : l'expéditeur `contact@revesdevoyages.fr` est déjà la valeur par défaut du code (définir `CONTACT_FROM` seulement pour surcharger).

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
