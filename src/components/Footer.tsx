const currentYear = "2026";

export function Footer() {
  return (
    <footer className="relative z-10 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border py-6">
          <p className="text-center font-body text-[11px] text-muted-foreground">
            © {currentYear} Oussama Yinssi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
