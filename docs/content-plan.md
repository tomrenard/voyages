# Content plan — the real traffic ceiling

The site currently has **4 articles** and **9 destination pages**. That's the
main limit on organic traffic: you can only rank for queries you have a page
for. Every new page is a new door in from Google — and the technical plumbing
(sitemap, JSON-LD, canonicals, breadcrumbs) already picks them up automatically.

## How to add a page (reuse existing patterns)

- **Article** → add an entry to the `articles` array in `lib/articles.ts`
  (shape: `slug`, `title`, `excerpt`, `date`, `author`, `category`, `image`,
  `imageAlt`, `readingTime`, `content` blocks). The route `/actualites/[slug]`, its
  `Article` + `BreadcrumbList` JSON-LD, and the sitemap entry are all generated.
- **Destination** → add to `lib/destination-content.ts` (+ `lib/destinations.ts`
  for the card). The route `/destinations/[slug]` renders `TouristTrip` + `Offer`
  + `FAQPage` + `BreadcrumbList` JSON-LD automatically.
- Add a hero/card image to `public/images/` and **run it through the same
  compression** the existing images got (longest edge ≤1600px, mozjpeg q74) —
  see the note at the end.
- **Internal-link every new page** from its hub (`/actualites`, `/nos-voyages/*`,
  relevant destinations). Orphan pages rank poorly.
- Fill in a real FAQ block on destination pages — it powers the `FAQPage`
  schema and can win rich results / "People also ask" slots.

## Cadence

1–2 pages/month is plenty for a site this size. Consistency > volume. Prioritize
destinations the agency actually sells and seasonal articles timed ~2 months
ahead of the season (Google needs lead time to rank them).

## A. New destination pages (highest value)

Pattern exists, each gets rich schema, and these match real buyer intent.
Pick from what the agency genuinely sells:

| Destination | Why | Target queries |
| --- | --- | --- |
| Japon | High-intent, high-margin, evergreen | *voyage sur mesure japon*, *circuit japon* |
| Grèce / Cyclades | Huge FR summer demand | *séjour grèce*, *combiné cyclades* |
| Canada / Ouest canadien | Popular circuit | *circuit canada*, *voyage ouest canadien* |
| Portugal / Madère | Short-haul, year-round | *séjour madère*, *voyage portugal* |
| Bali / Indonésie | Honeymoon + sur-mesure | *voyage de noces bali* |
| Safari Tanzanie / Kenya | Premium, distinctive | *safari tanzanie sur mesure* |
| Laponie / Finlande | Strong winter seasonal | *voyage laponie*, *aurores boréales* |

Start with 2–3 (Japon, Grèce, Portugal are safe high-volume bets).

## B. Seasonal long-tail articles

Evergreen French queries with real volume and low competition for a small
agency. Reuse the "guide saison par saison" format already proven in
`quand-partir-aux-seychelles`. Publish ~2 months before the season peaks.

| Article | Publish by | Target queries |
| --- | --- | --- |
| Où partir au soleil en hiver / février ? | Nov–Dec | *où partir au soleil en février* |
| Où partir aux vacances de la Toussaint ? | Aug–Sep | *où partir toussaint* |
| Croisière sur le Nil : prix, itinéraire, conseils | anytime | *croisière nil prix*, *croisière égypte* |
| Quand partir en Polynésie ? | anytime | *quand partir polynésie* |
| Voyage de noces : quel budget prévoir ? | anytime | *budget voyage de noces* |
| Où partir en juillet / août sans la foule ? | Apr–May | *où partir en août* |
| Combien coûte un voyage sur mesure ? | anytime | *prix voyage sur mesure* |

Each article should internally link to the matching destination page and to a
conversion page (`/devis` or `/contact`).

## C. Local-intent content

One or two pages that reinforce the local angle already started by
`/agence-de-voyages-rennes` — e.g. an article on *"Pourquoi passer par une
agence de voyages près de Rennes"* or a short local-guide angle. These support
the GBP / local-pack work in `seo-checklist.md`.

## Priority order (first 3 months)

1. Destination: **Japon** + **Grèce** (evergreen, high volume).
2. Article: whichever season is ~2 months out.
3. Destination: **Portugal/Madère**.
4. Article: *"Combien coûte un voyage sur mesure ?"* (high commercial intent).

Then settle into 1 destination + 1 article per month.

---

### Image compression reminder

New images must be compressed to match the existing set. The one-off script
used for the initial pass (sharp, longest edge 1600px, mozjpeg quality 74,
metadata stripped) can be re-run on any new file dropped into
`public/images/`. It lived in the scratchpad, not the repo — recreate it or
run `sharp` inline. Verify visually before committing.
