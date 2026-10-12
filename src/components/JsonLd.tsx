import { researchLead } from "@/lib/content";
import { isValidEmail, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: site.name,
    url: site.url,
    description: site.description,
    ...(isValidEmail(site.email) ? { email: site.email } : {}),
    areaServed: "Indonesia",
    knowsAbout: [
      "Indoor vertical farming",
      "Container farming",
      "Wireless sensor networks",
      "Spatial microclimate monitoring",
      "Reinforcement learning for climate control",
      "Hydroponics",
    ],
    member: {
      "@type": "Person",
      name: researchLead.name,
      roleName: researchLead.role,
      sameAs: researchLead.profiles.map((profile) => profile.href),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
