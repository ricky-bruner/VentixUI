"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const downloads = [
  {
    title: "Nexa Series Catalog",
    description: "Complete model list, feature matrix, and suffix guide for the full V-Nexa and H-Nexa product lines.",
    file: "/docs/Ventix_Nexa_Series_Catalog.pdf",
    label: "Product Catalog",
    size: "PDF",
  },
  {
    title: "Classroom VRV Unit Ventilator Drawings",
    description: "Dimensional drawings for the classroom vertical unit ventilator — suitable for specification submittals.",
    file: "/docs/Classroom_VRV_Unit_Ventilator_Drawings.pdf",
    label: "Engineering Drawings",
    size: "PDF",
  },
  {
    title: "Control Damper Dimensions",
    description: "Dimensional reference sheet for the Nexa control damper assembly.",
    file: "/docs/2723-Control_Damper_DIM.pdf",
    label: "Component Drawing",
    size: "PDF",
  },
  {
    title: "OA Louver Dimensions",
    description: "Outside air louver dimensional drawing for site and submittal use.",
    file: "/docs/2723-OA_LOUVER_DIM.pdf",
    label: "Component Drawing",
    size: "PDF",
  },
];

export default function Downloads() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="downloads" className="relative py-32 bg-texture overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(91,95,199,0.4)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#5b5fc7] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Downloads
          </p>
          <h2 className="heading-gradient text-5xl md:text-6xl font-black leading-tight">
            Spec Sheets &amp;
            <br />Documentation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {downloads.map((doc, i) => (
            <motion.a
              key={i}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="card-surface rounded-2xl p-6 flex items-start gap-5 hover:border-[rgba(91,95,199,0.4)] transition-colors group"
            >
              {/* PDF icon */}
              <div className="w-12 h-12 rounded-xl bg-[#5b5fc7]/10 border border-[rgba(91,95,199,0.3)] flex items-center justify-center shrink-0 group-hover:bg-[#5b5fc7]/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#5b5fc7]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm leading-snug">{doc.title}</h3>
                  <span className="text-[#6b7ba4] text-xs font-mono shrink-0">{doc.size}</span>
                </div>
                <span className="text-[#5b5fc7] text-xs font-semibold tracking-wider uppercase block mb-2">
                  {doc.label}
                </span>
                <p className="text-[#a8b3d4] text-xs leading-relaxed">{doc.description}</p>
              </div>

              {/* Arrow */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#a8b3d4] shrink-0 mt-0.5 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
