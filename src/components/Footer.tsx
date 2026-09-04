import footerCrane from "../assets/footer-crane.png.asset.json";

const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 flex min-h-[8rem] flex-col overflow-hidden border-t border-border bg-card sm:min-h-[9rem] lg:min-h-[10rem]">
      {/* origami crane layered behind the Oussama wordmark */}
      <img
        src={footerCrane.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute bottom-0 -right-2 z-0 w-[10rem] max-w-none rotate-6 opacity-[0.14] mix-blend-multiply invert select-none dark:opacity-[0.20] dark:mix-blend-screen dark:invert-0 sm:-right-4 sm:w-[14rem] lg:-right-6 lg:w-[18rem]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-3 sm:px-6 lg:px-8">
        <div className="relative z-10 mt-2 overflow-hidden select-none sm:mt-3">
          <p
            className="font-display italic leading-[0.8] tracking-tight whitespace-nowrap text-muted-foreground/60"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", marginLeft: "-0.04em" }}
          >
            Oussama
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center pb-4">
          <p className="text-center font-body text-[11px] text-muted-foreground">
            © {currentYear} Oussama Yinssi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
