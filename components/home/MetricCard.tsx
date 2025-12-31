"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../shared/AnimatedCounter";
import { cardHoverVariants, fadeUpVariants } from "@/lib/animations";
import {
  DollarSign,
  Heart,
  TrendingUp,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";

const iconMap = {
  DollarSign,
  Heart,
  TrendingUp,
  Users,
  Shield,
  Sparkles,
};

interface MetricCardProps {
  number: number;
  suffix: string;
  label: string;
  icon: keyof typeof iconMap;
  index: number;
}

export default function MetricCard({
  number,
  suffix,
  label,
  icon,
  index,
}: MetricCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      initial="rest"
      whileHover="hover"
      className="relative"
    >
      <motion.div
        variants={cardHoverVariants}
        className="bg-white rounded-2xl p-8 border border-gray-200 h-full flex flex-col"
      >
        <div className="mb-4 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>

        <div className="flex items-baseline mb-3">
          <AnimatedCounter
            end={number}
            suffix={suffix}
            className="text-5xl md:text-6xl font-bold text-primary font-mono"
          />
        </div>

        <p className="text-muted leading-relaxed">{label}</p>
      </motion.div>
    </motion.div>
  );
}
