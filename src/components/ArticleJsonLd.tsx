import { site } from "@/lib/site";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  locale?: "en" | "id";
  about?: string[];
};

export function ArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  locale = "en",
  about,
}: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: `${site.url}/og.jpg`,
    datePublished,
    dateModified: datePublished,
    inLanguage: locale === "en" ? "en-US" : "id-ID",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${path}` },
    author: { "@type": "Person", name: "Albert Sagala" },
    publisher: { "@type": "ResearchOrganization", name: site.name, url: site.url },
    about: about ?? ["Indoor farming", "Spatial microclimate", "Climate control", "Container farming"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
