import { useEffect, useRef } from "react";
import { ORIZURU_FRAMES } from "../data/orizuru-frames";

const CELL_W = 10.8;
const CELL_H = 18;

// grid bounds of the ascii artwork
const bounds = (() => {
  let maxX = 0;
  let maxY = 0;
  for (const f of ORIZURU_FRAMES) {
    for (const c of f.cells) {
      const x = c[0] as number;
      const y = c[1] as number;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
  return { w: maxX + 1, h: maxY + 1 };
})();

/**
 * A horizontal bar of small animated ASCII origami cranes (orizuru),
 * tiled across the full width with staggered animation offsets.
 */
export function OrizuruBar({ height = 76 }: { height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let dpr = 1;
    let scale = 1;
    let spacing = 1;
    let count = 0;
    let ink = "";

    const setup = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = height + "px";
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      scale = height / (bounds.h * CELL_H);
      ctx.font = `${18 * scale}px "SF Mono", Monaco, Consolas, "Courier New", monospace`;
      const craneW = bounds.w * CELL_W * scale;
      spacing = craneW * 0.62;
      count = Math.ceil(width / spacing) + 2;
      ink = getComputedStyle(canvas).color || "#333";
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const frameCount = ORIZURU_FRAMES.length || 1;
      const dur = ORIZURU_FRAMES[0]?.duration ?? 200;

      for (let i = 0; i < count; i++) {
        const idx = (Math.floor(t / dur) + i * 5) % frameCount;
        const frame = ORIZURU_FRAMES[idx];
        if (!frame) continue;
        const ox = i * spacing - spacing * 0.5;
        const bob = Math.sin(t / 900 + i * 0.8) * height * 0.06;

        for (const cell of frame.cells) {
          const x = cell[0] as number;
          const y = cell[1] as number;
          const char = cell[2] as string;
          const dim = (cell[3] as number) === 0;
          ctx.globalAlpha = dim ? 0.28 : 0.6;
          ctx.fillStyle = ink;
          ctx.fillText(
            char,
            ox + x * CELL_W * scale + (CELL_W * scale) / 2,
            bob + y * CELL_H * scale + (CELL_H * scale) / 2,
          );
        }
      }
      ctx.globalAlpha = 1;
      raf = window.requestAnimationFrame(draw);
    };

    setup();
    raf = window.requestAnimationFrame(draw);

    const onResize = () => setup();
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [height]);

  return (
    <div
      aria-hidden
      className="pointer-events-none w-full select-none overflow-hidden text-primary"
      style={{ height }}
    >
      <canvas ref={canvasRef} className="block text-primary" />
    </div>
  );
}
