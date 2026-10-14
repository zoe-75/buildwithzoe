import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  Flame,
  FolderKanban,
  Github,
  Globe2,
  Home,
  Layers3,
  MessageSquare,
  Network,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  SiBootstrap,
  SiDjango,
  SiGit,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";import {
  identity,
  experiences,
  notes,
  principles,
  services,
  tools,
  type Note,
} from "./portfolio-content";
import { projects, type Project, type ProjectStatus } from "./projects-data";
import styles from "./Page.module.css";
import "./theme.css";

const navItems: { label: string; id: string; icon: LucideIcon }[] = [
  { label: "Home", id: "home", icon: Home },
  { label: "Projects", id: "projects", icon: FolderKanban },
  { label: "Services", id: "services", icon: Blocks },
  { label: "About", id: "about", icon: BriefcaseBusiness },
  { label: "Toolbox", id: "toolbox", icon: Wrench },
  { label: "Notes", id: "notes", icon: BookOpen },
  { label: "Contact", id: "contact", icon: MessageSquare },
];

type Detail = { type: "project"; item: Project } | { type: "note"; item: Note };

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -35px 0px" }}
      transition={{
        duration: reduced ? 0 : 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={small ? styles.brandMarkSmall : styles.brandMark}
      aria-label="zoe.."
    >
      zoe<span aria-hidden="true">..</span>
    </span>
  );
}

function Navigation({ active, baseHref = "" }: { active: string; baseHref?: string }) {
  return (
    <header className={styles.navWrap}>
      <span className={styles.navBrandSpacer} aria-hidden="true" />
      <nav className={styles.nav} aria-label="Primary navigation">
        {navItems.map(({ label, id, icon: Icon }) => (
          <a
            key={id}
            href={baseHref ? (id === "projects" ? "/projects" : `/#${id}`) : `#${id}`}
            aria-label={label}
            aria-current={active === id ? "location" : undefined}
            className={`${styles.navLink} ${active === id ? styles.navLinkActive : ""}`}
            title={label}
          >
            <Icon size={19} strokeWidth={1.9} />
            <span className={styles.navHint}>{label}</span>
          </a>
        ))}
      </nav>
      <a className={styles.navCta} href={baseHref ? "/#contact" : "#contact"}>
        Let's talk <ArrowUpRight size={15} />
      </a>
    </header>
  );
}

