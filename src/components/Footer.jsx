import { Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data/config.js";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-ink-faint)]">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--color-ink-faint)] hover:text-[var(--color-cyan)] transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--color-ink-faint)] hover:text-[var(--color-cyan)] transition-colors">
            <LinkedinIcon size={16} />
          </a>
          <a href={profile.social.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="text-[var(--color-ink-faint)] hover:text-[var(--color-cyan)] transition-colors">
            <Code2 size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
