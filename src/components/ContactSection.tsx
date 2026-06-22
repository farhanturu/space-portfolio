"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PaperPlaneRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase mb-4 font-mono"
              style={{ color: "#a78bfa" }}
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span style={{ color: "#ffffff" }}>Let&apos;s create</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #7c3aed, #fb64b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                something cosmic
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Have a project in mind? Let&apos;s collaborate and build something
              extraordinary together. I&apos;m always open to new challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4"
            >
              {[
                { icon: GithubLogo, href: "https://github.com", label: "GitHub" },
                { icon: LinkedinLogo, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: EnvelopeSimple, href: "mailto:hello@stellar.dev", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm mb-2 font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl text-white transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  outline: "none",
                }}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl text-white transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  outline: "none",
                }}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={5}
                className="w-full px-5 py-3.5 rounded-xl text-white transition-all duration-300 resize-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  outline: "none",
                }}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors duration-300"
              style={{ backgroundColor: "#7c3aed" }}
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <PaperPlaneRight size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
