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

export const focusAreasAr = ["واجهات وتجربة المستخدم", "تطوير الواجهات"];

export const skillCategoryTitlesAr: Record<string, string> = {
  design: "التصميم",
  development: "التطوير",
  tools: "الأدوات والحرفة",
};

export const skillLabelsAr: Record<string, string> = {
  figma: "Figma",
  ui: "تصميم الواجهات",
  ux: "بحث تجربة المستخدم",
  wireframe: "هيكلة الشاشات",
  prototype: "النمذجة",
  systems: "أنظمة التصميم",
  flows: "تدفقات المستخدم",
  html: "HTML / CSS",
  javascript: "JavaScript",
  react: "React",
  responsive: "واجهات متجاوبة",
  typescript: "TypeScript",
  webflow: "Webflow",
  accessibility: "إمكانية الوصول",
  handoff: "تسليم التصميم",
  teamwork: "التعاون مع الفريق",
};

export const personalInfoAr = {
  name: "الاء شاهين",
  title: "مصممة واجهات وتجربة مستخدم",
  location: "كولونيا، ألمانيا",
  about:
    "أصمم تجارب منتجات واضحة وأبني الواجهات التي تجعلها حية، من البحث والتدفقات إلى واجهة منتهية وجاهزة للتطوير.",
};

export const experienceAr: ExperienceItem[] = [
  {
    period: "يناير 2026 - يونيو 2026",
    title: "مصممة UX/UI وتطوير Front-End (تطوع)",
    company: "Ferment-Freude",
    highlights: [
      "المشاركة في إعادة تصميم هوية الموقع وتحسين تجربة المستخدم.",
      "تصميم واجهات حديثة تركز على المستخدم ومكونات متجاوبة في Figma.",
      "إنشاء Wireframes وتدفقات المستخدم ونماذج تفاعلية.",
      "تحويل التصاميم إلى Front-end يعمل باستخدام React.",
      "ضمان التجاوب والاتساق عبر الأجهزة المختلفة.",
      "تحسين سهولة الاستخدام وإمكانية الوصول والاتساق البصري.",
    ],
  },
  {
    period: "2024 - 2025",
    title: "تدريب تصميم الويب",
    company: "Beam Institute of Technology",
    highlights: [
      "خبرة عملية في Figma لتصميم UI/UX والنمذجة.",
      "تطوير مواقع متجاوبة باستخدام HTML وCSS وJavaScript.",
      "تعلم مبادئ Front-end الحديثة (Flexbox, Grid, Mobile First).",
      "إنشاء مواقع تفاعلية باستخدام Webflow.",
      "العمل على مشاريع حقيقية وأنظمة تصميم.",
    ],
  },
  {
    period: "2016 - 2020",
    title: "مطورة ويب مستقلة",
    company: "عمل حر",
    highlights: [
      "تطوير وصيانة تطبيقات ويب باستخدام TypeScript و.NET وC# وJavaScript وBootstrap.",
      "إدارة مشاريع العملاء والمشاريع الشخصية من Front-end إلى Back-end أساسي.",
      "التركيز على واجهات نظيفة ومتجاوبة وتجربة مستخدم أفضل.",
      "المساهمة في تصميم وتنفيذ ميزات Front-end.",
    ],
  },
];

export const educationAr: EducationItem[] = [
  {
    period: "2024 - 2025",
    title: "تدريب تصميم الويب",
    institution: "Beam Institute of Technology",
  },
  {
    period: "2011 - 2016",
    title: "مهندسة أنظمة حاسوب",
    institution: "جامعة الأزهر",
  },
];

export const languagesAr: LanguageItem[] = [
  { name: "العربية", level: "اللغة الأم" },
  { name: "الإنجليزية", level: "طلاقة" },
  { name: "الألمانية", level: "متوسط" },
];

export const skillsAr = [
  "تصميم UI",
  "بحث UX",
  "Wireframing",
  "النمذجة",
  "Figma",
  "أنظمة التصميم",
  "تدفقات المستخدم",
  "Webflow",
];

export const designPrinciplesAr: { title: string; detail: string }[] = [
  {
    title: "الوضوح أولاً",
    detail: "كل شاشة تؤدي مهمة واحدة دون ضجيج.",
  },
  {
    title: "حرفية هادئة",
    detail: "مسافات وخطوط وحركة متعمدة ومنظمة.",
  },
  {
    title: "تصميم جاهز للبناء",
    detail: "واجهات تترجم بسهولة إلى مكونات Front-end حقيقية.",
  },
];

