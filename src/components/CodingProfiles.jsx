import { motion } from "framer-motion";
import { Code2, Braces, Terminal as TerminalIcon, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons.jsx";
import { profile } from "../data/config.js";
import { SectionHeading } from "./About.jsx";

const platforms = [
  { label: "LeetCode", icon: Code2, href: (p) => p.social.leetcode },
  { label: "HackerRank", icon: TerminalIcon, href: (p) => p.social.hackerrank },
  { label: "GitHub", icon: GithubIcon, href: (p) => p.social.github },
  { label: "GeeksforGeeks", icon: Braces, href: (p) => p.social.gfg },
];

export default function CodingProfiles() {
  return (
    <section className="section-pad bg-[var(--color-bg)]/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Profiles" title="Where I code" center />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map(({ label, icon: Icon, href }, i) => (
            <motion.a
              key={label}
              href={href(profile)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 flex flex-col items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl grid place-items-center border border-[var(--color-line)] group-hover:border-[var(--color-cyan)] transition-colors">
                <Icon size={18} className="text-[var(--color-cyan)]" />
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="font-[family-name:var(--font-display)] font-semibold">{label}</span>
                <ArrowUpRight size={15} className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-cyan)] transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
