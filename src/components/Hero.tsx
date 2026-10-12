import { Box, Cpu, Map as MapIcon, Radio } from "lucide-react";

const facts = [
  { icon: Box, label: "Kontainer 10 kaki", detail: "Hidroponik vertikal DFT" },
  { icon: Radio, label: "24 node sensor nirkabel", detail: "Ditambah sensor pH dan EC" },
  { icon: MapIcon, label: "Pemetaan mikroklimat", detail: "Keseragaman kondisi antar-titik" },
  { icon: Cpu, label: "Kontrol iklim berbasis AI", detail: "DQN dan RL-PID dalam eksperimen" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy text-cream"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-forest-deep" />
        <div className="absolute inset-0 grid-fine opacity-60" />
        <div className="grain absolute inset-0 opacity-[0.1] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-28 sm:pt-32 md:px-8 md:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14 lg:pt-40">
        <div>
          <p className="animate-rise text-xs font-medium uppercase tracking-[0.2em] text-teal-bright sm:tracking-[0.28em]">
            Fasilitas riset pertanian dalam ruang
          </p>
          <h1 className="font-display animate-rise delay-1 mt-4 text-[2.1rem] leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl">
            Kebun hidroponik dalam kontainer, dipantau sensor dan dikendalikan AI
          </h1>
          <p className="animate-rise delay-2 mt-5 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            Toba Smart Farming meneliti pertanian dalam ruang di kontainer 10
            kaki. Jaringan sensor mengukur kondisi tiap titik, data dipetakan
            menjadi mikroklimat, dan pengendali berbasis AI diuji untuk mengatur
            iklim dan pencahayaan.
          </p>
          <div className="animate-rise delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#facility"
              className="inline-flex items-center justify-center rounded-full bg-teal-bright px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-cream"
            >
              Lihat fasilitas &amp; riset
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/60 px-6 py-3 text-sm text-cream transition hover:border-teal-bright hover:text-teal-bright"
            >
              Hubungi kami
            </a>
          </div>
        </div>

        <ul className="animate-rise delay-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4"
            >
              <fact.icon className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" aria-hidden />
              <div>
                <p className="text-sm font-medium text-cream">{fact.label}</p>
                <p className="mt-0.5 text-sm text-cream/80">{fact.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
