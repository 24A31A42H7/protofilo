import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, FileDown } from "lucide-react";
import { GithubIcon } from "./BrandIcons.jsx";
import { profile } from "../data/config.js";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-6xl"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-300 glass ${
            scrolled ? "py-2 shadow-lg shadow-black/20" : "py-3"
          }`}
        >
          <a
            href="#home"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
          >
            {profile.name}<span className="text-[var(--color-cyan)]">.</span>
          </a>

          <ul className="hidden lg:flex items-center gap-7 font-[family-name:var(--font-mono)] text-[13px] text-[var(--color-ink-muted)]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[var(--color-ink)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLight((v) => !v)}
              aria-label="Toggle theme"
              className="w-9 h-9 grid place-items-center rounded-full border border-[var(--color-line)] hover:border-[var(--color-cyan)] transition-colors"
            >
              {light ? <Moon size={15} /> : <Sun size={15} />}
            </button>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 grid place-items-center rounded-full border border-[var(--color-line)] hover:border-[var(--color-cyan)] transition-colors"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
            >
              <FileDown size={14} /> Resume
            </a>
          </div>

          <button
            className="lg:hidden w-9 h-9 grid place-items-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass p-5 flex flex-col gap-4 font-[family-name:var(--font-mono)] text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-line)]">
              <button onClick={() => setLight((v) => !v)} className="w-9 h-9 grid place-items-center rounded-full border border-[var(--color-line)]">
                {light ? <Moon size={15} /> : <Sun size={15} />}
              </button>
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="w-9 h-9 grid place-items-center rounded-full border border-[var(--color-line)]">
                <GithubIcon size={15} />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="flex-1 text-center rounded-full px-4 py-2 text-white text-sm font-medium"
                style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
