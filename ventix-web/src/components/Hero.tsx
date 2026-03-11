"use client";

import { motion } from "framer-motion";
import { basePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-texture pt-24 pb-0">
      {/* Radial glow behind product */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#5b5fc7] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#a8b3d4] text-xs font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Engineered for the spaces that matter most
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-gradient text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6"
        >
          Precision Air
          <br />
          <span className="text-5xl md:text-6xl lg:text-7xl">
            for Every Room.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#a8b3d4] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          The Ventix Nexa Series brings hospital-grade air quality to
          classrooms, clinics, and high-occupancy spaces — quietly,
          efficiently, and built to spec.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#products"
            className="bg-[#5b5fc7] hover:bg-[#6e72d4] text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors"
          >
            Explore Nexa Series
          </a>
          <a
            href="#downloads"
            className="border border-[rgba(168,179,212,0.3)] text-[#a8b3d4] hover:text-white hover:border-white/40 text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors"
          >
            Download Spec Sheet
          </a>
        </motion.div>
      </div>

      {/* Product image rising from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="relative z-10 w-full max-w-sm mx-auto px-8"
      >
        <div className="relative">
          {/* Soft glow under unit */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#5b5fc7] opacity-25 blur-2xl rounded-full" />
          <img
            src={`${basePath}/images/v-nexa.png`}
            alt="Ventix Nexa V-Series Unit"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
