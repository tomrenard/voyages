# SEO checklist — actions outside the code

The technical SEO in this repo is solid (sitemap, robots, per-page metadata,
canonicals, JSON-LD, 301 redirects, optimized images). What moves traffic now
is **off-site work** — all free. Do these in order; the first two are by far
the biggest levers for a local travel agency.

> NAP (Name / Address / Phone) must match `lib/site.ts` **exactly** everywhere:
> **Rêves de Voyages** · 25 Pl. Marcel Pagnol, 35170 Bruz · **02 23 50 18 52**.
> Inconsistent NAP across the web is the #1 thing that suppresses local ranking.

## 1. Google Business Profile (GBP) — highest impact ⭐

The single biggest free lever for queries like *"agence de voyage rennes"*,
*"agence de voyage bruz"*. Wins a spot in the Google local pack + Maps.

- Go to https://business.google.com and claim/create **Rêves de Voyages**.
- Category: **Agence de voyages** (primary). Add secondary categories if
  offered (e.g. *Organisateur de circuits touristiques*).
- Set it as a **service-area business** (no walk-in office — see `lib/site.ts`):
  hide the street address, set the service area to Rennes Métropole / Ille-et-Vilaine.
- Hours: match reality (by appointment / sur rendez-vous).
- Website: `https://www.revesdevoyages.com`.
- Phone: `02 23 50 18 52`.
- Upload 10+ good photos (reuse `public/images/` — destinations, the advisor).
- Write the "from the business" description using the same wording as the site.
- Verification: usually by postcard or phone — follow Google's prompt.

## 2. Review campaign ⭐

Reviews are the strongest local-pack ranking factor after GBP itself, and the
agency has ~19 years of clients.

- Once GBP is verified, Google gives a **review short-link** (`g.page/r/…/review`).
- Email past clients asking for a Google review with that link.
- **Then update the code:** replace the placeholder in `lib/site.ts`
  (`social.googleReviews`, currently a Maps *search* URL — see the TODO there)
  with the real review short-link, so the site's "Avis" links point straight
  to the review form.
- Aim for a steady trickle (a few/month) rather than a burst — looks organic.

## 3. Google Search Console (GSC)

Free, and the only way to see what you rank for and catch indexing problems.

- Add the property at https://search.google.com/search-console.
- **Verify** ownership one of two ways:
  - **DNS TXT at Gandi** (recommended, no deploy needed): add the TXT record
    Google gives you to the `revesdevoyages.com` zone.
  - **Meta tag**: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the Vercel env
    to the token, redeploy (the layout renders the meta tag — see `.env.example`).
- Submit the sitemap: `https://www.revesdevoyages.com/sitemap.xml`.
- Use **URL Inspection → Request indexing** on the key pages: `/`,
  `/agence-de-voyages-rennes`, `/voyage-sur-mesure`, `/croisieres`,
  `/nos-coups-de-coeur`.
- Watch **Pages / Coverage** for a couple weeks to confirm the ~65 legacy
  WordPress 301s (in `next.config.ts`) resolve cleanly and old URLs drop out.

## 4. Bing Webmaster Tools

Covers Bing, DuckDuckGo, and several AI-search crawlers. ~2 minutes.

- https://www.bing.com/webmasters → **Import from Google Search Console**
  (one click once GSC is set up). Submit the same sitemap.

## 5. Free local citations (consistent NAP)

Each is a free backlink + a NAP signal. Use the exact NAP from the top of this
file. Priorities for a French travel agency:

- **PagesJaunes** (pagesjaunes.fr) — the big one in France.
- **Mappy** (mappy.com).
- **Yelp France**.
- **Apple Business Connect** (Apple Maps).
- Local/tourism directories: *annuaire agences de voyages*, Rennes/Bruz
  chamber-of-commerce or city business listings, EDV (Entreprises du Voyage)
  member directory if applicable.

## 6. Social profiles linking back

- Add the website URL to the **Instagram** and **Facebook** bios
  (`@revesdevoyages_bruz` / `facebook.com/revesdevoyages`).
- When a new article/destination page ships, post it with a link — a small but
  real referral + freshness signal.

## 7. Post-launch redirect spot-check

Since DNS is now cut over, confirm the legacy 301s actually fire in production.
Pick ~10 old slugs from the `legacyPosts` map in `next.config.ts` and verify:

```bash
curl -sI https://www.revesdevoyages.com/partir-en-voyage-a-new-york-nos-conseils-avises \
  | grep -i -E "^(HTTP|location)"
# expect: HTTP/2 308 (or 301) + location: /destinations/new-york
```

Also check `robots.txt` and `sitemap.xml` load in the browser.

---

### Recap by impact

| Action | Effort | Impact |
| --- | --- | --- |
| Google Business Profile | Medium | ★★★★★ |
| Review campaign | Medium | ★★★★★ |
| Search Console + sitemap | Low | ★★★★ |
| Publishing new content (see `content-plan.md`) | High | ★★★★★ |
| Local citations | Medium | ★★★ |
| Bing Webmaster | Low | ★★ |
| Social backlinks | Low | ★★ |
