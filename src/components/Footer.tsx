import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { isValidEmail, navEn, navId, site } from "@/lib/site";

export function Footer({ locale = "en" }: { locale?: "en" | "id" }) {
  const email = isValidEmail(site.email) ? site.email : null;
  const nav = locale === "en" ? navEn : navId;
  return (
    <footer className="border-t border-white/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80">
            {locale === "en"
              ? site.description
              : "Toba Smart Farming meneliti pertanian dalam ruang berbasis kontainer melalui jaringan sensor, analisis mikroklimat spasial, dan kontrol iklim berbasis AI."}
          </p>
          <div className="mt-5"><LanguageSwitch locale={locale} enHref="/" idHref="/id/" /></div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-teal-bright">{locale === "en" ? "Navigation" : "Navigasi"}</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            {nav.map((item) => <li key={item.href}><a href={item.href} className="transition hover:text-teal-bright">{item.label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-teal-bright">{locale === "en" ? "Contact" : "Kontak"}</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            {email ? <li><a href={`mailto:${email}`} className="[overflow-wrap:anywhere] transition hover:text-teal-bright">{email}</a></li> : null}
            <li>{locale === "en" ? "Research, experiments & collaboration" : "Riset, eksperimen & kolaborasi"}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-5 py-6 text-xs text-cream/70 md:px-8">© {new Date().getFullYear()} {site.name}</div></div>
    </footer>
  );
}
