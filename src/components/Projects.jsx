import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, Code2 } from "lucide-react";
import { GithubIcon } from "./BrandIcons.jsx";
import { projects } from "../data/projects.js";
import { SectionHeading } from "./About.jsx";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A few projects that show how I think about product, code, and shipping."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col"
            >
              <div
                className="h-40 grid place-items-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(124,108,245,0.18), rgba(53,216,224,0.12))" }}
              >
                {p.image ? (
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <Code2 size={34} className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-cyan)] transition-colors" />
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-[family-name:var(--font-mono)] text-[11px] rounded-full border border-[var(--color-line)] px-2.5 py-1 text-[var(--color-ink-faint)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 pt-4 border-t border-[var(--color-line)]">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  <button
                    onClick={() => setActive(p)}
                    className="ml-auto flex items-center gap-1 text-xs font-medium text-[var(--color-cyan)] hover:gap-1.5 transition-all"
                  >
                    Details <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/60 backdrop-blur-sm p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 w-8 h-8 grid place-items-center rounded-full border border-[var(--color-line)]"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold pr-8">{active.name}</h3>
              <p className="mt-4 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                {active.longDescription || active.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span key={t} className="font-[family-name:var(--font-mono)] text-[11px] rounded-full border border-[var(--color-line)] px-2.5 py-1 text-[var(--color-ink-faint)]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border border-[var(--color-line)] hover:border-[var(--color-cyan)] transition-colors"
                >
                  <GithubIcon size={15} /> View Code
                </a>
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white"
                    style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
