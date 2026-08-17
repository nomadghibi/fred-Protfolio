"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profileData } from "@/app/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, transform: "translateY(18px)" },
  show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function HeroCopy() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="hero-copy"
      variants={container}
      initial={reduce ? false : "hidden"}
      animate="show"
    >
      <motion.div variants={item} className="system-status">
        <span /> Neural systems online
      </motion.div>
      <motion.p variants={item} className="eyebrow">{profileData.role}</motion.p>
      <motion.h1 variants={item}>
        I build AI-enabled systems that move real work forward.
      </motion.h1>
      <motion.p variants={item} className="hero-summary">
        Strategy, architecture, and production-minded engineering for SaaS,
        automation, private AI, and business-critical workflows.
      </motion.p>
      <motion.div variants={item} className="hero-actions">
        <Link href="#systems" className="button button-primary">
          View flagship systems <ArrowRight size={17} />
        </Link>
        <Link href="/contact" className="button button-secondary">
          Start a conversation
        </Link>
      </motion.div>
    </motion.div>
  );
}
