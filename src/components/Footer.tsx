"use client";

import { motion } from "framer-motion";
import { Heart } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-10 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.a
          href="#home"
          className="text-lg font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          <span style={{ color: "#7c3aed" }}>STELLAR</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>.dev</span>
        </motion.a>

        <p className="text-sm flex items-center gap-1" style={{ color: "rgba(255,255,255,0.3)" }}>
          Crafted with <Heart size={14} style={{ color: "#7c3aed" }} /> and curiosity
        </p>

        <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
          &copy; {new Date().getFullYear()} Stellar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
