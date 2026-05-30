import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya — Creative Frontend Developer & Data Science Student" },
      {
        name: "description",
        content:
          "Personal portfolio of Aditya — a creative frontend developer and data science student exploring cinematic, minimal interfaces.",
      },
      { property: "og:title", content: "Aditya — Portfolio" },
      {
        property: "og:description",
        content: "Cinematic, minimal portfolio. Frontend development, data science, motion design.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
