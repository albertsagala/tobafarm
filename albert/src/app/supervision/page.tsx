import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SupervisionExplorer } from "@/components/SupervisionExplorer";
import {
  publicProjects,
  supervisionCopy,
  supervisionFilters,
  supervisionStats,
} from "@/lib/supervision";
import { person } from "@/lib/site";

export const metadata: Metadata = {
  title: supervisionCopy.title,
  description: supervisionCopy.intro,
  alternates: { canonical: "/supervision/" },
  openGraph: {
    type: "website",
    siteName: person.name,
    locale: "en_US",
    title: `${supervisionCopy.title} — ${person.name}`,
    description: supervisionCopy.intro,
    url: "/supervision/",
  },
};

export default function SupervisionPage() {
  const stats = [
    { value: supervisionStats.students, label: "Verified students" },
    { value: supervisionStats.projects, label: "Verified projects" },
    { value: supervisionStats.groupProjects, label: "Group projects" },
  ];

  return (
    <>
      <Header />
      <main id="main">
        <section
          id="top"
          className="bg-navy px-5 pb-16 pt-32 text-cream md:px-8 md:pb-20 md:pt-40"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal-bright">
              {supervisionCopy.eyebrow}
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              {supervisionCopy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/90">
              {supervisionCopy.intro}
            </p>
            {supervisionStats.projects > 0 ? (
              <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5"
                  >
                    <dt className="text-xs text-cream/75 sm:text-sm">{stat.label}</dt>
                    <dd className="font-display mt-1 text-4xl text-cream">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </section>

        <section
          id="records"
          aria-labelledby="records-title"
          className="scroll-mt-24 bg-cream-soft py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2
              id="records-title"
              className="font-display text-4xl text-forest-deep md:text-5xl"
            >
              Supervised work
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Each project is listed once, with every group member under it.
              Open a project&apos;s sources to see where the supervision is
              stated.
            </p>
            <div className="mt-10">
              <SupervisionExplorer projects={publicProjects} filters={supervisionFilters} />
            </div>
          </div>
        </section>

        <section
          id="method"
          aria-labelledby="method-title"
          className="scroll-mt-24 bg-cream py-16 md:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
            <h2
              id="method-title"
              className="font-display text-3xl text-forest-deep md:text-4xl"
            >
              How entries are verified
            </h2>
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                A student is listed only when a supervision list, an approval
                page, the Del repository, or an official institutional page
                names Albert Sagala as supervisor. Co-authorship alone is not
                treated as supervision.
              </p>
              <p>
                Cohort, graduation year, and supervision year are recorded
                separately and shown only where a source states them. Where a
                source does not say whether the work was a Tugas Akhir or a
                Project, no type is shown.
              </p>
              <p>
                Career information appears as the last verified position with
                the date it was checked. A LinkedIn link without a position
                means the profile has been matched to the student but not yet
                read. {supervisionCopy.careerNote}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
