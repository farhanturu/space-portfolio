"use client";

import { motion } from "framer-motion";
import { Heart } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.a
          href="#home"
          className="text-lg font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-accent">STELLAR</span>
          <span className="text-white/60">.dev</span>
        </motion.a>

        <p className="text-white/30 text-sm flex items-center gap-1">
          Crafted with <Heart size={14} className="text-accent" fill="currentColor" /> and curiosity
        </p>

        <p className="text-white/20 text-xs font-mono">
          &copy; {new Date().getFullYear()} Stellar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
