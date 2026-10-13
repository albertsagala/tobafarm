import type { Source, SupervisionCandidate } from "./types";

/**
 * Review list only. Nothing here is imported by a page.
 *
 * Co-authorship with Albert Sagala does not prove supervision: a co-author may
 * be a student, a colleague, or a research-team member. Move a person to
 * `students.ts` only after a source (supervision list, approval page, Del
 * repository, or an official page) names Albert Sagala as supervisor.
 */

const crossref = (doi: string, label: string): Source => ({
  label: `${label} (Crossref author list)`,
  url: `https://doi.org/${doi}`,
  publishedOn: null,
  checkedOn: "2026-10-13",
});

const fireDetector = crossref(
  "10.1109/icosnikom48755.2019.9111537",
  "Implementation of Wireless Sensor Network as Fire Detector using Arduino Nano, ICoSNIKOM 2019",
);
const dripIrrigation = crossref(
  "10.34012/jurnalsisteminformasidanilmukomputer.v5i2.2462",
  "Smart farming: drip irrigation controlled using LR-WPAN with hybrid power, JUSIKOM PRIMA 2022",
);
const multiHopLora = crossref(
  "10.2174/2210327913666230217150456",
  "Experiment on multi-hop LoRa for tracking application, 2023",
);
const loraWanEndNode = crossref(
  "10.1088/1755-1315/1083/1/012061",
  "Implementation LoRaWAN end node tracking, IOP EES 2022",
);
const vehicleTracking = crossref(
  "10.1109/ice3is59323.2023.10335253",
  "Exploring vehicle tracking performance with LoRa technology, ICE3IS 2023",
);
const multiGateway = crossref(
  "10.21303/2461-4262.2024.003138",
  "Implementing interoperable multi-gateway LoRaWAN, EUREKA 2024",
);
const wsnUniformity = crossref(
  "10.54074/jicsa.v2i1.32",
  "Energy-aware spatial uniformity assessment in a container farm, JICSA 2026",
);
const dqnClimate = crossref(
  "10.54074/jicsa.v2i1.33",
  "Experimental comparison of deployed DQN and rule-based climate controllers, JICSA 2026",
);
const edgePipeline = crossref(
  "10.54074/jicsa.v2i1.34",
  "Performance evaluation of a self-hosted edge-IoT data pipeline, JICSA 2026",
);

const coAuthor =
  "Co-author with Albert Sagala; no source found that names him as supervisor.";
const confirm =
  "Confirm with the supervision list, approval page, or Del repository; record title and work type.";

export const candidates: SupervisionCandidate[] = [
  ...["Andi Ray Hutauruk", "Jomen Pardede", "Pangeran Aritonang", "Rosari Fernanda Saragih"].map(
    (name) => ({
      name,
      reason: `${coAuthor} Crossref lists affiliation Institut Teknologi Del.${
        name === "Andi Ray Hutauruk"
          ? " Now listed as a lecturer on the IT Del S1 Teknik Elektro page, so he may have been a student or a colleague in 2019."
          : ""
      }`,
      sources: [fireDetector],
      nextStep: confirm,
    }),
  ),
  ...["Janasde Sitompul", "Joel Hutauruk", "Riado Sitorus"].map((name) => ({
    name,
    reason: coAuthor,
    sources: [dripIrrigation],
    nextStep: confirm,
  })),
  ...["Gomgom Silalahi", "Estika V. Ginting", "Andreas J.D. Simorangkir"].map(
    (name) => ({
      name,
      reason: coAuthor,
      sources: [multiHopLora],
      nextStep: confirm,
    }),
  ),
  {
    name: "Ramot Lubis",
    reason: `${coAuthor} Appears on several LoRa tracking papers (2022–2024); may be a research-team member rather than a student.`,
    sources: [multiHopLora, loraWanEndNode, multiGateway],
    nextStep: confirm,
  },
  ...["Rondy Sinaga", "Suprianto Hutapea", "Herwin Sitanggang"].map((name) => ({
    name,
    reason: `${coAuthor} Appears on the 2022–2024 LoRa tracking papers.`,
    sources: [loraWanEndNode, vehicleTracking, multiGateway],
    nextStep: confirm,
  })),
  ...["Samuel Abednego Sormin", "Raj David Francisco Damanik"].map((name) => ({
    name,
    reason: coAuthor,
    sources: [wsnUniformity, dqnClimate],
    nextStep: confirm,
  })),
  {
    name: "Josh Delon",
    reason: coAuthor,
    sources: [edgePipeline],
    nextStep: confirm,
  },
  {
    name: "Samuel P.",
    reason: `${coAuthor} Crossref gives only an abbreviated name.`,
    sources: [edgePipeline],
    nextStep: `Obtain the full name first. ${confirm}`,
  },
];
