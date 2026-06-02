import { motion } from "framer-motion";
import { BarChart3, BookOpen, Code2, Lightbulb } from "lucide-react";
import adityaAboutNew from "@/assets/aditya-about-new.png";
import { ease, fadeUp, stagger } from "@/lib/motion";

export function About() {
  const features = [
    {
      icon: Lightbulb,
      title: "Problem Solver",
      desc: "I enjoy finding practical solutions to real problems.",
    },
    {
      icon: Code2,
      title: "Frontend Builder",
      desc: "I create clean, responsive, and user-friendly interfaces.",
    },
    {
      icon: BarChart3,
      title: "Data Explorer",
      desc: "I work with data to find useful insights and patterns.",
    },
    {
      icon: BookOpen,
      title: "Always Learning",
      desc: "I believe growth comes from consistent learning and practice.",
    },
  ];

  return (
    <section id="about" className="relative bg-black py-28 md:py-40">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[45%_55%] lg:items-center">
          {/* Content Column (Desktop: Left, Mobile: Second) */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="order-2 lg:order-1"
          >
            {/* Section label */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, ease }}
              className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground"
            >
              06 • ABOUT
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.8, ease }}
              className="text-display mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl"
            >
              About Me<span className="text-[#f97316]">.</span>
            </motion.h2>

            {/* Introduction paragraph */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease }}
              className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base max-w-[560px]"
            >
              <p className="font-semibold text-white">Hi, I&apos;m Aditya.</p>
              <p>
                I enjoy building useful digital products, learning new technologies, and solving
                real-world problems through code and data.
              </p>
              <p>
                I&apos;m currently focused on frontend development and data science while
                continuously improving my skills through projects and hands-on learning.
              </p>
            </motion.div>

            {/* Feature Rows */}
            <div className="mt-10 space-y-4">
              {features.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    variants={fadeUp}
                    transition={{ duration: 0.8, delay: index * 0.05, ease }}
                    className="flex gap-4 items-start p-4 rounded-lg"
                    style={{
                      borderColor: "rgba(255,255,255,0.14)",
                      borderWidth: "1px",
                      backgroundColor: "rgba(255,255,255,0.01)",
                    }}
                  >
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg text-white/70"
                      style={{
                        borderColor: "rgba(255,255,255,0.14)",
                        borderWidth: "1px",
                        backgroundColor: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{feat.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Statistics Bar */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease }}
              className="mt-10 grid grid-cols-3 rounded-lg gap-4 p-5"
              style={{
                borderColor: "rgba(255,255,255,0.14)",
                borderWidth: "1px",
                backgroundColor: "rgba(255,255,255,0.01)",
              }}
            >
              <div
                className="relative pl-4 border-r last:border-none"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="absolute left-0 top-1.5 size-1.5 rounded-full bg-[#f97316]" />
                <h4 className="font-display text-2xl font-bold text-white md:text-3xl">5+</h4>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">Projects</p>
              </div>
              <div
                className="relative pl-4 border-r last:border-none"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="absolute left-0 top-1.5 size-1.5 rounded-full bg-[#f97316]" />
                <h4 className="font-display text-2xl font-bold text-white md:text-3xl">10+</h4>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
                  Technologies
                </p>
              </div>
              <div
                className="relative pl-4 border-r last:border-none"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="absolute left-0 top-1.5 size-1.5 rounded-full bg-[#f97316]" />
                <h4 className="font-display text-2xl font-bold text-white md:text-3xl">∞</h4>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">Learning</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column (Desktop: Right, Mobile: First) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.95, ease }}
            className="order-1 lg:order-2 flex justify-center w-full"
          >
            <div className="image-frame relative overflow-hidden rounded-sm w-full max-w-[500px] aspect-[4/5] bg-[#0d0d0d] group">
              <img
                src={adityaAboutNew}
                alt="Aditya portrait"
                className="h-full w-full object-cover grayscale brightness-90 contrast-105 transition-all duration-[800ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-white/0 rounded-sm pointer-events-none transition-all duration-[800ms] ease-out group-hover:border-orange-500/20 group-hover:shadow-[inset_0_0_20px_rgba(249,115,22,0.15)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
