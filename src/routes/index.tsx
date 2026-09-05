import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { OrizuruBar } from "../components/OrizuruBar";
import {
  Download,
  Mail,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Github,
  
  BookOpen,
  Briefcase,
} from "lucide-react";
import {
  profile,
  projects,
  skillCategories,
  education,
  experience,

} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oussama Yinssi — Data Science & AI Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Oussama Yinssi — a master's student in Data Science and Intelligent Systems building ML, big data, and AI systems.",
      },
      { property: "og:title", content: "Oussama Yinssi — Data Science & AI Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Oussama Yinssi — a master's student in Data Science and Intelligent Systems building ML, big data, and AI systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  // Smooth-scroll to hash on load / hash change
  useEffect(() => {
    const scrollToHash = () => {
      if (typeof window === "undefined") return;
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="relative z-10 flex flex-col">
      <HeroAbout />
      <ProjectsSection />
      <SkillsSection />
      
      <ContactSection />
    </div>
  );
}


/* ---------------- Hero + About (Bauhaus composition) ---------------- */

function HeroAbout() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-0">
        {/* Left: intro */}
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Data Science · Big Data · AI
          </span>
          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turning data into
            <br />
            <em className="font-normal italic text-primary">decisions.</em>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <span>Based in {profile.location}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>Open to opportunities</span>
          </div>
        </div>

        {/* Right: Bauhaus composition with about text merged inside */}
        <div className="relative">
          <BauhausAbout />
        </div>
      </div>

      {/* animated ascii origami bar along the bottom of the hero */}
      <div className="relative -mt-2 border-t border-border/50 pb-2">
        <OrizuruBar height={72} />
      </div>
    </section>
  );
}


function BauhausAbout() {
  // Sage & Cream mapped Bauhaus palette
  const sage = "var(--sage-500)";
  const sageDark = "var(--sage-700)";
  const sageLight = "var(--sage-300)";
  const cream = "var(--cream)";
  const ink = "var(--charcoal)";

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
      {/* Big sage square */}
      <div
        className="absolute left-[8%] top-[18%] h-[52%] w-[52%] rounded-sm"
        style={{ background: sage }}
      />
      {/* Blue-like block replaced with deep sage */}
      <div
        className="absolute right-[6%] top-[38%] h-[44%] w-[54%] rounded-sm"
        style={{ background: sageDark }}
      />
      {/* Yellow half circle → cream disc top */}
      <div
        className="absolute left-[18%] top-[3%] h-[26%] w-[36%] overflow-hidden rounded-b-full"
        style={{ background: sageLight }}
      />
      {/* Small dark circle top-right */}
      <div
        className="absolute right-[14%] top-[6%] h-[14%] w-[14%] rounded-full"
        style={{ background: ink }}
      />
      {/* Half disc mid-right */}
      <div
        className="absolute right-[10%] top-[22%] h-[14%] w-[26%] overflow-hidden rounded-b-full"
        style={{ background: sageLight }}
      />
      {/* Bottom triangle-ish block (charcoal) */}
      <div
        className="absolute bottom-[4%] left-[6%] h-[26%] w-[30%] rounded-sm"
        style={{
          background: ink,
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        }}
      />
      {/* Small quarter circle */}
      <div
        className="absolute bottom-[4%] left-[6%] h-[26%] w-[30%] rounded-sm border border-foreground/20"
        style={{ background: "transparent" }}
      />
      {/* Yellow disc bottom-right */}
      <div
        className="absolute bottom-[10%] right-[16%] h-[24%] w-[24%] rounded-full"
        style={{ background: sageLight }}
      />
      {/* Small orange quarter (accent) */}
      <div
        className="absolute bottom-[4%] right-[36%] h-[12%] w-[12%] overflow-hidden rounded-tl-full"
        style={{ background: sage }}
      />
      {/* Thin outlined rectangles overlapping */}
      <div className="absolute inset-[6%] rounded-sm border border-foreground/30" />
      <div className="absolute left-[28%] top-[30%] h-[46%] w-[52%] rounded-sm border border-foreground/25" />

      {/* About card floating on the composition (merged in) */}
      <div
        className="absolute bottom-[6%] right-[6%] w-[78%] max-w-[360px] rounded-lg p-5 shadow-lg backdrop-blur-sm"
        style={{
          background: `color-mix(in oklab, ${cream} 92%, transparent)`,
        }}
      >
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary">
          About
        </p>
        <p className="mt-2 font-body text-[13px] leading-relaxed text-foreground">
          {profile.bio}
        </p>
      </div>

      {/* Corner label like Bauhaus 1919 */}
      <div className="pointer-events-none absolute -bottom-8 left-0 flex w-full items-baseline justify-between font-heading text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>Yinssi</span>
        <span>MMXXVI</span>
      </div>
    </div>
  );
}

