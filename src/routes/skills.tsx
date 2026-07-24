import { createFileRoute } from "@tanstack/react-router";
import { skillCategories, education, experience, awards, profile } from "@/data/portfolio";
import { Download, Award, BookOpen, Briefcase } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Resume — Oussama Yinssi" },
      { name: "description", content: "Skills, education, experience, and awards for Oussama Yinssi, Data Science and AI master's student." },
      { property: "og:title", content: "Skills & Resume — Oussama Yinssi" },
      { property: "og:description", content: "Skills, education, experience, and awards for Oussama Yinssi, Data Science and AI master's student." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold text-foreground">Skills & Resume</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A snapshot of my technical toolkit, academic journey, and professional experience.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 self-start rounded-md bg-primary px-5 py-2.5 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </div>

      {/* Skills grid */}
      <section className="mb-16">
        <h2 className="mb-6 font-heading text-2xl font-semibold text-foreground">Technical Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">{category.category}</h3>
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
      </section>

      {/* Timeline: Education + Experience */}
      <div className="mb-16 grid gap-12 lg:grid-cols-2">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((entry) => (
              <TimelineItem key={entry.title} entry={entry} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((entry) => (
              <TimelineItem key={entry.title} entry={entry} />
            ))}
          </div>
        </section>
      </div>

      {/* Awards */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Award className="h-5 w-5" />
          </div>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Awards & Certificates</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((award) => (
            <div
              key={award.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">{award.title}</h3>
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
      </section>
    </div>
  );
}

function TimelineItem({ entry }: { entry: { title: string; organization: string; period: string; description: string } }) {
  return (
    <div className="relative border-l-2 border-border pl-6">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground">{entry.title}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{entry.organization}</p>
        <p className="mt-1 text-sm text-muted-foreground">{entry.period}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
      </div>
    </div>
  );
}
