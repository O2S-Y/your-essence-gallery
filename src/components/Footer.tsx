import footerCrane from "../assets/footer-crane.png.asset.json";

const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 flex min-h-[28rem] flex-col overflow-hidden border-t border-border bg-card sm:min-h-[40rem] lg:min-h-[48rem]">
      {/* origami crane stuck to the footer background */}
      <img
        src={footerCrane.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute bottom-0 -right-4 w-[20rem] max-w-none rotate-12 opacity-[0.12] mix-blend-multiply invert select-none dark:opacity-[0.18] dark:mix-blend-screen dark:invert-0 sm:-right-8 sm:w-[32rem] lg:-right-12 lg:w-[40rem]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-10 sm:px-6 lg:px-8">
        <div className="relative z-10 mt-8 overflow-hidden select-none sm:mt-10">
          <p
            className="font-display italic leading-[0.8] tracking-tight whitespace-nowrap text-muted-foreground/60"
            style={{ fontSize: "clamp(5rem, 24vw, 20rem)", marginLeft: "-0.06em" }}
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
