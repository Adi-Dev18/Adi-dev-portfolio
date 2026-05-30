import { motion } from "framer-motion";
import { Section } from "./Section";
import aboutPortrait from "@/assets/aditya-about-new.png";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          Currently
          <br />
          <span className="text-muted-foreground">Building at the intersection of</span>
          <br />
          engineering, machine learning, and visual design.
        </>
      }
    >
      <div className="grid gap-16 md:grid-cols-12 md:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 md:col-start-1"
        >
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={aboutPortrait}
              alt="Aditya — portrait"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover grayscale-[0.1] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/[0.06]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 self-end text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Currently</p>
          <p>
            I'm Aditya, a frontend developer and data science student exploring the intersection of
            engineering, machine learning, and visual design.
          </p>
          <p>
            My work focuses on building responsive web experiences, experimenting with machine
            learning, and creating digital products that combine technology and creative motion.
          </p>
          <p>
            Alongside development, I have experience with Photoshop, Premiere Pro, After Effects,
            and Illustrator through freelance collaborations and personal projects.
          </p>
          <p className="text-foreground/80">
            Currently learning: JavaScript, React, Tailwind CSS, DSA, and Machine Learning.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
