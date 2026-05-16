import { motion } from "motion/react";

const row1 = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Figma",
  "Lightroom", "Cinema 4D", "Blender",
];
const row2 = [
  "ChatGPT", "Gemini", "Midjourney", "Adobe Firefly", "Nano Banana", "Canva",
];

function Marquee({ items, direction = "left", duration = 40 }: { items: string[]; direction?: "left" | "right"; duration?: number }) {
  const loop = [...items, ...items, ...items];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";
  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: [from, to] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="inline-flex shrink-0 cursor-default items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground/80 shadow-sm transition-all duration-300 hover:scale-105 hover:text-foreground hover:shadow-[var(--shadow-soft)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ToolsTech() {
  return (
    <section id="tools" className="relative px-6 py-32 md:px-12 lg:px-20">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">— Toolkit —</span>
          <h2 className="mt-4 font-display text-5xl font-semibold md:text-6xl">
            Tools <span className="italic font-light text-gradient">&</span> Tech
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            The trusted companions behind every dreamy pixel. ✦
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <Marquee items={row1} direction="left" duration={45} />
          <Marquee items={row2} direction="right" duration={50} />
        </div>
      </div>
    </section>
  );
}
