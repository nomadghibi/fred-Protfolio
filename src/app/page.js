import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
  Github,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { profileData } from "./data";

const proofPoints = [
  "Multi-tenant SaaS",
  "Agentic AI",
  "RAG systems",
  "Private LLMs",
  "API architecture",
  "Workflow automation",
];

const featuredSystems = [
  {
    number: "01",
    name: "CareFlow AI",
    category: "Care intelligence",
    outcome: "Coordinate care operations and turn daily records into actionable resident intelligence.",
    problem:
      "Care observations, incidents, and notes are fragmented across operational workflows.",
    system:
      "A care operations platform combining alert triage, incident reporting, shift handoffs, family communication, role-aware dashboards, and grounded AI workflows.",
    evidence: "A live, production-oriented workflow for senior living teams.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "RBAC"],
    href: "https://careflow-ai-web.vercel.app",
    icon: BrainCircuit,
  },
  {
    number: "02",
    name: "AI Front Office",
    category: "Revenue automation",
    outcome: "Recover missed opportunities and qualify leads while teams stay focused.",
    problem:
      "Service businesses lose revenue when calls and web leads are not handled immediately.",
    system:
      "An event-driven front office that follows up, qualifies intent, schedules next steps, and records every interaction in the business workflow.",
    evidence: "From inbound event to qualified, traceable customer action.",
    tech: ["AI agents", "Voice & SMS", "APIs", "CRM", "Automation"],
    href: "https://frontend-five-brown-e6pmozaq6t.vercel.app",
    icon: Bot,
  },
  {
    number: "03",
    name: "HVAC Pro Office",
    category: "Vertical SaaS",
    outcome: "Run customers, jobs, quotes, invoices, and subscriptions from one operational system.",
    problem:
      "HVAC companies often coordinate field work, customer communication, billing, and maintenance across disconnected tools.",
    system:
      "A unified field-service SaaS platform with CRM, scheduling, estimates, invoices, subscriptions, and AI-ready automation workflows.",
    evidence: "A complete vertical business operating system with a live product experience.",
    tech: ["Next.js", "CRM", "Payments", "Scheduling", "Automation"],
    href: "https://hvac-rose.vercel.app",
    icon: CloudCog,
  },
  {
    number: "04",
    name: "SafeStride",
    category: "Computer vision",
    outcome: "Translate movement video into useful gait and fall-risk signals.",
    problem:
      "Mobility changes are difficult to assess consistently outside specialized environments.",
    system:
      "A video-processing pipeline that extracts movement signals, runs AI inference, and presents human-readable assessment support.",
    evidence: "A different class of AI system: video, inference, and health UX.",
    tech: ["Computer vision", "Python", "Video", "AI inference", "Health UX"],
    href: "https://safestride-mvp-zncm.vercel.app",
    icon: Network,
  },
];

