"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import Button from "../shared/Button";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { FileText, Mail, Phone, Linkedin, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function ResumeContact() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Resume Preview */}
          <motion.div
            variants={fadeUpVariants}
            className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-10 text-white"
          >
            <div className="mb-6">
              <FileText className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold mb-3">Resume</h3>
              <p className="text-gray-200 leading-relaxed">
                Full work history, leadership experience, and military service record
              </p>
            </div>

            <div className="space-y-4">
              <Button variant="primary" href="/resume" className="w-full">
                View Online Resume
              </Button>
              <Button
                variant="secondary"
                href="/resume.pdf"
                className="w-full !border-white !text-white hover:!bg-white hover:!text-primary"
              >
                Download PDF
              </Button>
            </div>
          </motion.div>

          {/* Contact CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="bg-surface rounded-3xl p-8 md:p-10"
          >
            <div className="mb-6">
              <Mail className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-primary">Get in Touch</h3>
              <p className="text-muted leading-relaxed">
                Let's discuss how AI can transform your organization's impact
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <Button variant="primary" href={CONTACT.calendly} className="w-full">
                <Calendar className="w-5 h-5 mr-2 inline" />
                Book a Call
              </Button>

              <button
                onClick={() => copyToClipboard(CONTACT.email)}
                className="w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {CONTACT.email}
              </button>
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-3">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
