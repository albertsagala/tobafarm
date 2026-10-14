"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const images = [
  {
    src: "/images/gallery/container-overview.jpg",
    alt: "Interior kontainer indoor farming dengan rak hidroponik, sensor, dan perangkat aktuasi",
    width: 1280,
    height: 960,
    title: "Interior fasilitas terinstrumentasi",
    caption:
      "Rak hidroponik bertingkat, node sensor terdistribusi, serta subsistem nutrisi dan aktuasi di dalam kontainer 10 kaki.",
  },
  {
    src: "/images/gallery/pakchoi-racks.jpg",
    alt: "Tanaman pakchoi tumbuh pada rak hidroponik bertingkat di bawah lampu",
    width: 960,
    height: 1280,
    title: "Pakchoi pada rak hidroponik",
    caption:
      "Dokumentasi tanaman pakchoi pada gully bertingkat di bawah pencahayaan buatan.",
  },
  {
    src: "/images/gallery/grafana-july-2026.png",
    alt: "Dashboard Grafana monitoring indoor farming bulan Juli 2026",
    width: 1896,
    height: 1350,
    title: "Dashboard monitoring Juli 2026",
    caption:
      "Rekaman Grafana untuk suhu, kelembapan, CO₂, pencahayaan, status aktuator, arus, dan daya.",
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [activeIndex]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <section id="gallery" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Dokumentasi"
            title="Fasilitas, tanaman, dan data nyata"
            description="Galeri ini memadukan dokumentasi langsung dari ruang tanam dengan tampilan monitoring yang digunakan untuk mengamati kondisi fasilitas."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {images.map((item, index) => (
            <Reveal
              key={item.src}
              delayMs={index * 70}
              className={index === 2 ? "md:col-span-2" : ""}
            >
              <figure className="group overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-deep"
                  aria-label={`Perbesar ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes={index === 2 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className={`w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
                      index === 2 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  />
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-forest/85 text-white backdrop-blur-sm">
                    <Maximize2 className="h-4 w-4" aria-hidden />
                  </span>
                </button>
                <figcaption className="p-5 sm:p-6">
                  <h3 className="font-display text-xl text-forest-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-deep/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setActiveIndex(null)}
            aria-label="Tutup gambar"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <figure
            className="max-h-full max-w-6xl overflow-auto rounded-2xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="95vw"
              className="h-auto max-h-[78vh] w-auto max-w-full object-contain"
              priority
            />
            <figcaption className="p-4 text-center text-sm text-muted sm:p-5">
              <span className="font-medium text-forest-deep">{activeImage.title}</span>
              <span className="mx-2 text-[var(--line)]">•</span>
              {activeImage.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
