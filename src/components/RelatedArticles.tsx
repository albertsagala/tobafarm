import Link from "next/link";

const articles = [
  {
    path: "/artikel/gradien-suhu-horizontal-rak/",
    title: "Mengapa perbedaan suhu horizontal lebih penting daripada ketinggian rak?",
    topic: "Gradien horizontal dan vertikal",
  },
  {
    path: "/artikel/ac-dan-keseragaman-mikroklimat/",
    title: "AC mendinginkan container farm—tetapi tidak merata",
    topic: "Pendinginan dan keseragaman spasial",
  },
  {
    path: "/artikel/vpd-container-farm/",
    title: "VPD di Container Farm: suhu terlihat baik belum tentu cukup",
    topic: "VPD dan kelembapan",
  },
];

export function RelatedArticles({ currentPath }: { currentPath: string }) {
  const relatedArticles = articles.filter((article) => article.path !== currentPath);

  return (
    <section className="border-t border-[var(--line)] bg-white">
      <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-deep">
          Baca selanjutnya
        </p>
        <h2 className="font-display mt-2 text-3xl text-forest-deep">Artikel terkait</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {relatedArticles.map((article) => (
            <Link
              key={article.path}
              href={article.path}
              className="rounded-2xl border border-[var(--line)] bg-cream-soft p-5 transition hover:border-teal/50 hover:bg-cream"
            >
              <span className="text-xs uppercase tracking-wide text-teal-deep">{article.topic}</span>
              <span className="font-display mt-2 block text-2xl leading-tight text-forest-deep">
                {article.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
