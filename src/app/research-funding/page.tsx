import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Research Grant Radar | Toba Smart Farming",
  description: "Curated research funding opportunities for smart farming, AI, IoT, sustainable agriculture and climate resilience in Indonesia, Asia and globally.",
  alternates: { canonical: "/research-funding/" },
};

const reviewed = "27 November 2026";
const grants = [
  { name: "APN CRRP & CAPaBLE 2026", region: "Asia-Pacific", status: "Open at review", deadline: "30 Nov 2026, 21:59 WIB (summary proposal)", funding: "See programme guide", fit: "Climate adaptation, weather stations, remote sensing and agricultural early warning.", eligibility: "Eligible institutions in APN member or approved countries; stakeholder co-design is mandatory.", action: "Apply only if a regional team and stakeholder input are ready.", url: "https://www.apn-gcr.org/news/2026-call-for-proposals-under-the-crrp-and-capable-programmes/" },
  { name: "ASEAN IVO 2027", region: "ASEAN / Japan", status: "Open at review", deadline: "8 Jan 2027", funding: "Up to USD 40,000 per project/year; 6–24 months", fit: "AI-assisted climate control, edge IoT, food security and resilient agricultural sensing.", eligibility: "Lead institution must be an approved ASEAN IVO member by deadline; at least two institutions from two ASEAN countries.", action: "Build an ASEAN consortium and prepare a demonstrable research concept.", url: "https://www.nict.go.jp/en/asean_ivo/2027_Call_for_Proposals.html" },
  { name: "e-ASIA JRP — 16th Call", region: "Asia", status: "Upcoming (provisional)", deadline: "Expected opening mid-Dec 2026; deadline pending", funding: "Pending final call", fit: "Sustainable agriculture, resource efficiency, microclimate sensing and AI.", eligibility: "Confirm participating funding agencies and country-specific rules when the call opens.", action: "Identify complementary research partners and prepare a concept note.", url: "https://www.the-easia.org/jrp/index.html" },
  { name: "BIMA — Research funding 2027", region: "Indonesia", status: "Watchlist", deadline: "Await official scheme announcement", funding: "Scheme-specific", fit: "Fundamental and applied research in safe reinforcement learning, intelligent control and precision farming.", eligibility: "Check current lecturer, institution, track record and scheme requirements.", action: "Prepare preliminary results, methodology, outputs and budget.", url: "https://bima.kemdiktisaintek.go.id/" },
  { name: "RIIM — BRIN / LPDP", region: "Indonesia", status: "Watchlist", deadline: "Next batch not confirmed", funding: "Scheme-specific", fit: "Autonomous vertical farming, resilient IoT and data-driven agricultural systems.", eligibility: "Confirm the next batch's institutional and principal investigator requirements.", action: "Develop an experimentally validated research proposal.", url: "https://pendanaan-risnov.brin.go.id/" },
  { name: "Horizon Europe — FARM2FORK-01", region: "Global / EU", status: "Upcoming", deadline: "Planned 23 Sep 2027; opening 20 Apr 2027", funding: "Refer to EU call documents", fit: "Digital tools for agriculture facing water and nutrient scarcity.", eligibility: "Verify country funding eligibility and consortium rules in the specific call.", action: "Seek a consortium partner; topic HORIZON-CL6-2027-02-FARM2FORK-01.", url: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/calls-for-proposals?callIdentifier=HORIZON-CL6-2027-02" },
];

export default function ResearchFunding() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <Header locale="en" />
      <main id="main" className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep">Research resources / Funding</p>
        <h1 className="font-display mt-3 text-4xl text-forest-deep md:text-6xl">Research Grant Radar</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">Priority calls for research proposals in Indonesia, Asia and beyond, selected for their relevance to intelligent agriculture, AI, IoT and climate resilience.</p>
        <p className="mt-4 text-sm text-muted">Editorial snapshot: {reviewed}. This is not a live funding feed. Status refers to the review date; confirm current deadlines and eligibility on the official portals before applying.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[["2", "Calls open at review"], ["2", "Upcoming calls"], ["2", "Watchlist programmes"]].map(([value,label]) => (
            <div key={label} className="rounded-2xl border border-[var(--line)] bg-white p-5"><p className="font-display text-3xl text-forest-deep">{value}</p><p className="mt-1 text-sm text-muted">{label}</p></div>
          ))}
        </div>
        <h2 className="font-display mt-12 text-3xl text-forest-deep">Priority opportunities</h2>
        <p className="mt-2 text-muted">Active calls are listed first, followed by announced and watchlist programmes. Research fit is an editorial suggestion, not a funding guarantee.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {grants.map(g => (
            <article key={g.name} className="flex flex-col rounded-3xl border border-[var(--line)] bg-white p-6 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-deep">{g.region}</p>
                <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-semibold text-forest-deep">{g.status}</span>
              </div>
              <h3 className="font-display mt-4 text-2xl text-forest-deep">{g.name}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-6 text-muted">
                {[["Deadline / timing",g.deadline],["Funding",g.funding],["Research fit",g.fit],["Eligibility",g.eligibility],["Next step",g.action]].map(([label,value]) => (
                  <div key={label}><dt className="font-semibold text-forest-deep">{label}</dt><dd>{value}</dd></div>
                ))}
              </dl>
              <div className="mt-auto pt-6"><a href={g.url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white">Official call / programme portal ↗</a></div>
            </article>
          ))}
        </div>
        <section className="mt-12 rounded-3xl border border-[var(--line)] bg-white p-7">
          <h2 className="font-display text-3xl text-forest-deep">Research directions</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[["Intelligent control","Safe reinforcement learning for energy-efficient tropical controlled-environment agriculture."],["Digital agriculture","Weather stations, satellite observations and AI for climate-resilient farming."],["Resilient IoT","Secure distributed sensing and anomaly detection for agricultural cyber-physical systems."]].map(([title,description]) => <div key={title}><h3 className="font-semibold text-forest-deep">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{description}</p></div>)}
          </div>
          <a href="/collaboration/" className="mt-6 inline-block font-semibold text-teal-deep underline">Explore research collaboration</a>
        </section>
      </main>
      <Footer locale="en" />
    </div>
  );
}
