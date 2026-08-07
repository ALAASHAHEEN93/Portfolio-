export const personalInfo = {
  name: "Alaa Shaheen",
  title: "UI/UX Designer",
  email: "designer.alaa1@gmail.com",
  location: "Cologne, Germany",
  about:
    "I design clear product experiences and build the interfaces that bring them to life, from research and flows to polished UI.",
  resumeUrl: "/CV.pdf",
  socials: {
    behance: "https://www.behance.net/alaashaheen16",
    github: "https://github.com/ALAASHAHEEN93",
    linkedin: "https://www.linkedin.com/in/alaa-design/",
  },
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2026 - Mar 2026",
    title: "Volunteer UX/UI Designer & Front-End Developer",
    company: "Ferment-Freude",
    highlights: [
      "Collaborated on rebranding the company website to improve visual identity and UX.",
      "Designed modern, user-centered UI layouts and responsive components using Figma.",
      "Created wireframes, user flows, and interactive prototypes.",
      "Translated UI designs into functional front-end using React.",
      "Ensured responsiveness and consistency across different devices.",
      "Improved usability, accessibility, and visual consistency.",
    ],
  },
  {
    period: "2024 - 2025",
    title: "Web Design Weiterbildung",
    company: "Beam Institute of Technology",
    highlights: [
      "Hands-on experience in Figma for UI/UX design and prototyping.",
      "Developed responsive websites using HTML, CSS, and JavaScript.",
      "Learned modern front-end development principles (Flexbox, Grid, Mobile First).",
      "Created interactive websites using Webflow.",
      "Worked on real-world projects and design systems.",
    ],
  },
  {
    period: "2016 - 2020",
    title: "Freelance Web Developer",
    company: "Self-employed",
    highlights: [
      "Developed and maintained web applications using TypeScript, .NET, C#, JavaScript, and Bootstrap.",
      "Handled both client and personal projects, from front-end to basic back-end tasks.",
      "Focused on building clean, responsive UIs and improving user experience.",
      "Contributed to the design and implementation of front-end features.",
    ],
  },
];

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
};

export const education: EducationItem[] = [
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

export type LanguageItem = {
  name: string;
  level: string;
};

export const languages: LanguageItem[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "Intermediate" },
];

export const socialLinks = [
  { label: "Behance", href: personalInfo.socials.behance },
  { label: "GitHub", href: personalInfo.socials.github },
  { label: "LinkedIn", href: personalInfo.socials.linkedin },
];

