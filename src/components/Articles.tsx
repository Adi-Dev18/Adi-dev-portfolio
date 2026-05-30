import { motion } from "framer-motion";
import { Section } from "./Section";
import lumen from "@/assets/omnifood.png";
import signal from "@/assets/project1.png";
import atelier from "@/assets/project-atelier.jpg";

const articles = [
  {
    n: "01",
    kind: "Frontend",
    date: "Apr 2026",
    title: "Building OmniFood: Lessons in Responsive Design",
    image: lumen,
  },
  {
    n: "02",
    kind: "Hackathons",
    date: "Mar 2026",
    title: "What I Learned From My First Hackathons",
    image: signal,
  },
  {
    n: "03",
    kind: "Data Science",
    date: "Feb 2026",
    title: "Understanding NLP Through Real Projects",
    image: atelier,
  },
];

export function Articles() {
  return (
    <Section id="insights" index="09" label="Insights" title={<>Notes from the studio.</>}>
      <div className="grid gap-16 md:grid-cols-3 md:gap-10">
        {articles.map((a, i) => (
          <motion.a
            key={a.n}
            href="#"
            data-cursor="hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group block"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-md bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] transition-transform duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/6" />
            </div>

            <div className="mt-8 flex items-baseline justify-between text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              <span>{a.kind}</span>
              <span>{a.date}</span>
            </div>

            <h3 className="text-display mt-5 text-2xl font-medium leading-snug text-foreground md:text-3xl">
              {a.title}
            </h3>

            <span className="magnetic-underline mt-6 inline-block text-sm text-foreground/80">
              Read essay
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
