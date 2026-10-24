import Image from "next/image";
import Link from "next/link";

export function Hero({ locale = "id" }: { locale?: "en" | "id" }) {
  const en = locale === "en";
  return (
    <section id="top" className="bg-navy pt-28 text-cream md:pt-32 border-t-4 border-teal-bright">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-12 md:px-8 md:pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <div>
          <p className="text-xs font-medium uppercase leading-6 tracking-[0.2em] text-teal-bright">{en ? "Toba, Indonesia · Indoor farming research" : "Toba, Indonesia · Riset pertanian dalam ruang"}</p>
          <h1 className="font-display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{en ? "AI-Driven Indoor Farming: From Sensor Data to Intelligent Control" : "Pertanian Indoor Berbasis AI: Dari Data Sensor ke Kendali Cerdas"}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream/80 sm:text-lg">{en ? "Exploring safe reinforcement learning, 3D microclimate mapping, VPD regulation, and energy-aware control in an instrumented vertical farm." : "Mengkaji reinforcement learning yang aman, pemetaan mikroklimat 3D, pengaturan VPD, dan kontrol hemat energi pada pertanian vertikal berinstrumen."}</p>
          <div className="mt-7 grid gap-3" aria-label={en ? "Three core research areas" : "Tiga fokus riset utama"}>
            {[
              { title: en ? "Safe Reinforcement Learning for climate control" : "Reinforcement Learning aman untuk kontrol iklim", description: en ? "DQN-based supervisory control and physical deployment." : "Kontrol supervisori berbasis DQN dan implementasi fisik.", href: en ? "/publications/" : "/id/publikasi/" },
              { title: en ? "3D spatial microclimate mapping" : "Pemetaan mikroklimat spasial 3D", description: en ? "Sparse sensors, Kriging, and residual correction." : "Sensor terbatas, Kriging, dan koreksi residual.", href: "/articles/kriging-sarima-microclimate/" },
              { title: en ? "Data-driven and energy-aware indoor farming" : "Indoor farming berbasis data dan sadar energi", description: en ? "IoT, edge control, VPD, and operational evidence." : "IoT, kontrol edge, VPD, dan bukti operasional.", href: "/articles/vpd-container-farm/" },
            ].map((area) => (
              <article key={area.title} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3">
                <h2 className="text-base font-semibold text-cream">{area.title}</h2>
                <p className="mt-1 text-sm text-cream/75">{area.description}</p>
                <Link href={area.href} className="mt-2 inline-block text-sm font-medium text-teal-bright underline underline-offset-4">{en ? "Related research & publications →" : "Riset & publikasi terkait →"}</Link>
              </article>
            ))}
          </div>
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
