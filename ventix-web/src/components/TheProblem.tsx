"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "54%", label: "of schools have inadequate ventilation" },
  { value: "6×", label: "higher airborne pathogen risk in poor-air spaces" },
  { value: "15%", label: "drop in cognitive performance from high CO₂" },
];

export default function TheProblem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="challenge" className="relative py-32 bg-texture overflow-hidden">
      {/* Divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(91,95,199,0.4)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#5b5fc7] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              The Challenge
            </p>
            <h2 className="heading-gradient text-5xl md:text-6xl font-black leading-tight mb-6">
              Air Quality is
              <br />a Silent Crisis
            </h2>
            <p className="text-[#a8b3d4] text-lg leading-relaxed mb-8">
              In classrooms, hospitals, and densely occupied buildings, poor
              ventilation isn&apos;t just uncomfortable — it&apos;s a measurable
              health and performance risk. Most HVAC systems were never designed
              with air quality as the priority.
            </p>
            <p className="text-[#a8b3d4] text-lg leading-relaxed">
              Ventix was founded to fix that. Every Nexa unit is engineered
              around the people in the room — delivering cleaner, healthier air
              precisely where it&apos;s needed, without the noise, bulk, or
              complexity of legacy systems.
            </p>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-surface rounded-2xl p-6 flex items-center gap-6"
              >
                <span className="text-5xl font-black text-white shrink-0 w-28 text-right">
                  {stat.value}
                </span>
                <p className="text-[#a8b3d4] text-base leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
