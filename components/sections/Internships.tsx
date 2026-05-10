"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";

const data = [
  {
    company: "ByteBuilder Infotech",
    badge: "Web Development · Django",
    year: "2024",
    body:
      "Built and maintained a snack delivery web platform using Django with cart workflows, WhatsApp ordering integration, and Django Admin management. Focused on responsive UI development, order handling, and backend workflow optimization in a collaborative 2-developer environment.",
    tech: ["Django", "HTML/CSS", "JavaScript", "WhatsApp API"],
  },
  {
    company: "Kartum Infotech",
    badge: "Android Development · Kotlin",
    year: "2024",
    body:
      "Developed a Kotlin-based Android snack delivery application featuring product browsing, cart management, WhatsApp ordering flow, and offline SQLite storage. Worked on responsive mobile UI, local database integration, and smooth user experience in a 2-member development team.",
    tech: ["Kotlin", "Android Studio", "SQLite", "WhatsApp API"],
  },
];

export default function Internships() {
  return (
    <motion.section
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-20 md:py-28 lg:py-36"
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
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-accent uppercase">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Where I&apos;ve Worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-7xl">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

          <div className="space-y-24 md:space-y-28">
            {data.map((job, i) => (
              <div
                key={job.company}
                className={`relative flex w-full ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-14 hidden -translate-x-1/2 md:flex">
                  <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/30 bg-accent shadow-[0_0_30px_rgba(37,99,235,0.7)]">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Card */}
                <motion.article
                  initial={{
                    opacity: 0,
                    x: i % 2 === 0 ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] md:w-[46%] md:p-10"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Top */}
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                          {job.company}
                        </h3>

                        <span className="mt-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
                          {job.badge}
                        </span>
                      </div>

                      <span className="shrink-0 text-sm font-medium text-white/60">
                        {job.year}
                      </span>
                    </div>

                    {/* Body */}
                    <p className="mt-6 text-[15px] leading-8 text-white/70">
                      {job.body}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/55 transition-colors duration-300 hover:border-accent/30 hover:text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}