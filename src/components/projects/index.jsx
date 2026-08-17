"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <section className="w-full">
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Selected work
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-6xl">
          GitHub Portfolio
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-foreground/75 sm:text-base">
          A curated set of AI, SaaS, automation, accessibility, analytics, and
          local-business products. Use the GitHub and external-link buttons to
          inspect the code or open a live project.
        </p>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-5xl px-0 mx-auto space-y-5 md:space-y-6 flex flex-col items-center"
      >
        {projects.map((project) => (
          <ProjectLayout key={project.id} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectList;
