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
    <div className="group relative overflow-hidden py-3">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: [from, to] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="inline-flex shrink-0 cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.35)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ToolsTech() {
  return (
    <section id="tools" className="relative px-0 py-32">
      <div className="relative mx-4 overflow-hidden rounded-[2.5rem] bg-[#0a0a0f] md:mx-8 lg:mx-12">
        {/* soft glow blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[oklch(0.7_0.18_320)] opacity-30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-[oklch(0.7_0.18_230)] opacity-30 blur-[100px]" />

        <div className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-white/50">— Toolkit —</span>
            <h2 className="mt-4 font-display text-5xl font-semibold text-white md:text-6xl">
              Tools <span className="italic font-light text-white/60">&</span> Tech
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
              The trusted companions behind every dreamy pixel.
            </p>
          </motion.div>

          {/* edge fades */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

            <Marquee items={row1} direction="left" duration={45} />
            <Marquee items={row2} direction="right" duration={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
