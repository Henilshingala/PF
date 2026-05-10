"use client";

import { useEffect, useState } from "react";
import { Monitor, Layout, MonitorOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesktopOnly({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      
      // 1. Aggressive User Agent Check
      const ua = navigator.userAgent.toLowerCase();
      const isMobileUA = /mobile|android|iphone|ipad|tablet|kindle|silk|opera mini/i.test(ua);
      
      // 2. Touch Device Check
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // 3. Viewport Size Check (Aggressive 1280px cutoff)
      const isSmallScreen = width < 1280;

      // Logic: Must pass ALL checks to be considered a desktop
      // - Width must be >= 1280px
      // - Must NOT be a mobile user agent
      // - Must NOT be a touch-primary device (to block tablets in desktop mode)
      const passed = !isSmallScreen && !isMobileUA && !isTouchDevice;
      
      setIsDesktop(passed);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Prevent hydration mismatch by returning null initially
  if (isDesktop === null) return null;

  return (
    <AnimatePresence mode="wait">
      {isDesktop ? (
        <motion.div
          key="desktop-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          key="mobile-warning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] px-6 py-10 overflow-hidden"
        >
          {/* Background Glows */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
            <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[100px]" />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 w-full max-w-lg rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600/10 border border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
              <Monitor className="h-10 w-10 text-blue-500" />
            </div>

            <h1 className="mb-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Desktop Only <span className="text-blue-500">Experience</span>
            </h1>

            <p className="mb-8 text-base leading-relaxed text-slate-400">
              This portfolio is optimized for desktop experience only. 
              <br className="hidden sm:block" />
              Please open this website on a <span className="text-white font-bold">laptop or desktop screen</span> for the full interactive experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/5 py-4 px-6 text-sm text-slate-300">
                <Layout className="h-4 w-4 text-blue-400" />
                <span>Requires minimum 1280px width</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/5 py-4 px-6 text-sm text-slate-300">
                <MonitorOff className="h-4 w-4 text-blue-400" />
                <span>Mobile & Tablet access is restricted</span>
              </div>
            </div>

            <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Engineering Excellence · Henil Shingala
            </p>
          </motion.div>

          {/* Footer Decoration */}
          <div className="absolute bottom-8 left-0 right-0 text-center z-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mb-4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
