import type { Lang } from "./types";

type UiDict = {
  navWork: string;
  navAbout: string;
  navCv: string;
  navContact: string;
  letsTalk: string;
  openMenu: string;
  closeMenu: string;
  available: string;
  heroLine1: string;
  heroLine2: string;
  viewWork: string;
  photoCaption: string;
  workBadge: string;
  workTitle: string;
  workSub: string;
  featured: string;
  viewCase: string;
  filterAll: string;
  filterWeb: string;
  filterMobile: string;
  filterBranding: string;
  aboutBadge: string;
  aboutTitle: string;
  aboutTitleEm: string;
  aboutBio: string;
  location: string;
  focus: string;
  skills: string;
  cvBadge: string;
  cvTitle: string;
  cvSub: string;
  downloadCv: string;
  experience: string;
  education: string;
  languages: string;
  contactBadge: string;
  contactTitle: string;
  contactTitleEm: string;
  contactSub: string;
  downloadCvLabel: string;
  pdfResume: string;
  emailMe: string;
  backToWork: string;
  role: string;
  owned: string;
  tools: string;
  outcome: string;
  approach: string;
  typography: string;
  discover: string;
  discoverDetail: string;
  design: string;
  designDetail: string;
  build: string;
  buildDetail: string;
  keyFeatures: string;
  problem: string;
  solution: string;
  designGallery: string;
  viewBehance: string;
  visitLive: string;
  fullStoryTitle: string;
  fullStorySub: string;
  openBehance: string;
  openFigma: string;
  openPrototype: string;
  allProjects: string;
  nextProject: string;
  closeImage: string;
  backToTop: string;
  prevProject: string;
  nextProjectAria: string;
  footerAvailable: string;
  principles: string;
};

export const ui: Record<Lang, UiDict> = {
  en: {
    navWork: "Work",
    navAbout: "About",
    navCv: "CV",
    navContact: "Contact",
    letsTalk: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    available: "Available for work",
    heroLine1: "Interfaces with",
    heroLine2: "clarity & craft",
    viewWork: "View selected work",
    photoCaption: "UI/UX · Front-end",
    workBadge: "Work",
    workTitle: "Selected projects",
    workSub: "Product design and interfaces across apps, brands, and the web.",
    featured: "Featured",
    viewCase: "View case study",
    filterAll: "All",
    filterWeb: "Web",
    filterMobile: "Mobile",
    filterBranding: "Branding",
    aboutBadge: "About",
    aboutTitle: "Designing with empathy,",
    aboutTitleEm: "building with purpose",
    aboutBio:
      "Based in Cologne, I work across web and mobile products. I care about calm interfaces, clear flows, and the details that make a product feel simple to use.",
    location: "Location",
    focus: "Focus",
    skills: "Skills",
    cvBadge: "CV",
    cvTitle: "Experience & education",
    cvSub: "A journey through design, development, and continuous learning.",
    downloadCv: "Download CV",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    contactBadge: "Contact",
    contactTitle: "Let's create",
    contactTitleEm: "something great",
    contactSub: "Open to new opportunities in UI/UX design and front-end development.",
    downloadCvLabel: "Download CV",
    pdfResume: "PDF resume",
    emailMe: "Email me",
    backToWork: "Work",
    role: "Role",
    owned: "What I owned",
    tools: "Tools",
    outcome: "Outcome",
    approach: "Approach",
    typography: "Typography",
    discover: "Discover",
    discoverDetail: "Research, flows, and problem framing",
    design: "Design",
    designDetail: "Wireframes, UI systems, and prototypes",
    build: "Build",
    buildDetail: "Responsive front-end and polish",
    keyFeatures: "Key features",
    problem: "Problem",
    solution: "Solution",
    designGallery: "Design",
    viewBehance: "View on Behance",
    visitLive: "Visit live site",
    fullStoryTitle: "Want the full visual story?",
    fullStorySub: "See the complete case study, screens, and process on Behance.",
    openBehance: "Open Behance",
    openFigma: "Open Figma",
    openPrototype: "Open prototype",
    allProjects: "All projects",
    nextProject: "Next project",
    closeImage: "Close image",
    backToTop: "Back to top",
    prevProject: "Previous project",
    nextProjectAria: "Next project",
    footerAvailable: "Available for new projects",
    principles: "Principles",
  },
  de: {
    navWork: "Arbeit",
    navAbout: "Über mich",
    navCv: "Lebenslauf",
    navContact: "Kontakt",
    letsTalk: "Lass uns reden",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    available: "Verfügbar für Projekte",
    heroLine1: "Interfaces mit",
    heroLine2: "Klarheit & Handwerk",
    viewWork: "Ausgewählte Arbeiten",
    photoCaption: "UI/UX · Front-end",
    workBadge: "Arbeit",
    workTitle: "Ausgewählte Projekte",
    workSub: "Produktdesign und Interfaces für Apps, Marken und das Web.",
    featured: "Highlight",
    viewCase: "Case Study ansehen",
    filterAll: "Alle",
    filterWeb: "Web",
    filterMobile: "Mobile",
    filterBranding: "Branding",
    aboutBadge: "Über mich",
    aboutTitle: "Mit Empathie gestalten,",
    aboutTitleEm: "mit Absicht bauen",
    aboutBio:
      "Aus Köln arbeite ich an Web- und Mobile-Produkten. Mir liegen ruhige Interfaces, klare Abläufe und die Details am Herzen, die ein Produkt einfach nutzbar machen.",
    location: "Standort",
    focus: "Fokus",
    skills: "Skills",
    cvBadge: "Lebenslauf",
    cvTitle: "Erfahrung & Bildung",
    cvSub: "Ein Weg durch Design, Entwicklung und kontinuierliches Lernen.",
    downloadCv: "CV herunterladen",
    experience: "Erfahrung",
    education: "Bildung",
    languages: "Sprachen",
    contactBadge: "Kontakt",
    contactTitle: "Lass uns",
    contactTitleEm: "etwas Großes schaffen",
    contactSub: "Offen für neue Möglichkeiten in UI/UX Design und Front-end Entwicklung.",
    downloadCvLabel: "CV herunterladen",
    pdfResume: "PDF Lebenslauf",
    emailMe: "Schreib mir",
    backToWork: "Arbeit",
    role: "Rolle",
    owned: "Mein Beitrag",
    tools: "Tools",
    outcome: "Ergebnis",
    approach: "Ansatz",
    typography: "Typografie",
    discover: "Entdecken",
    discoverDetail: "Research, Flows und Problemverständnis",
    design: "Design",
    designDetail: "Wireframes, UI-Systeme und Prototypen",
    build: "Umsetzung",
    buildDetail: "Responsives Front-end und Feinschliff",
    keyFeatures: "Kernfunktionen",
    problem: "Problem",
    solution: "Lösung",
    designGallery: "Design",
    viewBehance: "Auf Behance ansehen",
    visitLive: "Live-Website",
    fullStoryTitle: "Die ganze visuelle Story?",
    fullStorySub: "Vollständige Case Study, Screens und Prozess auf Behance.",
    openBehance: "Behance öffnen",
    openFigma: "Figma öffnen",
    openPrototype: "Prototyp öffnen",
    allProjects: "Alle Projekte",
    nextProject: "Nächstes Projekt",
    closeImage: "Bild schließen",
    backToTop: "Nach oben",
    prevProject: "Vorheriges Projekt",
    nextProjectAria: "Nächstes Projekt",
    footerAvailable: "Offen für neue Projekte",
    principles: "Prinzipien",
  },
};

export type UiKey = keyof UiDict;
