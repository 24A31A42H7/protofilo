import { motion } from "framer-motion";
import { profile, stats } from "../data/config.js";
import { Sparkles } from "lucide-react";

const focusAreas = [
  "Software development",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Structures & Algorithms",
  "Full-stack development",
  "Building real-world products",
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-2 glow-violet">
              <img
                src={profile.photo}
                alt={profile.name}
                className="rounded-2xl w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-4 py-3 flex items-center gap-2">
              <Sparkles size={16} className="text-[var(--color-cyan)]" />
              <span className="font-[family-name:var(--font-mono)] text-xs">{profile.role}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[var(--color-ink-muted)] text-lg leading-relaxed">
              I'm an AI/ML student who likes building things end to end — from a model that works, to an
              interface people actually want to use. I care about writing code that's clean enough to hand
              off and fast enough to matter.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-ink-muted)]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
                  />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-[var(--color-line)] px-4 py-5 text-center">
                  <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold text-gradient">
                    {s.value}+
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-ink-faint)]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center" : ""}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-[var(--color-ink-muted)] max-w-xl">{subtitle}</p>}
    </motion.div>
  );
}
