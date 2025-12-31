"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary"
          >
            About
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-muted leading-relaxed mb-6">
              I&apos;m an operator first. I&apos;ve built teams, raised funds, and led high-stakes missions where execution mattered more than credentials.
            </p>

            <p className="text-xl text-muted leading-relaxed mb-6">
              As a nonprofit executive, I took a foundation from $347K to $4M in revenue in six months by building systems that freed leadership to focus on impact. As an Army veteran, I learned to solve complex problems under pressure with limited resources.
            </p>

            <p className="text-xl text-muted leading-relaxed">
              Today, I help mission-driven leaders use AI to automate the work that drains their capacity so they can focus on the work only they can do.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
