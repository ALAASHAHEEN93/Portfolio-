import type {
  EducationItem,
  ExperienceItem,
  LanguageItem,
  Project,
} from "../data/content";

type ProjectCopy = Pick<
  Project,
  | "description"
  | "role"
  | "problem"
  | "solution"
  | "outcome"
  | "owned"
  | "typography"
  | "highlights"
  | "tags"
  | "approach"
>;

export const personalInfoDe = {
  title: "UI/UX Designerin",
  location: "Köln, Deutschland",
  about:
    "Ich gestalte klare Produkterlebnisse und baue die Interfaces, die sie lebendig machen – von Research und Flows bis zum polierten UI.",
};

export const experienceDe: ExperienceItem[] = [
  {
    period: "Jan 2026 - Jun 2026",
    title: "Freiwillige UX/UI Designerin & Front-End Entwicklerin",
    company: "Ferment-Freude",
    highlights: [
      "Mitwirkung am Rebranding der Unternehmenswebsite für stärkere visuelle Identität und UX.",
      "Moderne, nutzerzentrierte UI-Layouts und responsive Komponenten in Figma gestaltet.",
      "Wireframes, User Flows und interaktive Prototypen erstellt.",
      "UI-Designs in funktionales Front-end mit React umgesetzt.",
      "Responsiveness und Konsistenz über Geräte hinweg sichergestellt.",
      "Usability, Accessibility und visuelle Konsistenz verbessert.",
    ],
  },
  {
    period: "2024 - 2025",
    title: "Web Design Weiterbildung",
    company: "Beam Institute of Technology",
    highlights: [
      "Praxisnahe Arbeit mit Figma für UI/UX Design und Prototyping.",
      "Responsive Websites mit HTML, CSS und JavaScript entwickelt.",
      "Moderne Front-end Prinzipien gelernt (Flexbox, Grid, Mobile First).",
      "Interaktive Websites mit Webflow erstellt.",
      "An realen Projekten und Design Systemen gearbeitet.",
    ],
  },
  {
    period: "2016 - 2020",
    title: "Freelance Webentwicklerin",
    company: "Selbstständig",
    highlights: [
      "Webanwendungen mit TypeScript, .NET, C#, JavaScript und Bootstrap entwickelt und betreut.",
      "Kunden- und Eigenprojekte von Front-end bis Basis-Backend umgesetzt.",
      "Fokus auf klare, responsive UIs und bessere User Experience.",
      "Mitgestaltung und Umsetzung von Front-end Features.",
    ],
  },
];

export const educationDe: EducationItem[] = [
  {
    period: "2024 - 2025",
    title: "Web Design Weiterbildung",
    institution: "Beam Institute of Technology",
  },
  {
    period: "2011 - 2016",
    title: "Computer System Engineer",
    institution: "Al-Azhar University",
  },
];

export const languagesDe: LanguageItem[] = [
  { name: "Arabisch", level: "Muttersprache" },
  { name: "Englisch", level: "Fließend" },
  { name: "Deutsch", level: "Mittelstufe" },
];

export const skillsDe = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Figma",
  "Design Systems",
  "User Flows",
  "Webflow",
];

