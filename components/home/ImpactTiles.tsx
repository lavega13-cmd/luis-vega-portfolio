"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import AnimatedCounter from "../shared/AnimatedCounter";
import { PROOF_METRICS } from "@/lib/constants";
import { DollarSign, Heart, TrendingUp, Users } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";

const iconMap = {
  DollarSign,
  Heart,
  TrendingUp,
  Users,
};

export default function ImpactTiles() {
  return (
    <section className="section-padding bg-surface">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROOF_METRICS.map((metric, index) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                custom={index}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-accent/50 transition-all duration-300 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20"
                tabIndex={0}
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <div className="text-4xl font-bold text-primary mb-2 font-mono">
                  <AnimatedCounter end={metric.number} suffix={metric.suffix} />
                </div>
                <p className="text-sm text-muted leading-snug">{metric.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
