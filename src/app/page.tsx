import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, BrainCircuit, Database, Radio, Settings2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Container-Based Indoor Farming Research",
  description:
    "A 10-ft instrumented indoor farm in Toba, Indonesia for distributed sensing, spatial microclimate analysis, and AI-assisted climate control.",
  alternates: {
    canonical: "/",
    languages: { en: "/", id: "/id/" },
  },
};

const articles = [
  {
    metric: "27 nodes",
    title: "From IoT to Edge-to-Cloud: A Resilient Architecture for Container Farming",
    summary: "Sensor data reaches a Jetson Nano for local decisions, while a local server and Cloudflare Tunnel make monitoring available online.",
    href: "/articles/from-iot-to-edge-cloud/",
  },
  {
    metric: "4.6×",
    title: "Why Do Horizontal Temperature Differences Matter More Than Rack Height?",
    summary: "During one AC recovery event, the horizontal temperature gap reached 3.33°C, compared with 0.72°C vertically.",
    href: "/articles/horizontal-temperature-gradient/",
  },
  {
    metric: "5.03°C",
    title: "The AC Cooled the Container Farm—but Not Uniformly",
    summary: "Across 544 synchronized observations, average temperature fell while spatial temperature spread increased.",
    href: "/articles/ac-and-microclimate-uniformity/",
  },
  {
    metric: "48.16%",
    title: "VPD in a Container Farm: Good Temperature Is Not Enough",
    summary: "A 48.1-hour observation exposed nighttime humidity limitations that average temperature alone did not reveal.",
    href: "/articles/vpd-container-farm/",
  },
];

