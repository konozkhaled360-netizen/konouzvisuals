import { motion } from "motion/react";
import { Sparkles, Palette, Wand2, Heart } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Briefing",
    desc: "Understanding the brand, audience, and creative direction.",
    icon: Sparkles,
    tint: "from-[oklch(0.93_0.05_230/0.6)] to-[oklch(0.95_0.04_350/0.4)]",
    glow: "oklch(0.85 0.1 230 / 0.5)",
  },
  {
    n: "02",
    title: "Concept",
    desc: "Building visual ideas, moodboards, and art direction.",
    icon: Palette,
    tint: "from-[oklch(0.94_0.05_350/0.6)] to-[oklch(0.94_0.04_230/0.4)]",
    glow: "oklch(0.85 0.1 350 / 0.5)",
  },
  {
    n: "03",
    title: "Execution",
    desc: "Transforming concepts into polished visual experiences using design and AI tools.",
    icon: Wand2,
    tint: "from-[oklch(0.93_0.05_230/0.55)] to-[oklch(0.95_0.05_300/0.4)]",
    glow: "oklch(0.85 0.1 250 / 0.5)",
  },
  {
    n: "04",
    title: "Finalization",
    desc: "Refining every detail and delivering with confidence.",
    icon: Heart,
    tint: "from-[oklch(0.94_0.05_350/0.6)] to-[oklch(0.95_0.04_320/0.4)]",
    glow: "oklch(0.85 0.1 350 / 0.5)",
  },
];

export function HowIWork() {
  return (
    <section id="process" className="relative px-6 py-32 md:px-12 lg:px-20">
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob" style={{ width: 420, height: 420, top: "10%", left: "-8%", background: "oklch(0.88 0.08 230 / 0.55)" }} />
        <div className="blob" style={{ width: 460, height: 460, bottom: "-10%", right: "-10%", background: "oklch(0.9 0.08 350 / 0.5)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">— How I Work —</span>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            A focused,{" "}
            <span className="italic font-light text-gradient">four-step</span>{" "}
            process.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const offset = i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-12";
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[2rem] p-8 md:p-10 transition-all duration-500 ${offset}`}
                style={{
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                {/* gradient bg */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${s.tint}`} />
                {/* glass overlay */}
                <div className="absolute inset-0 -z-10 backdrop-blur-2xl" style={{ background: "oklch(1 0 0 / 0.35)" }} />
                {/* glowing border */}
                <div className="absolute inset-0 -z-10 rounded-[2rem] border border-white/60 transition-all duration-500 group-hover:border-white/90 group-hover:shadow-[0_0_60px_var(--g)]" style={{ ["--g" as never]: s.glow }} />
                {/* faded big number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 font-display text-[10rem] font-bold leading-none text-white/40 md:text-[12rem]"
                >
                  {s.n}
                </span>

                <div className="relative flex h-full min-h-[220px] flex-col">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full glass shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-3xl font-semibold md:text-4xl">
                    <span className="italic font-light">{s.title}</span>
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-foreground/70">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
