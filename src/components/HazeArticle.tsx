import Link from "next/link";
import { Fragment } from "react";
import { Header } from "@/components/Header";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { RelatedArticles } from "@/components/RelatedArticles";
import { hazeCopy, hazePaths, hazeSources } from "@/lib/haze-article";

function ReferencedText({ text }: { text: string }) {
  return <>{text.split(/(\[\d+\])/).map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    return match ? <a key={i} href={`#source-${match[1]}`} className="font-medium text-teal-deep underline underline-offset-4">{part}</a> : <Fragment key={i}>{part}</Fragment>;
  })}</>;
}

export function HazeArticle({ locale }: { locale: "en" | "id" }) {
  const c = hazeCopy[locale];
  return <div className="min-h-screen bg-cream-soft">
    <Header locale={locale} />
    <ArticleJsonLd headline={c.title} description={c.dek} path={hazePaths[locale]} datePublished="2026-10-15" locale={locale} about={["Wildfire smoke", "Crop growth", "Photosynthesis", "Toba agriculture"]} />
    <main id="main">
      <article>
        <header className="bg-navy pb-16 pt-32 text-cream md:pt-40">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4"><p className="text-xs uppercase tracking-[0.2em] text-teal-bright">{c.eyebrow}</p><LanguageSwitch locale={locale} enHref={hazePaths.en} idHref={hazePaths.id} /></div>
            <h1 className="font-display mt-7 max-w-4xl text-4xl leading-tight md:text-6xl">{c.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/80">{c.dek}</p>
            <p className="mt-7 text-sm text-cream/65">Albert Sagala · {c.date} · Toba, Indonesia</p>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
          <p className="font-display text-2xl leading-9 text-forest-deep">{c.lead}</p>
          <aside className="my-9 rounded-2xl border-l-4 border-teal bg-white p-6 text-lg font-medium leading-8 text-forest-deep">{c.callout}</aside>
          <div className="space-y-10 text-[1.05rem] leading-8 text-ink">
            {c.sections.map(([title, paragraphs], index) => <Fragment key={String(title)}>
              <section><h2 className="font-display text-3xl leading-tight text-forest-deep">{title}</h2>{(paragraphs as string[]).map((p,i)=><p className="mt-4" key={i}><ReferencedText text={p} /></p>)}</section>
              {index === 2 && <section aria-label={c.tableTitle}><h2 className="font-display text-2xl text-forest-deep">{c.tableTitle}</h2><div className="mt-5 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white"><table className="w-full min-w-[580px] text-left text-sm leading-6"><thead className="bg-forest-deep text-cream"><tr>{c.headers.map(h=><th key={h} scope="col" className="p-4">{h}</th>)}</tr></thead><tbody>{c.rows.map(row=><tr key={row[0]} className="border-t border-[var(--line)]">{row.map((cell,i)=>i===0?<th scope="row" key={i} className="p-4 font-medium text-forest-deep">{cell}</th>:<td key={i} className="p-4 align-top">{cell}</td>)}</tr>)}</tbody></table></div></section>}
            </Fragment>)}
          </div>
          <aside className="mt-12 rounded-2xl border border-[var(--line)] bg-white p-6 text-sm leading-7 text-muted">{c.boundary}</aside>
          <section className="mt-12 border-t border-[var(--line)] pt-8"><h2 className="font-display text-3xl text-forest-deep">{c.refs}</h2><ol className="mt-5 list-decimal space-y-4 pl-6 text-sm leading-6">{hazeSources.map(([label,url],i)=><li id={`source-${i+1}`} className="scroll-mt-28" key={url}><a href={url} className="text-teal-deep underline underline-offset-4">{label}</a></li>)}</ol></section>
          <Link href={locale === "en" ? "/#articles" : "/id/#articles"} className="mt-10 inline-block rounded-full bg-forest px-6 py-3 text-sm font-medium text-white">{c.back}</Link>
        </div>
      </article>
      <RelatedArticles currentPath={hazePaths[locale]} locale={locale} />
    </main>
  </div>;
}
