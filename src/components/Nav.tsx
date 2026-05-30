import { motion, useScroll, useSpring } from "framer-motion";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-x-0 top-0 z-50 bg-background/45 backdrop-blur-xl"
      >
        <div className="container-page grid grid-cols-[1fr_auto_1fr] items-center py-6">
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.38em] text-foreground"
            data-cursor="hover"
          >
            ADITYA
          </a>
          <nav className="hidden gap-10 text-[11px] uppercase tracking-[0.34em] text-muted-foreground md:flex">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Work", "projects"],
              ["Journey", "learning-journey"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                data-cursor="hover"
                className="magnetic-underline transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            data-cursor="hover"
            className="magnetic-underline justify-self-end text-[11px] uppercase tracking-[0.34em] text-foreground"
          >
            <span className="mr-3 inline-block size-1.5 rounded-full bg-accent align-middle shadow-[0_0_16px_rgba(255,106,43,0.9)]" />
            Available
          </a>
        </div>
        <motion.div style={{ scaleX }} className="h-px origin-left bg-foreground/20" />
      </motion.header>
    </>
  );
}
