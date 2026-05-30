import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-32 md:py-48">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-baseline justify-between border-b border-border pb-6 md:mb-24"
        >
          <div className="flex items-baseline gap-6">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              {index}
            </span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              {label}
            </span>
          </div>
        </motion.div>

        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display mb-20 max-w-5xl text-[clamp(2.25rem,6vw,5rem)] font-medium md:mb-28"
          >
            {title}
          </motion.h2>
        )}

        {children}
      </div>
    </section>
  );
}
