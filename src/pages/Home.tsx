import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Hackathons } from "@/components/Hackathons";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

export function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background font-sans text-white">
      <SmoothScroll />
      <Nav />
      <Hero />

      <TechStack />
      <Projects />
      <Hackathons />
      <About />
      <Footer />
    </main>
  );
}
