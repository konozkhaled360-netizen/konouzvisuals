import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/**
 * Global creative-studio overlay: grid system, morphing blobs, floating letters,
 * color swatches, bezier pen-tool paths drawing on scroll, alignment rulers,
 * noise grain. Pointer-events: none so it never blocks UI.
 */
export function DesignStudioFX() {
  const { scrollYProgress } = useScroll();
  const pathProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const gridOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.25, 0.12, 0.12, 0.25]);
  const rulerX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {/* Grain noise */}
      <div className="noise-layer absolute inset-0 opacity-[0.08] mix-blend-overlay" />

      {/* Faint design grid */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 grid-lines" />
      </motion.div>

      {/* Morphing baby-blue + light-pink blobs */}
      <MorphBlob className="left-[-10%] top-[5%]" size={520} from="oklch(0.88 0.07 230 / 0.55)" to="oklch(0.9 0.08 350 / 0.55)" delay={0} />
      <MorphBlob className="right-[-12%] top-[40%]" size={620} from="oklch(0.9 0.08 350 / 0.5)" to="oklch(0.88 0.09 210 / 0.5)" delay={4} />
      <MorphBlob className="left-[20%] bottom-[-15%]" size={480} from="oklch(0.86 0.08 280 / 0.45)" to="oklch(0.88 0.07 200 / 0.5)" delay={8} />

      {/* Floating typography letters */}
      <FloatingGlyphs />

      {/* Color swatches floating in space */}
      <FloatingSwatches />

      {/* Animated bezier pen-tool path that draws as you scroll */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="penGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.14 350)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.7 0.13 230)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -50 200 C 300 50, 600 500, 900 250 S 1400 600, 1500 350"
          fill="none"
          stroke="url(#penGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          style={{ pathLength: pathProgress }}
        />
        <motion.path
          d="M 1500 100 C 1200 300, 900 100, 600 400 S 100 700, -50 600"
          fill="none"
          stroke="url(#penGrad)"
          strokeWidth="1.5"
          style={{ pathLength: pathProgress }}
        />
        {/* anchor points */}
        {[
          [120, 180], [420, 130], [720, 360], [1020, 280], [1320, 480],
          [220, 620], [580, 470], [980, 640], [1280, 220],
        ].map(([x, y], i) => (
          <AnchorPoint key={i} x={x} y={y} delay={i * 0.15} />
        ))}
      </svg>

      {/* Alignment ruler that briefly sweeps in */}
      <motion.div
        style={{ x: rulerX }}
        className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      >
        <span className="absolute -top-4 left-8 font-mono text-[10px] text-primary/60">y: 33.3%</span>
      </motion.div>
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
        <span className="absolute top-24 -left-1 rotate-90 font-mono text-[10px] text-secondary-foreground/50">x: 48px</span>
      </div>
    </div>
  );
}

function AnchorPoint({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + delay, duration: 0.4, ease: "easeOut" }}
    >
      <rect x={x - 3} y={y - 3} width="6" height="6" fill="oklch(1 0 0)" stroke="oklch(0.55 0.18 350)" strokeWidth="1" />
      <circle cx={x} cy={y} r="1" fill="oklch(0.55 0.18 350)" />
    </motion.g>
  );
}

function MorphBlob({ className, size, from, to, delay }: { className: string; size: number; from: string; to: string; delay: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size, filter: "blur(70px)" }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        background: [from, to, from],
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function FloatingGlyphs() {
  const glyphs = "AaBbGgKkMmOoQqRrSsTt&@*•✦◆".split("");
  return (
    <div className="absolute inset-0">
      {glyphs.map((g, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        return (
          <motion.span
            key={i}
            className="absolute font-display select-none text-foreground/[0.06]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: 30 + ((i * 17) % 70),
              fontStyle: i % 3 === 0 ? "italic" : "normal",
              fontWeight: i % 2 ? 800 : 400,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, i % 2 ? 4 : -4, 0],
            }}
            transition={{ duration: 8 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            {g}
          </motion.span>
        );
      })}
    </div>
  );
}

function FloatingSwatches() {
  const swatches = [
    { c: "oklch(0.88 0.09 350)", x: "8%", y: "18%" },
    { c: "oklch(0.86 0.09 230)", x: "82%", y: "12%" },
    { c: "oklch(0.92 0.06 90)", x: "12%", y: "72%" },
    { c: "oklch(0.78 0.14 350)", x: "88%", y: "62%" },
    { c: "oklch(0.82 0.1 280)", x: "48%", y: "85%" },
    { c: "oklch(0.85 0.08 200)", x: "60%", y: "38%" },
  ];
  return (
    <div className="absolute inset-0">
      {swatches.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-md shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)] ring-1 ring-white/60"
          style={{ left: s.x, top: s.y, width: 32, height: 32, background: s.c }}
          animate={{ y: [0, -18, 0], rotate: [0, 8, -6, 0] }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

/**
 * Hero overlay: a design file building itself in real time.
 * Renders behind/over the Hero section content.
 */
export function HeroBuildOverlay() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Building grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 grid-lines-strong"
      />

      {/* Ruler ticks */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute left-0 right-0 top-20 origin-left h-6 flex items-end"
      >
        {[...Array(80)].map((_, i) => (
          <div key={i} className={`flex-1 ${i % 5 === 0 ? "h-4" : "h-2"} border-l border-foreground/15`} />
        ))}
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute top-0 bottom-0 left-6 origin-top w-6 flex flex-col items-end"
      >
        {[...Array(60)].map((_, i) => (
          <div key={i} className={`w-full ${i % 5 === 0 ? "w-4" : "w-2"} border-t border-foreground/15`} style={{ flex: 1 }} />
        ))}
      </motion.div>

      {/* Pen-tool path drawing into a flowing curve */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <motion.path
          d="M 80 600 C 280 540, 360 220, 600 320 S 1060 700, 1180 420"
          fill="none"
          stroke="oklch(0.72 0.14 350 / 0.55)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.6 }}
        />
        {[[80, 600], [360, 220], [600, 320], [1060, 700], [1180, 420]].map(([x, y], i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.25, duration: 0.4 }}
          >
            <rect x={x - 4} y={y - 4} width="8" height="8" fill="oklch(1 0 0)" stroke="oklch(0.55 0.18 350)" strokeWidth="1.5" />
            <line x1={x - 30} y1={y - 10} x2={x + 30} y2={y + 10} stroke="oklch(0.55 0.18 350 / 0.4)" strokeWidth="0.8" />
            <circle cx={x - 30} cy={y - 10} r="2" fill="oklch(0.55 0.18 350)" />
            <circle cx={x + 30} cy={y + 10} r="2" fill="oklch(0.55 0.18 350)" />
          </motion.g>
        ))}
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute right-[12%] top-[22%] h-16 w-16 rotate-12 border-2 border-primary/40"
        animate={{ rotate: [12, 372], y: [0, -12, 0] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute left-[8%] bottom-[18%] h-12 w-12 rounded-full border-2 border-secondary/50"
        animate={{ scale: [1, 1.2, 1], y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg className="absolute left-[40%] top-[12%] h-12 w-12" viewBox="0 0 40 40">
        <motion.polygon
          points="20,4 36,34 4,34"
          fill="none"
          stroke="oklch(0.7 0.13 230 / 0.55)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          style={{ originX: "20px", originY: "20px" }}
          transition={{ pathLength: { duration: 1.6, delay: 0.8 }, rotate: { duration: 24, repeat: Infinity, ease: "linear" } }}
        />
      </svg>
    </div>
  );
}
