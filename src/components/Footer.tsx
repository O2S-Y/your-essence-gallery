import { Linkedin, Github, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative z-10 bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8">
          <a
            href="mailto:oussamayinssi@gmail.com"
            className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            oussamayinssi@gmail.com
          </a>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/oussama-yinssi-328396228/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/O2S-Y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:oussamayinssi@gmail.com"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="overflow-x-auto">
          <pre
            aria-label="Yinssi Oussama"
            className="select-none whitespace-pre text-center font-mono font-bold leading-[1.05] text-foreground [font-size:clamp(0.28rem,1.1vw,0.72rem)]"
          >
{String.raw`__   _____ _   _ ____ ____ ___ 
\ \ / /_ _| \ | / ___/ ___|_ _|
 \ V / | ||  \| \___ \___ \| | 
  | |  | || |\  |___) |__) | | 
  |_| |___|_| \_|____/____/___|
  ___  _   _ ____ ____    _    __  __    _    
 / _ \| | | / ___/ ___|  / \  |  \/  |  / \   
| | | | | | \___ \___ \ / _ \ | |\/| | / _ \  
| |_| | |_| |___) |__) / ___ \| |  | |/ ___ \ 
 \___/ \___/|____/____/_/   \_\_|  |_/_/   \_\ `}
          </pre>
        </div>


        <p className="py-6 text-center text-xs text-muted-foreground">
          © {currentYear} Oussama Yinssi · Data Science &amp; AI
        </p>

      </div>
    </footer>
  );
}
