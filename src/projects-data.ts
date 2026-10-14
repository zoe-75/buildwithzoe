export type ProjectStatus = "delivered" | "pitch" | "in-development";

export type Project = {
  id: string;
  number: string;
  title: string;
  slug: string;
  short: string;
  category: string;
  status: string;
  statusType: ProjectStatus;
  focus: string[];
  theme: "cyan" | "deep" | "mint" | "blue";
  kind: "roadmap" | "dashboard" | "web" | "debug";
  thumbnail?: string;
  featured: boolean;
  challenge: string;
  approach: string;
  detail: string;
  overview: string;
  contribution: string;
  implementation: string;
  outcome: string;
  liveUrl?: string;
};

const makeProject = (
  project: Omit<Project, "featured"> & { featured?: boolean },
): Project => ({ featured: false, ...project });

const pitch = (
  project: Omit<Project, "featured" | "status" | "statusType"> & {
    featured?: boolean;
  },
): Project =>
  makeProject({
    ...project,
    status: "Business Pitch Concept",
    statusType: "pitch",
  });

const liveUrlsById: Record<string, string> = {
  brm: "https://brmsummary.netlify.app",
  adire: "https://adire.netlify.app",
  arn: "https://arnautoservice.vercel.app",
  camcornea: "https://concepts.netlify.app",
  "elegance-market": "https://elegance-market.netlify.app",
  "fab-ventures": "https://fabventures.netlify.app",
  "jara-black-soap": "https://jara-blacksoap.netlify.app",
  mahilla: "https://mahilladigitalconsult.netlify.app",
  soundwave: "https://sounds-waves.netlify.app",
  "vegas-properties": "https://vegasproperties.vercel.app",
  "zifty-hairs": "https://ziftyhairs.netlify.app",
};

