import { Logo } from "@/components/Logo";
import { nav, placeholders, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/65">
            {site.description}
          </p>
          <p className="mt-4 text-xs text-cream/40">
            Public materials are limited to verified statements. Contact and
            affiliation fields remain placeholders until confirmed.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-teal-bright">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-teal-bright">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/65">
            <li>{placeholders.email}</li>
            <li>{placeholders.phone}</li>
            <li>{placeholders.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed for static deployment at {site.url.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
