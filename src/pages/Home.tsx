import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Hackathons } from "@/components/Hackathons";
import { Certifications } from "@/components/Certifications";
import { LearningJourney } from "@/components/LearningJourney";
import { Contact } from "@/components/Contact";
import { BigFooter } from "@/components/BigFooter";
import { SmoothScroll } from "@/components/SmoothScroll";

export function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SmoothScroll />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Certifications />
      <LearningJourney />
      <Contact />
      <BigFooter />
    </main>
  );
}
