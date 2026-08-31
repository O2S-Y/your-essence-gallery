import craneArt from "../assets/crane-ascii.png.asset.json";
import { profile } from "@/data/portfolio";

const currentYear = "2026";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/#about" },
      { label: "Work", href: "/#projects" },
      { label: "Skills", href: "/#skills" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "LinkedIn", href: profile.linkedIn },
      { label: "GitHub", href: profile.github },
      { label: "Resume", href: "/resume.pdf" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-border bg-card">
      {/* origami at the side */}
      <img
        src={craneArt.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -right-16 bottom-0 w-[22rem] max-w-none opacity-25 mix-blend-multiply select-none sm:-right-10 sm:w-[30rem] dark:opacity-20 dark:mix-blend-screen dark:invert"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-tight text-foreground">Oussama Yinssi</p>
            <p className="mt-2 max-w-xs font-body text-sm text-muted-foreground">
              Data Science &amp; Intelligent Systems
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="flex flex-col gap-3">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </p>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit font-body text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-3">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Let&apos;s talk
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="w-fit font-body text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-10 select-none overflow-hidden">
          <p
            className="font-display leading-[0.85] tracking-tight text-foreground"
            style={{ fontSize: "clamp(4.5rem, 21vw, 18rem)" }}
          >
            Oussama
          </p>
        </div>

        <p className="border-t border-border py-6 font-body text-xs text-muted-foreground">
          © {currentYear} Oussama Yinssi · All rights reserved
        </p>
      </div>
    </footer>
  );
}
