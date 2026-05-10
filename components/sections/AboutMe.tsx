"use client";

import {
  CheckCircle2,
  Code2,
  Rocket,
  User,
  Briefcase,
} from "lucide-react";

import { motion } from "framer-motion";
import Image from "next/image";
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

        {/* Content Layout */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* SQUARE PORTRAIT IMAGE - 5 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mx-auto lg:col-span-5 w-full max-w-[400px] aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl group"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-60 z-10" />
              
              <Image
                src="/Don.png"
                alt="Henil Shingala Portrait"
                fill
                className="object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-md">
                  Surat, IN
                </div>
              </div>
            </motion.div>

            {/* BIO & EXPERTISE - 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
                <User className="text-accent" size={26} />
              </div>

              <h3 className="mt-7 text-4xl font-bold tracking-tight text-white">
                Henil Shingala
              </h3>
              
              <p className="mt-2 text-lg font-medium text-accent">
                Full Stack & Android Engineer
              </p>

              <div className="mt-8 space-y-6">
                <p className="text-base leading-relaxed text-white/80">
                  A final-year Diploma IT Engineering student from Surat focused on backend engineering, 
                  Android development, and scalable software systems. I build production-oriented 
                  applications with a strong focus on real-world usability and business workflows.
                </p>

                <p className="text-base leading-relaxed text-white/80">
                  My expertise lies in crafting high-performance digital experiences using 
                  <span className="text-white font-semibold"> Django, Kotlin, and React</span>, 
                  ensuring every project is production-ready from logic to deployment.
                </p>
              </div>

              {/* Core Focus Tags */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Backend Systems",
                  "Android Ecosystem",
                  "AI/ML Integration",
                  "Cloud Deployment"
                ].map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/70"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* WHAT I BUILD - Compact Grid below */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04]"
                >
                  <Code2 size={20} className="text-accent mb-4" />
                  <p className="text-sm leading-relaxed text-white/70 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>  </div>
      </div>
    </motion.section>
  );
}