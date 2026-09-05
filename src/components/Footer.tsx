import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/portfolio";

const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="space-y-1 text-center font-body text-sm text-muted-foreground sm:text-left">
              <a
                href={`mailto:${profile.email}`}
                className="block transition-colors hover:text-primary"
              >
                {profile.email}
              </a>
              <p>{profile.location}</p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <p className="mt-6 text-center font-body text-[11px] text-muted-foreground">
            © {currentYear} Oussama Yinssi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
