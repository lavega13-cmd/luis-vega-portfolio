"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { SELECTED_WORK } from "@/lib/constants";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import PhotoGrid from "../shared/PhotoGrid";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function SelectedWork() {
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
            Selected Work
          </motion.h2>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {SELECTED_WORK.map((work, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                custom={index}
                className="bg-gradient-to-br from-surface to-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-accent/50 transition-all duration-300 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20"
                tabIndex={0}
              >
                {work.images && work.images.length > 0 && (
                  <div className="p-6">
                    <PhotoGrid images={work.images} />
                  </div>
                )}

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-0">
                      {work.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="font-semibold">{work.timeline}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                        Problem
                      </h4>
                      <p className="text-lg font-semibold text-primary">{work.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                        What I Did
                      </h4>
                      <ul className="space-y-2">
                        {work.what_i_did.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                        Result
                      </h4>
                      {work.result.type === "measurable" && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {work.result.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="bg-white rounded-xl p-4 border border-accent/20"
                            >
                              <div className="text-3xl font-bold text-accent font-mono mb-1">
                                {metric.number}
                              </div>
                              <div className="text-xs text-muted">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
