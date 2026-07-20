import { lazy, Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const TechStack = lazy(() =>
  import("@/components/TechStack").then((module) => ({ default: module.TechStack })),
);
const Projects = lazy(() =>
  import("@/components/Projects").then((module) => ({ default: module.Projects })),
);
const Hackathons = lazy(() =>
  import("@/components/Hackathons").then((module) => ({ default: module.Hackathons })),
);

function SectionFallback() {
  return <div className="h-40 bg-black" aria-hidden="true" />;
}

export function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background font-sans text-white">
      <SmoothScroll />
      <Nav />
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Hackathons />
      </Suspense>
      <About />
      <Footer />
    </main>
  );
}
