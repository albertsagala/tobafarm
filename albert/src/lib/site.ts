export const person = {
  name: "Albert Sagala",
  title: "Associate Professor of Electrical Engineering",
  institution: "Institut Teknologi Del",
  country: "Indonesia",
  doctoralLine: "PhD Candidate, Engineering Physics, Institut Teknologi Bandung",
  url: "https://albert.tobasmartfarming.com",
  researchPlatformName: "Toba Smart Farming",
  researchPlatformUrl: "https://www.tobasmartfarming.com",
  email: "albert@del.ac.id",
  description:
    "Albert Sagala is Associate Professor of Electrical Engineering at Institut Teknologi Del, Indonesia, and a PhD Candidate in Engineering Physics at Institut Teknologi Bandung.",
} as const;

export const researchAreas = [
  {
    title: "Intelligent Control and Cyber-Physical Systems",
    body: "Control of physical processes that are observed, decided, and actuated through computation, with the loop treated as an engineering system rather than a single algorithm.",
  },
  {
    title: "Artificial Intelligence for Precision Agriculture",
    body: "Learning methods applied to cultivation decisions inside instrumented growing environments, including sequential climate policy studied under agronomic constraints.",
  },
  {
    title: "Internet of Things and Wireless Sensor Networks",
    body: "Distributed sensing and low-power wireless networks for environmental and operational measurements that must remain tied to where they were taken.",
  },
  {
    title: "Instrumentation, Automation, and Edge Computing",
    body: "Sensors, actuators, and on-site computation used to measure a process and close the loop without treating the cloud as the only place a decision can be made.",
  },
] as const;

export const profiles = [
  {
    label: "Institut Teknologi Del",
    href: "https://www.del.ac.id/?page_id=7078",
    note: "Institutional staff page",
  },
  {
    label: "SINTA",
    href: "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587",
    note: "National author profile",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/albert-sagala-47b963235",
    note: "Professional profile",
  },
] as const;

export const sinta = {
  profile: "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587",
  researches:
    "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587/?view=researches",
  services:
    "https://sinta.kemdiktisaintek.go.id/authors/profile/6034587/?view=services",
} as const;

export const nav = [
  { href: "#biography", label: "Biography" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#service", label: "Service" },
  { href: "#profiles", label: "Profiles" },
  { href: "#platform", label: "Research platform" },
] as const;
