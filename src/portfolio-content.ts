/**
 * Content source for zoe.. — edit this file to personalize the website.
 * Only projects and facts previously described by Zoe are included. Any missing
 * public links, case-study evidence, and contact details are intentionally blank.
 */
export const identity = {
  name: 'zoe..',
  fullName: 'Zoe',
  role: 'Software developer & product builder',
  location: 'Based in Nigeria · Working on the web',
  headline: ['SOFTWARE', 'THAT SOLVES', 'REAL PROBLEMS.'],
  introduction: 'I build web applications, internal tools and practical digital solutions for businesses.',
  bio: 'Developer by craft. Problem-solver by instinct. I build products and systems at the intersection of engineering and business.',
  email: 'elijah7525@gmail.com',
  github: 'https://github.com/zoe-75',
  x: 'https://x.com/buildwithzoe',
  whatsapp: '+234 916 520 1092',
  linkedin: 'https://www.linkedin.com/in/zoe-elijah',
}

export const heroStatistics = [
  { value: '+2', label: 'YEARS OF EXPERIENCE' },
  { value: '+10', label: 'DELIVERED PROJECTS' },
  { value: '+13', label: 'WORLDWIDE CLIENTS' },
] as const

export type Project = {
  id: string
  number: string
  title: string
  short: string
  category: string
  status: string
  focus: string[]
  theme: 'cyan' | 'deep' | 'mint' | 'blue'
  kind: 'roadmap' | 'dashboard' | 'web' | 'debug'
  challenge: string
  approach: string
  detail: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'kra8t', number: '01', title: 'KRA8T', category: 'Product engineering', status: 'In development',
    short: 'A career-growth platform connecting goals, learning roadmaps, projects, and evidence of progress.',
    focus: ['Product architecture', 'Django REST API', 'Authentication'], theme: 'cyan', kind: 'roadmap',
    challenge: 'Learning paths can become disconnected from the projects and experience that make progress visible.',
    approach: 'As part of the KRA8T team, I am working on the platform’s core systems. The authentication foundation supports email verification, password recovery, Google sign-in, account linking, and session-based access.',
    detail: 'KRA8T is active team work, not a finished public launch. The roadmap → learning → projects → portfolio experience is being developed in stages.',
  },
  {
    id: 'brm', number: '02', title: 'BRM Performance Analyzer', category: 'Internal tools / reporting', status: 'Built work',
    short: 'Turning performance-report data into clearer rankings, metrics, and dashboards for decision-making.',
    focus: ['Python', 'Data processing', 'Reporting'], theme: 'deep', kind: 'dashboard',
    challenge: 'Performance information trapped in reports is hard to compare and time-consuming to interpret.',
    approach: 'An analysis workflow focused on extracting information from PDF reports, organizing performance measures, and making results easier to review through rankings and visual summaries.',
    detail: 'The illustration shown on this site is a conceptual interface, not an exported screenshot or a claim about production deployment.',
  },
  {
    id: 'arn', number: '03', title: 'ARN Auto Service', category: 'Business website', status: 'Selected work',
    short: 'A clearer digital front door for an automotive service business.',
    focus: ['Web development', 'Responsive UI', 'Business presence'], theme: 'mint', kind: 'web',
    challenge: 'Service businesses need customers to understand what they offer and how to get in touch.',
    approach: 'A business-focused website project, with attention to presentation, service clarity, and the customer journey.',
    detail: 'Project screenshots and a full case study can be added once supporting assets are available.',
  },
  {
    id: 'why-break', number: '04', title: 'Why Did It Break?', category: 'Developer tooling', status: 'Project / prototype',
    short: 'A home for tracking bugs, root causes, and the fixes worth remembering.',
    focus: ['Issue tracking', 'API integration', 'Developer experience'], theme: 'blue', kind: 'debug',
    challenge: 'Teams fix the same category of bug repeatedly when the cause and solution are not documented.',
    approach: 'A developer-focused issue-and-fix tracker concept that organizes what failed, why it failed, and what resolved it.',
    detail: 'This is presented as a project/prototype. It is not represented as a launched commercial product.',
  },
]

export const services = [
  { number: '01', title: 'Web applications', desc: 'Web platforms and products with clear user journeys and dependable backends.', tags: 'PRODUCTS / SAAS / PLATFORMS', icon: 'app' },
  { number: '02', title: 'Internal tools', desc: 'Dashboards, admin systems, and reporting tools for usable workflows.', tags: 'DASHBOARDS / OPERATIONS', icon: 'chart' },
  { number: '03', title: 'Workflow automation', desc: 'Connect services and data to reduce repetitive manual work.', tags: 'AUTOMATION / INTEGRATIONS', icon: 'flow' },
  { number: '04', title: 'Business websites', desc: 'Fast, responsive websites that clarify an offer and guide customers to the next step.', tags: 'WEB / CONVERSION', icon: 'globe' },
] as const

export const principles = [
  { number: '01', title: 'Understand the bottleneck', desc: 'Start with the workflow, the people using it, and the cost of the current way of working.' },
  { number: '02', title: 'Design the system', desc: 'Translate the problem into clear requirements, data models, boundaries, and a sensible first version.' },
  { number: '03', title: 'Build for actual use', desc: 'Implement the interface, APIs, and integrations with testable behavior and thoughtful edge cases.' },
  { number: '04', title: 'Refine from evidence', desc: 'Improve usability and reliability using feedback, measurement, and what the system reveals.' },
]

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  periodNote?: string
  description: string
  contributions: string[]
  isCurrent: boolean
  status?: string
  projectUrl?: string
  companyUrl?: string
}

