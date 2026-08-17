"use client";
import { motion } from "framer-motion";
import { profileData } from "@/app/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, transform: "translateY(12px)" },
  show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } },
};

const HeroText = () => (
  <motion.section
    variants={container}
    initial="hidden"
    animate="show"
    className="pointer-events-none absolute inset-x-4 bottom-8 z-20 mx-auto max-w-3xl text-center"
  >
    <motion.p variants={item} className="text-sm uppercase tracking-[0.3em] text-accent sm:text-base">
      {profileData.role}
    </motion.p>
    <motion.h1 variants={item} className="mt-2 text-3xl font-semibold text-foreground sm:text-5xl">
      {profileData.name}
    </motion.h1>
    <motion.p variants={item} className="mx-auto mt-3 max-w-2xl text-sm font-light text-foreground/80 sm:text-base">
      {profileData.headline}
    </motion.p>
  </motion.section>
);

export default HeroText;
