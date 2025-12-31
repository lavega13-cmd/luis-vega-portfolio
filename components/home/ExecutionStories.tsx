"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import StoryCard from "./StoryCard";
import { EXECUTION_STORIES } from "@/lib/constants";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

export default function ExecutionStories() {
  return (
    <section className="section-padding bg-white">
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
            Execution Stories
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-muted text-center mb-16 max-w-3xl mx-auto"
          >
            Proven track record of delivering measurable outcomes in high-stakes environments
          </motion.p>

          <div className="space-y-8">
            {EXECUTION_STORIES.map((story, index) => (
              <StoryCard key={index} {...story} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