export const projectsAr: Record<string, ProjectCopy> = {
  "coffee-lab": {
    tags: ["تصميم ويب", "تجارة إلكترونية", "هوية بصرية"],
    description: "موقع فاخر لعلامة قهوة: التحميص والخلطات والتسوق.",
    role: "مصممة UI/UX ومطورة Front-End",
    problem:
      "علامات القهوة المتخصصة غالباً ما تبدو عامة على الإنترنت، مع واجهات مزدحمة لا تعكس الحرفة والجودة.",
    solution:
      "تجربة ويب أنيقة داكنة مع اكتشاف المنتجات وأدوات النكهة والعضوية وقصة واضحة عن المنشأ والتحميص.",
    outcome: "مفهوم متجر فاخر مع اكتشاف منتجات واضح وسرد للعلامة.",
    owned: "تصميم UI وبناء Front-end للموقع من البداية للنهاية.",
    typography: "Serif Display + Sans-serif واضحة",
    highlights: [
      "كتalog منتجات فاخرة ومجموعة Classified Vault",
      "أدوات تفاعلية للنكهات والخلطات",
      "عضوية ودليل تذوق وتدفقات تواصل",
    ],
  },
  fermentfreude: {
    tags: ["تصميم ويب", "UI/UX", "React"],
    description: "إعادة هوية وموقع React لعلامة تخمير.",
    role: "مصممة UX/UI وتطوير Front-End (تطوع)",
    problem:
      "العلامة تحتاج هوية بصرية أقوى وموقعاً أوضح للورش والمنتجات والخبرة.",
    solution:
      "إعادة هوية كاملة مع واجهات حديثة ومكونات متجاوبة وWireframes ونماذج وFront-end بـ React لتحسين سهولة الاستخدام.",
    outcome: "موقع live بهيكل أوضح وحضور أقوى للعلامة.",
    owned: "تخطيطات UI ومكونات متجاوبة وتنفيذ React.",
    typography: "خطوط مخصصة للعلامة",
    highlights: [
      "إعادة هوية لتحسين الهوية البصرية وUX",
      "مكونات UI متجاوبة في Figma",
      "تحويل التصاميم إلى Front-end React",
    ],
  },
  "case-vue": {
    tags: ["تطبيق جوال", "تجارة إلكترونية", "AR"],
    description: "تطبيق تسوق أثاث مع تصفح ومعاينة AR.",
    role: "مصممة UX/UI وباحثة UX",
    problem:
      "اختيار الأثاث online صعب: تنقل ضعيف وتصور محدود وصعوبة في المقارنة.",
    solution:
      "تطبيق جوال للتصفح والتصفية والمقارنة وتصور الأثاث في المنزل عبر الواقع المعزز.",
    outcome: "قرارات شراء أكثر ثقة عبر المقارنة ومعاينة AR.",
    owned: "بحث UX وتدفقات المنتج وواجهة تسوق AR.",
    typography: "Poppins",
    highlights: [
      "كتalog أثاث واسع مع تصفية ذكية",
      "مقارنة منتجات ومعاينات تفصيلية",
      "تصور AR للأثاث في المنزل",
    ],
  },
  abaya: {
    tags: ["تطبيق جوال", "تجارة إلكترونية", "UI/UX"],
    description: "تطبيق تسوق هادئ للعبaya والأزياء المحتشمة.",
    role: "مصممة UX/UI وباحثة UX",
    problem:
      "متاجر الأزياء المحتشمة غالباً مزدحمة: تصفية ضعيفة وعرض منتجات غير واضح.",
    solution:
      "متجر جوال واضح مع معارض ر refined وفئات بديهية ومسار شراء بسيط.",
    outcome: "تدفقات تجارة جوال من التصفح حتى الدفع.",
    owned: "بحث UX والتدفقات وتصميم UI كامل للتطبيق.",
    typography: "Sans-serif حديثة",
    highlights: [
      "شاشات ترحيب وOnboarding",
      "الرئيسية والفئات وتفاصيل المنتج",
      "السلة والدفع وتسجيل الدخول والتواصل",
    ],
  },
  calltrack: {
    tags: ["تطبيق جوال", "ذكاء اصطناعي", "UI/UX"],
    description: "تطبيق سعرات حرارية يتعرف على الطعام من الصور.",
    role: "مصممة UX/UI وباحثة UX",
    problem:
      "تتبع السعرات يدوياً مرهق، والكثير من التطبيقات تتطلب إدخالاً مستمراً.",
    solution:
      "تعرف بالصور مع تغذية شخصية: صورة للوجبة، تقدير الماكرو، وخطط ووصفات حسب الأهداف.",
    outcome: "تسجيل وجبات أسرع مع تحليل صور AI وخطط شخصية.",
    owned: "بحث UX وهندسة المعلومات ونظام تصميم UI.",
    typography: "Montserrat",
    highlights: [
      "تحليل صور الطعام للسعرات والماكرو",
      "خطط وجبات ووصفات شخصية",
      "رؤى يومية وتذكيرات وتتبع التقدم",
    ],
  },
  littlechapter: {
    tags: ["تطبيق جوال", "أطفال", "قصص"],
    description: "تطبيق قصص هادئ للآباء والأطفال معاً.",
    role: "مصممة UX/UI وباحثة UX",
    problem:
      "وقت القصة يومياً يصعب بسبب الوقت وقصص غير مناسبة وتطبيقات م overstimulating.",
    solution:
      "تطبيق mindful مع قصص سمعية بصرية ومجموعات ووضع نوم ولوحة آباء ووصول offline.",
    outcome: "تجربة قصص لطيفة مع وضع النوم وتحكم الوالدين.",
    owned: "بحث UX وتدفقات السرد وUI هادئ للأطفال.",
    typography: "Baloo",
    highlights: [
      "قصص سمعية بصرية تفاعلية",
      "وضع النوم مع حركات وأصوات ناعمة",
      "لوحة آباء ووصول offline للقصص",
    ],
  },
  grove: {
    tags: ["تطبيق جوال", "ذكاء اصطناعي", "نظام تصميم"],
    description: "تطبيق نباتات للتسوق والعناية مع فحص صحة AI.",
    role: "مصممة UX/UI وباحثة UX",
    problem:
      "العناية بالنباتات واكتشاف المشاكل متأخراً وشراء online غير مريح.",
    solution:
      "تجربة متكاملة: متجر موثوق + مساعد عناية. صورة للنبات، كشف آفات/أمراض ونصائح.",
    outcome: "تطبيق واحد للشراء والعناية بالنباتات مدعوم AI.",
    owned: "بحث UX ونظام التصميم وUI للعناية والمتجر.",
    typography: "Lunasima",
    highlights: [
      "تعرف AI على صحة النبات",
      "نصائح عناية شخصية",
      "متجر ومساعد عناية متكاملان",
    ],
  },
};
