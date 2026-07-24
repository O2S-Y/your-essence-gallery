import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/contact.functions";
import { profile } from "@/data/portfolio";
import { Linkedin, Github, Mail, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Oussama Yinssi" },
      { name: "description", content: "Get in touch with Oussama Yinssi for data science, machine learning, and big data opportunities." },
      { property: "og:title", content: "Contact — Oussama Yinssi" },
      { property: "og:description", content: "Get in touch with Oussama Yinssi for data science, machine learning, and big data opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project, opportunity, or question? Send me a message and I'll respond as soon as I can.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact form */}
        <section>
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
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>

        {/* Contact info */}
        <section className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact information</h2>
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
            <h2 className="font-heading text-xl font-semibold text-foreground">Availability</h2>
            <p className="mt-4 text-muted-foreground">
              I'm currently open for internships, freelance projects, and collaborations in data science, machine learning, and big data engineering.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
