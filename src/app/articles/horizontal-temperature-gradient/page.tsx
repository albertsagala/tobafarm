import type { Metadata } from "next";
import { EnglishResearchArticle } from "@/components/EnglishResearchArticle";

const path = "/articles/horizontal-temperature-gradient/";
const idPath = "/id/artikel/gradien-suhu-horizontal-rak/";
export const metadata: Metadata = {
  title: "Why Do Horizontal Temperature Differences Matter More Than Rack Height?",
  description: "During one AC recovery event, the horizontal temperature gap reached 3.33°C, about 4.6 times the vertical layer difference.",
  alternates: { canonical: path, languages: { en: path, id: idPath } },
  openGraph: { type: "article", url: path, title: "Why Do Horizontal Temperature Differences Matter More Than Rack Height?", description: "During one AC recovery event, the horizontal temperature gap reached 3.33°C, about 4.6 times the vertical layer difference.", publishedTime: "2026-10-14", authors: ["Albert Sagala"], images: [{ url: "/og.jpg", width: 1280, height: 720, alt: "Why Do Horizontal Temperature Differences Matter More Than Rack Height?" }] },
  twitter: { card: "summary_large_image", title: "Why Do Horizontal Temperature Differences Matter More Than Rack Height?", description: "During one AC recovery event, the horizontal temperature gap reached 3.33°C, about 4.6 times the vertical layer difference.", images: ["/og.jpg"] },
};

export default function Page() {
  return <EnglishResearchArticle
    path={path}
    idPath={idPath}
    eyebrow="Spatial microclimate · Air distribution"
    headline="Why Do Horizontal Temperature Differences Matter More Than Rack Height?"
    dek="At the end of one AC recovery event, the left–middle horizontal gap reached 3.33°C. The top–bottom difference was only 0.72°C. In this configuration, the dominant problem was not simply that warm air rises—it was whether cool air reached the full length of the crop zone."
    metrics={[
      ["Horizontal gap","3.33°C","Left versus middle zone at the endpoint."],
      ["Vertical gap","0.72°C","Top versus bottom layer at the same time."],
      ["Ratio","4.6×","The horizontal gradient was larger in this event."],
    ]}
    sections={[
      { title: "A reasonable assumption that was not sufficient", paragraphs: [
        "In multi-level cultivation, it is natural to expect the upper rack to be the main thermal problem. Buoyancy did matter: the top-layer mean ended at 24.46°C, compared with 23.74°C at the bottom. Yet the vertical separation was modest relative to the horizontal pattern.",
        "The left zone ended at 25.91°C, the middle at 22.58°C, and the right at 23.38°C. The left–middle difference was therefore far more informative for locating the residual hotspot."
      ]},
      { title: "The event and the measurements", paragraphs: [
        "The analysis used an actual controller-outage and recovery event on 12 July 2026. Verified AC power began at 14:35, and the primary recovery window ended at 16:46, when the spatial mean reached its minimum of 24.03°C after approximately 131 minutes.",
        "The nominal network contained 27 indoor temperature–humidity nodes. The exported event dataset contained 24 active nodes; unavailable nodes were not reconstructed."
      ]},
      { title: "Cooling strength differed by horizontal zone", paragraphs: [
        "From the last pre-start frame to 16:46, the left-zone mean fell by about 8.79°C, the middle by 11.42°C, and the right by 10.52°C. The difference in cooling response reached 2.63°C.",
        "The most plausible engineering explanation involves supply and return paths, rack obstruction, crop canopy, luminaires, and AC placement. Temperature data alone, however, cannot prove the airflow mechanism."
      ]},
      { title: "Why an average can end recovery too early", paragraphs: [
        "The spatial median reached 24°C after 123 minutes and the minimum spatial mean was 24.03°C after 131 minutes. Nevertheless, only 13 of 24 active nodes—54.2%—were inside the 20–24°C band.",
        "The coldest node reached 20.1°C while the hottest remained at 27.7°C. Extending AC operation without fixing distribution can overcool favorable zones without eliminating the hotspot."
      ]},
      { title: "Design implications", paragraphs: [
        "Sensor placement should cover the direction of airflow, not only rack height. Dashboards should report horizontal and vertical gradients separately. Before increasing AC capacity, operators should test circulation fans, baffles, ducting, outlet direction, and return-air paths."
      ]},
      { title: "Conclusion", paragraphs: [
        "The upper layer remained slightly warmer, but the main hotspot was horizontal. For this event, a 3.33°C horizontal gap versus a 0.72°C vertical gap shifts the design priority toward distributed sensing and air delivery along the container."
      ]},
    ]}
    summary={[["Date","12 July 2026"],["Recovery window","14:35–16:46"],["Active sensors","24 indoor nodes"],["Temperature target","20–24°C"],["Cooling","1-PK AC"],["Location","Pintu Bosi, Toba Regency"]]}
  />;
}
