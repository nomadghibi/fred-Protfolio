"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.article
      variants={item}
      className="w-full rounded-xl p-5 md:p-6 custom-bg"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {category}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-foreground md:text-2xl">
            {name}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/75 md:text-base">
            {description}
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          {repoLink && (
            <Link
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${name} on GitHub`}
              className="rounded-full border border-accent/30 p-3 text-foreground transition hover:text-accent hover:shadow-glass-sm"
            >
              <Github className="h-5 w-5" strokeWidth={1.5} />
            </Link>
          )}
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${name} live website`}
              className="rounded-full border border-accent/30 p-3 text-foreground transition hover:text-accent hover:shadow-glass-sm"
            >
              <ExternalLink className="h-5 w-5" strokeWidth={1.5} />
            </Link>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-accent/20 bg-background/30 px-3 py-1 text-xs text-foreground/80"
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectLayout;
