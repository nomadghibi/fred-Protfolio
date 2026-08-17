"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const item = {
  hidden: { opacity: 0, transform: "translateY(16px)" },
  show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } },
};

const ProjectLayout = ({
  name,
  description,
  category,
  tech = [],
  repoLink,
  demoLink,
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.article
      variants={reduce ? undefined : item}
      className="project-card"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ minWidth: 0 }}>
            <p className="eyebrow" style={{ marginBottom: "8px" }}>{category}</p>
            <h2 style={{ margin: 0, color: "white", fontSize: "1.25rem", fontWeight: 580, letterSpacing: "-.025em" }}>
              {name}
            </h2>
            <p style={{ margin: "8px 0 0", color: "#94a3b8", fontSize: ".88rem", lineHeight: 1.65, maxWidth: "65ch" }}>
              {description}
            </p>
          </div>

          <div style={{ display: "flex", flexShrink: 0, gap: "8px" }}>
            {repoLink && (
              <Link
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${name} on GitHub`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(103,232,249,.2)",
                  color: "#94a3b8",
                  transition: "color .15s ease, border-color .15s ease",
                }}
                className="github-link"
              >
                <Github size={16} strokeWidth={1.5} />
              </Link>
            )}
            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${name} live demo`}
                className="system-live-link"
                style={{ marginTop: 0, height: "40px", paddingLeft: "14px", paddingRight: "14px" }}
              >
                View live <ExternalLink size={14} />
              </Link>
            )}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {tech.map((t) => (
            <span key={t} className="tech-tags" style={{ display: "inline-block" }}>
              <span style={{
                padding: "4px 10px",
                color: "#bae6fd",
                fontSize: ".65rem",
                border: "1px solid rgba(56,189,248,.16)",
                background: "rgba(14,116,144,.08)",
              }}>
                {t}
              </span>
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectLayout;
