import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { profile } from "../data/config.js";

export default function Resume() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl opacity-25"
            style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
          />
          <h2 className="relative font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold">
            Want to know more about my experience?
          </h2>
          <p className="relative mt-3 text-[var(--color-ink-muted)]">
            Grab a full copy of my resume for the details.
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="relative mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white hover:-translate-y-0.5 transition-transform glow-violet"
            style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
          >
            <FileDown size={16} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
