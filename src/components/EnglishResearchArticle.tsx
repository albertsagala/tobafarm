import Link from "next/link";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { RelatedArticles } from "@/components/RelatedArticles";
import { site } from "@/lib/site";

export type EnglishArticleProps = {
  path: string;
  idPath: string;
  eyebrow: string;
  headline: string;
  dek: string;
  metrics: Array<[string, string, string]>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  summary: Array<[string, string]>;
};

export function EnglishResearchArticle(props: EnglishArticleProps) {
  return (
    <div className="min-h-screen bg-cream-soft">
      <ArticleJsonLd headline={props.headline} description={props.dek} path={props.path} datePublished="2026-10-14" locale="en" />
      <header className="border-b border-white/10 bg-navy">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/" className="text-cream" aria-label="Toba Smart Farming home"><Logo /></Link>
          <div className="flex items-center gap-3">
            <LanguageSwitch locale="en" enHref={props.path} idHref={props.idPath} />
            <Link href="/#articles" className="rounded-full border border-teal/50 px-4 py-2 text-sm text-teal-bright">Back to articles</Link>
          </div>
        </div>
      </header>
      <main id="main">
        <article>
          <section className="bg-navy text-cream"><div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24"><p className="text-xs uppercase tracking-[0.22em] text-teal-bright">{props.eyebrow} · 14 October 2026</p><h1 className="font-display mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">{props.headline}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-cream/75 md:text-xl">{props.dek}</p><div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/60"><span>By Albert Sagala</span><span>Pintu Bosi, Toba Regency, North Sumatra, Indonesia</span></div></div></section>
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
            <section className="grid gap-4 sm:grid-cols-3">{props.metrics.map(([label,value,note])=><div key={label} className="rounded-3xl bg-forest-deep p-6 text-cream"><p className="text-xs uppercase tracking-[0.18em] text-teal-bright">{label}</p><p className="font-display mt-3 text-4xl">{value}</p><p className="mt-2 text-sm leading-6 text-cream/65">{note}</p></div>)}</section>
            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="space-y-10 text-[1.05rem] leading-8 text-ink">
                {props.sections.map(section=><section key={section.title}><h2 className="font-display text-3xl text-forest-deep">{section.title}</h2>{section.paragraphs.map((p,i)=><p key={i} className="mt-4">{p}</p>)}</section>)}
                <section className="border-t border-[var(--line)] pt-8"><h2 className="font-display text-3xl text-forest-deep">Interpretation boundary</h2><p className="mt-4">These results describe one instrumented facility and the stated observation window. Operational associations should not be presented as universal causal effects. Airflow hypotheses require direct velocity measurements, smoke visualization, or validated CFD experiments.</p></section>
              </div>
              <aside className="lg:sticky lg:top-8 lg:self-start"><div className="rounded-3xl border border-[var(--line)] bg-white p-6"><h2 className="font-display text-2xl text-forest-deep">Study summary</h2><dl className="mt-5 divide-y divide-[var(--line)]">{props.summary.map(([label,value])=><div key={label} className="py-3"><dt className="text-xs uppercase tracking-wide text-muted">{label}</dt><dd className="mt-1 font-medium text-forest-deep">{value}</dd></div>)}</dl></div></aside>
            </div>
          </div>
        </article>
        <RelatedArticles currentPath={props.path} locale="en" />
      </main>
      <footer className="border-t border-[var(--line)] bg-white"><div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted md:px-8"><p>© 2026 {site.name}. Evidence from a container-based indoor farming research facility.</p><Link href="/" className="text-teal-deep underline underline-offset-4">Return home</Link></div></footer>
    </div>
  );
}
