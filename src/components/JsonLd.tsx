import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: "Indonesia",
    knowsAbout: [
      "Intelligent agriculture",
      "Indoor vertical farming",
      "IoT sensor networks",
      "Artificial intelligence",
      "Environmental monitoring",
      "Intelligent climate control",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
