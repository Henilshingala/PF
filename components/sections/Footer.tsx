"use client";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";

export default function Footer() {
  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative overflow-hidden bg-[#030712] py-24 md:py-32 lg:min-h-screen lg:flex lg:items-center"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(37,99,235,0.20)_0%,transparent_70%)]" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Hero Content */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.3em] text-accent uppercase"
          >
            GET IN TOUCH
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Let&apos;s Build
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Something Great
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            I&apos;m actively looking for entry-level full-stack and Android
            developer roles. Interested in scalable backend systems, production
            deployments, real-world applications, and impactful engineering
            work.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3 text-white/90">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                <Mail size={18} className="text-blue-400" />
              </div>

              <span className="text-sm md:text-base">
                henilshingala2462@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                <Phone size={18} className="text-blue-400" />
              </div>

              <span className="text-sm md:text-base">
                +91 81404 90540
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="mailto:henilshingala2462@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]"
            >
              Send an Email
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/henil_CV-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(37,99,235,0.15)]"
            >
              View Resume
            </a>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-28 border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 items-center gap-6 text-center md:grid-cols-3 md:text-left">
            {/* Left */}
            <div>
              <p className="text-sm text-white/40">
                © 2025 Henil Shingala
              </p>

              <p className="mt-1 text-xs text-white/30">
                Made with ❤️ using Vibe Coding
              </p>
            </div>

            {/* Center */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/40">
              <MapPin size={16} className="text-blue-400" />
              Surat, Gujarat, India
            </div>

            {/* Right */}
            <div className="flex justify-center gap-4 md:justify-end">
              <a
                href="https://github.com/Henilshingala"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]"
              >
                <Github
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/henil-shingala-258265274/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]"
              >
                <Linkedin
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="mailto:henilshingala2462@gmail.com"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]"
              >
                <Mail
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}