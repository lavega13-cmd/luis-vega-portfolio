"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { OPERATING_PRINCIPLES } from "@/lib/constants";
import { staggerContainer, slideInFromLeft } from "@/lib/animations";
import Image from "next/image";
import { useState } from "react";

export default function OperatingPrinciples() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      {/* Background Banner with Premium Fallback */}
      {!imageError ? (
        <div className="absolute inset-0 opacity-[0.06]">
          <Image
            src="/images/leadership-banner.jpg"
            alt=""
            fill
            className="object-cover blur-sm"
            sizes="100vw"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        </div>
      ) : (
        <div className="absolute inset-0">
          {/* Premium Fallback Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-surface via-gray-50 to-primary/5" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 border border-gray-100/50" />
        </div>
      )}
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={slideInFromLeft}
            className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary"
          >
            How I Lead and Deliver
          </motion.h2>

          <div className="flex flex-wrap gap-3 justify-center mt-12">
            {OPERATING_PRINCIPLES.map((principle, index) => (
              <motion.div
                key={index}
                variants={slideInFromLeft}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#D4AF37",
                  color: "#ffffff",
                }}
                className="px-6 py-3 rounded-full bg-white border-2 border-primary text-primary font-semibold text-sm md:text-base cursor-default transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {principle}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
