import { createFileRoute, Link } from "@tanstack/react-router";
import { projects, profile } from "@/data/portfolio";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: project ? `${project.title} — Oussama Yinssi` : "Project — Oussama Yinssi" },
        { name: "description", content: project?.shortDescription ?? "Project details." },
        { property: "og:title", content: project ? `${project.title} — Oussama Yinssi` : "Project — Oussama Yinssi" },
        { property: "og:description", content: project?.shortDescription ?? "Project details." },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">Project not found</h1>
          <p className="mt-2 text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.shortDescription}</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-foreground">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.fullDescription}</p>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-foreground">Key Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-foreground">Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
              )}
              <a
                href={`mailto:${profile.email}?subject=Question about ${project.title}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Ask about this project
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-foreground">Tech stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
