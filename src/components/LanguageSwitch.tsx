import Link from "next/link";

export function LanguageSwitch({
  locale,
  enHref,
  idHref,
}: {
  locale: "en" | "id";
  enHref: string;
  idHref: string;
}) {
  return (
    <div
      className="inline-flex rounded-full border border-white/20 bg-white/5 p-1 text-xs font-medium"
      aria-label={locale === "en" ? "Language selection" : "Pilihan bahasa"}
    >
      <Link
        href={enHref}
        hrefLang="en"
        className={`rounded-full px-2.5 py-1.5 transition ${
          locale === "en" ? "bg-teal-bright text-navy" : "text-cream/70 hover:text-white"
        }`}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <Link
        href={idHref}
        hrefLang="id"
        className={`rounded-full px-2.5 py-1.5 transition ${
          locale === "id" ? "bg-teal-bright text-navy" : "text-cream/70 hover:text-white"
        }`}
        aria-current={locale === "id" ? "page" : undefined}
      >
        ID
      </Link>
    </div>
  );
}
