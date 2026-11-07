import Link from "next/link";
import { BookOpen, FlaskConical, Lightbulb } from "lucide-react";

type Locale = "id" | "en";

export function ContentPillars({ locale = "id" }: { locale?: Locale }) {
  const id = locale === "id";
  const pillars = [
    {
      icon: FlaskConical,
      title: "Research & Innovation",
      description: id
        ? "Riset pertanian cerdas, jaringan sensor, mikroklimat, AI, dan sistem kontrol berbasis data—dengan penekanan pada metode dan bukti eksperimen."
        : "Smart farming research, sensing networks, microclimates, AI, and data-driven control, grounded in methods and experimental evidence.",
      href: id ? "/id/#projects" : "/#projects",
      action: id ? "Jelajahi riset" : "Explore research",
    },
    {
      icon: BookOpen,
      title: "Technology & Education",
      description: id
        ? "Penjelasan teknis dan tutorial tentang IoT, keamanan siber, jaringan komputer, AI, serta rekayasa sistem."
        : "Technical explainers and tutorials on IoT, cybersecurity, computer networks, AI, and systems engineering.",
      href: id ? "/id/#articles" : "/#articles",
      action: id ? "Baca artikel teknis" : "Read technical articles",
    },
    {
      icon: Lightbulb,
      title: "Insights & Perspectives",
      description: id
        ? "Analisis dan refleksi atas perkembangan teknologi dan isu aktual, dengan pemisahan yang jelas antara fakta, interpretasi, dan opini."
        : "Analysis and reflections on technology and current issues, clearly distinguishing verified facts, interpretation, and opinion.",
      href: id ? "/id/#articles" : "/#articles",
      action: id ? "Baca perspektif" : "Read perspectives",
    },
  ];
  return (
    <section aria-labelledby="content-pillars-title" className="bg-cream-soft py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
          {id ? "Arah dan fokus TobaFarm" : "What TobaFarm covers"}
        </p>
        <h2 id="content-pillars-title" className="font-display mt-3 text-3xl text-forest-deep md:text-4xl">
          {id ? "Riset sebagai fondasi, pengetahuan untuk publik" : "Research-led, open to wider perspectives"}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
          {id
            ? "TobaFarm berakar pada penelitian akademik, sekaligus menjadi ruang berbagi pengetahuan teknis dan pemikiran tentang isu yang relevan."
            : "TobaFarm is grounded in academic research while sharing practical technology knowledge and informed perspectives on relevant issues."}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description, href, action }) => (
            <article key={title} className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6">
              <Icon aria-hidden="true" className="h-7 w-7 text-teal-deep" />
              <h3 className="font-display mt-5 text-2xl text-forest-deep">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">{description}</p>
              <Link href={href} className="mt-6 inline-flex w-fit text-sm font-semibold text-teal-deep underline underline-offset-4">
                {action}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
