import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
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
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return <Outlet />;
}
