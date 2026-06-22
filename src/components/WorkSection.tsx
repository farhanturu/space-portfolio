"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    title: "Nebula Dashboard",
    category: "Web Application",
    year: "2024",
    description:
      "Real-time analytics dashboard with 3D data visualizations and interactive charts for monitoring cosmic events.",
    tech: ["Next.js", "Three.js", "D3.js", "WebSocket"],
    color: "from-violet-600/20 to-purple-900/20",
    accent: "#7c3aed",
  },
  {
    title: "Stellar Commerce",
    category: "E-Commerce",
    year: "2024",
    description:
      "Premium e-commerce platform with AR product preview and seamless checkout experience.",
    tech: ["React", "Stripe", "Sanity", "Vercel"],
    color: "from-cyan-600/20 to-blue-900/20",
    accent: "#06b6d4",
  },
  {
    title: "Orbit Studio",
    category: "Creative Agency",
    year: "2023",
    description:
      "Award-winning portfolio site for a design studio with cinematic scroll animations and WebGL transitions.",
    tech: ["Nuxt.js", "GSAP", "Three.js", "Prismic"],
    color: "from-rose-600/20 to-pink-900/20",
    accent: "#f43f5e",
  },
  {
    title: "Gravity Protocol",
    category: "Web3 / DeFi",
    year: "2023",
    description:
      "Decentralized finance interface with real-time portfolio tracking and multi-chain wallet integration.",
    tech: ["TypeScript", "Wagmi", "The Graph", "Solidity"],
    color: "from-emerald-600/20 to-green-900/20",
    accent: "#10b981",
  },
];

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="work" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-dim text-sm tracking-[0.3em] uppercase mb-4 font-mono"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-16"
          >
            Featured projects
          </motion.h2>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group relative rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 cursor-pointer ${
                hoveredIdx === i
                  ? "bg-gradient-to-r " + project.color + " border-white/10"
                  : "bg-white/[0.02]"
              }`}
            >
              <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span className="text-white/40 text-sm font-mono">
                      {project.category}
                    </span>
                    <span className="text-white/20 text-sm font-mono">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono text-white/50 bg-white/5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <motion.div
                    animate={{
                      rotate: hoveredIdx === i ? 45 : 0,
                      scale: hoveredIdx === i ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-colors"
                  >
                    <ArrowUpRight size={20} className="text-white/60" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
