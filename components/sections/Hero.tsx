"use client";

import { motion } from "framer-motion";
import { GitCommit } from "lucide-react";

const techs = [
  "Python",
  "Django",
  "FastAPI",
  "Kotlin",
  "Android",
  "Firebase",
  "AWS",
  "Docker",
  "PostgreSQL",
  "SQLite",
  "Scikit-learn",
  "OpenCV",
  "NumPy",
  "Pandas",
  "Git",
  "GitHub",
  "Figma",
  "Razorpay",
];


export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg-dark)] pt-20"
      aria-label="Hero section"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px", willChange: "transform" }} />

      <div className="section-container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.4)] bg-[rgba(37,99,235,0.1)] px-4 py-1.5 text-sm font-medium text-accent">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Available for opportunities
        </motion.div>

        <h1 className="mx-auto mt-8 max-w-[90vw] text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary-dark)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="block">Full Stack</motion.span>
          <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block text-accent">Software Engineer</motion.span>
          <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="block">&amp; Android Developer</motion.span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-muted-dark)]">
          Building real-world web platforms, intelligent APIs, and Android apps - from backend logic to production deployment.
        </motion.p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} href="#projects" className="w-full rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.2)] transition hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] sm:w-auto sm:px-8 sm:py-4">
            View My Work →
          </motion.a>
          <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} href="/henil_CV-1.pdf" target="_blank" rel="noopener noreferrer" className="w-full rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/5 sm:w-auto sm:px-8 sm:py-4">
            Download Resume
          </motion.a>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10">
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            <p className="shrink-0 text-sm text-[var(--text-muted-dark)]"></p>

            <div className="w-full overflow-hidden">
              <div className="flex w-max animate-marquee">
                {[...techs, ...techs].map((item, idx) => (
                  <span
                    key={`${item}-${idx}`}
                    className="mx-2 flex items-center gap-2 text-sm text-[var(--text-muted-dark)]"
                  >
                    <span>{item}</span>
                    <GitCommit className="inline-block h-3 w-3 opacity-50" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
