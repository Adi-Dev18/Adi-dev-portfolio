import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { certifications, hackathons } from "@/lib/portfolio-data";
import { ease, fadeUp, stagger } from "@/lib/motion";

type GalleryItem = {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  images: string[];
};

const certificationGallery: GalleryItem[] = certifications.map((item) => ({
  id: item.id,
  eyebrow: item.org,
  title: item.title,
  desc: "Verified learning achievement and certificate proof.",
  images: item.images,
}));

const hackathonGallery: GalleryItem[] = hackathons.map((item) => ({
  id: item.id,
  eyebrow: item.category,
  title: item.title,
  desc: item.desc,
  images: item.images,
}));

function GalleryModal({ active, onClose }: { active: GalleryItem | null; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = !!active && active.images.length > 1;
  const activeImage = active?.images[index];

  const controls = useMemo(
    () => ({
      previous: () => {
        if (!active) return;
        setIndex((current) => (current - 1 + active.images.length) % active.images.length);
      },
      next: () => {
        if (!active) return;
        setIndex((current) => (current + 1) % active.images.length);
      },
    }),
    [active],
  );

  useEffect(() => {
    setIndex(0);
  }, [active?.id]);

  useEffect(() => {
    if (!active) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") controls.previous();
      if (event.key === "ArrowRight") controls.next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, controls]);

  return (
    <Dialog open={!!active} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[92vh] w-[min(94vw,1040px)] max-w-none overflow-hidden border-border bg-background p-0">
        {active && activeImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease }}
            className="grid max-h-[92vh] overflow-hidden lg:grid-cols-[minmax(0,0.95fr)_260px]"
          >
            <div className="min-h-0 border-border lg:border-r">
              <div className="group relative flex h-[58vh] min-h-[320px] items-center justify-center overflow-hidden bg-black p-4 sm:p-6 lg:h-[78vh]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={`${active.title} preview ${index + 1}`}
                    loading="lazy"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease }}
                    className="max-h-full w-full rounded-sm object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </AnimatePresence>

                {hasMultiple && (
                  <>
                    <button
                      type="button"
                      onClick={controls.previous}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border border-white/20 bg-black/55 text-white backdrop-blur transition-all duration-300 hover:border-[rgba(255,255,255,0.25)]"
                    >
                      <ChevronLeft className="size-5" strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      onClick={controls.next}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border border-white/20 bg-black/55 text-white backdrop-blur transition-all duration-300 hover:border-white/45"
                    >
                      <ChevronRight className="size-5" strokeWidth={1.5} />
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="flex min-h-0 flex-col gap-6 overflow-y-auto p-6 sm:p-8">
              <DialogHeader>
                <DialogDescription className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                  {active.eyebrow}
                </DialogDescription>
                <DialogTitle className="text-display text-3xl font-medium leading-tight md:text-4xl">
                  {active.title}
                </DialogTitle>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-muted-foreground">{active.desc}</p>

              <div className="flex items-center justify-between border-y border-border py-4 text-[11px] uppercase tracking-[0.34em] text-muted-foreground">
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(active.images.length).padStart(2, "0")}
                </span>
                {hasMultiple && (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={controls.previous}
                      aria-label="Previous image"
                      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-sm border border-border transition-colors hover:border-[rgba(255,255,255,0.25)]"
                    >
                      <ChevronLeft className="size-4" strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      onClick={controls.next}
                      aria-label="Next image"
                      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-sm border border-border transition-colors hover:border-[rgba(255,255,255,0.25)]"
                    >
                      <ChevronRight className="size-4" strokeWidth={1.5} />
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {active.images.map((image, imageIndex) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setIndex(imageIndex)}
                    aria-label={`Open preview ${imageIndex + 1}`}
                    className={`aspect-[4/3] cursor-pointer overflow-hidden rounded-sm border bg-black transition-all duration-300 ${
                      imageIndex === index
                        ? "border-white/60"
                        : "border-border opacity-65 hover:border-[rgba(255,255,255,0.22)] hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${active.title} thumbnail ${imageIndex + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Hackathons() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <section id="hackathons" className="relative bg-black py-28 md:py-40">
        <div className="container-page">
          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 1, ease }}
            className="mb-16 md:mb-24"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              04 · Achievements
            </p>
            <h2 className="text-display mt-8 text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[0.95]">
              Hackathons &amp;
              <br />
              Innovation
            </h2>
          </motion.div>

          {/* ── Hackathon timeline ── */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="relative border-l pl-8 md:pl-12 timeline-line"
          >
            {hackathonGallery.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.9, ease }}
                onClick={() => setActive(item)}
                className="group relative mb-16 w-full cursor-pointer pl-10 text-left last:mb-0 md:pl-14"
              >
                <span className="absolute left-[-5px] top-5 size-2.5 rounded-full bg-foreground/40 ring-4 ring-background timeline-dot transition-all duration-300 group-hover:scale-150 group-hover:bg-foreground" />
                <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {item.eyebrow}
                </p>
                <h3 className="text-display mt-5 text-3xl font-medium leading-tight transition-colors duration-300 md:text-[2.75rem]">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {item.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.34em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  View proof
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* ── Divider + Certifications subheading ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.9, ease }}
            className="mt-20 md:mt-28"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              Professional Growth
            </p>
            <h3 className="text-display mt-6 text-[clamp(2rem,4vw,3.75rem)] font-medium leading-[0.95]">
              Verified Learning
              <br />
              &amp; Certifications
            </h3>
          </motion.div>

          {/* ── Certifications grid ── */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="mt-14 grid gap-5 md:grid-cols-2"
          >
            {certificationGallery.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.85, ease }}
                onClick={() => setActive(item)}
                className="card-border group cursor-pointer rounded-sm bg-transparent p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.01)] md:p-10"
              >
                <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                  {item.eyebrow}
                </p>
                <h4 className="mt-6 text-2xl font-medium leading-snug text-foreground md:text-3xl">
                  {item.title}
                </h4>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.34em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  Preview certificate
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <GalleryModal active={active} onClose={() => setActive(null)} />
    </>
  );
}
