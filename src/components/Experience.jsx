import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Medal } from "lucide-react";
import { timeline } from "../data/timeline.js";
import { SectionHeading } from "./About.jsx";

const iconMap = {
  Education: GraduationCap,
  Internship: Briefcase,
  Certification: Award,
  Achievement: Medal,
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-[var(--color-bg)]/40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Journey" title="Experience & Education" center />

        <div className="mt-16 relative">
          <div
            className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2"
            style={{ background: "linear-gradient(180deg, var(--color-violet), var(--color-cyan))" }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.type] || Award;
              const leftSide = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: leftSide ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex sm:items-center gap-5 sm:gap-0 ${
                    leftSide ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div
                    className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full grid place-items-center glass z-10"
                    style={{ boxShadow: "0 0 0 4px var(--color-bg)" }}
                  >
                    <Icon size={16} className="text-[var(--color-cyan)]" />
                  </div>

                  <div className={`ml-16 sm:ml-0 sm:w-1/2 ${leftSide ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className="glass rounded-2xl p-5 inline-block text-left w-full">
                      <span className="eyebrow">{item.type} · {item.period}</span>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] font-semibold">{item.title}</h3>
                      <p className="text-sm text-[var(--color-ink-faint)]">{item.org}</p>
                      <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
