import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { certifications } from "@/lib/portfolio-data";
import { ease, fadeUp, stagger } from "@/lib/motion";

export function Certifications() {
  const [active, setActive] = useState<(typeof certifications)[number] | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <>
      <section id="certifications" className="relative py-28 md:py-40">
        <div className="container-page">
          <div className="mb-20 hairline" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 1, ease }}
            className="mb-16 md:mb-24"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              05 · Certifications
            </p>
            <h2 className="text-display mt-8 text-[clamp(2rem,5vw,4.25rem)] font-medium leading-[0.95]">
              Verified Learning
              <br />
              &amp; Certifications
            </h2>
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid gap-5 md:grid-cols-2"
          >
            {certifications.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.85, ease }}
                onClick={() => setActive(item)}
                onMouseEnter={() => setPreview(item.title)}
                onMouseLeave={() => setPreview(null)}
                className="group cursor-pointer rounded-sm border border-border bg-surface p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 md:p-10"
              >
                <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                  {item.org}
                </p>
                <h3 className="mt-6 text-2xl font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-foreground md:text-3xl">
                  {item.title}
                </h3>
                {item.verifyUrl && (
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.34em] text-muted-foreground">
                    View credential
                    <ArrowUpRight className="size-3" />
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {preview && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="pointer-events-none fixed bottom-8 right-8 z-40 hidden max-w-xs rounded-sm border border-border bg-background/95 p-4 text-sm text-muted-foreground backdrop-blur-sm md:block"
            >
              {preview}
            </motion.div>
          )}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-lg border-border bg-background">
          {active && (
            <>
              <DialogHeader>
                <DialogDescription className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                  {active.org}
                </DialogDescription>
                <DialogTitle className="text-2xl font-medium leading-snug">
                  {active.title}
                </DialogTitle>
              </DialogHeader>
              <div className="rounded-sm border border-border bg-surface p-10 text-center">
                <p className="text-sm uppercase tracking-[0.34em] text-muted-foreground">
                  {active.org}
                </p>
                <p className="mt-4 text-lg text-foreground">{active.title}</p>
              </div>
              {active.verifyUrl && (
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 text-[11px] uppercase tracking-[0.34em] text-foreground hover:opacity-70"
                >
                  Verify credential
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
