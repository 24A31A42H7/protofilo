import { motion } from "framer-motion";
import { skillGroups } from "../data/skills.js";
import { SectionHeading } from "./About.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-[var(--color-bg)]/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="What I work with" center />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-cyan)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:border-[var(--color-violet)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
