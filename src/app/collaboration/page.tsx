import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, BrainCircuit, GraduationCap, Handshake, Radio, SearchCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { site } from "@/lib/site";

const path = "/collaboration/";

export const metadata: Metadata = {
  title: "Collaboration & Services",
  description: "Research collaboration, microclimate audits, IoT sensing, data analysis, AI-assisted climate control, and training for indoor farming.",
  alternates: { canonical: path, languages: { en: path, id: "/id/kolaborasi/" } },
  openGraph: { type: "website", url: path, title: "Collaboration & Services — Toba Smart Farming", description: "Connecting field data, experimental facilities, and engineering expertise for indoor farming.", images: [{ url: "/og.jpg", width: 1280, height: 720, alt: "Toba Smart Farming collaboration and services" }] },
};

const services = [
  [SearchCheck,"Microclimate audit","Evaluate temperature, humidity, VPD, hotspots, spatial compliance, and cooling response from multi-sensor data.",["Problem map","Performance metrics","Prioritized recommendations"]],
  [Radio,"Sensor & IoT architecture","Design sensor placement, data acquisition, MQTT, edge–cloud pipelines, dashboards, and device monitoring.",["System architecture","Sensor zoning","Data and dashboard flow"]],
  [BrainCircuit,"Climate control & AI","Assess rule-based, PID, and reinforcement-learning strategies with energy and spatial safety constraints.",["Control baseline","Evaluation strategy","Safe test protocol"]],
  [BarChart3,"Data analysis & validation","Clean and synchronize sensor, actuator, and energy data; test claims; and communicate uncertainty.",["Structured dataset","Reproducible analysis","Findings and limitations"]],
  [GraduationCap,"Training & capacity building","Practical training in agricultural IoT, Grafana, microclimate analysis, AI/ML, and control.",["Focused modules","Real case studies","Practice and assessment"]],
  [Handshake,"Pilot projects & joint research","Design experiments, prototypes, field validation, publications, and proof-of-concept projects.",["Defined scope","Measurable milestones","Documented results"]],
] as const;

