import footerArtwork from "../assets/yinssi-oussama-footer.jpg.asset.json";

const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 min-h-[26rem] overflow-hidden bg-background sm:min-h-[34rem]">
      <img
        src={footerArtwork.url}
        alt="Origami cranes suspended in an airy installation with the Yinssi Oussama wordmark"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />

      <div className="relative flex min-h-[26rem] flex-col justify-end sm:min-h-[34rem]">
        <p className="px-4 py-6 text-center font-body text-xs text-foreground/70 sm:px-6 lg:px-8">
          © {currentYear} Oussama Yinssi · Data Science &amp; AI
        </p>
      </div>
    </footer>
  );
}
