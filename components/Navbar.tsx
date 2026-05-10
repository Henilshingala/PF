"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Principles", href: "#principles" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const y = elem.getBoundingClientRect().top + window.pageYOffset - 40;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 h-16 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[rgba(5,5,8,0.8)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-full items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent font-bold text-white">
            H
          </div>
          <span className="font-syne text-lg font-semibold text-white">Henil</span>
        </a>

        <nav className="hidden items-center gap-4 lg:gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm text-[var(--text-muted-dark)] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition hover:bg-accent-light sm:inline-flex"
          >
            Let&apos;s Talk
          </motion.a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[var(--bg-dark)] md:hidden"
        >
          <div className="section-container flex flex-col gap-4 py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-base text-[var(--text-muted-dark)] transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-2 text-center text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
