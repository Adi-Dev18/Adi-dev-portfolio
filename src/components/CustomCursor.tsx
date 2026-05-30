import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const hoveringRef = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const updateHoverState = (target: HTMLElement | null) => {
      if (!target) {
        hoveringRef.current = false;
        setCursorLabel("");
        return;
      }

      const view = target.closest('[data-cursor="view"]');
      const open = target.closest('[data-cursor="open"]');
      const hover = target.closest(
        "a, button, [data-cursor=hover], [data-cursor=view], [data-cursor=open]",
      );

      if (view) {
        hoveringRef.current = true;
        setCursorLabel("VIEW");
      } else if (open) {
        hoveringRef.current = true;
        setCursorLabel("OPEN");
      } else if (hover) {
        hoveringRef.current = true;
        setCursorLabel("");
      } else {
        hoveringRef.current = false;
        setCursorLabel("");
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      updateHoverState(e.target as HTMLElement);
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !related.closest("a, button, [data-cursor]")) {
        updateHoverState(null);
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${hoveringRef.current ? 1.75 : 1})`;
        ringRef.current.style.boxShadow = hoveringRef.current
          ? "0 0 28px rgba(255,106,43,0.18)"
          : "0 0 20px rgba(255,106,43,0.12)";
      }
      if (labelRef.current) {
        labelRef.current.style.opacity = cursorLabel ? "1" : "0";
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [cursorLabel]);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-10 w-10 rounded-full border border-white/35 bg-white/10 backdrop-blur-sm md:block"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease, transform 200ms ease, box-shadow 200ms ease",
        }}
      >
        <div
          ref={labelRef}
          className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.28em] text-white/80"
          style={{ opacity: 0, transition: "opacity 160ms ease" }}
        >
          {cursorLabel}
        </div>
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.18)] md:block"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease, transform 200ms ease",
        }}
      />
    </>
  );
}
