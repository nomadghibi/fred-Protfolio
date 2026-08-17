"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const ProjectList = ({ projects }) => {
  const reduce = useReducedMotion();
  return (
    <div className="sub-content">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h1 style={{
          margin: 0,
          color: "white",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          lineHeight: 1.08,
          letterSpacing: "-.045em",
          fontWeight: 580,
        }}>
          GitHub Portfolio
        </h1>
        <p>
          A curated set of AI, SaaS, automation, accessibility, analytics, and
          local-business products. Use the GitHub and external-link buttons to
          inspect the code or open a live project.
        </p>
      </div>

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        className="flex flex-col gap-4"
      >
        {projects.map((project) => (
          <ProjectLayout key={project.id} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectList;
