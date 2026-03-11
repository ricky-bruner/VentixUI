"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { basePath } from "@/lib/basePath";

const vNexa = [
  { model: "V-Nexa 20", size: "Small", description: "Standard airflow, energy-efficient" },
  { model: "V-Nexa 30", size: "Medium", description: "Whisper-quiet, high-quality filtration" },
  { model: "V-Nexa 50", size: "Large", description: "Maximum airflow, advanced filtration" },
  { model: "V-Nexa 30-X", size: "Medium", description: "Virus-protective, HEPA / UV-C optional", badge: "-X" },
  { model: "V-Nexa 30-DH", size: "Medium", description: "Heat pipe dehumidification", badge: "-DH" },
  { model: "V-Nexa 30-DE", size: "Medium", description: "Electric dehumidification", badge: "-DE" },
  { model: "V-Nexa 30-IQ-D", size: "Medium", description: "Smart sensors, DX system", badge: "-IQ" },
  { model: "V-Nexa 30-IQ-V", size: "Medium", description: "Smart sensors, VRF system", badge: "-IQ" },
  { model: "V-Nexa 30-IQ-H", size: "Medium", description: "Smart sensors, Hydronic system", badge: "-IQ" },
  { model: "V-Nexa 30-S", size: "Medium", description: "Packaged / standalone controls", badge: "-S" },
];

const hNexa = [
  { model: "H-Nexa 20", size: "Small", description: "Standard horizontal airflow, energy-efficient" },
  { model: "H-Nexa 36", size: "Medium", description: "Whisper-quiet, clean air focus" },
  { model: "H-Nexa 50", size: "Large", description: "High airflow, advanced filtration" },
  { model: "H-Nexa 36-X", size: "Medium", description: "Virus-protective, HEPA / UV-C optional", badge: "-X" },
  { model: "H-Nexa 36-DH", size: "Medium", description: "Heat pipe dehumidification", badge: "-DH" },
  { model: "H-Nexa 36-DE", size: "Medium", description: "Electric dehumidification", badge: "-DE" },
  { model: "H-Nexa 36-IQ-D", size: "Medium", description: "Smart sensors, DX system", badge: "-IQ" },
  { model: "H-Nexa 36-IQ-V", size: "Medium", description: "Smart sensors, VRF system", badge: "-IQ" },
  { model: "H-Nexa 36-IQ-H", size: "Medium", description: "Smart sensors, Hydronic system", badge: "-IQ" },
  { model: "H-Nexa 36-S", size: "Medium", description: "Packaged / standalone controls", badge: "-S" },
];

const suffixes = [
  { suffix: "-X", label: "Advanced virus protection / HEPA / UV-C optional" },
  { suffix: "-DH", label: "Heat pipe dehumidification" },
  { suffix: "-DE", label: "Electric dehumidification" },
  { suffix: "-IQ-D", label: "Smart sensors, DX system" },
  { suffix: "-IQ-V", label: "Smart sensors, VRF system" },
  { suffix: "-IQ-H", label: "Smart sensors, Hydronic system" },
  { suffix: "-S", label: "Packaged / standalone controls" },
];

const badgeColors: Record<string, string> = {
  "-X": "bg-purple-900/60 text-purple-300 border-purple-700/40",
  "-DH": "bg-blue-900/60 text-blue-300 border-blue-700/40",
  "-DE": "bg-cyan-900/60 text-cyan-300 border-cyan-700/40",
  "-IQ": "bg-emerald-900/60 text-emerald-300 border-emerald-700/40",
  "-S": "bg-amber-900/60 text-amber-300 border-amber-700/40",
};

function ModelRow({ model, description, size, badge }: { model: string; description: string; size: string; badge?: string }) {
  return (
    <div className="flex items-center gap-3 py-3.5 border-b border-[rgba(168,179,212,0.08)] last:border-0 hover:bg-white/[0.02] -mx-4 px-4 rounded transition-colors">
      <span className="text-white font-mono text-sm font-medium min-w-[140px]">{model}</span>
      <span className="text-[#6b7ba4] text-xs uppercase tracking-wider min-w-[56px]">{size}</span>
      <span className="text-[#a8b3d4] text-sm flex-1">{description}</span>
      {badge && (
        <span className={`text-xs font-mono px-2 py-0.5 rounded border shrink-0 ${badgeColors[badge] ?? "bg-white/5 text-white/50 border-white/10"}`}>
          {badge}
        </span>
      )}
    </div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<"V" | "H">("V");

  return (
    <section id="products" className="relative py-32 bg-texture overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(91,95,199,0.4)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#5b5fc7] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Nexa Series
          </p>
          <h2 className="heading-gradient text-5xl md:text-6xl font-black leading-tight">
            The Product Line
          </h2>
        </motion.div>

        {/* Split layout: image + model list */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Product image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#5b5fc7] opacity-5 blur-3xl rounded-full" />
            <div className="card-surface rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
              <img
                src={activeTab === "V" ? `${basePath}/images/v-nexa.png` : `${basePath}/images/h-nexa.png`}
                alt={activeTab === "V" ? "V-Nexa Vertical Unit" : "H-Nexa Horizontal Unit"}
                className="w-auto max-h-[400px] drop-shadow-2xl transition-all duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#a8b3d4] text-sm">
                {activeTab === "V"
                  ? "V-Nexa — Vertical floor-standing configuration"
                  : "H-Nexa — Horizontal ceiling-mount configuration"}
              </p>
            </div>
          </motion.div>

          {/* Right: Tab + model list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Tab switcher */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab("V")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  activeTab === "V"
                    ? "bg-[#5b5fc7] text-white"
                    : "border border-[rgba(168,179,212,0.2)] text-[#a8b3d4] hover:text-white"
                }`}
              >
                Vertical (V)
              </button>
              <button
                onClick={() => setActiveTab("H")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  activeTab === "H"
                    ? "bg-[#5b5fc7] text-white"
                    : "border border-[rgba(168,179,212,0.2)] text-[#a8b3d4] hover:text-white"
                }`}
              >
                Horizontal (H)
              </button>
            </div>

            {/* Model list */}
            <div className="card-surface rounded-2xl px-4 py-2">
              <div className="flex items-center gap-3 py-2 mb-1">
                <span className="text-[#5b5fc7] text-xs font-semibold tracking-widest uppercase min-w-[140px]">Model</span>
                <span className="text-[#5b5fc7] text-xs font-semibold tracking-widest uppercase min-w-[56px]">Size</span>
                <span className="text-[#5b5fc7] text-xs font-semibold tracking-widest uppercase">Description</span>
              </div>
              {(activeTab === "V" ? vNexa : hNexa).map((item) => (
                <ModelRow key={item.model} {...item} />
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#5b5fc7] hover:bg-[#6e72d4] text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-full transition-colors"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>

        {/* Suffix guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-[#a8b3d4] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Feature Suffix Guide
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {suffixes.map((s) => (
              <div key={s.suffix} className="card-surface rounded-xl p-4 flex gap-3 items-start">
                <span className={`text-xs font-mono px-2 py-0.5 rounded border shrink-0 mt-0.5 ${badgeColors[s.suffix] ?? "bg-white/5 text-white/50 border-white/10"}`}>
                  {s.suffix}
                </span>
                <span className="text-[#a8b3d4] text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
