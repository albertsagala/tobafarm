import type { Metadata } from "next";
import { EnglishResearchArticle } from "@/components/EnglishResearchArticle";

const path = "/articles/vpd-container-farm/";
const idPath = "/id/artikel/vpd-container-farm/";
export const metadata: Metadata = {
  title: "VPD in a Container Farm: Good Temperature Is Not Enough",
  description: "A 48.1-hour observation found only 48.16% air-VPD compliance, revealing a nighttime humidity problem that mean temperature did not show.",
  alternates: { canonical: path, languages: { en: path, id: idPath } },
  openGraph: { type: "article", url: path, title: "VPD in a Container Farm: Good Temperature Is Not Enough", description: "A 48.1-hour observation found only 48.16% air-VPD compliance, revealing a nighttime humidity problem that mean temperature did not show.", publishedTime: "2026-10-14", authors: ["Albert Sagala"], images: [{ url: "/og.jpg", width: 1280, height: 720, alt: "VPD in a Container Farm: Good Temperature Is Not Enough" }] },
  twitter: { card: "summary_large_image", title: "VPD in a Container Farm: Good Temperature Is Not Enough", description: "A 48.1-hour observation found only 48.16% air-VPD compliance, revealing a nighttime humidity problem that mean temperature did not show.", images: ["/og.jpg"] },
};

export default function Page() {
  return <EnglishResearchArticle
    path={path}
    idPath={idPath}
    eyebrow="VPD · Facility findings"
    headline="VPD in a Container Farm: Good Temperature Is Not Enough"
    dek="Across 48.1 hours, only 48.16% of observations were inside the operational air-VPD band of 0.6–1.2 kPa. Temperature alone looked manageable; nighttime humidity did not."
    metrics={[["VPD compliance","48.16%","Within the 0.6–1.2 kPa evaluation band."],["Mean air VPD","0.593 kPa","Near the lower edge of the band."],["Night compliance","0%","Humidity kept VPD below target at night."]]}
    sections={[
      { title: "Why temperature alone was misleading", paragraphs: [
        "Air temperature averaged 22.36 ± 2.24°C, which can appear acceptable for leafy-green operation. Relative humidity, however, averaged 78.18 ± 11.44%, pulling VPD downward for long periods.",
        "VPD combines temperature and humidity into a measure of the atmospheric drying demand experienced by leaves. A temperature-only controller cannot see this interaction."
      ]},
      { title: "Observation window", paragraphs: [
        "The dataset covered 22–24 June 2026, totaling approximately 48.1 hours. Air VPD ranged from 0.166 to 1.411 kPa, with a mean of 0.593 kPa.",
        "The 0.6–1.2 kPa band was used as an operational evaluation range, not as a universal physiological optimum for every cultivar and growth stage."
      ]},
      { title: "Nighttime humidity was the dominant limitation", paragraphs: [
        "During the dark period, VPD compliance was 0%. Cooling without coordinated dehumidification can reduce temperature while leaving relative humidity too high.",
        "This matters because a controller may satisfy a thermal setpoint and still produce a weak vapor-pressure gradient for transpiration."
      ]},
      { title: "Control implications", paragraphs: [
        "Temperature and humidity should be controlled jointly. Lighting state must be included because it changes heat load and the appropriate interpretation of VPD. Evaluation should also distinguish day and night rather than reporting only one aggregate percentage."
      ]},
      { title: "Energy must remain visible", paragraphs: [
        "Cooling energy during the observation was approximately 9.73 kWh. Any improvement in VPD compliance should therefore be evaluated alongside energy use, actuator cycling, and spatial uniformity."
      ]},
      { title: "Conclusion", paragraphs: [
        "A thermally acceptable container is not automatically a suitable crop environment. In this observation, humidity—especially at night—was the limiting variable. The next control design must coordinate temperature, humidity, lighting state, and energy."
      ]},
    ]}
    summary={[["Period","22–24 June 2026"],["Duration","48.1 hours"],["Mean temperature","22.36 ± 2.24°C"],["Mean RH","78.18 ± 11.44%"],["VPD range","0.166–1.411 kPa"],["Cooling energy","9.73 kWh"]]}
  />;
}
