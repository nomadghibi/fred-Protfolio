"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  BrainCircuit,
  CloudCog,
  ExternalLink,
  Network,
} from "lucide-react";

const featuredSystems = [
  {
    number: "01",
    name: "CareFlow AI",
    category: "Care intelligence",
    outcome: "Coordinate care operations and turn daily records into actionable resident intelligence.",
    problem: "Care observations, incidents, and notes are fragmented across operational workflows.",
    system: "A care operations platform combining alert triage, incident reporting, shift handoffs, family communication, role-aware dashboards, and grounded AI workflows.",
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
    problem: "Service businesses lose revenue when calls and web leads are not handled immediately.",
    system: "An event-driven front office that follows up, qualifies intent, schedules next steps, and records every interaction in the business workflow.",
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
    problem: "HVAC companies often coordinate field work, customer communication, billing, and maintenance across disconnected tools.",
    system: "A unified field-service SaaS platform with CRM, scheduling, estimates, invoices, subscriptions, and AI-ready automation workflows.",
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
    problem: "Mobility changes are difficult to assess consistently outside specialized environments.",
    system: "A video-processing pipeline that extracts movement signals, runs AI inference, and presents human-readable assessment support.",
    evidence: "A different class of AI system: video, inference, and health UX.",
    tech: ["Computer vision", "Python", "Video", "AI inference", "Health UX"],
    href: "https://safestride-mvp-zncm.vercel.app",
    icon: Network,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, transform: "translateY(20px)" },
  show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] } },
};

export default function SystemCards() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="systems-grid"
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {featuredSystems.map((project) => {
        const Icon = project.icon;
        return (
          <motion.article className="system-card" key={project.name} variants={card}>
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
              {project.tech.map((t) => <span key={t}>{t}</span>)}
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
          </motion.article>
        );
      })}
    </motion.div>
  );
}