export const skills = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Figma",
  "Design Systems",
  "User Flows",
  "Webflow",
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  color: string;
  featured?: boolean;
  externalUrl?: string;
  behanceUrl?: string;
  description: string;
  role: string;
  tools: string[];
  problem: string;
  solution: string;
  outcome: string;
  owned: string;
  typography: string;
  highlights?: string[];
  image?: string;
  logo?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "coffee-lab",
    title: "Coffee Lab",
    year: "2026",
    tags: ["Web Design", "E-commerce", "Branding"],
    color: "#C49A6C",
    featured: true,
    logo: "/projects/coffee-lab/logo.svg",
    description: "Luxury coffee brand site for roasting, blends, and shopping.",
    role: "UI/UX Designer, Front-End Developer",
    tools: ["Figma", "React", "HTML", "CSS", "JavaScript"],
    problem:
      "Specialty coffee brands often struggle to communicate craft and quality online, with cluttered storefronts that feel generic rather than premium.",
    solution:
      "Designed a dark, elegant web experience with product discovery, flavor customization tools, membership signup, and clear storytelling around sourcing and roasting.",
    outcome: "A premium storefront concept with clear product discovery and brand storytelling.",
    owned: "End-to-end UI design and front-end build for the brand site.",
    typography: "Serif display + clean sans-serif",
    highlights: [
      "Premium product catalog and Classified Vault collection",
      "Interactive flavor customization and blending tools",
      "Membership society, tasting guide, and contact flows",
    ],
  },
  {
    slug: "fermentfreude",
    title: "Fermentfreude",
    year: "2026",
    tags: ["Web Design", "UI/UX", "React"],
    color: "#C8D8B5",
    featured: true,
    externalUrl: "https://www.fermentfreude.at/",
    behanceUrl: "https://www.behance.net/gallery/246062163/fermentfreude",
    logo: "/projects/fermentfreude/logo.svg",
    description: "Rebrand and React website for a fermentation brand.",
    role: "Volunteer UX/UI Designer & Front-End Developer",
    tools: ["Figma", "React", "HTML", "CSS", "JavaScript"],
    problem:
      "The brand needed a stronger visual identity and a more intuitive website to communicate workshops, products, and their fermentation expertise.",
    solution:
      "Collaborated on a full rebrand with modern UI layouts, responsive components, wireframes, prototypes, and a React front-end that improved usability, accessibility, and visual consistency.",
    outcome: "Live rebranded website with clearer structure and stronger brand presence.",
    owned: "UI layouts, responsive components, and React front-end implementation.",
    typography: "Custom brand typography",
    highlights: [
      "Rebranding for improved visual identity and UX",
      "Responsive UI components built in Figma",
      "Translated designs into a functional React front-end",
    ],
  },
  {
    slug: "abaya",
    title: "Abaya App Store",
    year: "2025",
    tags: ["Mobile App", "E-commerce", "UI/UX"],
    color: "#D4C4B0",
    behanceUrl: "https://www.behance.net/gallery/239610529/Abaya-App-Store",
    logo: "/projects/abaya/logo.svg",
    description: "Calm mobile shopping app for abaya and modest fashion.",
    role: "UX/UI Designer, UX Researcher",
    tools: ["Figma", "FigJam", "Pencil & Paper"],
    problem:
      "Modest fashion shoppers often face cluttered online stores with weak filtering, poor product presentation, and confusing purchase flows that make browsing feel overwhelming.",
    solution:
      "Designed a clean mobile app store experience with refined product galleries, intuitive categories, and a simple path from discovery to purchase that feels elegant and easy to use.",
    outcome: "End-to-end mobile commerce flows from browse to checkout.",
    owned: "UX research, flows, and full mobile UI design.",
    typography: "Modern sans-serif",
    highlights: [
      "Welcome screens and onboarding",
      "Home, category, and product detail pages",
      "Shopping cart, checkout, login, and contact flows",
    ],
  },
  {
    slug: "calltrack",
    title: "CallTrack",
    year: "2025",
    tags: ["Mobile App", "AI", "UI/UX"],
    color: "#C4B5E8",
    behanceUrl: "https://www.behance.net/gallery/238047517/Call-Track",
    logo: "/projects/calltrack/logo.svg",
    description: "AI calorie app that reads nutrition from meal photos.",
    role: "UX/UI Designer, UX Researcher",
    tools: ["Figma", "FigJam", "Google Forms", "Pencil & Paper"],
    problem:
      "Many people struggle to maintain a balanced diet and accurately track daily calorie and nutrient intake. Existing apps require manual input, making the process time-consuming and hard to sustain.",
    solution:
      "Integrated AI-based image recognition with a personalized nutrition system. Users upload meal photos, get automatic calorie and macro estimates, and receive customized meal plans and recipes based on their goals.",
    outcome: "Faster meal logging with AI photo analysis and personal plans.",
    owned: "UX research, information architecture, and UI design system.",
    typography: "Montserrat",
    highlights: [
      "AI meal photo analysis for calories and macros",
      "Personalized meal plans and healthy recipes",
      "Daily insights, reminders, and progress tracking",
    ],
  },
  {
    slug: "littlechapter",
    title: "LittleChapter",
    year: "2025",
    tags: ["Mobile App", "Kids", "Storytelling"],
    color: "#E8C4D4",
    logo: "/projects/littlechapter/logo.svg",
    behanceUrl: "https://www.behance.net/gallery/235882915/App-Story-For-Kids",
    description: "Calm storytelling app for parents and kids together.",
    role: "UX/UI Designer, UX Researcher",
    tools: ["Figma", "FigJam", "Google Forms", "Pencil & Paper"],
    problem:
      "Parents struggle to make storytime consistent due to busy schedules, limited access to age-appropriate stories, and overstimulating apps not designed with kids' needs in mind.",
    solution:
      "Built a mindful storytelling app with interactive audio-visual stories, diverse collections, bedtime mode with soft animations, a parent dashboard, and offline access for families on the go.",
    outcome: "Gentle story experience with bedtime mode and parent controls.",
    owned: "UX research, storytelling flows, and calm kids-focused UI.",
    typography: "Baloo",
    highlights: [
      "Interactive audio-visual stories with soothing narration",
      "Bedtime mode with calming animations and sounds",
      "Parent dashboard and offline story access",
    ],
  },
  {
    slug: "case-vue",
    title: "CasaVue",
    year: "2025",
    tags: ["Mobile App", "E-commerce", "AR"],
    color: "#B5C8E8",
    behanceUrl: "https://www.behance.net/gallery/230204025/Furniture-app",
    logo: "/projects/case-vue/logo.svg",
    description: "Furniture shopping app with browsing and AR previews.",
    role: "UX/UI Designer, UX Researcher",
    tools: ["Figma", "FigJam", "Google Forms", "Pencil & Paper"],
    problem:
      "Customers find it difficult to choose furniture that fits their style and space. Online stores often have poor navigation, limited visualization, and friction when comparing products.",
    solution:
      "Created a mobile app where users browse modern furniture, filter by preferences, compare products, and visualize items in their homes using augmented reality for more confident buying decisions.",
    outcome: "Confident furniture decisions with compare and AR preview.",
    owned: "UX research, product flows, and AR shopping UI design.",
    typography: "Poppins",
    highlights: [
      "Wide furniture catalog with smart filtering",
      "Product comparison and detailed previews",
      "AR visualization for in-home placement",
    ],
  },
  {
    slug: "grove",
    title: "Grove",
    year: "2025",
    tags: ["Mobile App", "AI", "Design System"],
    color: "#C8E8B5",
    behanceUrl: "https://www.behance.net/gallery/230573965/Plant-Shop-and-Care",
    logo: "/projects/grove/logo.svg",
    description: "Plant shop and care app with AI plant health checks.",
    role: "UX/UI Designer, UX Researcher",
    tools: ["Figma", "FigJam", "Google Forms", "Pencil & Paper"],
    problem:
      "Plant owners struggle with proper care, late issue detection, and poor-quality online purchases. Most apps focus on shopping or care, but not both.",
    solution:
      "Built an integrated experience with a reliable plant store and smart care assistant. Users photograph plants to detect pests or diseases and receive personalized care tips while shopping confidently.",
    outcome: "One app for plant shopping and AI-guided care.",
    owned: "UX research, design system, and AI care + shop UI.",
    typography: "Lunasima",
    highlights: [
      "AI image recognition for plant health diagnosis",
      "Personalized care guidance and tips",
      "Integrated plant store and care assistant",
    ],
  },
];

