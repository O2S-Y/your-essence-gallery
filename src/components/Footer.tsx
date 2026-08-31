import craneArt from "../assets/crane-ascii.png.asset.json";

const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-border bg-card">
      {/* origami at the side */}
      <img
        src={craneArt.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -left-14 top-2 w-56 max-w-none opacity-20 mix-blend-multiply select-none sm:-left-10 sm:w-80 dark:opacity-15 dark:mix-blend-screen dark:invert"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <p className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
          Oussama Yinssi
        </p>

        <div className="mt-8 overflow-hidden select-none sm:mt-10">
          <p
            className="font-display italic leading-[0.8] tracking-tight whitespace-nowrap text-muted-foreground/60"
            style={{ fontSize: "clamp(5rem, 24vw, 20rem)", marginLeft: "-0.06em" }}
          >
            Oussama
          </p>
        </div>

        <p className="pb-6 pt-4 font-body text-xs text-muted-foreground">© {currentYear}</p>
      </div>
    </footer>
  );
}
