import { motion } from "framer-motion";

export function BigFooter() {
  return (
    <footer className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-20">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-display select-none text-[clamp(6rem,22vw,18rem)] font-semibold leading-[0.85] tracking-tighter"
        >
          ADITYA
        </motion.h2>

        <p className="mt-10 max-w-xl text-2xl leading-tight text-foreground/90 md:text-3xl">
          Frontend Developer
          <br />
          Data Science Student
          <br />
          Creative Technologist
        </p>

        <p className="mt-12 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          A premium personal portfolio for frontend engineering, machine learning, and creative
          technology.
        </p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] mx-auto h-[60vmin] w-[80vmin] rounded-full bg-[radial-gradient(circle,rgba(230,110,60,0.12),transparent_60%)] blur-3xl"
      />
    </footer>
  );
}
