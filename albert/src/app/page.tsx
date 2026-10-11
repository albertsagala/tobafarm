import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { person, profiles, researchAreas } from "@/lib/site";

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

        <section id="profiles" className="scroll-mt-24 bg-forest-deep py-20 text-cream md:py-28">
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
