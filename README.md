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
