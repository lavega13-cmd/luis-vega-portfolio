"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import Image from "next/image";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      {/* Background decorative elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          />
        </div>
      )}

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUpVariants} className="mb-6">
              <Badge animate={!prefersReducedMotion}>
                <MapPin className="w-4 h-4 inline mr-1" />
                {CONTACT.location}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Luis Vega
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed"
            >
              Independent AI advisor helping nonprofit leaders scale operations and fundraising through intelligent automation.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg md:text-xl mb-12 text-white font-semibold"
            >
              Raised $10M+, led teams through seven-figure turnarounds, and co-founded a
              program that rescued 817 civilians from conflict zones.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold text-lg rounded-lg hover:bg-white/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary shadow-lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold text-lg rounded-lg hover:bg-white/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Headshot Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />

              {/* Headshot container with premium styling */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/40 shadow-2xl ring-2 ring-accent/20 ring-offset-4 ring-offset-primary/50 transition-all duration-500 hover:border-accent/60 hover:shadow-accent/20">
                <Image
                  src="/images/Headshot1.png"
                  alt="Luis Vega - Professional Headshot"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      {!prefersReducedMotion && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