export const experiences: Experience[] = [
  {
    id: 'kra8t-africa',
    company: 'KRA8T Africa',
    role: 'Software Developer',
    period: '2026 – Present',
    description: 'Contributing to KRA8T, a platform for structured learning, practical projects, and career development.',
    contributions: [
      'Developing and implementing application functionality.',
      'Working on backend systems and authentication flows.',
      'Contributing to the platform\'s technical implementation and ongoing development.',
      'Verified work includes registration, email verification, login, password recovery, sessions, and Google authentication.',
    ],
    isCurrent: true,
    status: 'Ongoing',
    projectUrl: '/projects/kra8t',
  },
  {
    id: 'mahilla-digital-consult',
    company: 'Mahilla Digital Consult',
    role: 'Web Developer',
    period: '2026 – Present',
    description: 'Built Mahilla Digital Consult\'s corporate website to present its services and support client enquiries.',
    contributions: [
      'Website design and development.',
      'Responsive frontend implementation.',
      'Corporate digital presence and service presentation.',
      'Client enquiry pathways.',
    ],
    isCurrent: true,
    status: 'Ongoing organizational involvement',
    
    companyUrl: 'https://mahilladigitalconsult.netlify.app/',
  },
  {
    id: 'moniepoint-microfinance-bank',
    company: 'Moniepoint Microfinance Bank',
    role: 'Technical Assistant & Personal Assistant to Cluster Manager',
    period: '2025 – 2026',
    periodNote: 'Dates to confirm',
    description: 'Supported a cluster manager with technical, administrative, reporting, and operational work.',
    contributions: [
      'Technical and administrative assistance.',
      'Support for operational coordination.',
      'Exposure to business reporting and performance-related processes.',
      'Practical understanding of organizational workflows.',
    ],
    isCurrent: false,
    companyUrl: 'https://www.moniepoint.com/',
  },
  {
    id: 'success-world-of-technologies',
    company: 'Success World of Technologies',
    role: 'Web Development Intern',
    period: '2024 – 2025',
    periodNote: 'Dates to confirm',
    description: 'Built foundational web-development experience through practical implementation and professional workflows.',
    contributions: [
      'Web development practice.',
      'Frontend implementation.',
      'Building technical skills through practical work.',
      'Learning development processes and problem-solving.',
    ],
    isCurrent: false,
  },
]

export const tools = [
  { name: 'Python', category: 'Backend & automation', icon: 'python', color: '#3776AB' },
  { name: 'Django', category: 'Backend framework', icon: 'django', color: '#44B78B' },
  { name: 'Django REST', category: 'API development', icon: 'api', color: '#A30000' },
  { name: 'React', category: 'Frontend engineering', icon: 'react', color: '#61DAFB' },
  { name: 'TypeScript', category: 'Typed interfaces', icon: 'typescript', color: '#3178C6' },
  { name: 'JavaScript', category: 'Web applications', icon: 'javascript', color: '#F7DF1E' },
  { name: 'PostgreSQL', category: 'Database design', icon: 'postgres', color: '#4169E1' },
  { name: 'Git', category: 'Version control', icon: 'git', color: '#F05032' },
  { name: 'Bootstrap', category: 'Responsive UI', icon: 'bootstrap', color: '#7952B3' },
  { name: 'HTML / CSS', category: 'Web foundations', icon: 'html', color: '#E34F26' },
  { name: 'Vite', category: 'Frontend tooling', icon: 'vite', color: '#A78BFA' },
  { name: 'REST APIs', category: 'Integration patterns', icon: 'api', color: '#30D9E8' },
] as const

export type Note = { id: string; title: string; eyebrow: string; summary: string; paragraphs: string[] }
export const notes: Note[] = [
  {
    id: 'workflows', eyebrow: 'SYSTEMS THINKING · 03 MIN READ', title: 'A messy process does not become good just because you automate it.',
    summary: 'Why the most important part of building an internal tool happens before writing the first line of code.',
    paragraphs: [
      'Automation makes a process run faster. It does not automatically make the process correct. If the workflow contains duplicated approvals, unclear ownership, or inconsistent data, software can amplify those problems.',
      'Start by mapping what triggers the work, what information people need, where decisions happen, and what success looks like. Only then decide which steps should be automated.',
      'The strongest internal tools are often simple systems built around a deeply understood operational problem.',
    ],
  },
  {
    id: 'auth', eyebrow: 'BACKEND ENGINEERING · 04 MIN READ', title: 'Authentication is not just a login page.',
    summary: 'A reliable account system has to work beyond the happy path.',
    paragraphs: [
      'A sign-in button is the visible part of a much larger system. User identity, email verification, password recovery, sessions, and account linking have to agree on who the user is.',
      'Consider what happens when someone registers with email and later tries to use Google with the same address. A sound design handles identity association intentionally rather than blindly creating another account.',
      'Good authentication design begins with the states and failure cases, not the appearance of the form.',
    ],
  },
  {
    id: 'business', eyebrow: 'TECH × BUSINESS · 03 MIN READ', title: 'A dashboard is useful only when it changes a decision.',
    summary: 'The difference between displaying data and creating operational clarity.',
    paragraphs: [
      'A dashboard that shows everything often helps nobody. People need to know what changed, what needs attention, and which action the information supports.',
      'Useful reporting groups metrics around questions: Who needs support? Where is performance improving? Which work is blocked? Clear comparisons matter more than decorative charts.',
      'A business system succeeds when it removes ambiguity from real work, not when it merely looks technically impressive.',
    ],
  },
]
