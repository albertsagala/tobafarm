# Toba Smart Farming

Public website for Toba Smart Farming, an applied research and technology initiative in intelligent agriculture.

Production URL: [https://www.tobasmartfarming.com](https://www.tobasmartfarming.com)

## Stack

- Next.js App Router (static export)
- TypeScript
- Tailwind CSS
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static site is written to `out/`. That directory is suitable for Cloudflare Pages.

## Content

Public content lives in `src/lib/content.ts` (facility, case studies, publications, team) and `src/lib/site.ts` (name, navigation, contact email).

- Every fact must link to a public record in `sources`. Do not add placeholder text; leave optional fields unset and the page hides them.
- Component status is `operational`, `experimental`, or `development`, based on the latest public record.
- Ongoing manuscripts go in `publications.manuscripts`; the block stays hidden while the list is empty.
- The contact form only renders when `site.email` is a valid address.

## Facility photographs

Only photographs taken at the facility. No stock or generated images.

1. Export at most 1600 px on the long edge, JPEG or WebP at about quality 80.
2. Save under `public/images/facility/`.
3. Add an entry to `facility.photos` with `src`, the real `width` and `height`, `alt`, and `caption`. Photos are shown uncropped.

## Weather and container demonstration panel

The bilingual homepages include `ClimateMetrics`. BMKG data uses the fixed
Balige I administrative code `12.12.01.1034` and is explicitly described as a
three-hour forecast, not a live observation or a Toba-wide climate average.
The browser refreshes every ten minutes. `functions/api/toba-weather.ts` is a
Cloudflare Pages Function with a ten-minute cache and twelve-second upstream
timeout. Keep the root `functions/` directory available in the Pages Git build.
On static-only hosting the browser falls back to the official BMKG endpoint;
if neither path works, the interface shows an unavailable state without invented
weather values. Expired forecast slots are never displayed as current.

Container values and the past-24-hour curves are deterministic synthetic data,
updated each minute in the browser, with a 06:00–22:00 WIB lighting schedule.
They must remain visibly labeled as synthetic until replaced by an authenticated
sensor feed. Lux is an illustrative illuminance value, not a PPFD conversion.
