import { motion } from "framer-motion";
import { Section } from "./Section";

const services = [
  {
    n: "01",
    title: "Frontend Development",
    desc: "Production-grade React, TypeScript, and Tailwind. Componentry that ages well.",
  },
  {
    n: "02",
    title: "Motion Design",
    desc: "Framer Motion and GSAP — scroll choreography, micro-interactions, cinematic transitions.",
  },
  {
    n: "03",
    title: "Data Science",
    desc: "Python, statistics, and applied ML. Studies translated into legible, editorial visuals.",
  },
  {
    n: "04",
    title: "AI Creative Workflows",
    desc: "Diffusion, LLMs, and prompt systems woven into interface and image direction.",
  },
  {
    n: "05",
    title: "UI / UX Exploration",
    desc: "Quiet interfaces. Restrained typography, generous whitespace, considered hierarchy.",
  },
  {
    n: "06",
    title: "Creative Technology",
    desc: "Tools, prototypes, and small systems at the seam of code, design, and storytelling.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      index="03"
      label="Expertise"
      title={
        <>
          What I do, and
          <br />
          <span className="text-muted-foreground">how it feels to work.</span>
        </>
      }
    >
      <div
        className="grid gap-px overflow-hidden bg-[rgba(255,255,255,0.14)] md:grid-cols-2"
        style={{
          borderTopColor: "rgba(255,255,255,0.14)",
          borderTopWidth: "1px",
          borderBottomColor: "rgba(255,255,255,0.14)",
          borderBottomWidth: "1px",
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-background p-10 transition-colors duration-700 hover:bg-surface md:p-14"
            data-cursor="hover"
          >
            <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              <span>{s.n}</span>
              <span className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                —
              </span>
            </div>
            <h3 className="text-display mt-10 text-3xl font-medium md:text-4xl">{s.title}</h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
