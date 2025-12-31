"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function ContactSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-gray-200 mb-12 leading-relaxed"
          >
            Interested in exploring how AI automation can scale your nonprofit&apos;s impact? Reach out via LinkedIn or email.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold text-lg rounded-lg hover:bg-accent/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-primary"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
            <button
              onClick={() => copyToClipboard(CONTACT.email)}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              {CONTACT.email}
            </button>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-2 text-gray-200"
          >
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-lg">{CONTACT.location}</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
