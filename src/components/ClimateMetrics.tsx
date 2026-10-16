"use client";

import { useEffect, useState } from "react";
import { Thermometer, Droplets, Sun, Wind, FlaskConical, CloudSun } from "lucide-react";

type Forecast = { utc_datetime: string; t: number; hu: number; ws: number; wd: string; weather_desc: string; weather_desc_en?: string; analysis_date?: string };
const bmkgUrl = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=12.12.01.1034";
const dateOf = (value: string) => new Date(value.replace(" ", "T").replace(/Z$/, "") + "Z");
function parseForecast(raw: unknown): Forecast[] {
  const payload = raw as { data?: { cuaca?: Forecast[][] }[] };
  return (payload?.data?.[0]?.cuaca ?? []).flat().filter(p =>
    Number.isFinite(p.t) && Number.isFinite(p.hu) && Number.isFinite(p.ws) && Number.isFinite(dateOf(p.utc_datetime).getTime())
  ).sort((a,b) => dateOf(a.utc_datetime).getTime() - dateOf(b.utc_datetime).getTime());
}
function syntheticAt(time: number) {
  const h = (time / 3600000 + 7) % 24;
  const lit = h >= 6 && h < 22;
  return [22.1 + 0.65 * Math.sin(time / 2700000), 74 + 4 * Math.sin(time / 3400000 + 1), lit ? 11500 + 600 * Math.sin(time / 1800000) : 0, lit ? 900 + 45 * Math.sin(time / 2500000) : 460 + 15 * Math.sin(time / 3000000)];
}

