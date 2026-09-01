import footerCrane from "../assets/footer-crane.png.asset.json";

const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 flex min-h-[12rem] flex-col overflow-hidden border-t border-border bg-card sm:min-h-[14rem] lg:min-h-[16rem]">
      {/* origami crane layered behind the Oussama wordmark */}
      <img
        src={footerCrane.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute bottom-0 -right-2 z-0 w-[10rem] max-w-none rotate-6 opacity-[0.14] mix-blend-multiply invert select-none dark:opacity-[0.20] dark:mix-blend-screen dark:invert-0 sm:-right-4 sm:w-[14rem] lg:-right-6 lg:w-[18rem]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative z-10 mt-4 overflow-hidden select-none sm:mt-6">
          <p
            className="font-display italic leading-[0.85] tracking-tight whitespace-nowrap text-muted-foreground/60"
            style={{ fontSize: "clamp(3rem, 14vw, 10rem)", marginLeft: "-0.04em" }}
          >
            Oussama
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center pb-8">
          <p className="text-center font-body text-xs text-muted-foreground">
            © {currentYear} Oussama Yinssi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
