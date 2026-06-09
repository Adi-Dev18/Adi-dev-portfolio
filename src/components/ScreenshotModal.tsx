import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect } from "react";

const transition = { duration: 0.28, ease: [0.16, 1, 0.3, 1] };

type ScreenshotModalProps = {
  images: string[];
  open: boolean;
  index: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function ScreenshotModal({
  images,
  open,
  index,
  onClose,
  onPrevious,
  onNext,
}: ScreenshotModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, onPrevious, onNext]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-[1200px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b12]/95 shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={transition}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close screenshot"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition hover:bg-white/10"
            >
              <X className="size-5" strokeWidth={1.7} />
            </button>

            <img
              src={images[index]}
              alt={`Project screenshot ${index + 1}`}
              className="h-[calc(100vh-128px)] w-full object-contain bg-black"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-white/70">
              <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
                <span className="text-sm uppercase tracking-[0.35em] text-white/40">
                  Screenshot {index + 1} of {images.length}
                </span>
                <div className="flex items-center gap-3 justify-end">
                  <button
                    type="button"
                    onClick={onPrevious}
                    aria-label="Previous screenshot"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:border-white/20"
                  >
                    <ArrowLeft className="size-5" strokeWidth={1.8} />
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next screenshot"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:border-white/20"
                  >
                    <ArrowRight className="size-5" strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
