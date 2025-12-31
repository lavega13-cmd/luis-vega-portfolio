"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUpVariants } from "@/lib/animations";
import { ChevronDown, Clock, Target } from "lucide-react";

interface PilotCardProps {
  title: string;
  targetOrg: string;
  deliverables: string[];
  timeline: string;
  outcomes: { metric: string; label: string }[];
  partnerNeeds: string;
  index: number;
}

export default function PilotCard({
  title,
  targetOrg,
  deliverables,
  timeline,
  outcomes,
  partnerNeeds,
  index,
}: PilotCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      className="relative"
    >
      <motion.div
        className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer"
        whileHover={{ borderColor: "#D4AF37", y: -4 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-primary pr-4">{title}</h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
            </motion.div>
          </div>

          <p className="text-sm text-muted mb-4">{targetOrg}</p>

          <div className="flex items-center gap-2 text-sm text-primary mb-4">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-semibold">{timeline}</span>
          </div>

          {/* Outcomes - always visible */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="bg-accent/5 rounded-lg p-3">
                <div className="text-2xl font-bold text-accent font-mono mb-1">
                  {outcome.metric}
                </div>
                <div className="text-xs text-muted">{outcome.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable section */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-gray-100 pt-4">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent" />
                Deliverables
              </h4>
              <ul className="space-y-2">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">
                What I need from the partner
              </h4>
              <p className="text-sm text-muted">{partnerNeeds}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
