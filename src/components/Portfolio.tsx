import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "@tanstack/react-router";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

type Category = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  process: string[];
  tools: string[];
  results: string[];
  hero: string;
  gallery: string[];
  tint: string; // soft pink
  glow: string; // baby blue
};

const categories: Category[] = [
  {
    id: "branding",
    number: "01",
    title: "Branding",
    tagline: "Identities with a soul",
    description:
      "Crafting timeless brand identities — from logo systems to full visual languages that whisper personality before they speak.",
    process: ["Discovery & mood", "Concept sketches", "Logo & system", "Brand guidelines"],
    tools: ["Illustrator", "Photoshop", "Figma", "InDesign"],
    results: ["+38% brand recall", "12 brand systems shipped", "Editorial features in Behance"],
    hero: w1,
    gallery: [w1, w5, w3],
    tint: "oklch(0.92 0.06 350 / 0.85)",
    glow: "oklch(0.88 0.08 230 / 0.7)",
  },
  {
    id: "social",
    number: "02",
    title: "Social Media",
    tagline: "Scroll-stopping moments",
    description:
      "Designing campaigns and feeds that feel cohesive, dreamy and intentional — a brand experience on every swipe.",
    process: ["Content strategy", "Feed layout", "Templates", "Reels & motion"],
    tools: ["Photoshop", "After Effects", "Figma", "Canva"],
    results: ["+212% engagement", "1.4M organic reach", "20+ launched campaigns"],
    hero: w4,
    gallery: [w4, w2, w6],
    tint: "oklch(0.93 0.05 230 / 0.85)",
    glow: "oklch(0.88 0.09 350 / 0.7)",
  },
  {
    id: "packaging",
    number: "03",
    title: "Packaging",
    tagline: "Touchable storytelling",
    description:
      "Soft pastel packaging systems built around tactile materials, layered typography and a quiet sense of luxury.",
    process: ["Material research", "Dieline & structure", "Print mockups", "Production"],
    tools: ["Illustrator", "Photoshop", "Dimension", "Cinema 4D"],
    results: ["3 shelf-ready lines", "Featured in Packaging of the World", "Pantone matched runs"],
    hero: w5,
    gallery: [w5, w1, w3],
    tint: "oklch(0.94 0.05 350 / 0.85)",
    glow: "oklch(0.9 0.07 200 / 0.7)",
  },
  {
    id: "posters",
    number: "04",
    title: "Posters",
    tagline: "Editorial daydreams",
    description:
      "Poster series built like little worlds — soft grain, dreamy color stories and typography that breathes.",
    process: ["Concept moodboards", "Type exploration", "Color study", "Print finishing"],
    tools: ["Photoshop", "Illustrator", "InDesign", "Procreate"],
    results: ["24 poster series", "Exhibited in 3 cities", "Limited print runs sold out"],
    hero: w3,
    gallery: [w3, w6, w2],
    tint: "oklch(0.92 0.06 300 / 0.85)",
    glow: "oklch(0.88 0.08 230 / 0.7)",
  },
  {
    id: "illustration",
    number: "05",
    title: "Illustration",
    tagline: "Characters with a heartbeat",
    description:
      "Whimsical illustration systems — pastel friends, soft worlds and hand-finished textures for brands and books.",
    process: ["Character studies", "Sketch rounds", "Final art", "Animation pass"],
    tools: ["Procreate", "Illustrator", "Photoshop", "After Effects"],
    results: ["Children's book series", "6 mascot systems", "Animated brand worlds"],
    hero: w2,
    gallery: [w2, w6, w1],
    tint: "oklch(0.93 0.06 0 / 0.85)",
    glow: "oklch(0.88 0.08 230 / 0.7)",
  },
  {
    id: "campaigns",
    number: "06",
    title: "Campaigns",
    tagline: "Stories at scale",
    description:
      "Cross-channel campaigns built around a single dreamy thread — from print to feed to motion, perfectly in tune.",
    process: ["Concept & key visual", "Asset system", "Rollout across channels", "Launch & polish"],
    tools: ["Photoshop", "Illustrator", "After Effects", "Figma"],
    results: ["+58% click-through", "8 multi-channel launches", "Award-list shortlists"],
    hero: w6,
    gallery: [w6, w4, w5],
    tint: "oklch(0.93 0.05 230 / 0.85)",
    glow: "oklch(0.88 0.09 350 / 0.7)",
  },
];

