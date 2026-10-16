// Cloudflare Pages Function: fixed BMKG location, no visitor-supplied upstream URLs.
export async function onRequestGet() {
  try {
    const response = await fetch('https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=12.12.01.1034', {
      signal: AbortSignal.timeout(12000),
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error('BMKG unavailable');
    const data = await response.json() as { data?: unknown[] };
    if (!Array.isArray(data.data) || !data.data.length) throw new Error('Invalid BMKG response');
    return Response.json(data, { headers: { 'Cache-Control': 'public, max-age=600, s-maxage=600' } });
  } catch {
    return Response.json({ error: 'BMKG forecast temporarily unavailable' }, { status: 502, headers: { 'Cache-Control': 'no-store' } });
  }
}
