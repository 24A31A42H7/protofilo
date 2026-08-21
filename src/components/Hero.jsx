import { motion } from "framer-motion";
import { Code2, ArrowRight, FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data/config.js";
import Terminal from "./Terminal.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 overflow-hidden">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--color-violet)" }}
        />
        <div
          className="absolute top-40 -right-40 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--color-cyan)" }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
          <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M 42 0 L 0 0 0 42" fill="none" stroke="var(--color-ink)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow mb-5">
            ~/{profile.name.toLowerCase()} — available for opportunities
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-[family-name:var(--font-display)] font-semibold leading-[1.03] text-[clamp(2.6rem,6vw,4.5rem)] tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 text-xl sm:text-2xl font-[family-name:var(--font-display)] text-gradient font-medium"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-[var(--color-ink-muted)] text-base sm:text-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 glow-violet"
              style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
            >
              View My Work <ArrowRight size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-[var(--color-line)] hover:border-[var(--color-cyan)] transition-colors"
            >
              <FileDown size={15} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-[var(--color-line)] hover:border-[var(--color-cyan)] transition-colors"
            >
              <Mail size={15} /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-9 flex items-center gap-4">
            {[
              { href: profile.social.github, icon: GithubIcon, label: "GitHub" },
              { href: profile.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 grid place-items-center rounded-full border border-[var(--color-line)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="animate-floaty"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
