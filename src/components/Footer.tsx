import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const currentYear = "2026";

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-border bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p className="mb-6 font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:mb-8">
          Get in touch
        </p>

        {/* Big CTA headline */}
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex flex-col items-start leading-[0.85] tracking-tight"
        >
          <span className="block whitespace-nowrap font-heading text-[clamp(3.5rem,12vw,9rem)] font-bold text-foreground">
            Say hi!
          </span>
          <span className="relative inline-flex items-center gap-2 whitespace-nowrap font-heading text-[clamp(3.5rem,12vw,9rem)] font-bold text-primary transition-colors duration-300 group-hover:text-primary/80">
            Let’s talk
            <ArrowUpRight
              className="h-[0.5em] w-[0.5em] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={2.5}
            />
          </span>
        </a>

        {/* Divider line */}
        <div className="mt-6 h-px w-full bg-border sm:mt-8" />

        {/* Contact details & social links */}
        <div className="mt-8 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="space-y-2 font-body text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="block transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
            <p>{profile.location}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-body text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex justify-center border-t border-border pt-6 sm:mt-16">
          <p className="text-center font-body text-[11px] text-muted-foreground">
            © {currentYear} Oussama Yinssi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