export default function CollaborationPage() {
  const emailHref = `mailto:${site.email}?subject=Toba%20Smart%20Farming%20Collaboration`;
  const schema = {"@context":"https://schema.org","@type":"Service",name:"Indoor farming research collaboration and engineering services",provider:{"@type":"ResearchOrganization",name:site.name,url:site.url},areaServed:"Indonesia",url:`${site.url}${path}`};
  return (
    <div className="min-h-screen bg-cream-soft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
      <Header locale="en" enHref="/collaboration/" idHref="/id/kolaborasi/" />
      <main id="main"><div className="bg-forest-deep px-5 pb-5 pt-28 text-center text-cream"><Link href="/services/" className="underline">Explore fixed-scope IoT review & practical workshop →</Link></div>
        <section id="top" className="bg-navy pt-28 text-cream md:pt-36">
          <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
            <div className="flex justify-end"><LanguageSwitch locale="en" enHref="/collaboration/" idHref="/id/kolaborasi/" /></div>
            <p className="mt-10 text-xs uppercase tracking-[0.22em] text-teal-bright">Collaboration & services</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end">
              <div><h1 className="font-display max-w-4xl text-4xl leading-tight sm:text-5xl md:text-7xl">From field data to testable engineering decisions</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-cream/75">We work with industry, government, universities, and technology teams on microclimate, instrumentation, data, and control problems in indoor farming.</p></div>
              <aside className="rounded-3xl border border-teal/30 bg-white/5 p-6"><p className="text-sm leading-7 text-cream/75">Every engagement starts with the problem, available evidence, risk, and a measurable outcome. Scope, schedule, deliverables, and cost are defined only after an initial review.</p><a href={emailHref} className="mt-6 inline-flex rounded-full bg-teal-bright px-5 py-3 text-sm font-medium text-navy">Discuss a need</a></aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-deep">Areas of support</p>
            <h2 className="font-display mt-3 max-w-4xl text-4xl text-forest-deep md:text-5xl">Services grounded in real facilities and real data</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">We do not sell one technology as the answer to every problem. Recommendations must fit the facility, data quality, operating risk, and the partner’s implementation capacity.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(([Icon,title,description,outputs])=><article key={title} className="rounded-3xl border border-[var(--line)] bg-cream-soft p-7"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-teal-bright"><Icon className="h-5 w-5" aria-hidden /></span><h3 className="font-display mt-5 text-2xl text-forest-deep">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p><ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-5 text-sm text-forest-deep">{outputs.map(output=><li key={output}>• {output}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div><p className="text-xs uppercase tracking-[0.2em] text-teal-deep">Engagement models</p><h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Start with a scope that can be verified</h2><p className="mt-4 leading-7 text-muted">A small pilot with clear indicators is usually more valuable than a large project built on untested assumptions.</p></div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Focused consultation","For design review, diagnosis, or a data-informed second opinion."],
                  ["Dataset audit","For teams that already have sensor, actuator, energy, or dashboard records."],
                  ["Pilot project","For testing sensing, control, dashboards, or AI before wider deployment."],
                  ["Academic collaboration","For proposals, joint experiments, supervision, datasets, and publications."],
                ].map(([title,detail],i)=><article key={title} className="rounded-3xl border border-[var(--line)] bg-white p-6"><p className="text-xs text-teal-deep">0{i+1}</p><h3 className="font-display mt-3 text-2xl text-forest-deep">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{detail}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-forest-deep py-20 text-cream md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-bright">Working process</p><h2 className="font-display mt-3 max-w-3xl text-4xl md:text-5xl">Four steps before a recommendation is deployed</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01","Frame the need","Clarify the problem, users, facility, data, risks, and target."],
                ["02","Inspect the evidence","Test data quality and assumptions before choosing a method."],
                ["03","Define the plan","Agree on scope, indicators, deliverables, schedule, and ownership."],
                ["04","Test and evaluate","Compare results with a baseline and document limitations."],
              ].map(([n,t,d])=><li key={n} className="border-t border-white/20 pt-5"><p className="text-sm text-teal-bright">{n}</p><h3 className="font-display mt-3 text-2xl">{t}</h3><p className="mt-3 text-sm leading-7 text-cream/65">{d}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.8fr]">
            <div><p className="text-xs uppercase tracking-[0.2em] text-teal-deep">Evidence</p><h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Start with findings that can be examined</h2><div className="mt-8 grid gap-4">
              <Link href="/articles/horizontal-temperature-gradient/" className="rounded-2xl border border-[var(--line)] bg-cream-soft p-5 text-forest-deep">Horizontal temperature variation during AC recovery</Link>
              <Link href="/articles/ac-and-microclimate-uniformity/" className="rounded-2xl border border-[var(--line)] bg-cream-soft p-5 text-forest-deep">Cooling performance and spatial nonuniformity</Link>
              <Link href="/articles/vpd-container-farm/" className="rounded-2xl border border-[var(--line)] bg-cream-soft p-5 text-forest-deep">VPD compliance and nighttime humidity</Link>
            </div></div>
            <aside className="rounded-3xl border border-[var(--line)] bg-cream-soft p-7"><h2 className="font-display text-3xl text-forest-deep">Who is this for?</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-muted"><li>• Indoor-farm and greenhouse operators.</li><li>• Agri-tech companies validating prototypes or data.</li><li>• Government teams planning controlled-agriculture pilots.</li><li>• Universities and research groups seeking facilities or collaborators.</li><li>• Technical teams building IoT, dashboards, AI, or control capability.</li></ul></aside>
          </div>
        </section>

        <section className="bg-teal/10 py-20 md:py-24"><div className="mx-auto max-w-4xl px-5 text-center md:px-8"><p className="text-xs uppercase tracking-[0.2em] text-teal-deep">Initial discussion</p><h2 className="font-display mt-3 text-4xl text-forest-deep md:text-5xl">Describe the problem before selecting the technology</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-muted">Include the facility type, primary problem, available data, intended outcome, location, and timeline.</p><a href={emailHref} className="mt-8 inline-flex rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-white">Send a brief</a><p className="mt-4 text-sm text-muted">{site.email}</p></div></section>
      </main>
      <Footer locale="en" />
    </div>
  );
}