const galleryManifest: Record<string, string[]> = {
  "coffee-lab": [
    "/projects/coffee-lab/01.jpg",
    "/projects/coffee-lab/02.jpg",
  ],
  fermentfreude: [
    "/projects/fermentfreude/cover.png",
    "/projects/fermentfreude/web-home.png",
    "/projects/fermentfreude/web-shop.png",
  ],
  abaya: [
    "/projects/abaya/01.jpg",
    "/projects/abaya/02.jpg",
    "/projects/abaya/03.jpg",
    "/projects/abaya/04.jpg",
    "/projects/abaya/05.jpg",
    "/projects/abaya/06.jpg",
  ],
  calltrack: [
    "/projects/calltrack/01.png",
    "/projects/calltrack/02.png",
    "/projects/calltrack/03.png",
    "/projects/calltrack/04.png",
    "/projects/calltrack/05.png",
    "/projects/calltrack/06.png",
    "/projects/calltrack/07.png",
    "/projects/calltrack/08.png",
    "/projects/calltrack/09.png",
    "/projects/calltrack/10.png",
  ],
  littlechapter: [
    "/projects/littlechapter/01.png",
    "/projects/littlechapter/02.png",
    "/projects/littlechapter/03.png",
    "/projects/littlechapter/04.png",
    "/projects/littlechapter/05.png",
    "/projects/littlechapter/06.png",
    "/projects/littlechapter/07.png",
    "/projects/littlechapter/08.png",
    "/projects/littlechapter/09.png",
  ],
  "case-vue": [
    "/projects/case-vue/02.png",
    "/projects/case-vue/01.png",
  ],
  grove: [
    "/projects/grove/01.png",
    "/projects/grove/02.png",
    "/projects/grove/03.png",
    "/projects/grove/04.png",
    "/projects/grove/05.png",
    "/projects/grove/06.png",
    "/projects/grove/07.png",
    "/projects/grove/08.png",
    "/projects/grove/09.png",
    "/projects/grove/10.png",
    "/projects/grove/11.png",
    "/projects/grove/12.png",
    "/projects/grove/13.png",
    "/projects/grove/14.png",
  ],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getBehanceProjectUrl(project: Project): string | undefined {
  return project.behanceUrl;
}

export function getProjectImage(slug: string): string {
  return `/projects/${slug}.png`;
}

export function getProjectGallery(project: Project): string[] {
  if (project.gallery?.length) return project.gallery;
  const fromManifest = galleryManifest[project.slug];
  if (fromManifest?.length) return fromManifest;
  if (project.image) return [project.image];
  return [];
}

export const workFilters = ["All", "Web", "Mobile", "Branding"] as const;
export type WorkFilter = (typeof workFilters)[number];

export function projectMatchesFilter(project: Project, filter: WorkFilter): boolean {
  if (filter === "All") return true;
  if (filter === "Web") return project.tags.some((t) => /web|react/i.test(t));
  if (filter === "Mobile") return project.tags.some((t) => /mobile|app|ai|ar|kids/i.test(t));
  if (filter === "Branding") return project.tags.some((t) => /brand/i.test(t));
  return true;
}

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "CV", href: "/#cv" },
  { label: "Contact", href: "/#contact" },
];

export const focusAreas = ["UI/UX", "Front-End"];
