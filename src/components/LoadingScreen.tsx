import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setFading(true), 250);
        setTimeout(() => setHidden(true), 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end bg-[var(--charcoal)] transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fading}
    >
      <div className="flex w-full items-baseline gap-6 px-6 pb-6 sm:gap-10 sm:px-10 sm:pb-10">
        <span
          className="font-heading font-normal leading-none tracking-tight text-[var(--cream)] tabular-nums"
          style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}
        >
          {progress}%
        </span>
        <span
          className="font-heading font-normal leading-none tracking-tight text-[var(--cream)]/30"
          style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}
        >
          Loading
        </span>
      </div>
    </div>
  );
}
