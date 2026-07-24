import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oussama Yinssi — Data Science & AI Portfolio" },
      { name: "description", content: "Portfolio of Oussama Yinssi, a master's student in Data Science and Intelligent Systems specializing in machine learning, big data, and AI engineering." },
      { property: "og:title", content: "Oussama Yinssi — Data Science & AI Portfolio" },
      { property: "og:description", content: "Portfolio of Oussama Yinssi, a master's student in Data Science and Intelligent Systems specializing in machine learning, big data, and AI engineering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Split-screen hero */}
      <section className="relative min-h-[calc(100vh-4rem)]">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Left: intro */}
          <div className="flex flex-col justify-center py-16 lg:py-0">
            <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Data Science & Big Data
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
              <span>Based in {profile.location}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>Open to opportunities</span>
            </div>
          </div>

          {/* Right: visual / about preview */}
          <div className="flex flex-col justify-center py-8 lg:py-16">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-primary/20 to-transparent" />
              <h2 className="font-heading text-2xl font-semibold text-foreground">About me</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {profile.bio}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-secondary p-4">
                  <p className="font-heading text-2xl font-bold text-primary">3+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Years studying data & AI</p>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="font-heading text-2xl font-bold text-primary">3</p>
                  <p className="mt-1 text-sm text-muted-foreground">Featured projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </section>

      {/* Featured highlight */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Machine Learning</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Building predictive models and deep learning systems with reproducible pipelines.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Big Data Engineering</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Designing real-time pipelines with Kafka, Spark, and scalable storage.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Data Storytelling</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Turning complex datasets into clear visualizations and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
