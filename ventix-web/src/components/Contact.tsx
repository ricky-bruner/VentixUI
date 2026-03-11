"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 bg-texture overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(91,95,199,0.4)] to-transparent" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5b5fc7] opacity-8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#5b5fc7] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="heading-gradient text-5xl md:text-6xl font-black leading-tight mb-6">
            Ready to Specify
            <br />a Nexa Unit?
          </h2>
          <p className="text-[#a8b3d4] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you&apos;re a specifying engineer, facility manager, or procurement lead — reach out and we&apos;ll get you the drawings, specs, and pricing you need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="mailto:ssmith@mechanicalresource.com"
            className="bg-[#5b5fc7] hover:bg-[#6e72d4] text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Email Us
          </a>
          <a
            href="#downloads"
            className="border border-[rgba(168,179,212,0.3)] text-[#a8b3d4] hover:text-white hover:border-white/40 text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-colors"
          >
            Download Spec Sheets
          </a>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-[rgba(168,179,212,0.1)]"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:ssmith@mechanicalresource.com"
              className="text-[#a8b3d4] hover:text-white text-sm transition-colors"
            >
              ssmith@mechanicalresource.com
            </a>
            <span className="hidden sm:block text-[#2a3560]">|</span>
            <span className="text-[#6b7ba4] text-sm">
              Mechanical Resource Group
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
