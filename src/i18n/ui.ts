import type { Lang } from "./types";

type UiDict = {
  introLabel: string;
  introSkip: string;
  navHome: string;
  navWork: string;
  navAbout: string;
  navCv: string;
  navContact: string;
  letsTalk: string;
  openMenu: string;
  closeMenu: string;
  available: string;
  heroAvailableNote: string;
  heroTitleLead: string;
  heroTitleEm: string;
  heroTitleRest: string;
  heroIntro: string;
  heroViewProjects: string;
  heroContactMe: string;
  heroPanelPractice: string;
  heroPanelPracticeTitle: string;
  heroPanelPracticeDetail: string;
  heroPanelOpenTo: string;
  heroPanelOpenToTitle: string;
  heroPanelOpenToDetail: string;
  heroPanelCurrently: string;
  heroCaseStudies: string;
  heroPanelCurrentlyDetail: string;
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
  footerA11y: string;
  themeDark: string;
  themeLight: string;
  certificates: string;
  viewCertificate: string;
  viewOnLinkedIn: string;
  principles: string;
  faqBadge: string;
  faqTitle: string;
  faqSub: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  ctaTitle: string;
  ctaTitleEm: string;
  ctaSub: string;
};

export const ui: Record<Lang, UiDict> = {
  en: {
    navHome: "Home",
    navWork: "Work",
    navAbout: "About",
    navCv: "CV",
    navContact: "Contact",
    letsTalk: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    introLabel: "Opening portfolio",
    introSkip: "Skip",
    available: "Available for work",
    heroAvailableNote: "Available for work, Cologne or remote",
    heroTitleLead: "Designing",
    heroTitleEm: "calm, useful",
    heroTitleRest: "interfaces for products that ship.",
    heroIntro:
      "I'm Alaa, a Cologne-based UI/UX designer who codes. I work end-to-end on apps, brands, and web experiences, turning research and flows into polished UI teams can build.",
    heroViewProjects: "View projects",
    heroContactMe: "Contact me",
    heroPanelPractice: "Practice",
    heroPanelPracticeTitle: "UI/UX · Front-end · Branding",
    heroPanelPracticeDetail: "End-to-end, research to React.",
    heroPanelOpenTo: "Open to",
    heroPanelOpenToTitle: "UI/UX Designer",
    heroPanelOpenToDetail: "Freelance, contract, or product teams.",
    heroPanelCurrently: "Currently",
    heroCaseStudies: "case studies",
    heroPanelCurrentlyDetail: "Across apps, brands, and web.",
    heroLine1: "Designing product interfaces",
    heroLine2: "with clarity & craft",
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
    footerA11y:
      "This site supports keyboard navigation, sufficient contrast, and reduced motion preferences.",
    themeDark: "Switch to dark mode",
    themeLight: "Switch to light mode",
    certificates: "Certificates",
    viewCertificate: "View PDF",
    viewOnLinkedIn: "View on LinkedIn",
    principles: "Principles",
    faqBadge: "FAQ",
    faqTitle: "Common questions",
    faqSub: "Quick answers before we connect.",
    faq1Q: "Are you available for new projects?",
    faq1A:
      "Yes. I am open to UI/UX design and front-end work: freelance, contract, or full-time roles in product teams.",
    faq2Q: "Do you work remotely?",
    faq2A:
      "I am based in Cologne and work remotely or hybrid. I collaborate with teams across Germany and internationally.",
    faq3Q: "What do you design vs. build?",
    faq3A:
      "I design flows, wireframes, and UI in Figma, then build responsive front-end when the project needs it: React, HTML, CSS, JavaScript, and Webflow.",
    faq4Q: "Which languages do you speak?",
    faq4A:
      "Arabic (native), English (fluent), and German (intermediate). I work comfortably in English and German on product teams.",
    ctaTitle: "Have a product in mind?",
    ctaTitleEm: "Let's talk.",
    ctaSub: "Open to UI/UX and front-end collaborations. Share your idea and we can explore it together.",
  },
  de: {
    navHome: "Start",
    navWork: "Arbeit",
    navAbout: "Über mich",
    navCv: "Lebenslauf",
    navContact: "Kontakt",
    letsTalk: "Lass uns reden",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    introLabel: "Portfolio wird geladen",
    introSkip: "Überspringen",
    available: "Verfügbar für Projekte",
    heroAvailableNote: "Verfügbar für Projekte, Köln oder remote",
    heroTitleLead: "Ich gestalte",
    heroTitleEm: "ruhige, nützliche",
    heroTitleRest: "Interfaces für Produkte, die live gehen.",
    heroIntro:
      "Ich bin Alaa, UI/UX Designerin in Köln mit Front-end Background. Ich arbeite End-to-End an Apps, Marken und Web, von Research und Flows bis zum fertigen UI.",
    heroViewProjects: "Projekte ansehen",
    heroContactMe: "Kontakt",
    heroPanelPractice: "Praxis",
    heroPanelPracticeTitle: "UI/UX · Front-end · Branding",
    heroPanelPracticeDetail: "End-to-End, von Research bis React.",
    heroPanelOpenTo: "Offen für",
    heroPanelOpenToTitle: "UI/UX Designerin",
    heroPanelOpenToDetail: "Freelance, Verträge oder Produktteams.",
    heroPanelCurrently: "Aktuell",
    heroCaseStudies: "Case Studies",
    heroPanelCurrentlyDetail: "Apps, Marken und Web.",
    heroLine1: "Produktinterfaces gestalten",
    heroLine2: "mit Klarheit & Handwerk",
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
    footerA11y:
      "Diese Seite unterstützt Tastaturbedienung, ausreichenden Kontrast und reduzierte Animationen.",
    themeDark: "Dunkelmodus aktivieren",
    themeLight: "Hellmodus aktivieren",
    certificates: "Zertifikate",
    viewCertificate: "PDF ansehen",
    viewOnLinkedIn: "Auf LinkedIn ansehen",
    principles: "Prinzipien",
    faqBadge: "FAQ",
    faqTitle: "Häufige Fragen",
    faqSub: "Kurze Antworten, bevor wir uns verbinden.",
    faq1Q: "Bist du für neue Projekte verfügbar?",
    faq1A:
      "Ja. Ich bin offen für UI/UX Design und Front-end: Freelance, Verträge oder Festanstellungen in Produktteams.",
    faq2Q: "Arbeitest du remote?",
    faq2A:
      "Ich bin in Köln ansässig und arbeite remote oder hybrid. Ich arbeite mit Teams in Deutschland und international zusammen.",
    faq3Q: "Was gestaltest du, was setzt du um?",
    faq3A:
      "Ich gestalte Flows, Wireframes und UI in Figma und setze bei Bedarf responsives Front-end um: React, HTML, CSS, JavaScript und Webflow.",
    faq4Q: "Welche Sprachen sprichst du?",
    faq4A:
      "Arabisch (Muttersprache), Englisch (fließend) und Deutsch (Mittelstufe). Ich arbeite sicher auf Englisch und Deutsch in Produktteams.",
    ctaTitle: "Hast du ein Produkt im Kopf?",
    ctaTitleEm: "Lass uns reden.",
    ctaSub: "Offen für UI/UX und Front-end Zusammenarbeit. Teile deine Idee, wir schauen, ob es passt.",
  },
  ar: {
    navHome: "الرئيسية",
    navWork: "الأعمال",
    navAbout: "عني",
    navCv: "السيرة",
    navContact: "تواصل",
    letsTalk: "لنتحدث",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    introLabel: "جاري فتح المعرض",
    introSkip: "تخطي",
    available: "متاحة للعمل",
    heroAvailableNote: "متاحة للعمل، كولونيا أو عن بُعد",
    heroTitleLead: "أصمم واجهات",
    heroTitleEm: "هادئة ومفيدة",
    heroTitleRest: "للمنتجات التي تُطلق.",
    heroIntro:
      "أنا الاء، مصممة واجهات وتجربة مستخدم في كولونيا، وأطور الواجهات أيضاً. أعمل من البحث وتصميم التدفقات حتى واجهات جاهزة يمكن للفريق تنفيذها.",
    heroViewProjects: "عرض المشاريع",
    heroContactMe: "تواصل معي",
    heroPanelPractice: "الممارسة",
    heroPanelPracticeTitle: "واجهات · تطوير · هوية بصرية",
    heroPanelPracticeDetail: "من البحث حتى التنفيذ.",
    heroPanelOpenTo: "متاحة لـ",
    heroPanelOpenToTitle: "مصممة واجهات وتجربة مستخدم",
    heroPanelOpenToDetail: "عمل حر، عقود، أو فرق منتجات.",
    heroPanelCurrently: "حالياً",
    heroCaseStudies: "دراسات حالة",
    heroPanelCurrentlyDetail: "تطبيقات وعلامات وويب.",
    heroLine1: "تصميم واجهات المنتجات",
    heroLine2: "بوضوح وحرفية",
    viewWork: "عرض الأعمال المختارة",
    photoCaption: "واجهات · تطوير",
    workBadge: "الأعمال",
    workTitle: "مشاريع مختارة",
    workSub: "تصميم منتجات وواجهات للتطبيقات والعلامات والويب.",
    featured: "مميز",
    viewCase: "عرض دراسة الحالة",
    filterAll: "الكل",
    filterWeb: "ويب",
    filterMobile: "جوال",
    filterBranding: "هوية",
    aboutBadge: "عني",
    aboutTitle: "أصمم بتعاطف،",
    aboutTitleEm: "أبني بقصد",
    aboutBio:
      "من كولونيا، أعمل على منتجات الويب والجوال. أهتم بواجهات هادئة وتدفقات واضحة والتفاصيل التي تجعل المنتج سهل الاستخدام.",
    location: "الموقع",
    focus: "التركيز",
    skills: "المهارات",
    cvBadge: "السيرة",
    cvTitle: "الخبرة والتعليم",
    cvSub: "رحلة في التصميم والتطوير والتعلم المستمر.",
    downloadCv: "تحميل السيرة",
    experience: "الخبرة",
    education: "التعليم",
    languages: "اللغات",
    contactBadge: "تواصل",
    contactTitle: "لنصنع",
    contactTitleEm: "شيئاً رائعاً",
    contactSub: "متاحة لفرص جديدة في تصميم الواجهات وتطويرها.",
    downloadCvLabel: "تحميل السيرة",
    pdfResume: "سيرة PDF",
    emailMe: "راسليني",
    backToWork: "الأعمال",
    role: "الدور",
    owned: "ما قمت به",
    tools: "الأدوات",
    outcome: "النتيجة",
    approach: "المنهج",
    typography: "الخطوط",
    discover: "اكتشاف",
    discoverDetail: "بحث وتدفقات وتشكيل المشكلة",
    design: "تصميم",
    designDetail: "هيكلة الشاشات وأنظمة الواجهة والنماذج",
    build: "بناء",
    buildDetail: "واجهات متجاوبة ولمسات نهائية",
    keyFeatures: "الميزات الرئيسية",
    problem: "المشكلة",
    solution: "الحل",
    designGallery: "التصميم",
    viewBehance: "عرض على بيهانس",
    visitLive: "زيارة الموقع",
    fullStoryTitle: "تريدين القصة البصرية كاملة؟",
    fullStorySub: "دراسة الحالة الكاملة والشاشات وخطوات العمل على بيهانس.",
    openBehance: "فتح بيهانس",
    openFigma: "فتح Figma",
    openPrototype: "فتح النموذج",
    allProjects: "كل المشاريع",
    nextProject: "المشروع التالي",
    closeImage: "إغلاق الصورة",
    backToTop: "العودة للأعلى",
    prevProject: "المشروع السابق",
    nextProjectAria: "المشروع التالي",
    footerAvailable: "متاحة لمشاريع جديدة",
    footerA11y:
      "يدعم هذا الموقع التنقل بلوحة المفاتيح والتباين الكافي وتفضيلات تقليل الحركة.",
    themeDark: "تفعيل الوضع الداكن",
    themeLight: "تفعيل الوضع الفاتح",
    certificates: "الشهادات",
    viewCertificate: "عرض PDF",
    viewOnLinkedIn: "عرض على LinkedIn",
    principles: "المبادئ",
    faqBadge: "أسئلة",
    faqTitle: "أسئلة شائعة",
    faqSub: "إجابات سريعة قبل أن نتواصل.",
    faq1Q: "هل أنت متاحة لمشاريع جديدة؟",
    faq1A:
      "نعم. متاحة لتصميم الواجهات وتطويرها: عمل حر أو عقود أو وظائف في فرق المنتجات.",
    faq2Q: "هل تعملين عن بُعد؟",
    faq2A:
      "أنا في كولونيا وأعمل عن بُعد أو بشكل هجين. أتعاون مع فرق في ألمانيا ودولياً.",
    faq3Q: "ماذا تصممين وما الذي تبنين؟",
    faq3A:
      "أصمم التدفقات والهيكلة والواجهات في Figma، وأبني واجهات متجاوبة عند الحاجة باستخدام React وHTML وCSS وJavaScript وWebflow.",
    faq4Q: "ما اللغات التي تتحدثينها؟",
    faq4A:
      "العربية (اللغة الأم)، الإنجليزية (طلاقة)، والألمانية (متوسط). أعمل براحة بالإنجليزية والألمانية.",
    ctaTitle: "لديك فكرة منتج؟",
    ctaTitleEm: "لنتحدث.",
    ctaSub: "متاحة للتعاون في تصميم الواجهات وتطويرها. شاركي فكرتك ونستكشفها معاً.",
  },
};

export type UiKey = keyof UiDict;
