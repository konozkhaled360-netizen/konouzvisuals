import { motion } from "motion/react";

const skills = [
  "Branding", "Illustration", "Social Media Design", "UI/UX", "Motion Graphics",
  "Art Direction", "Typography", "Editorial",
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Curved blob shape */}
          <div className="relative mx-auto aspect-square max-w-md">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-float-slow">
              <defs>
                <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.88 0.1 350)" />
                  <stop offset="100%" stopColor="oklch(0.85 0.1 230)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#blobGrad)"
                d="M320,200 C320,290 250,360 180,350 C100,340 40,280 50,190 C60,100 130,40 220,55 C300,70 320,130 320,200 Z"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <div className="font-display text-7xl font-semibold text-foreground/80">♡</div>
              <p className="mt-4 font-display text-2xl italic text-foreground">
                "Design is feeling, made visible."
              </p>
            </div>
            {/* Floating decorative cards */}
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-xs"
            >
              ✦ Made with love
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -left-6 glass rounded-2xl px-4 py-3 text-xs"
            >
              🎀 Based in dreamland
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">About me</span>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-6xl">
            A visual storyteller with a <span className="italic text-gradient">soft heart</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Konouz — a graphic designer obsessed with the small moments that make
            brands feel alive. From playful illustrations to whisper-quiet typography,
            I craft visuals that feel like a hug and look like a daydream.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I work with founders, creators, and dreamers who want their brand to feel
            unmistakably <em>theirs</em>.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="cursor-default rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
