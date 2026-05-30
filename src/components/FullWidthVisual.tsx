import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import wide from "@/assets/cinematic-wide.jpg";

export function FullWidthVisual() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative my-32 h-[80vh] w-full overflow-hidden md:h-screen">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={wide}
          alt="Cinematic silhouette against a warm glow"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      <div className="container-page relative z-10 flex h-full flex-col justify-end pb-20 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          Interlude
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-display mt-6 max-w-3xl text-[clamp(2rem,5vw,4.5rem)] font-medium"
        >
          Stillness is a feature.
        </motion.h2>
      </div>
    </section>
  );
}
