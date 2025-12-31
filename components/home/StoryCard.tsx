"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import AnimatedCounter from "../shared/AnimatedCounter";
import PhotoGrid from "../shared/PhotoGrid";
import type { StoryImage } from "@/lib/constants";

interface StoryCardProps {
  title: string;
  timeline: string;
  challenge: string;
  actions: string[];
  metrics: { number: string; label: string }[];
  learning: string;
  images?: StoryImage[];
  index: number;
}

export default function StoryCard({
  title,
  timeline,
  challenge,
  actions,
  metrics,
  learning,
  images,
  index,
}: StoryCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      whileHover={{ y: -4 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-surface to-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-accent/50 transition-all duration-300">
        {/* Photo Grid */}
        {images && images.length > 0 && (
          <div className="p-4 md:p-6">
            <PhotoGrid images={images} />
          </div>
        )}

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-0">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="font-semibold">{timeline}</span>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-accent rounded-full" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Challenge
              </span>
            </div>
            <p className="text-lg font-semibold text-primary pl-10">{challenge}</p>
          </div>

          {/* Arrow transition */}
          <div className="flex justify-center my-4">
            <ArrowRight className="w-6 h-6 text-accent" />
          </div>

          {/* Actions */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-accent rounded-full" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                My Role
              </span>
            </div>
            <ul className="space-y-3 pl-10">
              {actions.map((action, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow transition */}
          <div className="flex justify-center my-4">
            <ArrowRight className="w-6 h-6 text-accent" />
          </div>

          {/* Impact Metrics */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-accent rounded-full" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Impact
              </span>
            </div>
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(metrics.length, 4)} gap-4 pl-10`}>
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 border border-accent/20 shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent font-mono mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs text-muted leading-tight">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Learning */}
          <div className="bg-primary/5 border-l-4 border-accent rounded-r-xl p-6 mt-6">
            <p className="text-sm font-semibold text-muted mb-1 uppercase tracking-wide">
              Key Learning
            </p>
            <p className="text-lg font-semibold text-primary italic">"{learning}"</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
