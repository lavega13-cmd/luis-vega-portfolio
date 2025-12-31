"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200";
  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
