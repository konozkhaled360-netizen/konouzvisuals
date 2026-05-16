export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob animate-float-slow"
        style={{
          width: 480,
          height: 480,
          top: "-10%",
          left: "-8%",
          background: "oklch(0.88 0.1 350 / 0.7)",
        }}
      />
      <div
        className="blob animate-float-slow"
        style={{
          width: 520,
          height: 520,
          top: "20%",
          right: "-12%",
          background: "oklch(0.85 0.1 230 / 0.6)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="blob animate-float-slow"
        style={{
          width: 380,
          height: 380,
          bottom: "-10%",
          left: "30%",
          background: "oklch(0.88 0.08 300 / 0.55)",
          animationDelay: "-8s",
        }}
      />
      {/* Twinkling stars */}
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-twinkle"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            animationDelay: `${(i * 0.4) % 3}s`,
            fontSize: i % 3 === 0 ? 18 : 12,
            color: i % 2 ? "oklch(0.78 0.12 350)" : "oklch(0.78 0.12 230)",
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
