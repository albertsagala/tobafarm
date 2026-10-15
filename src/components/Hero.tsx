import Image from "next/image";
import Link from "next/link";

export function Hero({ locale = "id" }: { locale?: "en" | "id" }) {
  const en = locale === "en";
  return (
    <section id="top" className="bg-navy pt-28 text-cream md:pt-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-12 md:px-8 md:pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <div>
          <p className="text-xs font-medium uppercase leading-6 tracking-[0.2em] text-teal-bright">{en ? "Toba, Indonesia · Indoor farming research" : "Toba, Indonesia · Riset pertanian dalam ruang"}</p>
          <h1 className="font-display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{en ? "Smarter indoor farming through sensors and AI" : "Pertanian dalam ruang dengan sensor dan AI"}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream/80 sm:text-lg">{en ? "Inside a 10-ft container, we study how sensing, spatial microclimate analysis, and data-driven control can improve the crop environment." : "Di dalam kontainer 10 kaki, kami meneliti bagaimana jaringan sensor, analisis mikroklimat spasial, dan kontrol berbasis data dapat memperbaiki lingkungan tanaman."}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research-stories" className="rounded-full bg-teal-bright px-6 py-3 text-sm font-medium text-navy transition hover:bg-white">{en ? "Explore our research" : "Jelajahi riset kami"}</a>
            <Link href={en ? "/collaboration/" : "/id/kolaborasi/"} className="rounded-full border border-white/40 px-6 py-3 text-sm transition hover:border-teal-bright">{en ? "Collaborate with us" : "Berkolaborasi"}</Link>
          </div>
        </div>
        <figure className="min-w-0">
          <Image src="/images/gallery/container-overview.jpg" alt={en ? "Inside the Toba Smart Farming container: hydroponic racks and research equipment" : "Interior kontainer Toba Smart Farming: rak hidroponik dan perangkat riset"} width={1280} height={960} sizes="(min-width: 1024px) 55vw, 100vw" preload className="h-auto w-full rounded-sm" />
          <figcaption className="mt-3 text-xs leading-5 text-cream/70">{en ? "Our instrumented container facility in North Sumatra, Indonesia." : "Fasilitas kontainer berinstrumen di Sumatera Utara, Indonesia."} <a href="#facility" className="underline underline-offset-4">{en ? "Inside the facility →" : "Lihat fasilitas →"}</a></figcaption>
        </figure>
      </div>
      <div className="border-t border-white/15">
        <dl className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:grid-cols-3 md:px-8">
          {[["10 ft", en ? "Instrumented research container" : "Kontainer riset berinstrumen"], ["27 + 1", en ? "Indoor and outdoor sensor nodes" : "Node sensor dalam dan luar ruang"], ["Toba", en ? "North Sumatra, Indonesia" : "Sumatera Utara, Indonesia"]].map(([value, label]) => <div key={value}><dt className="font-display text-3xl text-teal-bright">{value}</dt><dd className="mt-1 text-sm text-cream/75">{label}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
