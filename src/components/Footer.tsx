import footerCrane from "../assets/footer-crane.png.asset.json";

const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-border bg-card">
      {/* origami crane stuck to the footer background */}
      <img
        src={footerCrane.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -right-10 bottom-[-6%] w-[26rem] max-w-none rotate-12 opacity-[0.08] mix-blend-multiply invert select-none dark:bottom-[-8%] dark:opacity-[0.12] dark:mix-blend-screen dark:invert-0 sm:-right-16 sm:w-[38rem] lg:w-[48rem]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden select-none sm:mt-10">
          <p
            className="font-display italic leading-[0.8] tracking-tight whitespace-nowrap text-muted-foreground/60"
            style={{ fontSize: "clamp(5rem, 24vw, 20rem)", marginLeft: "-0.06em" }}
          >
            Oussama
          </p>
        </div>

        <p className="pb-8 pt-6 font-body text-xs text-muted-foreground">
          © {currentYear} Oussama Yinssi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
