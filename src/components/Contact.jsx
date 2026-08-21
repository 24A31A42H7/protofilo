import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data/config.js";
import { SectionHeading } from "./About.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("error");
      return;
    }
    // Wire this up to your email service / API endpoint of choice.
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const field = (name, label, type = "text") => (
    <div>
      <label htmlFor={name} className="block text-xs font-[family-name:var(--font-mono)] text-[var(--color-ink-faint)] mb-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          rows={5}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className={`w-full rounded-xl bg-transparent border px-4 py-3 text-sm outline-none transition-colors resize-none ${
            errors[name] ? "border-red-400" : "border-[var(--color-line)] focus:border-[var(--color-cyan)]"
          }`}
        />
      ) : (
        <input
          id={name}
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className={`w-full rounded-xl bg-transparent border px-4 py-3 text-sm outline-none transition-colors ${
            errors[name] ? "border-red-400" : "border-[var(--color-line)] focus:border-[var(--color-cyan)]"
          }`}
        />
      )}
      {errors[name] && <p className="mt-1.5 text-xs text-red-400">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-pad bg-[var(--color-bg)]/40">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something" center />

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: LinkedinIcon, label: "LinkedIn", value: "Connect with me", href: profile.social.linkedin },
              { icon: GithubIcon, label: "GitHub", value: "See my code", href: profile.social.github },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-[var(--color-cyan)] transition-colors"
              >
                <div className="w-10 h-10 rounded-full grid place-items-center border border-[var(--color-line)]">
                  <Icon size={16} className="text-[var(--color-cyan)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-ink-faint)]">{label}</div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {field("name", "Name")}
              {field("email", "Email", "email")}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message", "textarea")}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white hover:-translate-y-0.5 transition-transform"
              style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
            >
              <Send size={15} /> Send Message
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} /> Please fix the highlighted fields.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
