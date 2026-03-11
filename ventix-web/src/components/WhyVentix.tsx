"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Engineering-Led Design",
    description:
      "Every Nexa unit is designed by engineers who have spent decades in HVAC — not marketers. That means specs that actually matter and performance that delivers in the real world.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: "Whisper-Quiet Operation",
    description:
      "Engineered for learning and healing environments where silence matters. Nexa units deliver maximum airflow at noise levels that won't interrupt a lecture or a recovery.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "HEPA & UV-C Ready",
    description:
      "The -X suffix models ship with optional HEPA filtration and UV-C sterilization — proven technologies for virus and pathogen protection in high-risk environments.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "IQ Smart Controls",
    description:
      "The -IQ series integrates occupancy sensors, CO₂ monitoring, and demand-controlled ventilation — compatible with DX, VRF, and hydronic systems right out of the box.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Vertical & Horizontal",
    description:
      "The Nexa V-Series and H-Series give specifiers flexibility for any installation constraint — ceiling-mounted horizontal or floor-standing vertical, same core performance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Dehumidification Built In",
    description:
      "Heat pipe (-DH) and electric (-DE) dehumidification options address the humidity challenges that standard ventilation units simply ignore — critical for tropical climates and lab environments.",
  },
];

export default function WhyVentix() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="relative py-32 bg-texture overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(91,95,199,0.4)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#5b5fc7] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Why Ventix
          </p>
          <h2 className="heading-gradient text-5xl md:text-6xl font-black leading-tight">
            Engineered Differently
          </h2>
          {/* Large background watermark */}
          <p className="text-[#0d1535] text-8xl md:text-9xl font-black tracking-widest uppercase select-none pointer-events-none absolute left-1/2 -translate-x-1/2 mt-[-2rem] opacity-60 whitespace-nowrap">
            OUR APPROACH
          </p>
        </motion.div>

        {/* Grid */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="card-surface rounded-2xl p-7 flex flex-col gap-4 hover:border-[rgba(91,95,199,0.3)] transition-colors"
            >
              <div className="w-11 h-11 rounded-full border border-[rgba(168,179,212,0.2)] flex items-center justify-center text-[#a8b3d4]">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base">{item.title}</h3>
              <p className="text-[#a8b3d4] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
