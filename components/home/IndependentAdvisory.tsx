"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { ADVISORY_LANES } from "@/lib/constants";
import { TrendingUp, Settings, BookOpen } from "lucide-react";

const iconMap = {
  "Fundraising Workflows": TrendingUp,
  "Operations Automation": Settings,
  "Knowledge Systems": BookOpen,
};

export default function IndependentAdvisory() {
  return (
    <section className="section-padding bg-surface">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary"
          >
            Independent AI Advisory
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-muted text-center mb-12 max-w-3xl mx-auto"
          >
            I help nonprofit leaders implement AI automation in three core areas
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ADVISORY_LANES.map((lane, index) => {
              const Icon = iconMap[lane.title as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  custom={index}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent/50 transition-all duration-300 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20"
                  tabIndex={0}
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {lane.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {lane.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
