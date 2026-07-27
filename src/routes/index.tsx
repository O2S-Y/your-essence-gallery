import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  Download,
  Mail,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Github,
  Send,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react";
import {
  profile,
  projects,
  skillCategories,
  education,
  experience,
  awards,
} from "@/data/portfolio";
import { submitContactMessage } from "@/lib/contact.functions";

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
      <AwardsSection />
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

/* ---------------- Projects (editorial rows) ---------------- */

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Selected projects
        </p>
        <h2 className="mt-3 font-display text-6xl tracking-tight text-foreground sm:text-7xl">
          Work
        </h2>

        <div className="mt-10 space-y-6">

          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative grid grid-cols-1 overflow-hidden rounded-sm bg-secondary/50 transition-colors hover:bg-secondary md:grid-cols-2"
            >
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

              <div className="flex flex-col justify-center p-7 sm:p-10">
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
                <h3 className="mt-5 font-heading text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
                  {project.outcomes[0]}
                </p>
                <div className="mt-8 flex items-center gap-5">
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
                className="relative min-h-[220px] overflow-hidden md:min-h-[320px]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--sage-400), var(--sage-700))",
                }}
              >
                <span className="absolute -bottom-10 -right-4 font-heading text-[11rem] font-bold leading-none text-background/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute left-8 top-8 h-24 w-24 rounded-full bg-background/20" />
                <span className="absolute bottom-10 left-16 h-16 w-40 rounded-t-full bg-background/15" />
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills / Resume (editorial, no cards) ---------------- */

function SkillsSection() {

  return (
    <section id="skills" className="relative z-10 py-24">
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
  return (
    <div className="mt-6 overflow-x-auto">
      <div className="min-w-[680px]">
        {skillCategories.map((group, r) => {
          const cfg = waveCfg(r + 1);
          const next = waveCfg(r + 2);
          const endY = waveY(WAVE_W, cfg);
          const nextStartY = waveY(0, next);
          return (
            <div key={group.category} className="relative" style={{ height: WAVE_H }}>
              <svg
                aria-hidden="true"
                viewBox={`0 0 ${WAVE_W} ${WAVE_H}`}
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-primary/60"
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

              <span className="pointer-events-none absolute left-0 top-1 font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
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
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-default whitespace-nowrap rounded-full border border-border bg-background/80 px-3.5 py-1.5 font-body text-xs text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
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


/* ---------------- Awards (alternating timeline, reveal on scroll) ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function AwardRow({
  award,
  index,
}: {
  award: (typeof awards)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const left = index % 2 === 0;

  const content = (
    <div
      className={`group flex max-w-full items-center gap-5 ${left ? "flex-row-reverse text-right" : "text-left"}`}
    >
      <div
        className="grid h-16 w-16 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20"
        style={{
          background: "linear-gradient(135deg, var(--sage-300), var(--sage-600))",
        }}
      >
        <Award className="h-7 w-7 text-background sm:h-8 sm:w-8" />
      </div>
      <div>
        <p className="font-heading text-lg font-bold leading-snug text-foreground sm:text-2xl">
          {award.title}
        </p>
        <p className="mt-1.5 font-body text-sm text-muted-foreground sm:text-base">
          {award.issuer} · {award.year}
        </p>
      </div>
    </div>
  );

  /* connector that grows out of the center line to touch the award */
  const connector = (
    <span
      className={`h-px flex-1 bg-primary/60 transition-transform duration-700 ease-out ${
        left ? "origin-right" : "origin-left"
      } ${visible ? "scale-x-100" : "scale-x-0"}`}
    />
  );

  return (
    <div
      ref={ref}
      className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6"
    >
      <div
        className={`flex items-center gap-3 transition-all duration-700 ease-out sm:gap-5 ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        {left ? content : null}
        {left ? connector : null}
      </div>
      <span
        className={`h-3 w-3 rounded-full bg-primary transition-transform duration-500 ${
          visible ? "scale-100" : "scale-0"
        }`}
      />
      <div
        className={`flex items-center gap-3 transition-all duration-700 ease-out sm:gap-5 ${
          visible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        {left ? null : connector}
        {left ? null : content}
      </div>
    </div>
  );
}

function AwardsSection() {
  return (
    <section id="awards" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Recognition
        </p>
        <h2 className="mt-3 font-display text-6xl tracking-tight text-foreground sm:text-7xl">
          Awards
        </h2>

        <div className="relative mx-auto mt-20 max-w-6xl">
          <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />
          <div className="relative space-y-20 sm:space-y-24">
            {awards.map((award, index) => (
              <AwardRow key={award.title} award={award} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactFormData = z.infer<typeof contactSchema>;

function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const submitFn = useServerFn(submitContactMessage);

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitFn({ data });
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Get in touch
        </p>

        <a
          href={`mailto:${profile.email}?subject=Hello%20Oussama`}
          className="group mt-4 block font-display leading-[0.92] tracking-tight text-foreground transition-colors hover:text-primary [font-size:clamp(2.75rem,10vw,7rem)]"
        >
          <span className="block">Say hi!</span>
          <span className="block">
            Let&apos;s talk{" "}
            <span className="inline-block transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
              ↗
            </span>
          </span>
        </a>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-2 font-body text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="block transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
            <p>{profile.location}</p>
            <div className="flex flex-wrap gap-5 pt-4 font-body text-xs uppercase tracking-[0.2em]">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                aria-label="Name"
                {...register("name")}
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                aria-label="Email"
                {...register("email")}
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 font-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project or question..."
                aria-label="Message"
                {...register("message")}
                className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 font-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

