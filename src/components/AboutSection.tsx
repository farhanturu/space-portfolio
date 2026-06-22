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
            className="text-accent-dim text-sm tracking-[0.3em] uppercase mb-4 font-mono"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Crafting the future
            <br />
            <span className="text-white/40">one pixel at a time</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl leading-relaxed mb-16"
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
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <skill.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-white font-semibold mb-2">{skill.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
