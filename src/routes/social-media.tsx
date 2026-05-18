import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/social-media")({
  head: () => ({
    meta: [
      { title: "Social Media Projects — Konouz" },
      {
        name: "description",
        content:
          "Selected social media campaigns and brand feeds — cinematic, premium, scroll-stopping work by Konouz.",
      },
      { property: "og:title", content: "Social Media Projects — Konouz" },
      {
        property: "og:description",
        content: "Cinematic social media design — campaigns, feeds, motion.",
      },
    ],
  }),
  component: SocialMediaPage,
});

type Project = {
  id: string;
  name: string;
  initials: string;
  category: string;
  description: string;
  gallery: string[];
  accent: string; // warm glow color (oklch)
};

const allShots = [w1, w2, w3, w4, w5, w6];
const buildGallery = (offset: number, n = 10) =>
  Array.from({ length: n }, (_, i) => allShots[(offset + i) % allShots.length]);

const projects: Project[] = [
  {
    id: "noor",
    name: "Noor Atelier",
    initials: "NA",
    category: "Fashion & Lifestyle · Instagram Feed",
    description:
      "A dreamy editorial feed system blending soft typography, golden hues and cinematic photography for a luxury atelier brand.",
    gallery: buildGallery(0),
    accent: "oklch(0.72 0.16 55)",
  },
  {
    id: "amber",
    name: "Amber & Oud",
    initials: "AO",
    category: "Perfume House · Campaign Rollout",
    description:
      "A warm, sensual campaign series — molten golds, deep ambers and slow motion stories crafted for a niche perfume launch.",
    gallery: buildGallery(2),
    accent: "oklch(0.7 0.18 35)",
  },
  {
    id: "saffron",
    name: "Saffron Kitchen",
    initials: "SK",
    category: "Restaurant Brand · Feed & Reels",
    description:
      "Mouth-watering content design — bold typography, rich plating photography and a consistent visual rhythm across the feed.",
    gallery: buildGallery(4),
    accent: "oklch(0.68 0.19 40)",
  },
  {
    id: "lumen",
    name: "Lumen Studio",
    initials: "LS",
    category: "Architecture · Visual Identity",
    description:
      "Editorial-style social content for an architecture studio — minimal grids, soft daylight tones and cinematic depth.",
    gallery: buildGallery(1),
    accent: "oklch(0.72 0.15 65)",
  },
  {
    id: "vela",
    name: "Vela Beauty",
    initials: "VB",
    category: "Beauty Brand · Launch Campaign",
    description:
      "A glowing launch campaign — warm rose-gold palettes, tactile product moments and motion-led storytelling for the feed.",
    gallery: buildGallery(3),
    accent: "oklch(0.74 0.16 25)",
  },
  {
    id: "orion",
    name: "Orion Travel",
    initials: "OT",
    category: "Travel Agency · Story Series",
    description:
      "A cinematic story series taking viewers across golden-hour landscapes — type-driven covers and a coherent feed system.",
    gallery: buildGallery(5),
    accent: "oklch(0.7 0.17 50)",
  },
];

function SocialMediaPage() {
  const [lightbox, setLightbox] = useState<{ src: string; accent: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* dark gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, oklch(0.35 0.12 45 / 0.35), transparent 55%), radial-gradient(circle at 85% 90%, oklch(0.3 0.14 25 / 0.3), transparent 55%), #000",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* top bar */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
          Back to portfolio
        </Link>
        <span className="text-xs uppercase tracking-[0.4em] text-white/40">
          Konouz · Social Media
        </span>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-10 text-center md:px-12 md:pb-24 md:pt-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs uppercase tracking-[0.5em] text-amber-200/70"
        >
          Selected campaigns
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl"
        >
          Social Media{" "}
          <span className="italic text-transparent" style={{
            backgroundImage: "linear-gradient(135deg, #fcd9a6, #e88a4a, #b85a2a)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}>
            stories
          </span>{" "}
          that glow.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-white/60 md:text-lg"
        >
          A curated archive of feeds, launches and campaign systems — built for
          luxury, lifestyle and editorial brands.
        </motion.p>
      </section>

      {/* projects */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 md:px-12">
        {projects.map((p, idx) => (
          <ProjectSection
            key={p.id}
            project={p}
            index={idx}
            isLast={idx === projects.length - 1}
            onOpen={(src) => setLightbox({ src, accent: p.accent })}
          />
        ))}
      </div>

      {/* footer cta */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-16 text-center md:px-12">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40">
          Have a brand in mind?
        </p>
        <Link
          to="/"
          hash="contact"
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm uppercase tracking-[0.3em] text-white backdrop-blur-md transition-all hover:border-amber-200/50 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_oklch(0.7_0.18_45/0.6)]"
        >
          Start a project →
        </Link>
      </footer>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl md:p-10"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15"
              style={{
                boxShadow: `0 0 120px -10px ${lightbox.accent}`,
              }}
            >
              <img
                src={lightbox.src}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-transform hover:rotate-90"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function ProjectSection({
  project,
  index,
  isLast,
  onOpen,
}: {
  project: Project;
  index: number;
  isLast: boolean;
  onOpen: (src: string) => void;
}) {
  const [visibleCount, setVisibleCount] = useState(6);
  const shown = project.gallery.slice(0, visibleCount);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-20 md:py-28"
    >
      {/* soft warm glow per section */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: project.accent }}
      />

      {/* header */}
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-5">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] font-display text-xl backdrop-blur-md md:h-20 md:w-20 md:text-2xl"
            style={{
              boxShadow: `0 0 50px -15px ${project.accent}, inset 0 0 30px -10px ${project.accent}`,
            }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, #fff, ${project.accent})`,
              }}
            >
              {project.initials}
            </span>
          </motion.div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-white/20" />
            </div>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
              {project.name}
            </h2>
            <p
              className="mt-2 text-xs uppercase tracking-[0.3em]"
              style={{ color: project.accent }}
            >
              {project.category}
            </p>
          </div>
        </div>
        <p className="max-w-md text-white/60 md:text-right">
          {project.description}
        </p>
      </div>

      {/* gallery */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {shown.map((src, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -6, scale: 1.02 }}
            onClick={() => onOpen(src)}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.8)" }}
          >
            <img
              src={src}
              alt={`${project.name} post ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(180deg, transparent 40%, ${project.accent} 200%)`,
                mixBlendMode: "soft-light",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                boxShadow: `0 0 0 1px ${project.accent}, 0 0 60px -10px ${project.accent}`,
              }}
            />
            <span className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/40 text-xs text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
              ↗
            </span>
          </motion.button>
        ))}
      </div>

      {/* see more */}
      {visibleCount < project.gallery.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount(project.gallery.length)}
            className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
            style={{ boxShadow: `0 0 40px -20px ${project.accent}` }}
          >
            See more
          </button>
        </div>
      )}

      {/* divider */}
      {!isLast && (
        <div className="relative mt-24 h-px w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.18), transparent)",
            }}
          />
        </div>
      )}
    </motion.section>
  );
}