/* ---------------- Projects (hand-drawn road) ---------------- */

const INITIAL_VISIBLE = 2;
const ROW_H = 340;

function roadPath(w: number, rowH: number, rows: number, off = 0) {
  if (!w || !rowH || !rows) return "";
  let d = "";
  for (let i = 0; i < rows; i++) {
    const y = i * rowH + rowH / 2 + off;
    const even = i % 2 === 0;
    const sx = even ? w * 0.44 : w * 0.56;
    const ex = even ? w * 0.98 : w * 0.02;
    if (i === 0) d += `M ${sx.toFixed(1)},${y.toFixed(1)}`;
    d += ` L ${ex.toFixed(1)},${y.toFixed(1)}`;
    if (i < rows - 1) {
      const ny = (i + 1) * rowH + rowH / 2 + off;
      const nsx = even ? w * 0.56 : w * 0.44;
      const bulge = even ? w * 0.05 : -w * 0.05;
      d += ` C ${(ex + bulge).toFixed(1)},${y.toFixed(1)} ${(ex + bulge).toFixed(1)},${ny.toFixed(1)} ${nsx.toFixed(1)},${ny.toFixed(1)}`;
    }
  }
  const lastY = (rows - 1) * rowH + rowH / 2 + off;
  const lastEx = (rows - 1) % 2 === 0 ? w * 0.98 : w * 0.02;
  d += ` C ${lastEx.toFixed(1)},${(lastY + rowH * 0.35).toFixed(1)} ${(w * 0.5).toFixed(1)},${(lastY + rowH * 0.3).toFixed(1)} ${(w * 0.5).toFixed(1)},${(lastY + rowH * 0.5).toFixed(1)}`;
  return d;
}

