import Image from "next/image";
import { ArrowDown, Leaf, Radar } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-navy text-cream"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/55 sm:bg-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/78 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-transparent" />
        <div className="absolute inset-0 grid-fine opacity-40" />
        <div className="grain absolute inset-0 opacity-[0.12] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:pb-20 sm:pt-36 md:px-8 md:pb-28">
        <div className="max-w-3xl rounded-3xl bg-navy/55 p-5 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.8)] ring-1 ring-white/10 backdrop-blur-[2px] sm:bg-navy/40 sm:p-7 md:bg-transparent md:p-0 md:shadow-none md:ring-0 md:backdrop-blur-none">
          <p className="animate-rise text-[0.7rem] font-medium uppercase tracking-[0.2em] text-teal-bright sm:text-xs sm:tracking-[0.32em]">
            Applied research · Intelligent agriculture
          </p>
          <h1 className="font-display animate-rise delay-1 mt-4 max-w-4xl text-[2.15rem] leading-[1.12] tracking-tight text-cream sm:mt-5 sm:text-5xl sm:leading-[1.08] md:text-7xl">
            Engineering the Future of Intelligent Farming
          </h1>
          <p className="animate-rise delay-2 mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-cream sm:mt-6 sm:text-lg md:text-xl">
            Toba Smart Farming advances intelligent agriculture through
            integrated sensing, data-driven analysis, and AI-based environmental
            control. Our research bridges experimental indoor farming systems
            with practical engineering solutions for sustainable food
            production.
          </p>
          <div className="animate-rise delay-3 mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#platform"
              className="rounded-full bg-teal px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-teal-bright"
            >
              Explore the research platform
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/50 px-6 py-3 text-sm text-cream transition hover:border-teal hover:text-teal-bright"
            >
              Collaborate
            </a>
          </div>
        </div>
        <div className="animate-rise delay-4 mt-8 grid max-w-2xl gap-3 sm:mt-16 sm:gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-navy/75 p-4 backdrop-blur-sm">
            <Leaf className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" aria-hidden />
            <div>
              <p className="text-sm font-medium text-cream">
                Container-based cultivation
              </p>
              <p className="mt-1 text-sm leading-relaxed text-cream/90">
                Indoor vertical farming as a controlled research environment.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-navy/75 p-4 backdrop-blur-sm">
            <Radar className="mt-0.5 h-5 w-5 shrink-0 text-teal-bright" aria-hidden />
            <div>
              <p className="text-sm font-medium text-cream">Sensing to actuation</p>
              <p className="mt-1 text-sm leading-relaxed text-cream/90">
                From environmental observation to closed-loop climate response.
              </p>
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cream/90 transition hover:text-cream sm:mt-16"
        >
          <ArrowDown className="h-4 w-4" aria-hidden />
          Continue
        </a>
      </div>
    </section>
  );
}
