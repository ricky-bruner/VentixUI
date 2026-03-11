"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  {
    label: "K–12 Classrooms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    description:
      "Packed classrooms are among the highest CO₂-density environments in any building. Nexa units are sized specifically for standard classroom footprints and deliver whisper-quiet operation that won't disrupt a lesson.",
    points: ["Demand-controlled ventilation", "Low noise profile", "Energy-efficient for continuous use"],
  },
  {
    label: "Hospitals & Clinics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    description:
      "In patient care environments, air quality is a clinical concern. The Nexa -X series with HEPA filtration and UV-C sterilization delivers pathogen-reduced air to recovery rooms, waiting areas, and high-traffic corridors.",
    points: ["HEPA + UV-C optional", "Virus & pathogen reduction", "Compatible with infection control protocols"],
  },
  {
    label: "Higher Education",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    description:
      "Lecture halls, labs, and libraries each have unique ventilation requirements. The Nexa IQ series adapts in real time to occupancy, keeping energy costs low while air quality stays high.",
    points: ["Smart occupancy sensing", "Multi-zone compatibility", "Scalable across building types"],
  },
  {
    label: "Commercial Spaces",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    description:
      "Open offices, conference rooms, and retail environments benefit from the Nexa -S standalone series — a self-contained unit with integrated controls, no BAS required.",
    points: ["Standalone controls option", "Humidity management available", "Clean aesthetic for occupied spaces"],
  },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="relative py-32 bg-texture overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(91,95,199,0.4)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#5b5fc7] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Industries
          </p>
          <h2 className="heading-gradient text-5xl md:text-6xl font-black leading-tight">
            Built for Where
            <br />People Gather
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-surface rounded-2xl p-8 hover:border-[rgba(91,95,199,0.3)] transition-colors"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full border border-[rgba(168,179,212,0.2)] flex items-center justify-center text-[#5b5fc7] shrink-0">
                  {ind.icon}
                </div>
                <h3 className="text-white font-bold text-xl pt-2">{ind.label}</h3>
              </div>
              <p className="text-[#a8b3d4] text-sm leading-relaxed mb-5">
                {ind.description}
              </p>
              <ul className="flex flex-col gap-2">
                {ind.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#a8b3d4]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5b5fc7] shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
