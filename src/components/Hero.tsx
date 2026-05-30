import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/aditya-hero.png";

const letters = "ADITYA".split("");

const reveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(16px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="relative isolate min-h-svh overflow-hidden pt-28 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_26%,rgba(255,255,255,0.055),transparent_26%),linear-gradient(115deg,rgba(255,255,255,0.045),transparent_32%,rgba(255,101,36,0.07)_72%,transparent)]"
      />

      <motion.div
        style={{ y: imgY, scale: imgScale }}
        initial={{ opacity: 0, x: 42, filter: "blur(24px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.74 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_38%_42%,rgba(255,173,82,0.88),rgba(255,100,35,0.52)_40%,rgba(136,30,12,0.32)_66%,transparent_73%)] blur-[2px]"
          />
          <img
            src={heroPortrait}
            alt="Aditya cinematic portrait"
            className="hero-portrait absolute inset-0 h-full w-full object-cover object-center"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_52%_43%,transparent_34%,rgba(5,5,5,0.18)_57%,rgba(5,5,5,0.88)_94%)]" />
          <div className="hero-image-grain absolute inset-0 z-30 opacity-30 mix-blend-screen" />
        </div>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="container-page relative z-10 min-h-[calc(100svh-7rem)] pb-7 md:pb-9"
      >
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl pt-[28vh]"
        >
          <p className="mb-7 text-[11px] uppercase tracking-[0.38em] text-muted-foreground md:mb-9">
            HELLO, I'M
          </p>

          <h1 className="text-display select-none text-[5rem] font-semibold leading-none text-foreground sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] xl:text-[11rem]">
            <span className="sr-only">Aditya</span>
            <span aria-hidden className="inline-flex">
              {letters.map((char, i) => (
                <span key={i} className="relative inline-block overflow-hidden align-baseline">
                  <motion.span
                    initial={{ y: "110%", filter: "blur(22px)", opacity: 0 }}
                    animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
                    transition={{
                      duration: 1.45,
                      delay: 0.42 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <div className="mt-10 space-y-4 text-[clamp(1rem,1.5vw,1.3rem)] font-semibold leading-tight text-foreground/90">
            <p>Frontend Developer</p>
            <p>Data Science Student</p>
            <p>Creative Technologist</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-40 bg-linear-to-t from-background via-background/80 to-transparent"
      />
    </section>
  );
}
