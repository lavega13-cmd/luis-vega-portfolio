"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import PilotCard from "./PilotCard";
import { PILOTS } from "@/lib/constants";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

export default function PilotEngagements() {
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
            Pilot Engagements
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-muted text-center mb-16 max-w-3xl mx-auto"
          >
            Running three early partnership pilots to validate the model and refine the
            offer
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PILOTS.map((pilot, index) => (
              <PilotCard key={index} {...pilot} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
