import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/aditya-hero.png";
import { ease } from "@/lib/motion";
import { Download, Linkedin, Github, Mail } from "lucide-react";
import { social } from "@/lib/portfolio-data";

const letters = "ADITYA".split("");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section ref={ref} className="relative isolate min-h-svh overflow-hidden pt-28 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.04),transparent_32%)]"
      />

      <motion.div
        style={{ y: imgY, scale: imgScale }}
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.8, delay: 0, ease }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroPortrait}
            alt="Aditya cinematic portrait"
            className="hero-portrait absolute inset-0 h-full w-full object-cover object-center"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_52%_43%,transparent_30%,rgba(0,0,0,0.25)_58%,rgba(0,0,0,0.92)_94%)]" />
          <div className="hero-image-grain absolute inset-0 z-30 opacity-25 mix-blend-screen" />
        </div>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="container-page relative z-10 min-h-[calc(100svh-7rem)] pb-7 md:pb-9"
      >
        <div className="max-w-2xl pt-[28vh]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="mb-7 text-[11px] uppercase tracking-[0.38em] text-muted-foreground md:mb-9"
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="text-display select-none text-[5rem] font-semibold leading-none text-foreground sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] xl:text-[11rem]">
            <span className="sr-only">Aditya</span>
            <span aria-hidden className="inline-flex">
              {letters.map((char, i) => (
                <span key={i} className="relative inline-block overflow-hidden align-baseline">
                  <motion.span
                    initial={{ y: "110%", filter: "blur(18px)", opacity: 0 }}
                    animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 1.1 + i * 0.07,
                      ease,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="Aditya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease }}
              whileHover={{
                y: -2,
                borderColor: "rgba(255, 255, 255, 0.25)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
              }}
              className="btn-premium inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide text-white"
            >
              <Download className="size-4" strokeWidth={1.5} />
              Resume
            </motion.a>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {[
                { href: social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: social.github, icon: Github, label: "GitHub" },
                { href: `mailto:${social.email}`, icon: Mail, label: "Email" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.95 + index * 0.15, ease }}
                    whileHover={{
                      y: -3,
                      color: "#ffffff",
                      filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.65))",
                      transition: { duration: 0.35, ease: "easeInOut" },
                    }}
                    className="text-white/50 transition-colors cursor-pointer hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon className="size-5" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2 }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-40 bg-linear-to-t from-background via-background/85 to-transparent"
      />
    </section>
  );
}
