import { nav, person } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">{person.name}</p>
          <p className="mt-3 text-sm text-cream/90">{person.title}</p>
          <p className="mt-1 text-sm text-cream/75">
            {person.institution}, {person.country}
          </p>
          <p className="mt-3 text-sm text-teal-bright">{person.doctoralLine}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-teal-bright">
            On this page
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-cream/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {person.name}
          </p>
          <p>
            <a
              href={person.researchPlatformUrl}
              className="transition hover:text-cream"
            >
              {person.researchPlatformName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