export function ClimateMetrics({ locale = "en" }: { locale?: "en" | "id" }) {
  const id = locale === "id";
  const [forecast, setForecast] = useState<Forecast[]>([]);
  const [status, setStatus] = useState("loading");
  const [now, setNow] = useState<number | null>(null);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const timer = setInterval(tick, 60000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    let active = true;
    let busy = false;
    const controller = new AbortController();
    async function refresh() {
      if (busy) return;
      busy = true;
      try {
        let rows: Forecast[] = [];
        // Pages proxy avoids browser CORS; direct BMKG also supports static-only hosts.
        for (const url of ["/api/toba-weather", bmkgUrl]) {
          try {
            const response = await fetch(url, { signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15000)]) });
            if (!response.ok) continue;
            rows = parseForecast(await response.json());
            if (rows.length) break;
          } catch { if (controller.signal.aborted) return; }
        }
        if (!rows.length) throw new Error("No forecast");
        if (active) { setForecast(rows); setStatus("ready"); }
      } catch { if (active) setStatus("error"); }
      finally { busy = false; }
    }
    refresh();
    const timer = setInterval(refresh, 600000);
    return () => { active = false; controller.abort(); clearInterval(timer); };
  }, [attempt]);
  const time = now ?? 0;
  // Choose the current 3-hour forecast slot; never show an expired forecast as current.
  const current = now === null ? undefined : forecast.find(p => {
    const t = dateOf(p.utc_datetime).getTime();
    return t <= time && time < t + 3 * 3600000;
  }) ?? forecast.find(p => dateOf(p.utc_datetime).getTime() > time);
  const fmt = (d: Date) => d.toLocaleString(id ? "id-ID" : "en-GB", { timeZone: "Asia/Jakarta", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hour12: false }) + " WIB";
  const values = now === null ? null : syntheticAt(time);
  const labels = id ? ["Suhu udara", "Kelembapan relatif", "Intensitas cahaya", "Kadar CO₂"] : ["Air temperature", "Relative humidity", "Light intensity", "CO₂ concentration"];
  const icons = [Thermometer, Droplets, Sun, FlaskConical];
  const units = ["°C", "% RH", "lux", "ppm"];
  const history = now === null ? [] : Array.from({ length: 25 }, (_, i) => ({ t: time - (24-i)*3600000, v: syntheticAt(time - (24-i)*3600000) }));
  return <section id="climate" className="scroll-mt-24 bg-cream-soft py-16 md:py-24" aria-labelledby="climate-title">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">{id ? "Cuaca & mikroklimat" : "Weather & microclimate"}</p>
      <h2 id="climate-title" className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">{id ? "Di luar lahan. Di dalam container." : "Outside in Toba. Inside the container."}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted">{id ? "Prakiraan BMKG untuk Balige I, Kabupaten Toba, berdampingan dengan demonstrasi mikroklimat container. Dua sumber berbeda, dengan status data yang ditampilkan secara jelas." : "BMKG forecasts for Balige I, Toba Regency, alongside a demonstration of container microclimate. Two distinct sources, with explicit data provenance."}</p>
      <div className="mt-9 rounded-3xl border border-[var(--line)] bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-teal-deep">BMKG · {id ? "Prakiraan resmi" : "Official forecast"}</p><h3 className="font-display mt-2 text-3xl text-forest-deep">Balige I · Toba</h3></div><CloudSun className="h-9 w-9 text-teal-deep" aria-hidden /></div>
        <p className="mt-3 text-sm leading-6 text-muted">{id ? "Prakiraan cuaca per 3 jam; bukan pengukuran langsung atau statistik iklim jangka panjang. Balige I tidak mewakili seluruh wilayah Toba." : "Three-hour weather forecasts; not live measurements or long-term climate statistics. Balige I does not represent all of Toba."}</p>
        {current ? <><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[[Thermometer, id ? "Suhu" : "Temperature", `${current.t} °C`], [Droplets, id ? "Kelembapan" : "Humidity", `${current.hu} %`], [Wind, id ? "Angin" : "Wind", `${current.ws} km/h · ${current.wd}`], [CloudSun, id ? "Kondisi" : "Conditions", id ? current.weather_desc : current.weather_desc_en || current.weather_desc]].map(([Icon, label, value]) => { const C = Icon as typeof Thermometer; return <div key={String(label)} className="rounded-2xl bg-cream-soft p-5"><C className="h-5 w-5 text-teal-deep" aria-hidden/><p className="mt-3 text-sm text-muted">{String(label)}</p><p className="mt-2 text-2xl font-medium text-forest-deep">{String(value)}</p></div>; })}</div><p className="mt-4 text-sm text-muted">{id ? "Waktu berlaku prakiraan: " : "Forecast valid at: "}{fmt(dateOf(current.utc_datetime))}{status === "error" ? (id ? " · Pembaruan gagal; menampilkan prakiraan sebelumnya yang masih berlaku." : " · Refresh failed; showing the previous valid forecast.") : ""}</p>{current.analysis_date && <p className="mt-1 text-sm text-muted">{id ? "Diterbitkan BMKG: " : "BMKG issued: "}{fmt(dateOf(current.analysis_date))}</p>}</> : <p role="status" className="mt-6 rounded-2xl bg-cream-soft p-5 text-muted">{status === "loading" ? (id ? "Mengambil prakiraan BMKG…" : "Loading BMKG forecast…") : (id ? "Prakiraan BMKG belum tersedia. Tidak ada angka pengganti yang dibuat. Silakan buka sumber BMKG atau coba kembali." : "BMKG forecast is unavailable. No substitute values have been generated. Open the BMKG source or retry.")}</p>}
        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm"><a className="text-teal-deep underline" href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca/12.12.01.1034" target="_blank" rel="noreferrer">{id ? "Sumber: BMKG — Balige I" : "Source: BMKG — Balige I"}</a><button type="button" className="rounded-full border border-[var(--line)] px-4 py-2 text-forest-deep" onClick={() => { setStatus("loading"); setAttempt(v => v+1); }}>{id ? "Perbarui prakiraan" : "Refresh forecast"}</button></div>
      </div>
      <div className="mt-6 rounded-3xl bg-forest-deep p-6 text-white md:p-8">
        <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">{id ? "DATA SINTETIS · DEMONSTRASI" : "SYNTHETIC DATA · DEMONSTRATION"}</span>
        <h3 className="font-display mt-4 text-3xl">{id ? "Mikroklimat container 10 kaki" : "10-ft container microclimate"}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/80">{id ? "Seluruh angka dan kurva di bawah dihasilkan secara matematis untuk ilustrasi. Bukan pembacaan sensor, bukan hasil eksperimen, dan bukan data BMKG. Pola lampu simulasi: 06.00–22.00 WIB. Cahaya dalam lux, bukan PPFD." : "All values and curves below are mathematically generated for illustration. They are not sensor readings, experimental results, or BMKG data. Simulated lighting: 06:00–22:00 WIB. Light is expressed in lux, not PPFD."}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{labels.map((label, i) => { const Icon=icons[i]; const series=history.map(p=>p.v[i]); const low=Math.min(...series); const high=Math.max(...series); const span=Math.max(high-low,1); return <article key={label} className="rounded-2xl border border-white/20 bg-white/5 p-5"><Icon className="h-5 w-5 text-teal-bright" aria-hidden/><p className="mt-3 text-sm text-white/80">{label}</p><p className="mt-2 text-3xl font-medium">{values ? values[i].toLocaleString(id ? "id-ID" : "en-GB", { maximumFractionDigits: i<2 ? 1 : 0 }) : "—"} <span className="text-sm text-white/70">{units[i]}</span></p><p className="mt-1 text-xs text-amber-100">{id ? "Simulasi" : "Simulated"}</p>{series.length > 0 && <svg viewBox="0 0 240 70" className="mt-4 h-16 w-full" role="img" aria-label={`${label}: ${id ? "kurva sintetis 24 jam, skala tersendiri" : "24-hour synthetic curve, independent scale"}`}><polyline points={series.map((v,j)=>`${j*10},${60-(v-low)/span*50}`).join(" ")} fill="none" stroke="#67e8ce" strokeWidth="2.5" vectorEffect="non-scaling-stroke"/></svg>}<p className="mt-2 text-xs text-white/65">{id ? "Rentang 24 jam: " : "24 h range: "}{series.length ? `${low.toFixed(i<2?1:0)}–${high.toFixed(i<2?1:0)} ${units[i]}` : "—"}</p></article>; })}</div>
        <p className="mt-5 text-xs leading-6 text-white/70">{id ? "Kurva: 24 jam terakhir, kiri → kanan; skala setiap metrik berbeda. Simulasi diperbarui setiap menit. Waktu simulasi: " : "Curves: past 24 hours, left → right; each metric uses its own scale. Simulation updates every minute. Simulation time: "}{now === null ? "—" : fmt(new Date(now))}</p>
      </div>
    </div>
  </section>;
}