export const projectsDe: Record<string, ProjectCopy> = {
  "coffee-lab": {
    tags: ["Webdesign", "E-Commerce", "Branding"],
    description: "Premium-Website für eine Kaffeemarke: Rösten, Blends und Shop.",
    role: "UI/UX Designerin, Front-End Entwicklerin",
    problem:
      "Spezialitäten-Kaffeemarken wirken online oft generisch und unübersichtlich – Handwerk und Qualität kommen nicht klar rüber.",
    solution:
      "Dunkles, elegantes Web-Erlebnis mit Produktdiscovery, Geschmacks-Tools, Membership und klarer Story zu Herkunft und Röstung.",
    outcome: "Premium-Storefront-Konzept mit klarer Produktdiscovery und Markenstory.",
    owned: "UI-Design und Front-end-Umsetzung der Markenwebsite von Anfang bis Ende.",
    typography: "Serif Display + klare Sans-Serif",
    highlights: [
      "Premium-Produktkatalog und Classified Vault Collection",
      "Interaktive Geschmacks- und Blend-Tools",
      "Membership, Tasting Guide und Kontaktflows",
    ],
  },
  fermentfreude: {
    tags: ["Webdesign", "UI/UX", "React"],
    description: "Rebranding und React-Website für eine Fermentationsmarke.",
    role: "Freiwillige UX/UI Designerin & Front-End Entwicklerin",
    problem:
      "Die Marke brauchte eine stärkere visuelle Identität und eine intuitivere Website für Workshops, Produkte und Expertise.",
    solution:
      "Vollständiges Rebranding mit modernen UI-Layouts, responsiven Komponenten, Wireframes, Prototypen und React-Front-end für bessere Usability und Konsistenz.",
    outcome: "Live-Website mit klarerer Struktur und stärkerer Markenpräsenz.",
    owned: "UI-Layouts, responsive Komponenten und React-Front-end-Umsetzung.",
    typography: "Eigene Markentypografie",
    highlights: [
      "Rebranding für bessere visuelle Identität und UX",
      "Responsive UI-Komponenten in Figma",
      "Designs in funktionales React-Front-end übersetzt",
    ],
  },
  "case-vue": {
    tags: ["Mobile App", "E-Commerce", "AR"],
    description: "Möbel-Shopping-App mit Browse und AR-Vorschau.",
    role: "UX/UI Designerin, UX Researcher",
    problem:
      "Möbel online auszuwählen ist schwer: schwache Navigation, wenig Visualisierung und Reibung beim Vergleichen.",
    solution:
      "Mobile App zum Stöbern, Filtern, Vergleichen und Visualisieren von Möbeln zu Hause per Augmented Reality.",
    outcome: "Sicherere Kaufentscheidungen durch Vergleich und AR-Preview.",
    owned: "UX Research, Produktflows und AR-Shopping-UI.",
    typography: "Poppins",
    highlights: [
      "Breiter Möbelkatalog mit smartem Filtering",
      "Produktvergleich und detaillierte Previews",
      "AR-Visualisierung für die eigene Wohnung",
    ],
  },
  abaya: {
    tags: ["Mobile App", "E-Commerce", "UI/UX"],
    description: "Ruhige Mobile-Shopping-App für Abaya und Modest Fashion.",
    role: "UX/UI Designerin, UX Researcher",
    problem:
      "Modest-Fashion-Shops wirken oft überladen: schwaches Filtering, schwache Produktpräsentation und unklare Kaufpfade.",
    solution:
      "Klarer Mobile-App-Store mit feinen Galerien, intuitiven Kategorien und einem einfachen Weg von Discovery bis Kauf.",
    outcome: "End-to-end Mobile-Commerce-Flows von Browse bis Checkout.",
    owned: "UX Research, Flows und vollständiges Mobile-UI-Design.",
    typography: "Moderne Sans-Serif",
    highlights: [
      "Welcome-Screens und Onboarding",
      "Home-, Kategorie- und Produktdetailseiten",
      "Warenkorb, Checkout, Login und Kontakt",
    ],
  },
  calltrack: {
    tags: ["Mobile App", "KI", "UI/UX"],
    description: "KI-Kalorien-App, die Ernährung aus Essensfotos erkennt.",
    role: "UX/UI Designerin, UX Researcher",
    problem:
      "Kalorien und Nährstoffe manuell zu tracken ist aufwendig – viele Apps verlangen Dauer-Eingabe und sind schwer durchzuhalten.",
    solution:
      "KI-Bilderkennung mit personalisierter Ernährung: Foto hochladen, Makros schätzen und Pläne/Rezepte nach Zielen erhalten.",
    outcome: "Schnelleres Meal-Logging mit KI-Fotoanalyse und persönlichen Plänen.",
    owned: "UX Research, Informationsarchitektur und UI Design System.",
    typography: "Montserrat",
    highlights: [
      "KI-Essensfotoanalyse für Kalorien und Makros",
      "Personalisierte Meal Plans und Rezepte",
      "Tägliche Insights, Reminder und Fortschritt",
    ],
  },
  littlechapter: {
    tags: ["Mobile App", "Kinder", "Storytelling"],
    description: "Ruhige Storytelling-App für Eltern und Kinder gemeinsam.",
    role: "UX/UI Designerin, UX Researcher",
    problem:
      "Regelmäßige Storytime scheitert oft an Zeitmangel, unpassenden Geschichten und überreizenden Kids-Apps.",
    solution:
      "Achtsame Storytelling-App mit Audio-Visual Stories, Sammlungen, Bedtime-Modus, Parent Dashboard und Offline-Zugriff.",
    outcome: "Sanftes Story-Erlebnis mit Bedtime-Modus und Elternkontrolle.",
    owned: "UX Research, Storytelling-Flows und ruhiges Kids-UI.",
    typography: "Baloo",
    highlights: [
      "Interaktive Audio-Visual Stories mit ruhiger Narration",
      "Bedtime-Modus mit sanften Animationen und Sounds",
      "Parent Dashboard und Offline-Story-Zugriff",
    ],
  },
  grove: {
    tags: ["Mobile App", "KI", "Design System"],
    description: "Pflanzen-Shop und Pflege-App mit KI-Gesundheitschecks.",
    role: "UX/UI Designerin, UX Researcher",
    problem:
      "Pflanzenpflege, späte Problemerkennung und unsichere Online-Käufe – die meisten Apps können nur Shop oder Care.",
    solution:
      "Integriertes Erlebnis: verlässlicher Shop plus smarter Pflege-Assistent. Foto machen, Schädlinge/Krankheiten erkennen und Tipps erhalten.",
    outcome: "Eine App für Pflanzenkauf und KI-gestützte Pflege.",
    owned: "UX Research, Design System und AI Care + Shop UI.",
    typography: "Lunasima",
    highlights: [
      "KI-Bilderkennung für Pflanzengesundheit",
      "Personalisierte Pflegehinweise",
      "Integrierter Shop und Care-Assistent",
    ],
  },
};
