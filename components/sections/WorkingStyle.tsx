"use client";

import {
  Code2,
  Database,
  Layout,
  Link,
  Rocket,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";

const items = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Readable architecture, meaningful naming, and maintainable systems built for long-term scalability.",
  },
  {
    icon: Search,
    title: "Problem-First Thinking",
    description:
      "I break problems into systems and workflows before touching implementation.",
  },
  {
    icon: Link,
    title: "API-First Design",
    description:
      "Backend structure, authentication, validation, and scalable REST APIs come first.",
  },
  {
    icon: Rocket,
    title: "Deploy-Ready Mindset",
    description:
      "Production matters. I test, optimize, deploy, and monitor beyond localhost.",
  },
  {
    icon: Layout,
    title: "UI-Conscious",
    description:
      "Good software should feel intuitive, responsive, and visually structured.",
  },
  {
    icon: Database,
    title: "Backend-Strong",
    description:
      "Comfortable with Django architecture, databases, authentication, admin systems, and integrations.",
  },
];

export default function WorkingStyle() {
  return (
    <motion.section
      id="principles"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative overflow-hidden bg-[#030712] py-20 md:py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid Blur */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-accent uppercase">
            HOW I BUILD
          </p>

          <h2 className="mt-4 text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering
            <br />
            Mindset
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
            Real-world engineering principles focused on scalability,
            maintainability, deployment, and product execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/[0.06]"
            >
              {/* Glass Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>

              {/* Top Border Glow */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 backdrop-blur-md">
                <item.icon
                  size={26}
                  className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-[15px]">
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="relative z-10 mt-6 h-[1px] w-full bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}