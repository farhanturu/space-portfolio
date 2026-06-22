"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm tracking-[0.3em] uppercase mb-6 font-mono"
          style={{ color: "#a78bfa" }}
        >
          Creative Developer & Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          <span style={{ color: "#ffffff" }}>Building </span>
          <span
            style={{
              background: "linear-gradient(to right, #7c3aed, #c080ff, #fb64b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            digital
          </span>
          <br />
          <span style={{ color: "#ffffff" }}>experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          I craft immersive web experiences at the intersection of design
          and technology. Currently exploring the cosmos of creative coding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#work"
            className="px-8 py-3.5 text-white rounded-full font-medium text-sm transition-all duration-300"
            style={{ backgroundColor: "#7c3aed" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
