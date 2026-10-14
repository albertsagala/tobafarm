import Link from "next/link";

const enArticles = [
  { path: "/articles/horizontal-temperature-gradient/", title: "Why Do Horizontal Temperature Differences Matter More Than Rack Height?", topic: "Horizontal and vertical gradients" },
  { path: "/articles/ac-and-microclimate-uniformity/", title: "The AC Cooled the Container Farm—but Not Uniformly", topic: "Cooling and spatial uniformity" },
  { path: "/articles/vpd-container-farm/", title: "VPD in a Container Farm: Good Temperature Is Not Enough", topic: "VPD and humidity" },
];
const idArticles = [
  { path: "/id/artikel/gradien-suhu-horizontal-rak/", title: "Mengapa perbedaan suhu horizontal lebih penting daripada ketinggian rak?", topic: "Gradien horizontal dan vertikal" },
  { path: "/id/artikel/ac-dan-keseragaman-mikroklimat/", title: "AC mendinginkan container farm—tetapi tidak merata", topic: "Pendinginan dan keseragaman spasial" },
  { path: "/id/artikel/vpd-container-farm/", title: "VPD di Container Farm: suhu terlihat baik belum tentu cukup", topic: "VPD dan kelembapan" },
];

export function RelatedArticles({ currentPath, locale = "en" }: { currentPath: string; locale?: "en" | "id" }) {
  const articles = locale === "en" ? enArticles : idArticles;
  const relatedArticles = articles.filter((article) => article.path !== currentPath);
  return (
    <section className="border-t border-[var(--line)] bg-white">
      <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">{locale === "en" ? "Continue reading" : "Baca selanjutnya"}</p>
        <h2 className="font-display mt-2 text-3xl text-forest-deep">{locale === "en" ? "Related articles" : "Artikel terkait"}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {relatedArticles.map((article) => <Link key={article.path} href={article.path} className="rounded-2xl border border-[var(--line)] bg-cream-soft p-5 transition hover:border-teal/50 hover:bg-cream"><span className="text-xs uppercase tracking-wide text-teal-deep">{article.topic}</span><span className="font-display mt-2 block text-2xl leading-tight text-forest-deep">{article.title}</span></Link>)}
        </div>
      </div>
    </section>
  );
}
