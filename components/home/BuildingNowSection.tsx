"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import { fadeUpVariants } from "@/lib/animations";
import { Lightbulb, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function BuildingNowSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="building" className="section-padding bg-white relative overflow-hidden">
      {/* Background Banner with Premium Fallback */}
      {!imageError ? (
        <div className="absolute inset-0 opacity-[0.06]">
          <Image
            src="/images/ai-consulting-banner.jpg"
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-gray-50 to-accent/5" />
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <Badge animate>Building Now</Badge>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-primary">
            What I'm Building
          </h2>

          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              An AI consulting practice for nonprofits and mission-driven organizations
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Many nonprofits use outdated systems and miss the efficiency and insight
              gains that AI can deliver. I'm building a consulting practice that helps
              mission-driven leaders adopt AI strategically and ethically—focused on
              fundraising, operations, and measurable impact.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Who it's for</h4>
                <p className="text-muted text-sm">
                  Arizona nonprofits, social enterprises, and civic organizations ready to
                  modernize without losing their mission
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">What it delivers</h4>
                <p className="text-muted text-sm">
                  Practical AI integration that automates low-value tasks, strengthens
                  donor insights, and scales impact
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">What success looks like</h4>
                <p className="text-muted text-sm">
                  Organizations operating more efficiently, raising more funds, and serving
                  more people with technology that works for them
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
