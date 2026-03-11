export default function Footer() {
  return (
    <footer className="border-t border-[rgba(168,179,212,0.08)] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#5b5fc7] flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-3.5 h-3.5 text-white"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">VENTIX</span>
        </div>
        <p className="text-[#6b7ba4] text-xs">
          © {new Date().getFullYear()} Ventix. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["The Challenge", "Products", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-").replace("the-", "")}`}
              className="text-[#6b7ba4] hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
