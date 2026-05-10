"use client";

import { Code2, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sectionVariants } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────
//  SVG BORDER LIGHT CONSTANTS
//  viewBox 0 0 400 400 · rect x=2 y=2 w=396 h=396 rx=40
//  Path starts at top-left (42,2) and traces CLOCKWISE:
//    top-left → top-right → bottom-right → bottom-left → top-left
//  Perimeter: 4×(396-80) + 4×(π/2×40) = 1264 + 251.3 ≈ 1516
// ─────────────────────────────────────────────────────────────────
const BORDER_PATH =
  "M42,2 H358 A40,40 0 0,1 398,42 V358 A40,40 0 0,1 358,398 H42 A40,40 0 0,1 2,358 V42 A40,40 0 0,1 42,2 Z";
const PERIMETER = 1516;
const DASH = 160;
const GAP = PERIMETER - DASH;

const expertise = [
  "Django web platforms with Razorpay integrations and admin dashboards",
  "Android applications in Kotlin with SQLite and Firebase integration",
  "AI/ML systems using OpenCV, Scikit-learn, and trained models",
  "Web3 platforms with MetaMask authentication and crypto payments",
];

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative overflow-hidden bg-[var(--bg-navy)] py-20 md:py-28 lg:py-36"
    >
      {/* ── BACKGROUND LAYER ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blob 1 — breathing blue, top-left */}
        <motion.div
          animate={{ scale: [1, 1.35, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.38) 0%, transparent 65%)",
          }}
        />
        {/* Blob 2 — indigo, bottom-right */}
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.07, 0.15, 0.07] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-20 -right-20 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 65%)",
          }}
        />
        {/* Subtle dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Diagonal accent line */}
        <div
          className="absolute top-0 h-full w-px opacity-[0.05]"
          style={{
            right: "30%",
            background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.9), transparent)",
            transform: "rotate(12deg)",
          }}
        />
      </div>

      <div className="section-container relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase text-accent"
            style={{ letterSpacing: "0.35em" }}
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 25%, rgba(255,255,255,0.52) 60%, var(--accent, #3b82f6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Who I Am
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Full stack developer focused on building scalable web systems,
            Android applications, and production-ready software solutions.
          </motion.p>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* ── IMAGE COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.86, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative mx-auto lg:col-span-5 w-full max-w-[400px]"
            >
              {/* Pulsing ambient halo — sits behind the card */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.96, 1.06, 0.96] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-[4rem] -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(59,130,246,0.2) 0%, transparent 70%)",
                }}
              />

              {/* Aspect-ratio wrapper:
                  - inner div has overflow-hidden (clips image)
                  - SVG sits OUTSIDE as a sibling so glow is NOT clipped */}
              <div className="relative aspect-square w-full">

                {/* Image card */}
                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl group">
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/25 via-transparent to-transparent opacity-60 z-10" />

                  <Image
                    src="/Don.png"
                    alt="Henil Shingala Portrait"
                    fill
                    className="object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />

                  {/* Floating location badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-full border border-accent/30 bg-black/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-md"
                    >
                      Surat, IN
                    </motion.div>
                  </div>

                  {/* One-shot scan-line reveal on load */}
                  <motion.div
                    initial={{ top: "-10%", opacity: 0.7 }}
                    animate={{ top: "110%", opacity: 0 }}
                    transition={{ duration: 1.5, delay: 0.7, ease: "easeIn" }}
                    className="absolute inset-x-0 h-16 z-30 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(147,197,253,0.18), transparent)",
                    }}
                  />
                </div>

                {/* ───────────────────────────────────────────────────
                    SVG BORDER LIGHT TRACE
                    Extends 4px beyond the card on all sides (inset:-4px)
                    so the bright stroke sits perfectly on top of the border.
                    4 layered paths create depth:
                      1. Static faint base border
                      2. Wide diffuse outer glow (travel)
                      3. Mid-halo travel ring
                      4. Crisp core trace line (travel)
                      5. Sharp white leading dot (travel)
                    All 4 travel animations share the same duration so the
                    dot always sits at the leading edge of the glow tail.
                    ─────────────────────────────────────────────────── */}
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    inset: "-4px",
                    width: "calc(100% + 8px)",
                    height: "calc(100% + 8px)",
                    zIndex: 20,
                  }}
                  viewBox="-4 -4 408 408"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Crisp glow — core trace + dot */}
                    <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    {/* Wide soft glow — outer halo only */}
                    <filter id="diffuseGlow" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur stdDeviation="14" result="blur" />
                    </filter>
                    {/* Tight dot glow */}
                    <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Layer 0 — static faint base border */}
                  <path
                    d={BORDER_PATH}
                    stroke="rgba(59,130,246,0.10)"
                    strokeWidth="1"
                    fill="none"
                  />

                  {/* Layer 1 — wide diffuse outer glow (travels) */}
                  <motion.path
                    d={BORDER_PATH}
                    stroke="#3b82f6"
                    strokeWidth="18"
                    strokeOpacity={0.2}
                    fill="none"
                    filter="url(#diffuseGlow)"
                    strokeDasharray={`${DASH * 2.4} ${PERIMETER - DASH * 2.4}`}
                    animate={{ strokeDashoffset: [0, -PERIMETER] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Layer 2 — mid halo ring (travels) */}
                  <motion.path
                    d={BORDER_PATH}
                    stroke="#60a5fa"
                    strokeWidth="6"
                    strokeOpacity={0.38}
                    fill="none"
                    filter="url(#coreGlow)"
                    strokeDasharray={`${DASH * 1.5} ${PERIMETER - DASH * 1.5}`}
                    animate={{ strokeDashoffset: [0, -PERIMETER] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Layer 3 — crisp core trace (travels) */}
                  <motion.path
                    d={BORDER_PATH}
                    stroke="#93c5fd"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#coreGlow)"
                    strokeDasharray={`${DASH} ${GAP}`}
                    animate={{ strokeDashoffset: [0, -PERIMETER] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Layer 4 — white leading dot (travels) */}
                  <motion.path
                    d={BORDER_PATH}
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                    filter="url(#dotGlow)"
                    strokeDasharray={`5 ${PERIMETER - 5}`}
                    animate={{ strokeDashoffset: [0, -PERIMETER] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* ── BIO COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200, damping: 14 }}
                viewport={{ once: true }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20"
              >
                <User className="text-accent" size={26} />
              </motion.div>

              {/* Name */}
              <motion.h3
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-7 text-4xl font-bold tracking-tight text-white"
              >
                Henil Shingala
              </motion.h3>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.62 }}
                viewport={{ once: true }}
                className="mt-2 text-lg font-medium text-accent"
              >
                Full Stack & Android Engineer
              </motion.p>

              {/* Bio paragraphs */}
              <div className="mt-8 space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.72 }}
                  viewport={{ once: true }}
                  className="text-base leading-relaxed text-white/80"
                >
                  A final-year Diploma IT Engineering student from Surat focused
                  on backend engineering, Android development, and scalable
                  software systems. I build production-oriented applications with
                  a strong focus on real-world usability and business workflows.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.84 }}
                  viewport={{ once: true }}
                  className="text-base leading-relaxed text-white/80"
                >
                  My expertise lies in crafting high-performance digital
                  experiences using{" "}
                  <span className="text-white font-semibold">
                    Django, Kotlin, and React
                  </span>
                  , ensuring every project is production-ready from logic to
                  deployment.
                </motion.p>
              </div>

              {/* Core Focus Tags */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Backend Systems",
                  "Android Ecosystem",
                  "AI/ML Integration",
                  "Cloud Deployment",
                ].map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.72 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.95 + i * 0.09,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.06,
                      borderColor: "rgba(59,130,246,0.45)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                    }}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/70 cursor-default transition-colors duration-200"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.7, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.55 }}
                      className="block h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {tag}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── EXPERTISE CARDS ── */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(59,130,246,0.38)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                  className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 transition-colors duration-300 cursor-default overflow-hidden"
                >
                  {/* Top shimmer line — appears on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                  {/* Corner glow */}
                  <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-accent/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Code2 size={20} className="text-accent mb-4" />
                  </motion.div>

                  <p className="text-sm leading-relaxed text-white/65 group-hover:text-white/90 transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}