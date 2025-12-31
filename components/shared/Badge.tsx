"use client";

import { motion } from "framer-motion";
import { pulseVariants } from "@/lib/animations";

interface BadgeProps {
  children: React.ReactNode;
  animate?: boolean;
  className?: string;
}

export default function Badge({ children, animate = false, className = "" }: BadgeProps) {
  return (
    <motion.div
      variants={animate ? pulseVariants : undefined}
      initial="initial"
      animate={animate ? "animate" : undefined}
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20 ${className}`}
    >
      {children}
    </motion.div>
  );
}
