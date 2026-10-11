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
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/60 to-navy" />
        <div className="absolute inset-0 grid-fine opacity-50" />
        <div className="grain absolute inset-0 opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28">
        <p className="animate-rise text-xs font-medium uppercase tracking-[0.32em] text-teal-bright">
          Applied research · Intelligent agriculture
        </p>
        <h1 className="font-display animate-rise delay-1 mt-5 max-w-4xl text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          Engineering the Future of Intelligent Farming
        </h1>
        <p className="animate-rise delay-2 mt-6 max-w-2xl text-base leading-relaxed text-cream/78 md:text-xl">
          Toba Smart Farming develops methods and systems for indoor vertical
          farming, sensor-driven environmental monitoring, and intelligent
          climate control — with a research posture that prefers measurement
          over marketing.
        </p>
        <div className="animate-rise delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#platform"
            className="rounded-full bg-teal px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-teal-bright"
          >
            Explore the research platform
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/25 px-6 py-3 text-sm text-cream transition hover:border-teal hover:text-teal-bright"
          >
            Collaborate
          </a>
        </div>
        <div className="animate-rise delay-4 mt-16 grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <Leaf className="mt-0.5 h-5 w-5 text-teal-bright" aria-hidden />
            <div>
              <p className="text-sm font-medium">Container-based cultivation</p>
              <p className="mt-1 text-sm text-cream/65">
                Indoor vertical farming as a controlled research environment.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <Radar className="mt-0.5 h-5 w-5 text-teal-bright" aria-hidden />
            <div>
              <p className="text-sm font-medium">Sensing to actuation</p>
              <p className="mt-1 text-sm text-cream/65">
                From environmental observation to closed-loop climate response.
              </p>
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cream/55 transition hover:text-cream"
        >
          <ArrowDown className="h-4 w-4" aria-hidden />
          Continue
        </a>
      </div>
    </section>
  );
}
