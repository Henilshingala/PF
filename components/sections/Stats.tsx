"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sectionVariants } from "@/lib/utils";

function useCounter(target: number, duration: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(target * progress);
      if (progress < 1) requestAnimationFrame(frame);
    };
    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [target, duration, isInView]);
  return count;
}

function Stat({ target, suffix = "", label, sublabel, decimal = false, bordered = true, gradient, solidColor }: { target: number; suffix?: string; label: string; sublabel: string; decimal?: boolean; bordered?: boolean; gradient: string; solidColor?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(target, 2000, inView);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`px-4 py-5 text-center md:px-8 ${bordered ? "md:border-r md:border-white/10" : ""}`}
    >
      <div
        className={`font-syne text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl tabular-nums ${solidColor ? "" : `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}`}
        style={solidColor ? { color: solidColor, willChange: "transform" } : { willChange: "transform" }}
      >
        {decimal ? count.toFixed(2) : Math.round(count)}
        {suffix}
      </div>
      <p className="mt-2 text-base font-semibold text-white">{label}</p>
      <p className="mt-1 text-sm text-white/50">{sublabel}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <motion.section id="stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="relative overflow-hidden bg-[#070B1A] py-16 md:py-24 lg:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-30" style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.15), transparent 70%)" }} />
      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-[0.15em] text-accent">BY THE NUMBERS</p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">Impact & Experience</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <Stat target={16} suffix="+" label="Projects Shipped" sublabel="Full-stack, AI/ML, Android & Web" gradient="from-blue-600 to-cyan-500" />
          <Stat target={2} label="Internships" sublabel="ByteBuilder & Kartum Infotech" gradient="from-violet-600 to-purple-500" />
          <Stat target={8.78} decimal label="CGPA" sublabel="Tapi Diploma Engineering College" gradient="from-emerald-600 to-green-500" solidColor="#10b981" />
          <Stat target={3} suffix="+" label="Live Platforms" sublabel="raivatstones.com & more" bordered={false} gradient="from-orange-600 to-amber-500" />
        </div>
        <p className="mt-16 text-center text-base italic text-white/60">
          From concept -&gt; design -&gt; code -&gt; deployment. End-to-end.
        </p>
      </div>
    </motion.section>
  );
}
