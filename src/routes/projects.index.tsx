import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Oussama Yinssi" },
      { name: "description", content: "Selected data science, machine learning, and big data projects by Oussama Yinssi." },
      { property: "og:title", content: "Projects — Oussama Yinssi" },
      { property: "og:description", content: "Selected data science, machine learning, and big data projects by Oussama Yinssi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects across machine learning, big data engineering, and natural language processing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-secondary to-background p-6">
              <span className="font-heading text-2xl font-bold text-primary/40">{project.title.charAt(0)}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {project.title}
              </h2>
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
  );
}
