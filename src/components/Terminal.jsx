import { useEffect, useState } from "react";
import { profile } from "../data/config.js";

const lines = [
  { text: `const developer = {`, indent: 0 },
  { text: `name: "${profile.name}",`, indent: 1 },
  { text: `stack: ["React", "Node", "Python"],`, indent: 1 },
  { text: `focus: "AI/ML + Full-Stack",`, indent: 1 },
  { text: `motto: "ship, learn, repeat",`, indent: 1 },
  { text: `};`, indent: 0 },
  { text: ``, indent: 0 },
  { text: `> deploy(developer)`, indent: 0, prompt: true },
  { text: `✓ build passed — ready for opportunities`, indent: 0, success: true },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const current = lines[visibleLines].text;

    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCharCount(0);
      }, 280);
      return () => clearTimeout(t);
    }
  }, [charCount, visibleLines]);

  return (
    <div className="relative">
      <div className="glass rounded-2xl overflow-hidden glow-violet">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-line)]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-[family-name:var(--font-mono)] text-xs text-[var(--color-ink-faint)]">
            portfolio.js
          </span>
        </div>
        <div className="p-6 font-[family-name:var(--font-mono)] text-[13px] sm:text-sm leading-7 min-h-[280px]">
          {lines.slice(0, visibleLines).map((l, i) => (
            <div key={i} style={{ paddingLeft: `${l.indent * 1.25}rem` }}>
              <LineContent text={l.text} prompt={l.prompt} success={l.success} />
            </div>
          ))}
          {visibleLines < lines.length && (
            <div style={{ paddingLeft: `${lines[visibleLines].indent * 1.25}rem` }}>
              <LineContent
                text={lines[visibleLines].text.slice(0, charCount)}
                prompt={lines[visibleLines].prompt}
                success={lines[visibleLines].success}
              />
              <span className="caret text-[var(--color-cyan)]">▍</span>
            </div>
          )}
        </div>
      </div>
      <div
        aria-hidden
        className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl -z-10 opacity-40 blur-xl"
        style={{ background: "linear-gradient(120deg, var(--color-violet), var(--color-cyan))" }}
      />
    </div>
  );
}

function LineContent({ text, prompt, success }) {
  if (success) return <span className="text-[var(--color-cyan)]">{text}</span>;
  if (prompt) return <span className="text-[var(--color-violet)] font-medium">{text}</span>;
  return <span className="text-[var(--color-ink-muted)]">{colorize(text)}</span>;
}

function colorize(text) {
  const stringMatch = text.match(/^([\w]+):|^(const)\s|^(};)$/);
  if (stringMatch) {
    return <span className="text-[var(--color-ink)]">{text}</span>;
  }
  return text;
}
