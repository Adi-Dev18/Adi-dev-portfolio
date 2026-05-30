import { motion } from "framer-motion";
import { Section } from "./Section";

const certifications = [
  {
    org: "Microsoft",
    title: "Data Analysis Certification",
  },
  {
    org: "Microsoft Azure",
    title: "Azure Machine Learning Workspace Resources and Assets",
  },
  {
    org: "Microsoft",
    title: "Developer Tools for Workspace Interaction",
  },
  {
    org: "Udemy",
    title: "Build Responsive Real-World Websites with HTML and CSS",
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="06"
      label="Certifications"
      title={<>Verified learning and skill milestones.</>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((item, i) => (
          <motion.div
            key={`${item.org}-${item.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-foreground/10 bg-surface p-10 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.8)]"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              {item.org}
            </p>
            <h3 className="mt-6 text-[2.5rem] font-medium leading-tight text-foreground md:text-4xl">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
