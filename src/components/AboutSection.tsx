"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Globe } from "@phosphor-icons/react";

const skills = [
  {
    icon: Code,
    title: "Frontend Engineering",
    desc: "React, Next.js, TypeScript, and modern web APIs to build performant applications.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    desc: "Figma, motion design, and visual storytelling that bridges aesthetics with function.",
  },
  {
    icon: Rocket,
    title: "3D & WebGL",
    desc: "Three.js, React Three Fiber, and shader programming for immersive experiences.",
  },
  {
    icon: Globe,
    title: "Full Stack",
    desc: "Node.js, databases, cloud infrastructure, and deployment pipelines.",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "20+", label: "Happy Clients" },
  { value: "∞", label: "Curiosity" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase mb-4 font-mono"
            style={{ color: "#a78bfa" }}
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span style={{ color: "#ffffff" }}>Crafting the future</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>one pixel at a time</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl leading-relaxed mb-16"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            I&apos;m a creative developer obsessed with pushing the boundaries of
            what&apos;s possible on the web. From interactive 3D experiences to
            pixel-perfect interfaces, I bring ideas to life through code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group p-6 rounded-2xl transition-all duration-500"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{ backgroundColor: "rgba(124,58,237,0.1)" }}
              >
                <skill.icon size={22} style={{ color: "#7c3aed" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#ffffff" }}>
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  background: "linear-gradient(to right, #7c3aed, #c07eff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
