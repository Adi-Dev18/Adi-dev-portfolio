import { motion, useScroll, useSpring } from "framer-motion";
import { ease } from "@/lib/motion";
import logo from "@/assets/logo.png";

const links = [
  ["Innovation", "innovation"],
  ["Stack", "stack"],
  ["Work", "projects"],
  ["Hackathons", "hackathons"],
  ["About", "about"],
] as const;

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.4, ease }}
      className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-md"
    >
      <div className="container-page grid grid-cols-[1fr_auto_1fr] items-center py-5 md:py-6">
        {/* Logo / Name */}
        <a
          href="#"
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
        >
          <img src={logo} alt="Aditya" className="h-6 w-6" />
          <span className="text-[0.75rem] tracking-[0.4em] text-white/75">Aditya</span>
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-7 md:gap-10">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="magnetic-underline text-sm tracking-wide transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Available dot */}
        <a
          href="#footer"
          className="flex items-center justify-end gap-2 text-[0.75rem] tracking-[0.3em] text-white/75 transition-opacity hover:opacity-70"
        >
          <span className="inline-block size-1.5 rounded-full bg-green-400/80" />
          Available
        </a>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, background: "rgba(255, 255, 255, 0.14)" }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
      />
    </motion.header>
  );
}
