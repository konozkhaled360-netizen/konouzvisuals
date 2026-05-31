import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
      const t = e.target as HTMLElement | null;
      if (t && t.closest("a, button, [data-cursor='project'], .project-card, [role='button']")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-1/2 transition-[opacity,transform] duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: hidden ? 0 : 1,
      }}
    >
      <div
        className="rounded-full border-2 border-primary/60 mix-blend-multiply transition-all duration-300 ease-out"
        style={{
          width: hovering ? 72 : 32,
          height: hovering ? 72 : 32,
          marginLeft: hovering ? -20 : 0,
          marginTop: hovering ? -20 : 0,
          backgroundColor: hovering ? "oklch(0.88 0.1 350 / 0.18)" : "transparent",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-300"
        style={{
          width: hovering ? 220 : 160,
          height: hovering ? 220 : 160,
          background: "radial-gradient(circle, oklch(0.85 0.12 350 / 0.5), transparent 70%)",
        }}
      />
      {hovering && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[10px] uppercase tracking-[0.2em] text-primary/80">
          view
        </span>
      )}
    </div>
  );
}
