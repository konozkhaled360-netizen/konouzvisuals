import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ToolsTech } from "@/components/ToolsTech";
import { HowIWork } from "@/components/HowIWork";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Nav, Footer } from "@/components/Nav";
import { FloatingShapes } from "@/components/FloatingShapes";
import { CursorGlow } from "@/components/CursorGlow";
import { DesignStudioFX, HeroBuildOverlay } from "@/components/DesignStudioFX";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Konouz — Graphic Designer · Dreamy, feminine, playful design" },
      { name: "description", content: "Konouz is a graphic designer crafting playful and emotional visual experiences — branding, illustration, social media, UI/UX, and motion." },
      { property: "og:title", content: "Konouz — Graphic Designer" },
      { property: "og:description", content: "Creating playful and emotional visual experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-hidden">
      <CursorGlow />
      <FloatingShapes />
      <DesignStudioFX />
      <Nav />
      <div className="relative">
        <HeroBuildOverlay />
        <Hero />
      </div>
      <About />
      <ToolsTech />
      <HowIWork />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
