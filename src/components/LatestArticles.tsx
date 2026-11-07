import Link from "next/link";

const latest = [
  { date: "7 November 2026", iso: "2026-11-07", category: "Keamanan Siber · Forensik", title: "Lawful Interception Management System (LIMS): Arsitektur, Kontrol Keamanan, dan Audit Forensik", description: "Mengenal arsitektur ETSI, kontrol akses, insider threat, dan audit digital berbasis panduan NIST.", href: "/id/artikel/lawful-interception-lims-keamanan-siber/" },
  { date: "7 November 2026", iso: "2026-11-07", category: "AI · Keselamatan sistem", title: "Passengers: Ketika Otomatisasi Gagal, Siapa yang Mengambil Kendali?", description: "Dari kapal antarbintang ke pertanian vertikal: fault detection, fail-safe, dan tanggung jawab manusia dalam sistem otomatis.", href: "/id/artikel/passengers-otomatisasi-fail-safe/" },
  { date: "28 Oktober 2026", iso: "2026-10-28", category: "Refleksi · Penelitian", title: "Bangkit Penelitian Indonesia: Semangat Sumpah Pemuda", description: "Refleksi tentang pemuda, integritas akademik, kemandirian ilmu pengetahuan, dan inovasi yang berdampak.", href: "/articles/bangkit-penelitian-indonesia-sumpah-pemuda-2026/" },
  { date: "20 Oktober 2026", iso: "2026-10-20", category: "Jaringan komputer · Tutorial", title: "Memahami VLAN, VTP, dan Inter-VLAN Routing melalui Cisco Packet Tracer", description: "Konsep, konfigurasi tiga switch dan satu router, serta pengujian konektivitas jaringan.", href: "/id/artikel/vtp-vlan-inter-vlan-routing/" },
];

export function LatestArticles({ locale = "id" }: { locale?: "id" | "en" }) {
  const id = locale === "id";
  const entries = [...latest].sort((a, b) => b.iso.localeCompare(a.iso)).slice(0, 3);
  return (
    <section aria-labelledby="latest-articles-title" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">{id ? "Baru di TobaFarm" : "New on TobaFarm"}</p>
            <h2 id="latest-articles-title" className="font-display mt-2 text-3xl text-forest-deep md:text-4xl">{id ? "3 Artikel Terbaru" : "3 Latest Articles"}</h2>
            <p className="mt-2 text-sm text-muted">{id ? "Bacaan terbaru, diurutkan berdasarkan tanggal terbit." : "Most recent posts, ordered by publication date."}</p>
          </div>
          <Link href={id ? "/id/#articles" : "/#articles"} className="text-sm font-semibold text-teal-deep underline underline-offset-4">{id ? "Lihat semua artikel" : "Browse all articles"}</Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {entries.map((article, i) => (
            <article key={article.href} className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-cream-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-deep">{i === 0 ? (id ? "Terbaru · " : "Newest · ") : ""}{article.category}</p>
              <time dateTime={article.iso} className="mt-3 text-sm text-muted">{article.date}</time>
              <h3 className="font-display mt-3 text-2xl leading-tight text-forest-deep"><Link href={article.href} className="hover:underline">{article.title}</Link></h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.description}</p>
              <Link href={article.href} className="mt-6 w-fit rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-mid">{id ? "Baca artikel" : "Read article"}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
