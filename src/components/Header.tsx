import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 w-full transition-all duration-500",
        scrolled ? "px-3 pt-3 sm:px-6" : "px-0 pt-0",
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500",
          scrolled
            ? "h-14 max-w-3xl rounded-full border border-border bg-card/70 px-5 shadow-lg backdrop-blur-md backdrop-saturate-150"
            : "h-16 w-full max-w-full rounded-none border-b border-border bg-background/60 px-4 backdrop-blur-sm backdrop-saturate-150 sm:px-6 lg:px-8",
        )}
      >
        <a
          href="/"
          aria-label="Oussama Yinssi — home"
          className="group relative flex items-center overflow-hidden font-display tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {/* full wordmark */}
          <span
            className={cn(
              "block whitespace-nowrap text-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              scrolled
                ? "max-w-0 -translate-y-2 opacity-0 blur-[2px]"
                : "max-w-[16rem] translate-y-0 opacity-100 blur-0",
            )}
          >
            Oussama Yinssi
          </span>
          {/* compact mark */}
          <span
            className={cn(
              "block whitespace-nowrap text-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              scrolled
                ? "max-w-[8rem] translate-y-0 opacity-100 blur-0"
                : "max-w-0 translate-y-2 opacity-0 blur-[2px]",
            )}
          >
            Ou<span className="[letter-spacing:-0.06em]">2</span>
            <span className="[margin-left:-0.04em]">Sama</span>
          </span>
        </a>



        <nav
          className={cn(
            "hidden items-center transition-all duration-500 md:flex",
            scrolled ? "gap-6" : "gap-8",
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-muted-foreground transition-colors hover:text-foreground",
                scrolled
                  ? "text-xs uppercase tracking-[0.15em]"
                  : "text-sm",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={cn(
            "mx-auto bg-card px-4 py-4 md:hidden",
            scrolled
              ? "mt-2 max-w-3xl rounded-2xl border border-border shadow-lg"
              : "max-w-full border-b border-border",
          )}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
