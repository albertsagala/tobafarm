import type { Metadata } from "next";
import { EnglishResearchArticle } from "@/components/EnglishResearchArticle";

const path = "/articles/ac-and-microclimate-uniformity/";
const idPath = "/id/artikel/ac-dan-keseragaman-mikroklimat/";
export const metadata: Metadata = {
  title: "The AC Cooled the Container Farm—but Not Uniformly",
  description: "Across 544 synchronized observations, AC operation was associated with a lower average temperature but a wider spatial temperature spread.",
  alternates: { canonical: path, languages: { en: path, id: idPath } },
  openGraph: { type: "article", url: path, title: "The AC Cooled the Container Farm—but Not Uniformly", description: "Across 544 synchronized observations, AC operation was associated with a lower average temperature but a wider spatial temperature spread.", publishedTime: "2026-10-14", authors: ["Albert Sagala"], images: [{ url: "/og.jpg", width: 1280, height: 720, alt: "The AC Cooled the Container Farm—but Not Uniformly" }] },
  twitter: { card: "summary_large_image", title: "The AC Cooled the Container Farm—but Not Uniformly", description: "Across 544 synchronized observations, AC operation was associated with a lower average temperature but a wider spatial temperature spread.", images: ["/og.jpg"] },
};

export default function Page() {
  return <EnglishResearchArticle
    path={path}
    idPath={idPath}
    eyebrow="Spatial microclimate · Cooling"
    headline="The AC Cooled the Container Farm—but Not Uniformly"
    dek="Data from 27 sensors exposed a trade-off that a single average can hide: when the AC was on, mean temperature fell by 0.58°C and VPD improved, but the sensor-to-sensor temperature range widened from 2.78°C to 5.03°C."
    metrics={[["Mean temperature","−0.58°C","Lower during AC-ON observations."],["Spatial range","+2.25°C","Wider during AC-ON observations."],["Synchronized frames","544","406 AC-OFF and 138 AC-ON."]]}
    sections={[
      { title: "A good average can conceal a poor crop environment", paragraphs: [
        "Climate control is often evaluated with one average temperature. That is convenient, but it can hide simultaneous overcooling and overheating at different racks or positions.",
        "In this facility, spatial standard deviation rose from 0.71°C to 1.25°C and the sensor range increased from 2.78°C to 5.03°C when the AC was on."
      ]},
      { title: "How the comparison was built", paragraphs: [
        "The observation covered 18–30 June 2026 in the 10-ft indoor farm. Temperature and humidity were recorded across 27 indoor nodes and aligned with AC status without fabricating intermediate values.",
        "The resulting dataset contained 544 synchronized timestamps: 406 with the AC off and 138 with the AC on."
      ]},
      { title: "Lower temperature did not mean higher spatial compliance", paragraphs: [
        "The mean fell from 23.43°C to 22.85°C, but per-node temperature compliance decreased from 51.6% to 46.6%. Frames in which all nodes were simultaneously within 20–24°C fell from 20.9% to 1.4%.",
        "Mann–Whitney comparisons indicated statistically significant differences in mean temperature, spatial standard deviation, temperature range, and compliance."
      ]},
      { title: "A benefit remained: humidity and VPD improved", paragraphs: [
        "Average relative humidity decreased from 83.97% to 65.98%, and air VPD rose from 0.463 to 0.946 kPa. Per-node VPD compliance increased from 21.1% to 57.5%.",
        "The correct conclusion is therefore not that cooling was harmful. Cooling and dehumidification helped VPD, but the benefit came with a more uneven thermal field."
      ]},
      { title: "Engineering response", paragraphs: [
        "Control should not depend on a single sensor. Air distribution must be treated as a design variable, and dashboards should expose range, standard deviation, per-node compliance, and simultaneous compliance alongside the mean."
      ]},
      { title: "Conclusion", paragraphs: [
        "An average of 22.85°C looked acceptable, yet a 5.03°C spatial range and only 1.4% simultaneous compliance showed that plants did not experience the same environment. The next step is better circulation and spatially aware control, not simply more cooling power."
      ]},
    ]}
    summary={[["Period","18–30 June 2026"],["Network","27 indoor + 1 outdoor node"],["Cooling","1-PK AC"],["Observations","544 synchronized frames"],["Temperature band","20–24°C"],["Design","Operational diagnostic study"]]}
  />;
}