function FloatingCard({ cat, i, onOpen }: { cat: Category; i: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 10, y: px * 12 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onClick={onOpen}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      animate={{ y: [0, -8, 0] }}
      // continuous float
      style={{ transformStyle: "preserve-3d" }}
      className="group relative block w-full text-left"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
      >
        {/* glowing gradient border */}
        <div
          aria-hidden
          className="absolute -inset-[1px] rounded-[2rem] opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 120deg, ${cat.tint}, ${cat.glow}, ${cat.tint})`,
          }}
        />
        {/* glow halo */}
        <div
          aria-hidden
          className="absolute -inset-10 -z-10 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle, ${cat.glow}, transparent 70%)` }}
        />

        {/* card body */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/60 backdrop-blur-xl"
          style={{
            background: `linear-gradient(160deg, ${cat.tint} 0%, ${cat.glow} 100%)`,
            boxShadow: "var(--shadow-soft)",
          }}
        >
          {/* image preview with soft mask */}
          <div className="absolute inset-0 opacity-90 mix-blend-luminosity">
            <img src={cat.hero} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent" />

          {/* noise */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
            }}
          />

          {/* oversized number */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-2 -top-6 font-display text-[10rem] leading-none text-white/50 transition-all duration-700 group-hover:-translate-y-2 group-hover:text-white/70"
            style={{ textShadow: "0 6px 30px rgba(255,255,255,0.4)" }}
          >
            {cat.number}
          </span>

          {/* content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              {cat.tagline}
            </div>
            <h3 className="mt-2 font-display text-4xl font-semibold leading-tight text-foreground">
              {cat.title}
            </h3>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/40 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-md transition-all group-hover:bg-white/70">
                View project
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                →
              </span>
            </div>
          </div>

          {/* sparkles */}
          <span className="pointer-events-none absolute left-6 top-6 text-white/80 animate-twinkle">✦</span>
          <span
            className="pointer-events-none absolute right-10 top-24 text-white/70 animate-twinkle"
            style={{ animationDelay: "1.2s" }}
          >
            ✦
          </span>
        </div>
      </motion.div>
    </motion.button>
  );
}

function ProjectModal({ cat, onClose }: { cat: Category; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-md md:p-8"
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.97 }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-card shadow-[var(--shadow-soft)]"
      >
        {/* aura background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at 15% 10%, ${cat.tint}, transparent 50%), radial-gradient(circle at 90% 90%, ${cat.glow}, transparent 55%)`,
          }}
        />

        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 text-foreground backdrop-blur-md transition-transform hover:rotate-90"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="relative z-10">
          {/* hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="relative h-64 w-full overflow-hidden md:h-96"
          >
            <img src={cat.hero} alt={cat.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/70 font-display text-2xl backdrop-blur-md">
                {cat.number}
              </div>
              <h3 className="mt-4 font-display text-4xl font-semibold md:text-6xl">{cat.title}</h3>
              <p className="mt-2 max-w-xl text-sm uppercase tracking-[0.3em] text-primary">
                {cat.tagline}
              </p>
            </div>
          </motion.div>

          {/* body */}
          <div className="grid gap-10 p-8 md:grid-cols-3 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="md:col-span-2"
            >
              <h4 className="font-display text-2xl">About the project</h4>
              <p className="mt-3 leading-relaxed text-muted-foreground">{cat.description}</p>

              <h4 className="mt-10 font-display text-2xl">Design process</h4>
              <ol className="mt-4 space-y-3">
                {cat.process.map((step, idx) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/60 p-4 backdrop-blur-md"
                  >
                    <span className="font-display text-lg text-primary">
                      0{idx + 1}
                    </span>
                    <span className="text-foreground/80">{step}</span>
                  </li>
                ))}
              </ol>

              <h4 className="mt-10 font-display text-2xl">Gallery</h4>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {cat.gallery.map((g, i) => (
                  <motion.img
                    key={i}
                    src={g}
                    alt=""
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    whileHover={{ scale: 1.04 }}
                    className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                  />
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-white/70 bg-white/60 p-5 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.25em] text-primary">Tools used</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs text-foreground/80 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/60 p-5 backdrop-blur-md">
                <div className="text-xs uppercase tracking-[0.25em] text-primary">Goals & results</div>
                <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                  {cat.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-primary">✦</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onClose}
                className="w-full rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                Close project
              </button>
            </motion.aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [open, setOpen] = useState<Category | null>(null);
  const navigate = useNavigate();

  const handleOpen = (c: Category) => {
    if (c.id === "social") {
      navigate({ to: "/social-media" });
      return;
    }
    setOpen(c);
  };

  return (
    <section id="work" className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20">
      {/* dreamy backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-aura)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "oklch(0.9 0.08 230 / 0.5)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 text-center">
          <span className="mx-auto text-sm uppercase tracking-[0.35em] text-primary">
            Selected work
          </span>
          <h2 className="font-display text-5xl font-semibold leading-tight md:text-6xl">
            Floating <span className="italic text-gradient">little worlds</span> of design.
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Tap a card to step into the project — process, mockups, tools and results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <div
              key={c.id}
              className={i % 2 === 1 ? "lg:translate-y-10" : ""}
            >
              <FloatingCard cat={c} i={i} onOpen={() => handleOpen(c)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <ProjectModal cat={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
