"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import MetricCard from "./MetricCard";
import { PROOF_METRICS } from "@/lib/constants";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

export default function ProofMetrics() {
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
            className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary"
          >
            Proof of Impact
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-muted text-center mb-16 max-w-2xl mx-auto"
          >
            Measurable outcomes from a decade of leading mission-driven organizations
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROOF_METRICS.map((metric, index) => (
              <MetricCard key={index} {...metric} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
