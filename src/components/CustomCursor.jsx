import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const hoverCheck = (e) => {
      const el = e.target.closest("a, button, input, textarea, [data-cursor-hover]");
      ring.style.width = el ? "50px" : "34px";
      ring.style.height = el ? "50px" : "34px";
      ring.style.borderColor = el ? "var(--color-cyan)" : "var(--color-violet)";
    };

    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hoverCheck);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hoverCheck);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
