import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
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
    <div className="flex flex-col">
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

/* ---------------- Projects ---------------- */

function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary">
              Selected work
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Projects
            </h2>
            <p className="mt-3 text-muted-foreground">
              A selection across machine learning, big data engineering, and NLP.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-secondary to-background p-6">
                <span className="font-heading text-3xl font-bold text-primary/40">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      GitHub
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */

function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary">
              Toolkit
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Skills & Resume
            </h2>
            <p className="mt-3 text-muted-foreground">
              Technical stack, academic journey, and professional experience.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">
                {category.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((entry) => (
                <TimelineItem key={entry.title} entry={entry} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experience.map((entry) => (
                <TimelineItem key={entry.title} entry={entry} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Awards & Certificates
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {awards.map((award) => (
              <div
                key={award.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
              >
                <h4 className="font-heading text-lg font-semibold text-foreground">
                  {award.title}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {award.issuer} · {award.year}
                </p>
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-primary hover:text-primary/80"
                  >
                    View credential
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  entry,
}: {
  entry: { title: string; organization: string; period: string; description: string };
}) {
  return (
    <div className="relative border-l-2 border-border pl-6">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
      <div className="rounded-xl border border-border bg-card p-5">
        <h4 className="font-heading text-lg font-semibold text-foreground">{entry.title}</h4>
        <p className="mt-1 text-sm font-medium text-primary">{entry.organization}</p>
        <p className="mt-1 text-sm text-muted-foreground">{entry.period}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
      </div>
    </div>
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
    <section id="contact" className="border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary">
            Say hello
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have a project, opportunity, or question? Send a message and I'll respond soon.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                {...register("name")}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project or question..."
                {...register("message")}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Contact information
              </h3>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  {profile.email}
                </a>
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground">Availability</h3>
              <p className="mt-4 text-muted-foreground">
                Currently open for internships, freelance projects, and collaborations in
                data science, machine learning, and big data engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
