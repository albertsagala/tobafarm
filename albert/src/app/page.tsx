import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  communityServices,
  publicationGroups,
  researchProjects,
} from "@/lib/records";
import { person, profiles, researchAreas, sinta } from "@/lib/site";
import { courses, readings, type TeachingFile } from "@/lib/teaching";

function MaterialGroup({
  label,
  items,
}: {
  label: string;
  items: TeachingFile[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="mt-5">
      <p className="text-[11px] uppercase tracking-[0.22em] text-teal">{label}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-base leading-snug text-forest-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section
          id="top"
          className="bg-navy px-5 pb-20 pt-32 text-cream md:px-8 md:pb-28 md:pt-40"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal-bright">
              {person.institution}, {person.country}
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-7xl">
              {person.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream sm:text-2xl">
              {person.title}
            </p>
            <p className="mt-3 max-w-2xl text-base text-teal-bright sm:text-lg">
              {person.doctoralLine}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#biography"
                className="rounded-full bg-teal px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-teal-bright"
              >
                Biography
              </a>
              <a
                href={person.researchPlatformUrl}
                className="rounded-full border border-cream/40 px-6 py-3 text-sm text-cream transition hover:border-teal hover:text-teal-bright"
              >
                {person.researchPlatformName}
              </a>
            </div>
          </div>
        </section>

        <section id="biography" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal">
                Biography
              </p>
              <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
                {person.name}
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              <p>
                {person.name} is {person.title} at {person.institution},{" "}
                {person.country}. That appointment is separate from his doctoral
                study.
              </p>
              <p>{person.doctoralLine}.</p>
              <p>
                The research is concerned with how sensing, computation, and
                actuation work together: intelligent control and cyber-physical
                systems; artificial intelligence for precision agriculture; the
                Internet of Things and wireless sensor networks; and
                instrumentation, automation, and edge computing.
              </p>
              <p>
                Agricultural experiments associated with this work are
                presented on the{" "}
                <a
                  href={person.researchPlatformUrl}
                  className="text-forest underline decoration-teal/50 underline-offset-4"
                >
                  {person.researchPlatformName}
                </a>{" "}
                research platform.
              </p>
            </div>
          </div>
        </section>

        <section id="research" className="scroll-mt-24 bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal">
              Research
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl text-forest-deep md:text-5xl">
              Areas of work
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {researchAreas.map((area, index) => (
                <article
                  key={area.title}
                  className="rounded-3xl border border-[var(--line)] bg-white p-7"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-forest-deep">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="teaching" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal">
              Kuliah
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl text-forest-deep md:text-5xl">
              Teaching
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Courses at {person.institution}.
            </p>
            <ol className="mt-12 grid gap-5 md:grid-cols-2">
              {courses.map((course, index) => (
                <li
                  key={course.slug}
                  id={course.slug}
                  className="scroll-mt-28 rounded-3xl border border-[var(--line)] bg-white p-7"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-forest-deep">
                    {course.title}
                  </h3>
                  <MaterialGroup label="Slides" items={course.slides} />
                  <MaterialGroup label="Modules" items={course.modules} />
                </li>
              ))}
            </ol>
            {readings.length > 0 ? (
              <div className="mt-16">
                <h3 className="font-display text-3xl text-forest-deep">
                  Tulisan populer
                </h3>
                <ol className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {readings.map((item) => (
                    <li key={item.href} className="py-5">
                      <a
                        href={item.href}
                        className="text-lg leading-snug text-forest-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>
        </section>

        <section id="publications" className="scroll-mt-24 bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal">
              Publications
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl text-forest-deep md:text-5xl">
              Published papers
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Grouped as international journals, international conferences, and
              national journals. Each title links to the publisher record.
              Citation counts stay on the{" "}
              <a
                href={sinta.profile}
                className="text-forest underline decoration-teal/50 underline-offset-4"
              >
                SINTA profile
              </a>
              .
            </p>
            <div className="mt-14 space-y-14">
              {publicationGroups.map((group) => (
                <div key={group.id} id={group.id} className="scroll-mt-28">
                  <h3 className="font-display text-3xl text-forest-deep">
                    {group.label}
                  </h3>
                  <ol className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                    {group.items.map((paper) => (
                      <li key={paper.href} className="py-5">
                        <div className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                          <p className="text-sm font-medium tracking-wide text-teal">
                            {paper.year}
                          </p>
                          <div>
                            <a
                              href={paper.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg leading-snug text-forest-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal"
                            >
                              {paper.title}
                            </a>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {paper.venue}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal">
              Research projects
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl text-forest-deep md:text-5xl">
              Funded research
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Years are the implementation years on the public{" "}
              <a
                href={sinta.researches}
                className="text-forest underline decoration-teal/50 underline-offset-4"
              >
                SINTA research record
              </a>
              . The vessel-tracking project is listed once for its 2021–2023
              awards.
            </p>
            <ol className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {researchProjects.map((item) => (
                <li key={`${item.year}-${item.title}`} className="py-5">
                  <div className="grid gap-2 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                    <p className="text-sm font-medium tracking-wide text-teal">
                      {item.year}
                    </p>
                    <div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg leading-snug text-forest-deep underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <p className="text-lg leading-snug text-forest-deep">
                          {item.title}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-muted">
                        {item.role} · {item.scheme}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="service" className="scroll-mt-24 bg-forest-deep py-20 text-cream md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal-bright">
              Pengabdian kepada masyarakat
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl md:text-5xl">
              Community service
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-cream/80">
              Activities and years follow the public{" "}
              <a
                href={sinta.services}
                className="text-teal-bright underline decoration-teal/50 underline-offset-4"
              >
                SINTA community-service record
              </a>
              .
            </p>
            <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {communityServices.map((item) => (
                <li key={`${item.year}-${item.title}`} className="py-5">
                  <div className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                    <p className="text-sm font-medium tracking-wide text-teal-bright">
                      {item.year}
                    </p>
                    <div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg leading-snug text-cream underline decoration-teal/40 underline-offset-4 transition hover:decoration-teal-bright"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <p className="text-lg leading-snug text-cream">
                          {item.title}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-cream/70">
                        {item.role} · {item.scheme}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="profiles" className="scroll-mt-24 bg-navy py-20 text-cream md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal-bright">
              Profiles
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl md:text-5xl">
              Verified public records
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-cream/80">
              Only profiles that can be opened and matched to {person.name} are
              listed. Citation metrics are left on those records rather than
              repeated here.
            </p>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {profiles.map((profile) => (
                <li key={profile.href}>
                  <a
                    href={profile.href}
                    className="block h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-teal/50"
                  >
                    <p className="font-display text-2xl">{profile.label}</p>
                    <p className="mt-2 text-sm text-cream/70">{profile.note}</p>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-cream/70">
              Institutional email published on the staff page:{" "}
              <a className="text-teal-bright" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </p>
          </div>
        </section>

        <section id="platform" className="scroll-mt-24 bg-cream-soft py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal">
              Research platform
            </p>
            <h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">
              {person.researchPlatformName}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              The public research platform describes the 10-foot container-based
              indoor farm, its sensing and climate-control questions, and the
              facility photograph record. It is a separate site from this page.
            </p>
            <a
              href={person.researchPlatformUrl}
              className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm text-cream transition hover:bg-forest-mid"
            >
              {person.researchPlatformUrl.replace("https://", "")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
