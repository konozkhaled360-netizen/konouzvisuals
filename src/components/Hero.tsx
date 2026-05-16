import { motion } from "motion/react";
import heroImg from "@/assets/konouz-hero.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
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
              { n: "40+", l: "Happy clients" },
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
