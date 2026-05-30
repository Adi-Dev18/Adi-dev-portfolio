import { motion } from "framer-motion";
import { Section } from "./Section";

const hackathons = [
  {
    title: "Yukti 2026",
    subtitle: "Certificate of Appreciation",
    desc: "Innovation Competition showcasing early-stage problem solving and polished concept delivery.",
  },
  {
    title: "Novus 24",
    subtitle: "Hackathon Participant",
    desc: "Rapid prototyping experience under tight timelines with a focus on usability and clarity.",
  },
  {
    title: "Technovanza 5.0",
    subtitle: "Internal Innovation Challenge",
    desc: "A strategic effort aligned to SIH preparation and solution design thinking.",
  },
];

export function Hackathons() {
  return (
    <Section
      id="hackathons"
      index="05"
      label="Hackathons"
      title={<>Hackathons &amp; innovation.</>}
    >
      <div className="relative border-l border-foreground/10 pl-10">
        {hackathons.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-16 pl-12 last:mb-0"
          >
            <span className="absolute left-[-26px] top-4 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-1 ring-foreground/15">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              {item.subtitle}
            </p>
            <h3 className="mt-5 text-3xl font-medium leading-tight text-foreground md:text-4xl">
              {item.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