const process = [
  {
    step: "01",
    title: "Find the operational problem",
    copy: "Start with the workflow, decision, or bottleneck that creates measurable friction.",
  },
  {
    step: "02",
    title: "Design the system boundary",
    copy: "Define data ownership, actors, permissions, integrations, and reliable failure paths.",
  },
  {
    step: "03",
    title: "Add the right intelligence",
    copy: "Use agents, RAG, automation, or private models only where they improve the workflow.",
  },
  {
    step: "04",
    title: "Ship an operable product",
    copy: "Build for testing, observability, security, and ongoing improvement—not just the demo.",
  },
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-mark" aria-label="Fred Dehnashi home">
          FD<span>.</span>
        </Link>
        <div className="nav-links">
          <Link href="#systems">Systems</Link>
          <Link href="#approach">Approach</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="nav-cta">Start a conversation</Link>
        </div>
      </nav>

      <section className="authority-hero">
        <Image
          src="/background/ai-systems-hero.webp"
          alt="Abstract AI system architecture with connected data and automation nodes"
          fill
          priority
          sizes="100vw"
          className="hero-system-image"
        />
        <div className="hero-system-overlay" />
        <div className="hero-copy">
          <div className="system-status">
            <span /> Neural systems online
          </div>
          <p className="eyebrow">{profileData.role}</p>
          <h1>I build AI-enabled systems that move real work forward.</h1>
          <p className="hero-summary">
            Strategy, architecture, and production-minded engineering for SaaS,
            automation, private AI, and business-critical workflows.
          </p>
          <div className="hero-actions">
            <Link href="#systems" className="button button-primary">
              View flagship systems <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="button button-secondary">
              Work with me
            </Link>
          </div>
          <p className="hero-note">
            Based in {profileData.location} · Building for teams that need more
            than an AI demo
          </p>
        </div>
      </section>

      <section className="proof-band" aria-label="Engineering capabilities">
        <div className="section-kicker">Production-oriented AI systems</div>
        <div className="proof-list">
          {proofPoints.map((point) => (
            <span key={point}><CheckCircle2 size={15} /> {point}</span>
          ))}
        </div>
        <div className="proof-metrics">
          <div><strong>8</strong><span>live AI and SaaS systems showcased</span></div>
          <div><strong>15+</strong><span>years working across technology</span></div>
          <div><strong>Local + cloud</strong><span>LLM deployment patterns</span></div>
        </div>
      </section>

      <section id="systems" className="content-section systems-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured systems</p>
            <h2>Projects framed by the problems they solve.</h2>
          </div>
          <p>
            These are not isolated interfaces. Each project connects data,
            intelligence, software architecture, and operational action.
          </p>
        </div>

        <div className="systems-grid">
          {featuredSystems.map((project) => {
            const Icon = project.icon;
            return (
              <article className="system-card" key={project.name}>
                <div className="card-topline">
                  <span>{project.number} / {project.category}</span>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{project.name}</h3>
                <p className="system-outcome">{project.outcome}</p>
                <dl>
                  <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                  <div><dt>System</dt><dd>{project.system}</dd></div>
                  <div><dt>Evidence</dt><dd>{project.evidence}</dd></div>
                </dl>
                <div className="tech-tags">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="system-live-link"
                  aria-label={`Open the live ${project.name} project`}
                >
                  View live system <ExternalLink size={15} />
                </Link>
              </article>
            );
          })}
        </div>
        <div className="section-action">
          <Link href="/projects" className="text-link">
            Explore the complete project portfolio <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section id="approach" className="content-section architecture-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How I build</p>
            <h2>Intelligence is one layer of a dependable system.</h2>
          </div>
          <p>
            Useful AI is connected to clean data, explicit permissions,
            reliable tools, human review, and measurable business actions.
          </p>
        </div>

        <div className="architecture-panel" aria-label="AI system architecture flow">
          <div className="architecture-node"><span>01</span><strong>Human workflow</strong><small>Users · roles · decisions</small></div>
          <ArrowRight className="architecture-arrow" aria-hidden="true" />
          <div className="architecture-node"><span>02</span><strong>Application</strong><small>Next.js · product UX</small></div>
          <ArrowRight className="architecture-arrow" aria-hidden="true" />
          <div className="architecture-node architecture-core"><span>03</span><strong>AI orchestration</strong><small>Agents · RAG · tools</small></div>
          <ArrowRight className="architecture-arrow" aria-hidden="true" />
          <div className="architecture-node"><span>04</span><strong>Business action</strong><small>APIs · systems · audit</small></div>
          <div className="architecture-foundation">
            <Database size={18} /> PostgreSQL + vector data
            <ShieldCheck size={18} /> Tenant isolation + RBAC
            <Workflow size={18} /> Automation + observability
          </div>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section technology-section">
        <div>
          <p className="eyebrow">Technology with a purpose</p>
          <h2>A practical stack for modern AI products.</h2>
          <p>
            Python and FastAPI for services. Next.js for product experiences.
            PostgreSQL and pgvector for durable, grounded data. OpenAI and local
            models where each makes operational sense.
          </p>
        </div>
        <div className="technology-grid">
          <span><Code2 /> Next.js + React</span>
          <span><CloudCog /> Python + FastAPI</span>
          <span><Database /> PostgreSQL + pgvector</span>
          <span><BrainCircuit /> OpenAI + local LLMs</span>
          <span><Network /> APIs + integrations</span>
          <span><ShieldCheck /> RBAC + tenant isolation</span>
        </div>
      </section>

      <section className="contact-banner">
        <div>
          <p className="eyebrow">Let&apos;s build something useful</p>
          <h2>Have a workflow that AI should make better?</h2>
          <p>
            I help turn ambiguous AI opportunities into clear, secure, and
            operable software systems.
          </p>
        </div>
        <div className="contact-actions">
          <Link href="/contact" className="button button-primary">Start a conversation <ArrowRight size={17} /></Link>
          <Link href={profileData.githubUrl} target="_blank" rel="noreferrer" className="button button-secondary"><Github size={17} /> GitHub</Link>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profileData.name}</span>
        <span>AI systems · SaaS · automation</span>
      </footer>
    </main>
  );
}
