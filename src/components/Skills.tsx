import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    label: "Frontend Development",
    items: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "JavaScript"],
  },
  {
    label: "Data Science [Currently Learning]",
    items: ["Python", "Excel", "Pandas", "NumPy", "Machine Learning", "NLP", "Data Visualization"],
  },
  {
    label: "Creative Tools",
    items: ["Photoshop", "Premiere Pro", "After Effects", "Illustrator"],
  },
  {
    label: "Interested to Learn",
    items: ["React", "Tailwind CSS", "Advanced Machine Learning", "DSA"],
  },
];

export function Skills() {
  return (
    <Section id="skills" index="02" label="Skills" title={<>A small, sharp toolkit.</>}>
      <div className="mb-16 h-px w-full bg-foreground/10" />
      <div className="grid grid-cols-1 border-t border-l border-foreground/10 text-left md:grid-cols-2">
        {groups.map((group, index) => {
          const isTopRow = index < 2;
          const isLeftCol = index % 2 === 0;
          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.95, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`px-10 py-10 ${isLeftCol ? "border-r border-foreground/10" : "border-r-0"} ${
                isTopRow ? "border-b border-foreground/10" : "border-b-0"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.46em] text-muted-foreground">
                {group.label}
              </p>
              <div className="mt-12 space-y-4">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between gap-6 border-b border-foreground/10 pb-4 text-lg text-foreground/90 ${
                      itemIndex === group.items.length - 1 ? "border-b-0 pb-0" : ""
                    }`}
                  >
                    <span>{item}</span>
                    <span className="block h-px w-8 rounded-full bg-foreground/15" />
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
