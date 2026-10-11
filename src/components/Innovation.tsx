import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SpatialField } from "@/components/SpatialField";
import { placeholders } from "@/lib/site";

const themes = [
  {
    index: "01",
    title: "Spatial microclimate mapping",
    body: "Indoor farms are rarely uniform. Vertical racks, airflow paths, and lighting geometry create gradients. This line of work concerns dense sensing and reconstruction of those fields so that control is not based on a single thermostat reading.",
  },
  {
    index: "02",
    title: "Reinforcement learning for climate policy",
    body: "Climate control is sequential: today’s action changes tomorrow’s state, energy use, and crop environment. Reinforcement learning is treated as a candidate method for policies that must respect safety constraints, not as a finished controller.",
  },
  {
    index: "03",
    title: "Energy-aware climate control",
    body: "Environmental quality and energy use are coupled. The research interest is in control strategies that keep cultivation conditions within agronomic bounds while making energy an explicit objective rather than an afterthought.",
  },
];

export function Innovation() {
  return (
    <section id="innovation" className="scroll-mt-24 bg-navy py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Research & innovation"
            title="Questions that organize the work"
            description="These are active research themes. They describe intended methods and open problems. They are not reports of completed trials or published findings."
          />
        </Reveal>
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {themes.map((theme, index) => (
              <Reveal key={theme.title} delayMs={index * 80}>
                <article className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-[120px_1fr] md:p-10">
                  <p className="font-display text-4xl text-teal-bright">
                    {theme.index}
                  </p>
                  <div>
                    <h3 className="font-display text-3xl">{theme.title}</h3>
                    <p className="mt-4 max-w-3xl leading-relaxed text-cream/70">
                      {theme.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={120}>
            <SpatialField />
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-10 text-center text-sm text-cream/45">
            {placeholders.publications}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
