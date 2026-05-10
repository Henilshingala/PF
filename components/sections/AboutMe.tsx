"use client";

import {
  CheckCircle2,
  Code2,
  Rocket,
  User,
  Briefcase,
} from "lucide-react";

import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";

const highlights = [
  "2 Live client platforms deployed",
  "2 Industry internships completed",
  "16+ production-level projects built",
];

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
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-accent">
            About
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Who I Am
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Full stack developer focused on building scalable web systems,
            Android applications, and production-ready software solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative flex min-h-[540px] flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)] md:p-10"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
                <User className="text-accent" size={26} />
              </div>

              {/* Title */}
              <h3 className="mt-7 text-3xl font-bold tracking-tight text-white">
                Developer Profile
              </h3>

              {/* Intro */}
              <p className="mt-6 text-base leading-8 text-white/80">
                I&apos;m Henil Shingala, a final-year Diploma IT Engineering
                student from Surat focused on backend engineering, Android
                development, and scalable software systems.
              </p>

              <p className="mt-5 text-base leading-8 text-white/80">
                I build production-oriented applications using Django, Kotlin,
                SQLite, Firebase, and AWS with strong focus on real-world
                usability, deployment, and business workflows.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-bold text-white">16+</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/60">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/60">
                    Internships
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-bold text-white">8.78</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/60">
                    CGPA
                  </p>
                </div>
              </div>

              {/* Pills */}
              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                {[
                  "📍 Surat, Gujarat",
                  "💼 Open to Work",
                  "⚡ Backend Focused",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:border-accent/30 hover:text-white"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative flex min-h-[540px] flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)] md:p-10"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
                <Rocket className="text-accent" size={26} />
              </div>

              {/* Title */}
              <h3 className="mt-7 text-3xl font-bold tracking-tight text-white">
                What I Build
              </h3>

              {/* Expertise */}
              <div className="mt-8 space-y-5">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <Code2
                      size={18}
                      className="mt-1 shrink-0 text-accent"
                    />

                    <p className="text-sm leading-7 text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <Briefcase size={18} className="text-accent" />

                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    Experience Highlights
                  </h4>
                </div>

                <div className="space-y-4">
                  {highlights.map((line) => (
                    <div
                      key={line}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-accent"
                      />

                      <span className="text-sm text-white/80">
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}