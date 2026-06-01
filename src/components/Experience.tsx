import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    year: "2026 —",
    role: "Creative & Technical Experience",
    org: "Freelance Collaborations",
    desc: "Worked alongside freelance creatives and digital content creators to assist with visual production, content editing, branding assets, and motion graphics.",
    tools: ["Photoshop", "Premiere Pro", "After Effects", "Illustrator"],
  },
  {
    year: "2025 —",
    role: "B.Sc. Data Science",
    org: "University Coursework",
    desc: "Foundations in Python, statistics, and applied machine learning. Currently studying DSA and model evaluation.",
  },
  {
    year: "2023 — 2024",
    role: "Creative Production",
    org: "Freelance",
    desc: "Designing editorial visuals, motion assets, and brand materials for independent creative projects.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      index="05"
      label="Experience"
      title={<>Creative & Technical Experience.</>}
    >
      <div className="space-y-px overflow-hidden border-y border-border bg-border">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 bg-background py-10 transition-colors duration-500 hover:bg-surface md:grid-cols-12 md:gap-8 md:py-14"
            data-cursor="hover"
          >
            <div className="md:col-span-2 md:col-start-1">
              <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                {it.year}
              </p>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-display text-2xl font-medium md:text-3xl">{it.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.org}</p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-base leading-relaxed text-muted-foreground">{it.desc}</p>
              {it.tools ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {it.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-foreground/10 px-3 py-1 text-[11px] uppercase tracking-[0.4em] text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