function Profile() {
  const social = [
    { label: "WhatsApp", url: getWhatsAppHref(identity.whatsapp), icon: FaWhatsapp },
    { label: "X", url: identity.x, icon: FaXTwitter },
    { label: "LinkedIn", url: identity.linkedin, icon: FaLinkedinIn },
  ];

  return (
    <motion.aside
      className={styles.profileCard}
      aria-label="Profile"
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.profilePortraitWrap}>
        <img
          className={styles.profilePortrait}
          src="/assets/zoe-portrait.jpg"
          alt="Illustrated portrait of Zoe, wearing a dark sweater and cap"
        />
      </div>
      <div className={styles.profileBody}>
        <div className={styles.profileNameRow}>
          <h2>
            zoe<span>..</span>
          </h2>
        </div>
        <span className={styles.profileAccent} aria-hidden="true">
          <Flame size={17} strokeWidth={2.2} />
        </span>
        <p className={styles.profileRole}>
          Software developer building web applications, internal tools, and
          automation solutions for businesses.
        </p>
        {social.length > 0 && (
          <div className={styles.profileBottom}>
            <div className={styles.socialLinks}>
              {social.map(({ label, url, icon: Icon }) =>
                url ? (
                  <a
                    href={url}
                    key={label}
                    aria-label={label}
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon size={17} />
                  </a>
                ) : (
                  <span
                    key={label}
                    className={styles.socialLinkDisabled}
                    role="img"
                    aria-label={label + " link not configured"}
                    title={"Add your " + label + " URL in portfolio-content.ts"}
                  >
                    <Icon size={17} />
                  </span>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </motion.aside>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className={styles.eyebrow}>
      <span className={styles.eyebrowLine} />
      {children}
    </div>
  );
}
function SectionHeading({
  title,
  description,
}: {
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal className={styles.sectionHeading}>
      <div className={styles.sectionHeadingRow}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </Reveal>
  );
}
function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <Reveal>
        <div className={styles.heroTopline}>
          {/* <span className={styles.heroStatus}>
            <span /> SOFTWARE / SYSTEMS / SOLUTIONS
          </span>
          <span className={styles.heroCoordinates}>EST. IN CURIOSITY ↗</span> */}
        </div>
      </Reveal>
      <div className={styles.heroTitleBlock}>
        <motion.h1
          id="hero-heading"
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>
            I BUILD <em className={styles.heroMuted}>SOFTWARE</em>
          </span>
          <span>
            THAT <em className={styles.heroAccent}>SOLVES</em> REAL
          </span>
          <span className={styles.heroLast}>
            BUSINESS <em className={styles.heroMuted}>PROBLEMS</em><span className={styles.heroPeriod}>.</span>
          </span>
        </motion.h1>
        <motion.div
          className={styles.heroAfterTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className={styles.heroPlus}>＋</span>
          <span>
            BUILDING USEFUL THINGS
            <br />
            FOR AN INCREASINGLY DIGITAL WORLD
          </span>
        </motion.div>
      </div>
      <Reveal delay={0.12} className={styles.heroDescriptionRow}>
        <div className={styles.heroDescription}>
          <span className={styles.descriptionMarker}>↳</span>
          <p>{identity.introduction}</p>
        </div>
        <a
          href="#projects"
          className={styles.heroCircleCta}
          aria-label="Scroll to selected work"
        >
          <ArrowDownRight size={25} strokeWidth={1.6} />
        </a>
      </Reveal>
      <Reveal delay={0.14} className={styles.heroActions}>
        <a className={styles.primaryButton} href="#projects">
          Explore selected work <ArrowUpRight size={19} />
        </a>
        <a className={styles.secondaryButton} href="#contact">
          Let's talk about your idea <ArrowRight size={17} />
        </a>
      </Reveal>
      <Reveal className={styles.heroTicker}>
        <span>
          <span className={styles.tickerPill} /> WHAT I WORK ON
        </span>
        <strong>WEB APPLICATIONS</strong>
        <span className={styles.tickerStar}>✳</span>
        <strong>INTERNAL TOOLS</strong>
        <span className={styles.tickerStar}>✳</span>
        <strong>AUTOMATION</strong>
      </Reveal>
    </section>
  );
}

function ServiceGraphic({ type }: { type: (typeof services)[number]["icon"] }) {
  if (type === "app")
    return (
      <div className={styles.graphicApp} aria-hidden="true">
        <div className={styles.graphicWindowTop}>
          <i />
          <i />
          <i />
          <span>workspace / overview</span>
        </div>
        <div className={styles.graphicAppColumns}>
          <div>
            <span />
            <span />
            <span />
          </div>
          <div>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={styles.graphicChart}>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  if (type === "chart")
    return (
      <div className={styles.graphicDash} aria-hidden="true">
        <div className={styles.chartOrb}>
          <span>↗</span>
        </div>
        <div className={styles.graphicBars}>
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className={styles.graphicMiniText}>INSIGHT → ACTION</span>
      </div>
    );
  if (type === "flow")
    return (
      <div className={styles.graphicFlow} aria-hidden="true">
        <span>
          <Network size={26} />
        </span>
        <i />
        <span>
          <Database size={26} />
        </span>
        <i />
        <span>
          <Check size={26} />
        </span>
      </div>
    );
  return (
    <div className={styles.graphicWeb} aria-hidden="true">
      <Globe2 size={120} strokeWidth={0.8} />
      <span className={styles.graphicWebDot}>◆</span>
      <span className={styles.graphicWebTag}>YOU'RE ONLINE ↗</span>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className={styles.section}>
      <SectionHeading
        title={
          <>
            Digital solutions. <span>Not just websites.</span>
          </>
        }
        description="From a first customer interaction to the systems running behind the scenes."
      />
      <div className={styles.servicesGrid}>
        {services.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 0.055}>
            <article
              className={`${styles.serviceCard} ${idx === 0 ? styles.serviceCyan : ""} ${idx === 1 ? styles.serviceNavy : ""} ${idx === 2 ? styles.serviceTeal : ""} ${idx === 3 ? styles.serviceWeb : ""}`}
            >


              <ServiceGraphic type={item.icon} />
              <div className={styles.serviceBottom}>
                <span className={styles.serviceTag}>{item.tags}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.thumbnail)
    return (
      <div className={`${styles.projectArt} ${styles.thumbnailArt}`}>
        <img
          src={project.thumbnail}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
      </div>
    );
  if (project.kind === "roadmap")
    return (
      <div
        className={`${styles.projectArt} ${styles.artRoadmap}`}
        aria-hidden="true"
      >
        <div className={styles.visualOrbA} />
        <div className={styles.visualOrbB} />
        <div className={styles.mockWindow}>
          <div className={styles.mockTop}>
            <span className={styles.mockDots}>● ● ●</span>
            <span>kra8t / pathway</span>
            <span>↗</span>
          </div>
          <div className={styles.roadmapMain}>
            <div className={styles.roadmapHeader}>
              YOUR PATH <span>↗</span>
            </div>
            <div className={styles.roadmapSteps}>
              <div>
                <span className={styles.roadmapNode}>✓</span>
                <span>GOAL</span>
              </div>
              <i />
              <div>
                <span className={styles.roadmapNode}>2</span>
                <span>LEARN</span>
              </div>
              <i />
              <div>
                <span className={styles.roadmapNode}>3</span>
                <span>BUILD</span>
              </div>
            </div>
            <div className={styles.roadmapBlocks}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className={styles.visualStamp}>PATH → PROGRESS</div>
      </div>
    );
  if (project.kind === "dashboard")
    return (
      <div
        className={`${styles.projectArt} ${styles.artDashboard}`}
        aria-hidden="true"
      >
        <div className={styles.mockWindow}>
          <div className={styles.mockTop}>
            <span className={styles.mockDots}>● ● ●</span>
            <span>performance / analysis</span>
            <span>↗</span>
          </div>
          <div className={styles.dashPreview}>
            <div className={styles.dashTop}>
              <span>PERFORMANCE OVERVIEW</span>
              <span>◉</span>
            </div>
            <div className={styles.dashMiniTiles}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.dashGraph}>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className={styles.dashGrid}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className={styles.visualStamp}>DATA → CLARITY</div>
      </div>
    );
  if (project.kind === "web")
    return (
      <div
        className={`${styles.projectArt} ${styles.artWeb}`}
        aria-hidden="true"
      >
        <div className={styles.webShowcase}>
          <div className={styles.mockTop}>
            <span className={styles.mockDots}>● ● ●</span>
            <span>arn / auto service</span>
            <span>↗</span>
          </div>
          <div className={styles.webMockNav}>
            ARN<span>SERVICES &nbsp; ABOUT &nbsp; CONTACT</span>
          </div>
          <div className={styles.webMockBody}>
            <small>BUILT AROUND TRUST.</small>
            <strong>
              SERVICE.
              <br />
              DONE RIGHT.
            </strong>
            <span>EXPLORE SERVICES ↗</span>
          </div>
          <div className={styles.webWheels}>
            <div />
            <div />
          </div>
        </div>
        <div className={styles.visualStamp}>SERVICE → CONNECTION</div>
      </div>
    );
  return (
    <div
      className={`${styles.projectArt} ${styles.artDebug}`}
      aria-hidden="true"
    >
      <div className={styles.debugMock}>
        <div className={styles.mockTop}>
          <span className={styles.mockDots}>● ● ●</span>
          <span>issue log / terminal</span>
          <span>⌘</span>
        </div>
        <div className={styles.debugRows}>
          <div>
            <span>●</span> ISSUE LOGGED <i>OPEN</i>
          </div>
          <div>
            <span>↳</span> TRACE ROOT CAUSE
          </div>
          <div>
            <span>✓</span> FIX DOCUMENTED <i>RESOLVED</i>
          </div>
        </div>
        <div className={styles.debugPrompt}>
          $ <b>document --what-broke</b>
          <span>▋</span>
        </div>
      </div>
      <div className={styles.visualStamp}>BUG → LEARNING</div>
    </div>
  );
}

function Projects({ onSelect }: { onSelect: (detail: Detail) => void }) {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section id="projects" className={styles.section}>
      <SectionHeading
        title={
          <>
            Work with a <span>reason to exist.</span>
          </>
        }
        description="A mix of business systems, product engineering, and practical problem-solving. No invented numbers, no filler."
      />
      <div className={styles.projectGrid}>
        {featuredProjects.map((project, idx) => (
          <Reveal key={project.id} delay={(idx % 2) * 0.09}>
            <motion.button
              type="button"
              className={styles.projectCard}
              onClick={() => onSelect({ type: "project", item: project })}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              aria-label={`View ${project.title} project details`}
            >
              <div className={styles.projectVisualWrap}>
                <ProjectVisual project={project} />
                <span className={styles.projectVisit}>
                  <ArrowUpRight size={21} />
                </span>
                {!project.thumbnail && <span className={styles.conceptLabel}>ILLUSTRATIVE UI</span>}
              </div>
              <div className={styles.projectMeta}>
                <span>
                  {project.number} / {project.category}
                </span>
                <span className={styles.projectStatus}>
                  <i />
                  {project.status}
                </span>
              </div>
              <div className={styles.projectTitleRow}>
                <h3>{project.title}</h3>
                <ArrowUpRight size={21} />
              </div>
              <p className={styles.projectShort}>{project.short}</p>
              <div className={styles.projectTags}>
                {project.focus.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>
      <Reveal className={styles.projectsAfter}>
        <span>
          Different problems. Same approach: understand it, design it, make it
          work.
        </span>
        <div className={styles.projectsAfterActions}>
          <a href="/projects">View All Projects <ArrowUpRight size={16} /></a>
          <a href="#contact">Have a problem worth solving? <ArrowUpRight size={16} /></a>
        </div>
      </Reveal>
    </section>
  );
}

function Focus() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeading
        title={
          <>
            Engineering is the craft.{" "}
            <span>Solving the problem is the job.</span>
          </>
        }
      />
      <Reveal className={styles.focusStatement}>
        <div className={styles.focusLabel}>
          <span className={styles.focusPulse} />
          <span>THE APPROACH</span>
        </div>
        <p>
          I'd rather understand <em>why</em> something needs to exist than rush
          to build another feature. Great software makes complex work feel
          simpler.
        </p>
        {/* <div className={styles.focusDecoration}>[ THINK → DESIGN → BUILD ]</div> */}
      </Reveal>
      <div className={styles.experienceSplit}>
        <Reveal className={styles.currentCard}>
          <div className={styles.currentTop}>
            <span>IN THE WORKSHOP NOW</span>
            <TerminalSquare size={19} />
          </div>
          <span className={styles.currentPill}>
            <span /> ACTIVE BUILD
          </span>
          <h3>KRA8T</h3>
          <p>
            Working with a great team on a career-growth product. Building the
            foundations for authentication, learning roadmaps, and the
            experience that connects learning to demonstrated work.
          </p>
          <div className={styles.currentStack}>
            <span>PRODUCT ENGINEERING</span>
            <span>BACKEND SYSTEMS</span>
          </div>
          <div className={styles.currentGlyph}>⌘</div>
        </Reveal>
        <Reveal className={styles.processList}>
          <div className={styles.processIntro}>
            A PRACTICAL PROCESS / 4 STEPS
          </div>
          {principles.map((item) => (
            <div key={item.number} className={styles.processItem}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="experience" className={`${styles.section} ${styles.experienceSection}`}>
      <SectionHeading
        title={
          <>
            Where I&apos;ve <span>worked.</span>
          </>
        }
        description="From building digital experiences to supporting business operations and developing software systems, each role has shaped how I approach solving problems with technology."
      />
      <div className={styles.experienceList}>
        {experiences.map((item, index) => (
          <Reveal
            key={item.id}
            className={styles.experienceEntry}
            delay={index * 0.07}
          >
            <p className={styles.experienceCompany}>{item.company}</p>
            <h3 className={styles.experienceRole}>{item.role}</h3>
            <div className={styles.experienceMeta}>
              <span className={styles.experiencePeriod}>{item.period}</span>
              {item.periodNote && <span className={styles.experiencePeriodNote}>{item.periodNote}</span>}
              {item.isCurrent && item.status && (
                <span className={styles.experienceStatus}>
                  <i /> {item.status}
                </span>
              )}
            </div>
            <div className={styles.experienceDetails}>
              <p className={styles.experienceDescription}>{item.description}</p>
              <ul className={styles.experienceContributions}>
                {item.contributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
              {/* {item.projectUrl && (
                <a className={styles.experienceProject} href={item.projectUrl}>
                  View Project <ArrowRight size={15} />
                </a>
              )} */}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const logoMap: Record<string, ReactNode> = {
  python: <SiPython />,
  django: <SiDjango />,
  react: <SiReact />,
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  postgres: <SiPostgresql />,
  git: <SiGit />,
  bootstrap: <SiBootstrap />,
  html: <SiHtml5 />,
  vite: <SiVite />,
  api: <Code2 size={26} strokeWidth={1.9} />,
};
function Toolbox() {
  return (
    <section id="toolbox" className={styles.section}>
      <SectionHeading
        title={
          <>
            The tools change. <span>The thinking stays.</span>
          </>
        }
        description="Tools I use across frontend development, backend systems, databases, and integration work."
      />
      <div className={styles.toolsGrid}>
        {tools.map((tool, index) => (
          <Reveal key={tool.name} delay={(index % 4) * 0.035}>
            <div className={styles.toolCard}>
              <div
                className={styles.toolIcon}
                style={{ "--icon-color": tool.color } as CSSProperties}
              >
                {logoMap[tool.icon]}
              </div>
              <div>
                <strong>{tool.name}</strong>
                <span>{tool.category}</span>
              </div>


            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className={styles.toolFooter}>
        <ShieldCheck size={18} /> Software decisions start with the problem, not
        the trendiest framework.
      </Reveal>
    </section>
  );
}

function Notes({ onSelect }: { onSelect: (detail: Detail) => void }) {
  return (
    <section id="notes" className={styles.section}>
      <SectionHeading
        title={
          <>
            Thoughts from <span>behind the screen.</span>
          </>
        }
        description="A place for what I'm studying, building, questioning, and learning about software and business."
      />
      <div className={styles.notesList}>
        {notes.map((note, idx) => (
          <Reveal key={note.id} delay={idx * 0.06}>
            <button
              type="button"
              onClick={() => onSelect({ type: "note", item: note })}
              className={styles.noteCard}
              aria-label={`Read note: ${note.title}`}
            >

              <div className={styles.noteText}>
                <div className={styles.noteMeta}>
                  {note.eyebrow.split("·").map((item) => item.trim()).map((item, itemIndex) => (
                    <span key={`${note.id}-${itemIndex}`}>{item}</span>
                  ))}
                </div>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
              </div>
              <span className={styles.noteArrow} aria-hidden="true">
                <ArrowUpRight size={21} />
              </span>

            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactAction({
  configured,
  href,
  icon,
  title,
  description,
  missingLabel,
  external = false,
}: {
  configured: boolean;
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  missingLabel: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className={styles.contactActionIcon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.contactActionCopy}>
        <strong>{title}</strong>
        <span>{description}</span>
      </span>
      <ArrowUpRight className={styles.contactActionArrow} size={20} aria-hidden="true" />
    </>
  );

  if (!configured) {
    return (
      <span
        className={`${styles.contactAction} ${styles.contactActionDisabled}`}
        aria-disabled="true"
        title={missingLabel}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      className={styles.contactAction}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

function Contact() {
  const email = identity.email.trim();
  const whatsappHref = getWhatsAppHref(identity.whatsapp);

  return (
    <section id="contact" className={styles.section}>
      <Reveal className={styles.contactBody}>
        <div className={styles.contactSide}>
          <h3>Good projects start with good questions.</h3>
          <p>
            No vague promises. Tell me what's not working, what you're trying to
            build, and what a better outcome would look like.
          </p>
        </div>
        <div className={styles.contactActions}>
          <ContactAction
            configured={Boolean(email)}
            href={`mailto:${email}`}
            icon={<SiGmail size={25} />}
            title="Send an email"
            description="For project inquiries, collaborations, and opportunities."
            missingLabel="Add a public email address in portfolio-content.ts"
          />
          <ContactAction
            configured={Boolean(whatsappHref)}
            href={whatsappHref}
            icon={<FaWhatsapp size={25} />}
            title="Chat on WhatsApp"
            description="Prefer a quick conversation? Let's talk directly."
            missingLabel="Add a WhatsApp URL or phone number in portfolio-content.ts"
            external
          />
        </div>
      </Reveal>
    </section>
  );
}

function DetailModal({
  detail,
  onClose,
}: {
  detail: Detail | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!detail) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const raf = requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(raf);
      previousFocus.current?.focus();
    };
  }, [detail, onClose]);
  return (
    <AnimatePresence>
      {detail && (
        <motion.div
          className={styles.modalBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-title"
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.modalTop}>
              <BrandMark small />
              <span>DETAIL VIEW / ZOE..</span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>
            {detail.type === "project" ? (
              <div className={styles.modalContent}>
                <Eyebrow>
                  {detail.item.category} / {detail.item.status}
                </Eyebrow>
                <h2 id="detail-title">{detail.item.title}</h2>
                <p className={styles.modalLead}>{detail.item.short}</p>
                <ProjectVisual project={detail.item} />
                <span className={styles.modalCaption}>
                  {detail.item.thumbnail ? "Approved project cover artwork" : "Synthetic public-safe interface illustration"}
                </span>
                <div className={styles.modalSections}>
                  <div>
                    <span>THE PROBLEM</span>
                    <p>{detail.item.challenge}</p>
                  </div>
                  <div>
                    <span>THE APPROACH</span>
                    <p>{detail.item.approach}</p>
                  </div>
                  <div>
                    <span>PROJECT CONTEXT</span>
                    <p>{detail.item.detail}</p>
                  </div>
                </div>
                <div className={styles.modalTags}>
                  {detail.item.focus.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.modalActions}>
                  <a className={styles.primaryButton} href={`/projects/${detail.item.slug}`}>
                    View Full Case Study <ArrowUpRight size={16} />
                  </a>
                  {detail.item.liveUrl && (
                    <a className={styles.secondaryButton} href={detail.item.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visit project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles.modalContent}>
                <Eyebrow>{detail.item.eyebrow}</Eyebrow>
                <h2 id="detail-title">{detail.item.title}</h2>
                <p className={styles.modalLead}>{detail.item.summary}</p>
                <div className={styles.modalNote}>
                  {detail.item.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className={styles.modalEnd}>
                  — END OF NOTE <span>zoe..</span>
                </div>
              </div>
            )}
            <button
              className={styles.modalBack}
              onClick={onClose}
              type="button"
            >
              <ArrowLeft size={17} /> Back to portfolio
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getWhatsAppHref(value: string) {
  const configured = value.trim();
  if (!configured) return "";
  if (configured.startsWith("http")) return configured;
  return `https://wa.me/${configured.replace(/[^\d]/g, "")}`;
}

function SiteFooter() {
  const email = identity.email.trim();
  const footerSocial = [
    { label: "X", href: identity.x.trim(), icon: <FaXTwitter size={17} />, external: true },
    { label: "GitHub", href: identity.github.trim(), icon: <Github size={17} />, external: true },
    { label: "LinkedIn", href: identity.linkedin.trim(), icon: <FaLinkedinIn size={17} />, external: true },
    { label: "Email", href: email ? `mailto:${email}` : "", icon: <SiGmail size={17} />, external: false },
    { label: "WhatsApp", href: getWhatsAppHref(identity.whatsapp), icon: <FaWhatsapp size={17} />, external: true },
  ];
  const exploreLinks = [
    ["Home", "/#home"],
    ["Projects", "/projects"],
    ["Services", "/#services"],
    ["Experience", "/#experience"],
    ["Toolbox", "/#toolbox"],
    ["Notes", "/#notes"],
    ["Contact", "/#contact"],
  ];

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.siteFooterInner}>
        <div className={styles.siteFooterBrand}>
          <BrandMark />
          <p>Building software, systems, and digital experiences that solve real business problems.</p>
          {footerSocial.length > 0 && (
            <div className={styles.siteFooterSocial} aria-label="Social links">
              {footerSocial.map((item) => item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.icon}
                </a>
              ) : (
                <span
                  key={item.label}
                  className={styles.siteFooterSocialDisabled}
                  role="img"
                  aria-label={`${item.label} link not configured`}
                  title={`Configure the ${item.label} destination in portfolio-content.ts`}
                >
                  {item.icon}
                </span>
              ))}
            </div>
          )}
          <div className={styles.siteFooterCopyright}>
            <span>© {new Date().getFullYear()} zoe.. All rights reserved.</span>
          </div>
        </div>
        <nav className={styles.siteFooterNav} aria-label="Explore">
          <span>EXPLORE</span>
          {exploreLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <nav className={styles.siteFooterNav} aria-label="Legal">
          <span>LEGAL</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
        </nav>
      </div>
      <div className={styles.siteFooterSignature} aria-hidden="true">
        <span>BUILD WITH ZOE</span>
      </div>
      <div className={styles.siteFooterCopyright}>
        <span>© {new Date().getFullYear()} zoe.. All rights reserved.</span>
      </div>
    </footer>
  );
}

function Footer() {
  const social = [
    identity.github && { label: "GitHub", url: identity.github },
    identity.x && { label: "X", url: identity.x },
  ].filter((x): x is { label: string; url: string } => Boolean(x));
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBrand}>
        <BrandMark />
        {/* <span>BUILD THINGS THAT MATTER.</span> */}
      </div>
      <div className={styles.footerLinks}>
        <a href="#home">
          Back to top <ArrowUpRight size={15} />
        </a>
        {social.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.label}
          >
            {item.label} <ArrowUpRight size={15} />
          </a>
        ))}
      </div>
      <div className={styles.footerBottom}>
        <span>
          © {new Date().getFullYear()} zoe.. / SOFTWARE & BUSINESS TECHNOLOGY
        </span>
        {/* <span>DESIGNED TO SOLVE, NOT JUST IMPRESS.</span> */}
      </div>
    </footer>
  );
}

export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  return (
    <div className={styles.legalPage}>
      <header className={styles.legalHeader}>
        <a href="/#home" aria-label="zoe.. back to portfolio"><BrandMark small /></a>
        <a className={styles.legalBack} href="/#home"><ArrowLeft size={16} /> Back to portfolio</a>
      </header>
      <main className={styles.legalMain}>
        <Eyebrow>{privacy ? "PRIVACY / PORTFOLIO" : "TERMS / PORTFOLIO"}</Eyebrow>
        <h1>{privacy ? "Privacy Policy" : "Terms & Conditions"}</h1>
        <p className={styles.legalIntro}>
          {privacy ? "A concise explanation of how this personal portfolio handles information." : "The straightforward terms for using this personal portfolio and its project material."}
        </p>
        <p className={styles.legalUpdated}>Last updated October 13, 2026.</p>
        {privacy ? (
          <div className={styles.legalSections}>
            <section><h2>Information you may provide</h2><p>If you choose to contact Zoe, you may provide information such as your name, email address, phone number, WhatsApp details, and the contents of your message. This portfolio does not require an account or ask for information to browse the public pages.</p></section>
            <section><h2>How contact information is used</h2><p>Contact details and messages are used to respond to your request, discuss a potential project, or continue a conversation you have started. They are not used by this site to create a mailing list or for advertising.</p></section>
            <section><h2>External services and links</h2><p>Email, WhatsApp, social networks, and other linked websites are operated by third parties and have their own policies. Once you leave this portfolio, those providers may process information according to their terms.</p></section>
            <section><h2>Cookies, analytics, and technical logs</h2><p>This portfolio currently contains no application code for analytics, advertising, or non-essential tracking cookies. The hosting provider or browser may still process ordinary technical request data needed to deliver the site, and external font or linked services may receive requests when your browser loads them.</p></section>
            <section><h2>Questions</h2><p>For a privacy question, use the contact section of the portfolio when a public contact channel is configured. This policy may be updated if the site’s practices change.</p></section>
          </div>
        ) : (
          <div className={styles.legalSections}>
            <section><h2>Acceptable use</h2><p>You may browse and link to this site for lawful purposes. Do not misuse the site, attempt to disrupt its availability, or use its content to misrepresent a relationship with Zoe.</p></section>
            <section><h2>Content and ownership</h2><p>Original writing, design, code, branding, and project material on this portfolio belong to their respective owners. Please ask before reproducing material beyond ordinary quotation or linking.</p></section>
            <section><h2>Projects and demonstrations</h2><p>Project descriptions and interface illustrations are provided for context. Some are works in progress or conceptual demonstrations and should not be treated as guarantees, production screenshots, or commitments to deliver a particular result.</p></section>
            <section><h2>Availability and external links</h2><p>The site is provided as available and may change or be temporarily unavailable. External links are provided for convenience; Zoe is not responsible for third-party content or availability.</p></section>
            <section><h2>Contact</h2><p>Questions about this website or its content can be raised through the portfolio’s contact section when a public contact channel is configured. These pages do not create a service contract, pricing promise, payment obligation, or refund policy.</p></section>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function statusLabel(status: ProjectStatus) {
  if (status === "delivered") return "Delivered & In Use";
  if (status === "pitch") return "Business Pitch Concepts";
  return "In Development";
}

function ArchiveCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <motion.a
        className={styles.archiveCard}
        href={`/projects/${project.slug}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        aria-label={`Open ${project.title} case study`}
      >
        <div className={styles.archiveVisualWrap}>
          <ProjectVisual project={project} />
          <span className={styles.projectVisit}><ArrowUpRight size={21} /></span>
          {!project.thumbnail && <span className={styles.conceptLabel}>ILLUSTRATIVE UI</span>}
        </div>
        <div className={styles.projectMeta}>
          <span>{project.number} / {project.category}</span>
          <span className={styles.projectStatus}><i />{project.status}</span>
        </div>
        <div className={styles.projectTitleRow}><h3>{project.title}</h3><ArrowUpRight size={21} /></div>
        <p className={styles.projectShort}>{project.short}</p>
        {project.focus.length > 0 && <div className={styles.projectTags}>{project.focus.map((tag) => <span key={tag}>{tag}</span>)}</div>}
      </motion.a>
    </Reveal>
  );
}

export function ProjectsArchive() {
  const [filter, setFilter] = useState<ProjectStatus | "all">("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.statusType === filter);
  useEffect(() => {
    document.title = "Projects — zoe..";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", "A collection of software projects, business websites, digital experiences, and products in development by zoe..");
    return () => { document.title = "zoe.. — Software & business technology"; };
  }, []);
  return (
    <div className={styles.archivePage}>
      <motion.div className={styles.progress} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "0% 50%" }} />
      <Navigation active="projects" baseHref="/" />
      <main className={styles.archiveMain}>
        <header className={styles.archiveHeader}>
          <Eyebrow>PROJECT ARCHIVE / ZOE..</Eyebrow>
          <h1>Things I&apos;ve <span>built.</span></h1>
          <p>A collection of software projects, business websites, digital experiences, and products in development.</p>
        </header>
        <div className={styles.projectFilters} role="group" aria-label="Filter projects">
          {(["all", "delivered", "pitch", "in-development"] as const).map((value) => (
            <button key={value} type="button" className={filter === value ? styles.projectFilterActive : ""} aria-pressed={filter === value} onClick={() => setFilter(value)}>
              {value === "all" ? "All Work" : statusLabel(value)}
            </button>
          ))}
        </div>
        <motion.div className={styles.archiveGrid} layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.28 }}>
                <ArchiveCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  useEffect(() => {
    if (!project) {
      document.title = "Project not found — zoe..";
      return;
    }
    document.title = `${project.title} — zoe..`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", project.short);
    return () => { document.title = "zoe.. — Software & business technology"; };
  }, [project]);
  if (!project) return <ProjectNotFound />;
  const index = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(index + 1) % projects.length];
  return (
    <div className={styles.caseStudyPage}>
      <Navigation active="projects" baseHref="/" />
      <main className={styles.caseStudyMain}>
        <a className={styles.caseBack} href="/projects"><ArrowLeft size={16} /> Back to all projects</a>
        <motion.header className={styles.caseHeader} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <Eyebrow>{project.category} / {project.status}</Eyebrow>
          <h1>{project.title}</h1>
          <p>{project.short}</p>
          <div className={styles.caseTags}>
            <span>{project.status}</span>
            {project.focus.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </motion.header>
        <motion.div className={styles.caseHero} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.6 }}>
          <ProjectVisual project={project} />
        </motion.div>
        <div className={styles.caseBody}>
          <section><Eyebrow>PROJECT OVERVIEW</Eyebrow><p>{project.overview}</p></section>
          <section><Eyebrow>THE BUSINESS PROBLEM / OPPORTUNITY</Eyebrow><p>{project.challenge}</p></section>
          <section><Eyebrow>MY CONTRIBUTION</Eyebrow><p>{project.contribution}</p></section>
          <section><Eyebrow>TECHNICAL IMPLEMENTATION</Eyebrow><p>{project.implementation}</p><p>{project.approach}</p></section>
          <section><Eyebrow>OUTCOME / STATUS</Eyebrow><p>{project.outcome}</p></section>
        </div>
        <nav className={styles.caseNav} aria-label="Project navigation">
          <a href="/projects"><ArrowLeft size={16} /> Back to all projects</a>
          <a href={`/projects/${nextProject.slug}`}>Next project: {nextProject.title} <ArrowRight size={16} /></a>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectNotFound() {
  return (
    <div className={styles.caseStudyPage}>
      <Navigation active="projects" baseHref="/" />
      <main className={styles.notFoundPage}><Eyebrow>PROJECT ARCHIVE / 404</Eyebrow><h1>That project <span>isn&apos;t here.</span></h1><p>The project link may be out of date, or the case study has not been published.</p><a className={styles.primaryButton} href="/projects">Back to all projects <ArrowRight size={17} /></a></main>
      <SiteFooter />
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState("home");
  const [detail, setDetail] = useState<Detail | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 25,
    restDelta: 0.001,
  });
  useEffect(() => {
    const ids = navItems.map((i) => i.id);
    const onScroll = () => {
      const selected = ids.reduce((current, id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.42)
          return id;
        return current;
      }, "home");
      setActive(selected);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={styles.site}>
      <motion.div
        className={styles.progress}
        style={{ scaleX }}
        aria-hidden="true"
      />
      <Navigation active={active} />
      <main className={styles.pageGrid}>
        <div className={styles.sidebar}>
          <Profile />
          <div className={styles.sidebarFoot}>
            {/* <span>DESIGN × ENGINEERING × BUSINESS</span> */}
            {/* <span>↗ 2026</span> */}
          </div>
        </div>
        <div className={styles.content}>
          <Hero />
          <Projects onSelect={setDetail} />
          <Services />
          <Focus />
          <WorkExperience />
          <Toolbox />
          <Notes onSelect={setDetail} />
          <Contact />
        </div>
      </main>
      <SiteFooter />
      <DetailModal detail={detail} onClose={() => setDetail(null)} />
    </div>
  );
}
