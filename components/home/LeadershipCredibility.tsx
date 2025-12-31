"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { Award, Shield, Users } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const CREDENTIALS = [
  {
    icon: Shield,
    title: "Military Leadership",
    description: "U.S. Army veteran with combat deployment and Special Forces selection",
  },
  {
    icon: Users,
    title: "Executive Track Record",
    description: "Led nonprofit operations, fundraising, and humanitarian programs at scale",
  },
  {
    icon: Award,
    title: "High-Impact Missions",
    description: "Co-founded Ukraine extractions program, rescued 817 civilians from conflict zones",
  },
];

export default function LeadershipCredibility() {
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary"
          >
            Leadership Background
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {CREDENTIALS.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  custom={index}
                  className="bg-gradient-to-br from-surface to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-accent/50 transition-all duration-300 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20"
                  tabIndex={0}
                >
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {credential.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="text-center"
          >
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              View Full Background on LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
