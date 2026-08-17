"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.95)" }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
