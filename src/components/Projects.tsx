import { motion } from "framer-motion";
import { Section } from "./Section";
import lumen from "@/assets/omnifood.png";
import signal from "@/assets/project1.png";

const projects = [
  {
    n: "01",
    title: "Women's Safety Analytics Platform",
    kind: "Machine Learning • NLP",
    year: "2026",
    desc: "A premium case study designed to surface meaningful safety insights from real-world conversations.",
    problem:
      "How might we make women's safety discussions more visible through data-driven storytelling?",
    dataset:
      "Public safety reports, discussion feeds, and annotated text corpora for NLP analysis.",
    approach:
      "Built an end-to-end analytics pipeline that combines preprocessing, feature engineering, and model-driven visualization.",
    model: "Random Forest and SVM classification with TextBlob sentiment and keyword extraction.",
    results:
      "Delivered a clear analytics dashboard with safety patterns, sentiment trends, and actionable insights.",
    visuals: ["Dashboard analytics", "Text frequency maps", "Model confidence views"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Flask", "TextBlob"],
    image: signal,
  },
  {
    n: "02",
    title: "OmniFood",
    kind: "Frontend Engineering",
    year: "2025",
    desc: "A responsive editorial landing experience built for a premium food service with strong mobile-first polish.",
    problem: "Craft a fast, accessible interface for a modern food subscription concept.",
    approach:
      "Designed the experience with mobile-first workflows, semantic HTML, and a clean visual hierarchy.",
    model: "Flexible layout system using CSS Grid, Flexbox, and accessible component structure.",
    results:
      "Delivered polished desktop and mobile touchpoints with clear product storytelling and interaction rhythm.",
    visuals: ["Desktop mockup", "Mobile layout", "Tablet refinement"],
    tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    image: lumen,
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      label="Featured Work"
      title={<>Featured work with editorial focus.</>}
    >
      <div className="space-y-32">
        {projects.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="group"
            data-cursor={p.n === "01" ? "view" : "hover"}
          >
            <div className="mb-8 flex items-baseline justify-between text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              <span>{p.n}</span>
              <span>{p.year}</span>
            </div>

            <div className="relative overflow-hidden rounded-4xl bg-surface shadow-[0_40px_120px_-50px_rgba(0,0,0,0.65)] max-h-[35vh] md:max-h-[50vh]">
              <img
                src={p.image}
                alt={`${p.title} — ${p.kind}`}
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full aspect-[21/9] object-cover transition-transform duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-[1.35fr_0.85fr]">
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {p.desc}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Problem", value: p.problem },
                    { label: "Dataset", value: p.dataset },
                    { label: "Approach", value: p.approach },
                    { label: "Model", value: p.model },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-foreground/10 bg-background/80 p-6"
                    >
                      <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-foreground/90">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-foreground/10 bg-surface p-8 text-sm text-muted-foreground">
                <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                  Results
                </p>
                <p className="mt-4 text-foreground/90">{p.results}</p>
                <div className="mt-8 space-y-3">
                  {p.visuals.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="grid aspect-square h-3 w-3 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {p.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-foreground/10 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {i < projects.length - 1 && <div className="hairline mt-24 md:mt-40" />}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
