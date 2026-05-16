import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

type Project = {
  id: number; title: string; cat: string; img: string; desc: string; year: string;
};

const projects: Project[] = [
  { id: 1, title: "Lila Studio", cat: "Branding", img: w1, year: "2025", desc: "A soft brand identity for a botanical perfume studio — built around layered pastels and curved serif typography." },
  { id: 2, title: "Mochi Friends", cat: "Illustrations", img: w2, year: "2025", desc: "A character series of plushy friends for a children's stationery line." },
  { id: 3, title: "Daydream Posters", cat: "Posters", img: w3, year: "2024", desc: "An editorial poster collection exploring dreams, color, and stillness." },
  { id: 4, title: "Bloom Campaign", cat: "Ads", img: w4, year: "2024", desc: "Spring campaign visuals — soft shapes, warm grain, and a pastel-first palette." },
  { id: 5, title: "Sweetbeam Care", cat: "Branding", img: w5, year: "2025", desc: "Packaging system for a feminine wellness brand." },
  { id: 6, title: "Cloud Tales", cat: "Illustrations", img: w6, year: "2024", desc: "An illustration series for a dreamy children's book about clouds." },
];

const cats = ["All", "Branding", "Illustrations", "Posters", "Ads"] as const;

export function Portfolio() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="work" className="relative px-6 py-32 md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">Selected work</span>
            <h2 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-6xl">
              A little gallery of <span className="italic text-gradient">soft things</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  active === c
                    ? "bg-foreground text-background"
                    : "glass text-foreground/70 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((p, i) => (
            <motion.button
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              onClick={() => setOpen(p)}
              className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-3xl text-left shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "1/1" : "3/4" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-xs uppercase tracking-wider opacity-80">{p.cat} · {p.year}</div>
                  <div className="mt-1 font-display text-2xl">{p.title}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-1 group-hover:opacity-0 transition-opacity">
                <div>
                  <div className="font-display text-lg">{p.title}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.cat}</div>
                </div>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] md:grid-cols-2"
            >
              <img src={open.img} alt={open.title} className="h-64 w-full object-cover md:h-full" />
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-primary">{open.cat} · {open.year}</div>
                  <h3 className="mt-3 font-display text-4xl font-semibold">{open.title}</h3>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{open.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Identity", "Art direction", "Pastel system"].map((t) => (
                      <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="mt-8 self-start rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
