# Traffic measurement setup — Toba Smart Farming

Updated: 2026-10-24

## Google Search Console

1. Open https://search.google.com/search-console and add a Domain property `tobasmartfarming.com` (covers www, ai, albert and other subdomains).
2. Copy the **unique** Google DNS TXT verification value (starts with `google-site-verification=`).
3. In Cloudflare DNS for `tobasmartfarming.com`, create a TXT record at `@` with **exactly** this value.
4. Click **Verify** in Search Console when DNS propagates. Do not remove the TXT record.
5. Add and submit `https://www.tobasmartfarming.com/sitemap.xml`. Check indexed pages, performance (clicks, impressions, CTR, position), and CWV regularly.

Alternative: create a URL-prefix property `https://www.tobasmartfarming.com/` and put only the content value (NOT the entire meta tag) into Cloudflare Pages production environment variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then redeploy. The Next.js root layout conditionally renders the Google verification meta tag. Do not fabricate this token. URL-prefix verification covers that URL prefix only, not all subdomains.

## Cloudflare Web Analytics — recommended one-click

1. Cloudflare dashboard → **Workers & Pages** → select the Pages project serving `www.tobasmartfarming.com`.
2. Open **Metrics** → **Web Analytics** → **Enable**.
3. Cloudflare inserts its RUM / analytics beacon automatically on the next deployment. Do not add a duplicate manual JS beacon when automatic insertion is on.
4. In Cloudflare dashboard → **Web Analytics**, select the site and examine visitors, pageviews, referrers and browser performance.
5. If project-specific integration is unavailable, configure Cloudflare **Web Analytics** at https://dash.cloudflare.com/ and follow its official hostname setup. Manual beacon requires an actual site token.
6. Cloudflare Analytics and Google Search Console have different collection scopes; figures may differ. Do not interpret impressions as visits.

## Google Analytics 4 (optional and separate)

The website contains an opt-in GA4 component. It remains OFF until the Pages build environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set to a real G- measurement ID. It requires visitor approval. Google Search Console does not require GA4.

## Post-deploy acceptance checks

- `https://www.tobasmartfarming.com/robots.txt` includes sitemap.
- `https://www.tobasmartfarming.com/sitemap.xml` resolves; new equipment routes are present.
- Search Console reports property **Verified** (not just meta tag deployed).
- Cloudflare Web Analytics shows events from a real browser visit (not merely Enabled).
- Check Cloudflare's script is not injected twice and comply with applicable consent/privacy requirements.
- Collect a 30-day baseline of organic clicks, impressions, pageviews, unique visitors, top pages and referrers.
