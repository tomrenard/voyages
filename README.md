# Rêves de Voyages

Marketing site for **Rêves de Voyages**, an independent travel agency
specialising in tailor-made trips (stays, tours, cruises, honeymoons, weekends).
An online agency reachable by appointment, phone or video call.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19**
- **Tailwind CSS v4**
- **Framer Motion** (animations, page transitions)
- **Resend** (contact-form email delivery)
- **Vercel Analytics** (cookieless audience measurement)
- TypeScript · ESLint (`next` config) · Prettier

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Copy `.env.example` to `.env.local` and fill in the variables (see below).

## Scripts

| Command             | Purpose                           |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Development server                |
| `pnpm build`        | Production build                  |
| `pnpm start`        | Serve the production build        |
| `pnpm lint`         | Run ESLint                        |
| `pnpm format`       | Format the codebase with Prettier |
| `pnpm format:check` | Check formatting without writing  |

## Environment variables

| Variable               | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (`https://www.revesdevoyages.com`)             |
| `CONTACT_EMAIL`        | Inbox that receives contact-form submissions                      |
| `RESEND_API_KEY`       | Resend API key                                                    |
| `CONTACT_FROM`         | Email sender (leave empty until the domain is verified in Resend) |

> Secrets live in `.env.local` (untracked). Never commit a key.

## Structure

```
app/                 Pages (App Router) + routes (sitemap, robots, manifest, og-image)
  api/contact/       Contact-form route handler (Resend + anti-spam + rate limit)
  actualites/[slug]/ Blog articles (statically generated)
components/          UI components and sections
lib/
  site.ts            Single source of truth for constants (domain, contact, legal info)
  articles.ts        Blog article content
public/images/       Media
```

Switching domains = changing the single `NEXT_PUBLIC_SITE_URL` variable.

## Deployment

See [`DEPLOY.md`](./DEPLOY.md) — Vercel deployment, attaching the domains
(`.com` for the site, `.fr` at Gandi for email + Resend) and the legal
information to complete before going live.