const profiles = [
  ["Academic website", "https://albert.tobasmartfarming.com"],
  ["SINTA", "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587"],
  ["Institut Teknologi Del", "https://www.del.ac.id/?page_id=7078"],
  ["LinkedIn", "https://www.linkedin.com/in/albert-sagala-47b963235"],
  ["ResearchGate", "https://www.researchgate.net/profile/Albert-Sagala"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <Header locale="en" />
      <main id="main">
        <section id="top" className="relative overflow-hidden bg-navy pt-32 text-cream md:pt-40">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(91,198,184,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(91,198,184,.18)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-teal-bright">
              Instrumented indoor farming research facility
            </p>
            <h1 className="font-display mt-6 max-w-5xl text-5xl leading-[1.03] sm:text-6xl md:text-8xl">
              A container farm measured spatially—and controlled intelligently
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-cream/75 md:text-xl">
              Toba Smart Farming studies how distributed sensors, airflow, energy,
              and data-driven control shape the crop environment inside a compact
              10-ft container in North Sumatra, Indonesia.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#facility" className="rounded-full bg-teal-bright px-6 py-3 text-sm font-medium text-navy transition hover:bg-white">
                Explore the facility
              </a>
              <Link href="/collaboration/" className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-cream transition hover:border-teal-bright">
                Work with us
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">About</p>
              <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
                Applied research in one measurable facility
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-muted">
              <p>
                The platform combines hydroponic cultivation, artificial lighting,
                distributed temperature–humidity sensing, CO₂ monitoring, actuator
                telemetry, and energy measurement.
              </p>
              <p>
                Our work focuses on evidence: where conditions differ, how quickly
                the system recovers, which nodes remain outside target, and whether
                control improvements justify their energy cost.
              </p>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[["27 + 1", "indoor and outdoor sensor nodes"], ["10 ft", "instrumented container"], ["20–24°C", "thermal evaluation band"]].map(([value,label])=>(
                  <div key={label} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                    <p className="font-display text-3xl text-forest-deep">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="facility" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">Facility</p>
            <h2 className="font-display mt-3 max-w-4xl text-4xl text-forest-deep md:text-5xl">
              From sensing to actuation
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              Internal dimensions are approximately 2.34 × 2.82 × 2.39 m.
              Hydroponic racks line both sides of the aisle, with artificial
              lighting, a 1-PK split AC, humidification, nutrient management,
              and CO₂ enrichment.
            </p>
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {[
                [Radio,"Sensing","Distributed temperature, humidity, light, CO₂, weather, and energy measurements."],
                [BrainCircuit,"Processing","Edge and cloud processing for synchronization, diagnostics, and control."],
                [Database,"Storage","Time-series records and dashboards for traceable operational analysis."],
                [Settings2,"Actuation","Cooling, humidification, lighting, nutrients, and CO₂ under supervised control."],
              ].map(([Icon,title,body])=>{
                const C=Icon as typeof Radio;
                return <article key={String(title)} className="rounded-3xl border border-[var(--line)] bg-cream-soft p-6">
                  <C className="h-6 w-6 text-teal-deep" aria-hidden />
                  <h3 className="font-display mt-5 text-2xl text-forest-deep">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{String(body)}</p>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-24 bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">Documentation</p>
            <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
              Facility, crops, and real monitoring data
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                ["/images/gallery/container-overview.jpg","Instrumented facility interior","Hydroponic racks, distributed nodes, and nutrient and actuation subsystems.",1280,960],
                ["/images/gallery/pakchoi-racks.jpg","Pakchoi on hydroponic racks","Pakchoi cultivated on multi-level gullies under artificial lighting.",960,1280],
              ].map(([src,title,caption,w,h])=>(
                <figure key={String(src)} className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
                  <Image src={String(src)} alt={String(title)} width={Number(w)} height={Number(h)} className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="p-5"><h3 className="font-display text-2xl text-forest-deep">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-muted">{String(caption)}</p></figcaption>
                </figure>
              ))}
              <figure className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white md:col-span-2">
                <Image src="/images/gallery/grafana-july-2026.png" alt="Grafana monitoring dashboard from July 2026" width={1896} height={1350} className="aspect-[16/9] w-full object-cover" />
                <figcaption className="p-5"><h3 className="font-display text-2xl text-forest-deep">Monitoring dashboard, July 2026</h3><p className="mt-2 text-sm leading-6 text-muted">Temperature, humidity, CO₂, lighting, actuator state, current, and power recorded during operation.</p></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="articles" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">Articles & findings</p>
            <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Evidence from the facility</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {articles.map(article=>(
                <article key={article.href} className="flex flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-cream-soft">
                  <div className="bg-forest-deep p-7 text-cream"><p className="font-display text-5xl">{article.metric}</p></div>
                  <div className="flex flex-1 flex-col p-7"><h3 className="font-display text-3xl leading-tight text-forest-deep">{article.title}</h3><p className="mt-4 flex-1 leading-7 text-muted">{article.summary}</p><Link href={article.href} className="mt-7 w-fit rounded-full bg-forest px-5 py-3 text-sm font-medium text-white">Read article</Link></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">Research</p>
            <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Research directions</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                ["Spatial microclimate mapping","Sparse-sensor interpolation, variogram sensitivity, residual correction, and spatial compliance."],
                ["Safe climate control","Rule-based, PID, DQN, and safety-aware supervisory control for temperature and humidity."],
                ["Thermal resilience","Fault detection, controller recovery, hotspot persistence, and post-shutdown rebound."],
                ["Energy-aware operation","Joint assessment of climate compliance, actuator power, switching, and recovery time."],
              ].map(([title,body])=><article key={title} className="rounded-3xl border border-[var(--line)] bg-white p-7"><Activity className="h-5 w-5 text-teal-deep" aria-hidden/><h3 className="font-display mt-4 text-2xl text-forest-deep">{title}</h3><p className="mt-3 leading-7 text-muted">{body}</p></article>)}
            </div>
          </div>
        </section>

        <section id="team" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-xs uppercase tracking-[0.22em] text-teal-deep">Research lead</p><h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Albert Sagala</h2><p className="mt-4 leading-7 text-muted">Associate Professor of Electrical Engineering, Institut Teknologi Del. PhD Candidate in Engineering Physics, Institut Teknologi Bandung.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {profiles.map(([label,href])=><a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-2xl border border-[var(--line)] bg-cream-soft p-5 font-medium text-forest-deep transition hover:border-teal/50">{label}</a>)}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-teal/10 py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="text-xs uppercase tracking-[0.22em] text-teal-deep">Collaboration</p>
            <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Bring the problem before choosing the technology</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">We welcome research, pilot, training, and engineering discussions grounded in measurable needs and realistic scope.</p>
            <Link href="/collaboration/" className="mt-8 inline-flex rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-white">Explore collaboration options</Link>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </div>
  );
}
