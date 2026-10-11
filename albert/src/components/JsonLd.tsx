import { person, researchAreas } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: person.url,
    email: person.email,
    jobTitle: person.title,
    description: person.description,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: person.institution,
      url: "https://www.del.ac.id/",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
    },
    knowsAbout: researchAreas.map((area) => area.title),
    sameAs: [
      "https://www.del.ac.id/?page_id=7078",
      "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587",
      "https://www.linkedin.com/in/albert-sagala-47b963235",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
