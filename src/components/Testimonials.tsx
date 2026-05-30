import { motion } from "framer-motion";
import { Section } from "./Section";

const quotes = [
  {
    quote:
      "Aditya treats the interface like a piece of editorial design. Restraint, rhythm, and an unmistakable point of view.",
    name: "Priya Menon",
    role: "Design Lead, Studio North",
  },
  {
    quote:
      "Rare combination — engineer's discipline, artist's eye. The motion work alone is worth the engagement.",
    name: "Daniel Roy",
    role: "Founder, Field & Form",
  },
  {
    quote:
      "Calm to work with, precise to ship with. Every detail feels considered without ever feeling fussy.",
    name: "Anika Shah",
    role: "Product Manager, Lumen",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      index="06"
      label="Words"
      title={<>Kind words from people I've made things with.</>}
    >
      <div className="grid gap-px overflow-hidden border-y border-border bg-border md:grid-cols-3">
        {quotes.map((q, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col justify-between gap-12 bg-background p-10 md:p-14"
          >
            <blockquote className="text-display text-xl font-medium leading-snug text-foreground/90 md:text-2xl">
              <span className="mr-1 text-muted-foreground">“</span>
              {q.quote}
              <span className="ml-1 text-muted-foreground">”</span>
            </blockquote>
            <figcaption>
              <p className="text-sm text-foreground">{q.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                {q.role}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
