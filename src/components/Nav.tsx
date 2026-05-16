export function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-full glass px-6 py-3 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold tracking-tight">
          konouz<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#about" className="text-foreground/70 transition-colors hover:text-foreground">About</a>
          <a href="#work" className="text-foreground/70 transition-colors hover:text-foreground">Work</a>
          <a href="#contact" className="text-foreground/70 transition-colors hover:text-foreground">Contact</a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Hire me ♡
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 Konouz Studio · Made with soft love ♡</p>
        <p className="font-display italic">Stay dreamy ✦</p>
      </div>
    </footer>
  );
}
