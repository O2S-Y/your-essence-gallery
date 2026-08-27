import craneArt from "../assets/crane-ascii.png.asset.json";

type Crane = {
  top: string;
  left: string;
  width: string;
  rotate: number;
  opacity: number;
  flip?: boolean;
};

// Pseudo-random but stable placement so SSR and client match.
const cranes: Crane[] = [
  { top: "4%", left: "-6%", width: "34rem", rotate: -12, opacity: 0.5 },
  { top: "12%", left: "68%", width: "22rem", rotate: 24, opacity: 0.35, flip: true },
  { top: "26%", left: "22%", width: "16rem", rotate: 8, opacity: 0.3 },
  { top: "34%", left: "76%", width: "30rem", rotate: -20, opacity: 0.45 },
  { top: "46%", left: "-4%", width: "20rem", rotate: 32, opacity: 0.3, flip: true },
  { top: "56%", left: "44%", width: "26rem", rotate: -6, opacity: 0.28 },
  { top: "66%", left: "72%", width: "18rem", rotate: 16, opacity: 0.34 },
  { top: "74%", left: "6%", width: "28rem", rotate: -26, opacity: 0.4, flip: true },
  { top: "86%", left: "52%", width: "24rem", rotate: 12, opacity: 0.32 },
];

export function BackgroundCranes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {cranes.map((c, i) => (
        <img
          key={i}
          src={craneArt.url}
          alt=""
          loading="lazy"
          className="absolute max-w-none mix-blend-multiply dark:mix-blend-screen dark:invert"
          style={{
            top: c.top,
            left: c.left,
            width: c.width,
            opacity: c.opacity,
            transform: `rotate(${c.rotate}deg)${c.flip ? " scaleX(-1)" : ""}`,
          }}
        />
      ))}
    </div>
  );
}
