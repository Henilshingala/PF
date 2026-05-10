"use client";

import { Monitor, Smartphone } from "lucide-react";

export default function DesktopOnly() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] p-6 text-center lg:hidden">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-accent/20">
        <Smartphone className="h-12 w-12 text-accent" />
      </div>
      <h1 className="mb-4 text-2xl font-black text-white">Desktop Experience Only</h1>
      <p className="max-w-xs text-slate-400">
        This portfolio is optimized for high-end desktop displays. Please open this website on a 
        <span className="text-white font-bold"> PC or Computer</span> to view the full experience.
      </p>
      <div className="mt-12 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300">
        <Monitor className="h-4 w-4" />
        <span>Desktop Recommended</span>
      </div>
    </div>
  );
}
