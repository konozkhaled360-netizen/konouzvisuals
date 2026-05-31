import { motion } from "motion/react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/konouz-hero.png";

function TypewriterText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setShown((s) => {
          if (s >= text.length) {
            clearInterval(id);
            return s;
          }
          return s + 1;
        });
      }, 90);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);
  return (
    <span className={className}>
      {text.slice(0, shown)}
      <span className="inline-block w-[0.08em] h-[0.9em] align-middle bg-current ml-1 animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
      {/* Giant PORTFOLIO text with image illusion */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 text-center"
          aria-label="Portfolio"
        >
          <h2
            className="font-display font-black leading-[0.85] tracking-tighter select-none"
            style={{
              fontSize: "clamp(4rem, 18vw, 16rem)",
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextStroke: "1px oklch(0.72 0.14 350 / 0.4)",
              filter: "drop-shadow(0 20px 40px oklch(0.72 0.14 350 / 0.25))",
            }}
          >
            <TypewriterText text="PORTFOLIO" delay={300} />
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-2 text-xs uppercase tracking-[0.5em] text-muted-foreground"
          >
            ✦ a creative universe by konouz ✦
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-foreground/70"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for sweet projects · 2026
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] font-semibold">
            <span className="block">Konouz</span>
            <span className="block italic font-light text-gradient">— Graphic</span>
            <span className="block">Designer<span className="text-primary">.</span></span>
          </h1>

          <p className="mt-8 max-w-md text-lg text-muted-foreground md:text-xl">
            Creating playful and emotional visual experiences — soft, dreamy, and a little bit magical. ✦
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">View my work</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span
                className="absolute inset-0 -z-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, oklch(0.72 0.14 350), oklch(0.7 0.13 250))" }}
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-medium text-foreground transition-all hover:scale-105"
            >
              Say hi ♡
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8">
            {[
              { n: "120+", l: "Projects" },
              { n: "5y", l: "Experience" },
              { n: "20+", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold text-gradient">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* decorative pastel frame */}
          <div
            className="absolute -inset-6 rounded-[3rem] blur-2xl opacity-60"
            style={{ background: "var(--gradient-dream)" }}
          />
          <div className="relative animate-float">
            <div
              className="absolute -inset-3 rounded-[2.5rem]"
              style={{ background: "var(--gradient-dream)" }}
            />
            <img
              src={heroImg}
              alt="Konouz, graphic designer portrait"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[2.25rem] object-cover shadow-[var(--shadow-soft)]"
            />
            {/* floating chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] animate-float"
              style={{ animationDelay: "-1s" }}
            >
              <div className="text-xs text-muted-foreground">Now playing</div>
              <div className="text-sm font-medium">Brand · Lila Studio</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 bottom-12 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] animate-float"
              style={{ animationDelay: "-3s" }}
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-lg">✦</span> Dreamy designs
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="flex h-10 w-6 justify-center rounded-full border border-foreground/20 p-1">
          <span className="h-2 w-1 animate-scroll-bounce rounded-full bg-primary" />
        </div>
      </a>
    </section>
  );
}