export const projects: Project[] = [
  makeProject({
    id: "brm",
    number: "01",
    title: "BRM Performance Analyzer",
    slug: "brm-performance-analyzer",
    category: "Internal Tool",
    status: "Delivered & In Use",
    statusType: "delivered",
    featured: true,
    thumbnail: "/project-thumbnails/brm-performance-analyzer.webp",
    short:
      "An internal reporting application that transforms performance data into structured rankings, insights, and operational reports.",
    focus: ["Python", "Data processing", "Reporting"],
    theme: "deep",
    kind: "dashboard",
    challenge:
      "Performance information trapped in reports is hard to compare and time-consuming to interpret.",
    approach:
      "A reporting workflow focused on organizing performance measures and making results easier to review through rankings and visual summaries.",
    detail:
      "Delivered business software used for real operational reporting. The public visual is a synthetic interface illustration; no operational data is published.",
    overview:
      "BRM Performance Analyzer turns performance data into structured rankings, insights, and operational reports for business review.",
    contribution:
      "Built the reporting experience around the confirmed need for clearer rankings, metrics, and dashboard views.",
    implementation:
      "The public portfolio description is limited to the verified reporting, ranking, data-visualization, and operational-use context.",
    outcome:
      "Delivered and in use. No measured business improvement is claimed here.",
  }),
  makeProject({
    id: "mahilla",
    number: "02",
    title: "Mahilla Digital Consult",
    slug: "mahilla-digital-consult",
    category: "Business Website",
    status: "Delivered & In Use",
    statusType: "delivered",
    featured: true,
    short:
      "A corporate website developed to communicate consulting services, establish a professional digital presence, and make business enquiries easier.",
    focus: [],
    theme: "mint",
    kind: "web",
    thumbnail: "/project-thumbnails/mahilla-digital-consult.webp",
    challenge:
      "A consulting business needs a clear, credible digital presence that explains its services and gives prospective clients an easy way to enquire.",
    approach:
      "A focused business website built around service clarity, professional presentation, and straightforward enquiry pathways.",
    detail:
      "A real delivered business website. The portfolio does not claim client metrics or outcomes that have not been supplied.",
    overview:
      "Mahilla Digital Consult communicates consulting services and provides a professional route for business enquiries.",
    contribution:
      "Developed the website experience and its business-facing content structure.",
    implementation:
      "The public case study stays focused on the verified digital-presence purpose because a detailed implementation record is not available here.",
    outcome:
      "Delivered and in use. No unsupported performance metrics are presented.",
  }),
  makeProject({
    id: "fab-ventures",
    number: "03",
    title: "FAB Ventures",
    slug: "fab-ventures",
    category: "Business Website",
    status: "Delivered & In Use",
    statusType: "delivered",
    featured: true,
    short:
      "A business-focused digital presence communicating website services, business value, and clear pathways for prospective customers.",
    focus: [],
    theme: "cyan",
    kind: "web",
    thumbnail: "/project-thumbnails/fab-ventures.webp",
    challenge:
      "A service business needs visitors to understand its offer quickly and know what to do next.",
    approach:
      "A business-oriented website experience organized around clear value communication and customer pathways.",
    detail:
      "A real delivered business website. Promotional statistics visible in the supplied artwork are not treated as verified portfolio claims.",
    overview:
      "FAB Ventures presents website services and business value through a direct, conversion-aware digital presence.",
    contribution:
      "Designed and implemented the website experience for the delivered business presence.",
    implementation:
      "The public case study only describes the confirmed website and communication purpose; unsupported stack details are omitted.",
    outcome:
      "Delivered and in use. No business results are inferred from the artwork.",
  }),
  makeProject({
    id: "arn",
    number: "04",
    title: "ARN Auto Service",
    slug: "arn-auto-service",
    category: "Business Website",
    status: "Business Pitch Concept",
    statusType: "pitch",
    featured: true,
    short:
      "An automotive service website concept focused on presenting vehicle maintenance services and creating clear customer enquiry pathways.",
    focus: ["Web development", "Responsive UI", "Business presence"],
    theme: "mint",
    kind: "web",
    thumbnail: "/project-thumbnails/arn-auto-service.webp",
    challenge:
      "Service businesses need customers to understand what they offer and how to get in touch.",
    approach:
      "An independently developed website solution with attention to service presentation, enquiry pathways, and a clear customer journey.",
    detail:
      "A self-initiated business pitch concept. It is not presented as commissioned, adopted, or currently used by the business.",
    overview:
      "ARN Auto Service explores a clear digital front door for an automotive service business.",
    contribution:
      "Developed the frontend concept, responsive layout, and business-focused presentation.",
    implementation:
      "The implementation emphasizes visual direction, responsive UI, service clarity, and enquiry-oriented interaction.",
    outcome:
      "Independent Business Pitch Concept. It demonstrates a proposed solution rather than an adopted client website.",
  }),
  pitch({
    id: "adire",
    number: "05",
    title: "ADIRE",
    slug: "adire",
    category: "Business Website",
    short:
      "A fashion-oriented website concept exploring premium editorial presentation and African fashion branding.",
    focus: [],
    theme: "deep",
    kind: "web",
    thumbnail: "/project-thumbnails/adire.webp",
    challenge:
      "A fashion brand needs a distinctive digital presentation that lets its identity and collection lead the experience.",
    approach:
      "An independently developed editorial website concept for presenting African fashion with a premium visual direction.",
    detail:
      "Self-initiated business solution; not presented as commissioned or adopted work.",
    overview:
      "ADIRE explores African fashion branding through an editorial, collection-led website experience.",
    contribution:
      "Developed the visual direction and frontend experience for the concept.",
    implementation:
      "The concept focuses on responsive presentation, hierarchy, and fashion-oriented storytelling.",
    outcome: "Independent Business Pitch Concept.",
  }),
  pitch({
    id: "camcornea",
    number: "06",
    title: "Camcornea Concepts",
    slug: "camcornea-concepts",
    category: "Business Website",
    short:
      "A photography and videography website concept emphasizing visual storytelling, creative services, and booking enquiries.",
    focus: [],
    theme: "deep",
    kind: "web",
    thumbnail: "/project-thumbnails/camcornea-concepts.webp",
    challenge:
      "Creative services need a visual-first way to communicate quality while making the next enquiry step obvious.",
    approach:
      "An independently developed portfolio concept centered on imagery, service storytelling, and booking intent.",
    detail:
      "Self-initiated business solution; not presented as commissioned or adopted work.",
    overview:
      "Camcornea Concepts presents photography and videography services through a visual storytelling experience.",
    contribution:
      "Developed the visual presentation and enquiry-oriented frontend concept.",
    implementation:
      "The interface is organized around a strong visual hero, concise service framing, and booking pathways.",
    outcome: "Independent Business Pitch Concept.",
  }),
  pitch({
    id: "elegance-market",
    number: "07",
    title: "ÉLÉGANCE Market",
    slug: "elegance-market",
    category: "Business Website",
    short:
      "A fashion retail website concept featuring premium product presentation and shopping-oriented user journeys.",
    focus: [],
    theme: "mint",
    kind: "web",
    thumbnail: "/project-thumbnails/elegance-market.webp",
    challenge:
      "A fashion retailer needs product discovery and shopping paths that feel as considered as the products themselves.",
    approach:
      "An independently developed retail concept built around premium presentation and clear shopping journeys.",
    detail:
      "Self-initiated business solution; not presented as commissioned or adopted work.",
    overview:
      "ÉLÉGANCE Market explores a premium storefront experience for men’s and women’s fashion.",
    contribution:
      "Developed the storefront concept and shopping-oriented interface direction.",
    implementation:
      "The concept uses a product-led hero, collection entry points, and a restrained editorial hierarchy.",
    outcome: "Independent Business Pitch Concept.",
  }),
  pitch({
    id: "jara-black-soap",
    number: "08",
    title: "JARA Black Soap",
    slug: "jara-black-soap",
    category: "Business Website",
    short:
      "A skincare brand website concept focused on communicating product value and supporting commerce-oriented browsing.",
    focus: [],
    theme: "mint",
    kind: "web",
    thumbnail: "/project-thumbnails/jara-black-soap.webp",
    challenge:
      "A skincare product needs a clear brand story and an approachable path from product promise to shopping.",
    approach:
      "An independently developed commerce-oriented concept for presenting African skincare with a natural visual language.",
    detail:
      "Self-initiated business solution; not presented as commissioned or adopted work.",
    overview:
      "JARA Black Soap explores a product-led digital experience for an African skincare brand.",
    contribution:
      "Developed the brand presentation and shopping-oriented frontend concept.",
    implementation:
      "The concept combines product messaging, trust cues, and direct shopping calls to action.",
    outcome: "Independent Business Pitch Concept.",
  }),
  pitch({
    id: "soundwave",
    number: "09",
    title: "SoundWave Studios",
    slug: "soundwave-studios",
    category: "Business Website",
    short:
      "A recording studio website concept designed to communicate music production services and encourage booking enquiries.",
    focus: [],
    theme: "blue",
    kind: "web",
    thumbnail: "/project-thumbnails/soundwave-studios.webp",
    challenge:
      "A recording studio needs to make its environment and services feel tangible before a prospective artist books a session.",
    approach:
      "An independently developed studio concept using atmosphere, service framing, and booking-oriented actions.",
    detail:
      "Self-initiated business solution; not presented as commissioned or adopted work.",
    overview:
      "SoundWave Studios presents recording, mixing, and mastering services through an immersive studio experience.",
    contribution:
      "Developed the visual direction and booking-oriented frontend concept.",
    implementation:
      "The interface pairs an atmospheric visual system with service explanation and session enquiry actions.",
    outcome: "Independent Business Pitch Concept.",
  }),
  pitch({
    id: "vegas-properties",
    number: "10",
    title: "Vegas Properties",
    slug: "vegas-properties",
    category: "Business Website",
    short:
      "A luxury real estate website concept emphasizing property discovery, premium presentation, and search-oriented interface design.",
    focus: [],
    theme: "deep",
    kind: "web",
    thumbnail: "/project-thumbnails/vegas-properties.webp",
    challenge:
      "Luxury property discovery needs a polished first impression without making search and filtering feel complicated.",
    approach:
      "An independently developed real estate concept pairing premium presentation with an approachable search entry point.",
    detail:
      "Self-initiated business solution; not presented as commissioned or adopted work.",
    overview:
      "Vegas Properties explores a luxury real estate interface for discovering Las Vegas homes.",
    contribution:
      "Developed the visual direction, property framing, and search-oriented frontend concept.",
    implementation:
      "The concept starts with location, type, price, and bedroom filters to frame a property discovery journey.",
    outcome: "Independent Business Pitch Concept.",
  }),
  pitch({
    id: "zifty-hairs",
    number: "11",
    title: "Zifty Hairs",
    slug: "zifty-hairs",
    category: "Business Website",
    short:
      "A beauty and hair retail website concept showcasing products, brand identity, and shopping-oriented design.",
    focus: [],
    theme: "mint",
    kind: "web",
    thumbnail: "/project-thumbnails/zifty-hairs.webp",
    challenge:
      "A beauty retailer needs a memorable brand experience that helps shoppers move from discovery to purchase.",
    approach:
      "An independently developed retail concept centered on brand identity, product presentation, and a simple shopping action.",
    detail:
      "Self-initiated business solution; not presented as commissioned or adopted work.",
    overview:
      "Zifty Hairs explores a beauty retail experience for wigs and extensions.",
    contribution:
      "Developed the brand presentation and commerce-oriented frontend concept.",
    implementation:
      "The interface prioritizes a strong visual identity, product story, and direct shopping entry point.",
    outcome: "Independent Business Pitch Concept.",
  }),
  makeProject({
    id: "kra8t",
    number: "12",
    title: "KRA8T",
    slug: "kra8t",
    category: "Software Platform",
    status: "In Development",
    statusType: "in-development",
    short:
      "A career-growth platform connecting goals, learning roadmaps, projects, and evidence of progress.",
    focus: ["Product architecture", "Django REST API", "Authentication"],
    theme: "cyan",
    kind: "roadmap",
    challenge:
      "Learning paths can become disconnected from the projects and experience that make progress visible.",
    approach:
      "As part of the KRA8T team, I am working on the platform’s core systems. The documented authentication foundation includes email verification, password recovery, Google sign-in, account linking, and session-based access.",
    detail:
      "KRA8T is active team work, not a finished public launch. The roadmap → learning → projects → portfolio experience is being developed in stages.",
    overview:
      "KRA8T is a larger software product for connecting goals, learning roadmaps, projects, and evidence of progress.",
    contribution:
      "Working on the platform’s core systems, including the documented account and authentication foundation.",
    implementation:
      "The current documented work includes email/password registration, verification, login/logout, password reset, sessions, Google authentication, account linking, and duplicate-account protection. The full platform remains in development.",
    outcome:
      "In Development. It is not presented as finished or publicly launched.",
  }),

  // makeProject({
  //   id: "fixora",
  //   number: "13",
  //   title: "Fixora",
  //   slug: "fixora",
  //   category: "Software Product",
  //   status: "In Development / Not Yet Hosted",
  //   statusType: "in-development",
  //   short:
  //     "A software product currently being explored; public implementation details remain intentionally limited.",
  //   focus: [],
  //   theme: "blue",
  //   kind: "debug",
  //   challenge:
  //     "The product direction is still being shaped, so the public portfolio keeps its description deliberately narrow.",
  //   approach:
  //     "A work-in-progress product exploration with no unsupported feature claims.",
  //   detail:
  //     "Fixora is not yet ready for a production portfolio claim and is not presented as hosted or complete.",
  //   overview: "Fixora is a software product in development.",
  //   contribution:
  //     "The available project information does not support a more detailed public contribution statement yet.",
  //   implementation:
  //     "Implementation details are intentionally omitted until they can be verified.",
  //   outcome: "In Development / Not Yet Hosted.",
  // }),

  makeProject({
    id: "fixora",
    number: "14",
    title: "Fixora",
    slug: "fixora",
    category: "Developer Tooling",
    status: "In Development / Not Yet Hosted",
    statusType: "in-development",
    short:
      "A home for tracking bugs, root causes, and the fixes worth remembering.",
    focus: ["Issue tracking", "API integration", "Developer experience"],
    theme: "blue",
    kind: "debug",
    challenge:
      "Teams fix the same category of bug repeatedly when the cause and solution are not documented.",
    approach:
      "A developer-focused issue-and-fix tracker concept that organizes what failed, why it failed, and what resolved it.",
    detail:
      "This is presented as a project/prototype. It is not represented as a launched commercial product.",
    overview:
      "Fixora is a developer-oriented issue and solution tracker.",
    contribution:
      "Developed the product concept around documenting failures, root causes, and fixes.",
    implementation:
      "The current portfolio description focuses on issue tracking, API integration, and developer experience without claiming a launched product.",
    outcome:
      "Project / Prototype. Current status is not presented as a production launch.",
  }),
];

projects.forEach((project) => {
  project.liveUrl = liveUrlsById[project.id];
});
