"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "The Challenge", href: "#challenge" },
  { label: "Why Ventix", href: "#why" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      } ${
        scrolled
          ? "md:bg-transparent bg-[#070d1f]/90 md:backdrop-blur-none backdrop-blur-md md:border-b-0 border-b border-[rgba(168,179,212,0.08)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded bg-[#5b5fc7] flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-white"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            VENTIX
          </span>
        </a>

        {/* Center nav pill — desktop */}
        <nav className="hidden md:flex items-center nav-pill rounded-full px-2 py-1.5 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#a8b3d4] hover:text-white text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#5b5fc7] hover:bg-[#6e72d4] text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-full transition-colors shrink-0"
        >
          Request a Quote
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-6 nav-pill rounded-2xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#a8b3d4] hover:text-white text-sm font-medium tracking-widest uppercase px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#5b5fc7] text-white text-xs font-bold tracking-widest uppercase px-4 py-3 rounded-full text-center transition-colors hover:bg-[#6e72d4]"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
