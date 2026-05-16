import { motion } from "motion/react";
import { useState } from "react";

const socials = [
  { name: "Instagram", handle: "@konouz", icon: "◐" },
  { name: "Behance", handle: "/konouz", icon: "B" },
  { name: "Dribbble", handle: "/konouz", icon: "●" },
  { name: "Email", handle: "hi@konouz.studio", icon: "✉" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-32 md:px-12 lg:px-20">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Let's talk</span>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Have a <span className="italic text-gradient">sweet idea</span>?<br />
            Let's make it bloom.
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative mt-16 grid gap-5 rounded-3xl glass p-8 md:p-12"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Your beautiful name" />
            <Field label="Email" name="email" type="email" placeholder="you@dreams.com" />
          </div>
          <Field label="Project" name="project" placeholder="Branding · Illustration · Other" />
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your dream project ✦"
              className="w-full resize-none rounded-2xl border border-border bg-background/60 px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="group relative mt-2 inline-flex items-center justify-center gap-2 self-start overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">{sent ? "Sent with love ♡" : "Send message"}</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: "linear-gradient(135deg, oklch(0.72 0.14 350), oklch(0.7 0.13 250))" }} />
          </button>
        </motion.form>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-lg text-background transition-transform group-hover:rotate-12">
                {s.icon}
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.name}</div>
                <div className="font-medium">{s.handle}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/60 px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
      />
    </div>
  );
}
