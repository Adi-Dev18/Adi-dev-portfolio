import { motion } from "framer-motion";
import { Section } from "./Section";

const journey = [
  {
    title: "Completed",
    items: ["HTML", "CSS", "Responsive Design", "Python Basics", "Data Analysis"],
  },
  {
    title: "Currently Learning",
    items: ["JavaScript", "React", "Tailwind CSS", "Machine Learning"],
  },
  {
    title: "Future Goals",
    items: ["Full Stack Development", "Deep Learning", "MLOps", "Cloud Engineering"],
  },
];

export function LearningJourney() {
  return (
    <Section
      id="learning-journey"
      index="07"
      label="Learning Journey"
      title={<>Learning Journey</>}
    >
      <div className="grid gap-8 md:grid-cols-3">
        {journey.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-4xl border border-foreground/10 bg-surface p-10 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.8)]"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              {section.title}
            </p>
            <div className="mt-10 space-y-4">
              {section.items.map((item) => (
                <div key={item} className="flex items-center gap-4 text-lg text-foreground/90">
                  <span className="grid h-3 w-3 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