function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [progress, setProgress] = useState(0);

  const visible = expanded ? projects : projects.slice(0, INITIAL_VISIBLE);
  const rows = visible.length;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [rows]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setProgress(1);
      return;
    }
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.85 - r.top) / Math.max(1, r.height * 0.7);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rows]);

  const rowH = rows ? size.h / rows : 0;

  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Selected projects
        </p>
        <h2 className="mt-3 font-display text-6xl tracking-tight text-foreground sm:text-7xl">
          Work
        </h2>

        <div ref={wrapRef} className="relative mt-12">
          {/* hand-drawn road threading through the cards */}
          <svg
            aria-hidden="true"
            viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible text-primary/70 md:block"
          >
            {[-6, 0, 6].map((off, i) => (
              <path
                key={off}
                d={roadPath(size.w, rowH, rows, off)}
                fill="none"
                stroke="currentColor"
                strokeWidth={i === 1 ? 2 : 1.2}
                strokeOpacity={i === 1 ? 0.9 : 0.4}
                strokeLinecap="round"
                strokeDasharray={i === 1 ? undefined : "10 12"}
                pathLength={1}
                style={{
                  strokeDasharray: i === 1 ? 1 : undefined,
                  strokeDashoffset: i === 1 ? 1 - progress : undefined,
                  opacity: i === 1 ? 1 : progress > 0.15 ? 1 : 0,
                  transition: "opacity 600ms ease-out",
                }}
              />
            ))}
          </svg>

          {visible.map((project, index) => {
            const cardLeft = index % 2 === 0;
            return (
              <div
                key={project.slug}
                className="relative grid grid-cols-1 items-center gap-6 py-6 md:grid-cols-2 md:gap-10 md:py-0"
                style={{ minHeight: undefined }}
              >
                <div
                  className={`${cardLeft ? "md:order-1" : "md:order-2"} flex md:h-[${ROW_H}px] md:items-center`}
                  style={{ height: undefined }}
                >
                  <ProjectCard project={project} index={index} />
                </div>
                <div
                  className={`${cardLeft ? "md:order-2" : "md:order-1"} hidden items-center md:flex ${
                    cardLeft ? "md:justify-start md:pl-6" : "md:justify-end md:pr-6"
                  }`}
                >
                  <span className="font-body text-sm uppercase tracking-[0.25em] text-muted-foreground">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px]">
                      {index + 1}
                    </span>
                    Project
                  </span>
                </div>
              </div>
            );
          })}

          {projects.length > INITIAL_VISIBLE && (
            <div className="mt-4 flex justify-center md:mt-10">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="font-body text-sm uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              >
                {expanded ? "view less" : "view more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="group relative w-full overflow-hidden rounded-sm bg-secondary/50 transition-colors hover:bg-secondary">
      {/* stitched cord that draws itself around the card on hover */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full text-primary"
        preserveAspectRatio="none"
      >
        <rect
          x="6"
          y="6"
          width="calc(100% - 12px)"
          height="calc(100% - 12px)"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          pathLength={100}
          strokeDashoffset={0}
          className="[stroke-dasharray:2_98] [transition:stroke-dasharray_900ms_ease-out,opacity_300ms] opacity-0 group-hover:opacity-100 group-hover:[stroke-dasharray:6_6]"
        />
      </svg>

      <div className="flex flex-col justify-center p-7 sm:p-9">
        <p
          className="font-heading text-3xl font-bold leading-none text-foreground/80"
          style={{
            textShadow:
              "1px 1px 0 color-mix(in oklab, var(--primary) 55%, transparent), -1px -1px 0 color-mix(in oklab, var(--background) 80%, transparent), 0 2px 3px color-mix(in oklab, var(--charcoal) 25%, transparent)",
            letterSpacing: "0.04em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
          {project.outcomes[0]}
        </p>
        <div className="mt-6">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div
        className="h-3 w-full"
        style={{
          background: "linear-gradient(90deg, var(--sage-400), var(--sage-700))",
        }}
      />
    </article>
  );
}


/* ---------------- Skills / Resume (editorial, no cards) ---------------- */

function SkillsSection() {

  return (
    <section id="skills" className="relative z-10 pt-24 pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
          My story
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-6xl tracking-tight text-foreground sm:text-7xl">
            About
          </h2>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Download className="h-4 w-4" />
            View CV
          </a>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-2">
          {/* Left: narrative */}
          <div className="space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
            <p>{profile.bio}</p>
            <p>
              I work end to end: framing the question, engineering the data,
              training and evaluating models, then shipping something people can
              actually use.
            </p>
            <p>
              Currently finishing a master's in Data Science and Intelligent
              Systems, and open to internships and collaborations.
            </p>
          </div>

          {/* Right: lists */}
          <div className="space-y-12">
            <ResumeGroup icon={<Briefcase className="h-4 w-4" />} label="Experience">
              {experience.map((entry) => (
                <ResumeRow
                  key={entry.title}
                  title={entry.title}
                  subtitle={entry.organization}
                  meta={entry.period}
                />
              ))}
            </ResumeGroup>

            <ResumeGroup icon={<BookOpen className="h-4 w-4" />} label="Education">
              {education.map((entry) => (
                <ResumeRow
                  key={entry.title}
                  title={entry.title}
                  subtitle={entry.organization}
                  meta={entry.period}
                />
              ))}
            </ResumeGroup>
          </div>
        </div>

        {/* Skills riding hand-drawn oceans */}
        <div className="mt-24">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Skills Ocean
          </p>
          <SkillsOcean />
        </div>
      </div>
    </section>
  );
}

const WAVE_W = 1200;
const WAVE_H = 120;

type WaveCfg = { amp: number; freq: number; phase: number; drift: number };

function waveCfg(seed: number): WaveCfg {
  const r = (n: number) => {
    const v = Math.sin(seed * 12.9898 + n * 78.233) * 43758.5453;
    return v - Math.floor(v);
  };
  return {
    amp: 16 + r(1) * 16,
    freq: 2 + Math.round(r(2) * 2),
    phase: r(3) * Math.PI * 2,
    drift: (r(4) - 0.5) * 14,
  };
}

const waveY = (x: number, c: WaveCfg, offset = 0) =>
  WAVE_H / 2 +
  offset +
  c.drift -
  c.amp * Math.sin((x / WAVE_W) * Math.PI * c.freq + c.phase);

function wavePath(c: WaveCfg, offset = 0) {
  const points: string[] = [];
  for (let x = 0; x <= WAVE_W; x += 20) {
    points.push(`${x},${waveY(x, c, offset).toFixed(1)}`);
  }
  return `M${points.join(" L")}`;
}

const OCEAN_NAMES: Record<string, string> = {
  "Languages & Databases": "Language Ocean",
  "Machine Learning & AI": "Learning Ocean",
  "Big Data & Engineering": "Big Data Ocean",
  "Data Visualization & Analytics": "Visualization Ocean",
  "MLOps & Cloud": "Cloud Ocean",
};

function oceanName(category: string) {
  return OCEAN_NAMES[category] ?? `${category.split(" ")[0]} Ocean`;
}


function SkillsOcean() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-6 overflow-x-auto">
      <div className="min-w-[680px]">
        {skillCategories.map((group, r) => {
          const cfg = waveCfg(r + 1);
          const next = waveCfg(r + 2);
          const endY = waveY(WAVE_W, cfg);
          const nextStartY = waveY(0, next);
          const expanded = open === r;
          return (
            <div
              key={group.category}
              onMouseEnter={() => setOpen(r)}
              onMouseLeave={() => setOpen((cur) => (cur === r ? null : cur))}
              onFocus={() => setOpen(r)}
              tabIndex={0}
              className="relative outline-none transition-[height] duration-500 ease-out"
              style={{ height: expanded ? WAVE_H : 46 }}
            >
              <svg
                aria-hidden="true"
                viewBox={`0 0 ${WAVE_W} ${WAVE_H}`}
                preserveAspectRatio="none"
                className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible transition-colors duration-300 ${
                  expanded ? "text-primary/70" : "text-primary/35"
                }`}
              >
                <path
                  d={wavePath(cfg)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d={wavePath(cfg, 11)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                {r < skillCategories.length - 1 && (
                  <path
                    d={`M${WAVE_W},${endY.toFixed(1)} C ${WAVE_W + 60},${endY.toFixed(1)} ${WAVE_W + 60},${(WAVE_H + nextStartY).toFixed(1)} ${WAVE_W},${(WAVE_H + nextStartY).toFixed(1)} L 0,${(WAVE_H + nextStartY).toFixed(1)}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                  />
                )}
              </svg>

              <span
                className={`pointer-events-none absolute left-0 top-1 font-body text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                  expanded ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {oceanName(group.category)}
              </span>

              {group.skills.map((skill, i) => {
                const x = ((i + 0.5) / group.skills.length) * WAVE_W;
                return (
                  <span
                    key={`${skill}-${i}`}
                    style={{
                      left: `${(x / WAVE_W) * 100}%`,
                      top: `${(waveY(x, cfg) / WAVE_H) * 100}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-default whitespace-nowrap rounded-full border border-border bg-background/80 px-3.5 py-1.5 font-body text-xs text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg ${
                      expanded ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}





function ResumeGroup({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </p>
      <div className="mt-4 divide-y divide-border border-t border-border">{children}</div>
    </div>
  );
}

function ResumeRow({
  title,
  subtitle,
  meta,
  link,
}: {
  title: string;
  subtitle: string;
  meta: string;
  link?: string;
}) {
  const content = (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3">
      <div className="min-w-0">
        <p className="font-body text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 font-body text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <span className="shrink-0 font-body text-xs text-muted-foreground">{meta}</span>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-primary">
      {content}
    </a>
  ) : (
    content
  );
}


/* ---------------- Contact ---------------- */

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 pt-14 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Get in touch
        </p>

        <a
          href={`mailto:${profile.email}?subject=Hello%20Oussama`}
          className="group mt-4 block font-display leading-[0.92] tracking-tight text-foreground [font-size:clamp(2.75rem,10vw,7rem)]"
        >
          <span className="block">Say hi!</span>
          <span className="block transition-colors group-hover:text-primary">
            Let&apos;s talk{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
              ↗
            </span>
          </span>
        </a>

      </div>
    </section>
  );
}

