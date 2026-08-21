import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "../data/achievements.js";
import { SectionHeading } from "./About.jsx";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Achievements" title="Wins along the way" center />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6"
            >
              <div
                className="w-10 h-10 rounded-xl grid place-items-center mb-4"
                style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
              >
                <Trophy size={17} className="text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-sm">{a.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
