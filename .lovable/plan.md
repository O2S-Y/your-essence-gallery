Plan: Oussama Yinssi — Data Science & AI Portfolio

1. Overview
- Build a multi-page personal portfolio site for Oussama Yinssi, a master's student in Data Science and Intelligent Systems.
- Direction: clean, academic, refined; Sage & Cream palette; split-screen hero; Libre Baskerville headings + IBM Plex Sans body.
- Sections: Hero/About, Projects, Project detail pages, Skills/Resume/Awards, Contact.
- Features: dark mode toggle, contact form with backend persistence, downloadable resume PDF, project detail pages.

2. Design system
- Update `src/styles.css` with a Sage & Cream token set:
  - Background: warm cream (#f5f0e8)
  - Surface: soft sage-tinted gray (#f0f0e8)
  - Primary accent: sage green (#7d9b76)
  - Secondary/muted: light sage (#a8c0a0, #dce5d4)
  - Foreground: deep charcoal (#2d2d2d)
- Keep oklch format for all colors as required by the template.
- Register `--font-heading` (Libre Baskerville) and `--font-body` (IBM Plex Sans) in `@theme` and load via Google Fonts `<link>` in `src/routes/__root.tsx` head.
- Apply a slightly editorial radius (0.5rem) and restrained shadows to match the academic tone.
- Dark mode: invert to a deep forest/charcoal background with sage accents.

3. Tech foundation
- Enable Lovable Cloud to support the contact form backend (database table for messages). No other auth or login needed.
- Add a `contact_messages` table via migration with GRANTs and RLS (inserts allowed publicly from the contact form, no reads needed).
- Create a server function to insert contact form submissions into the table.
- No external email provider is configured; we will store the message and show a success toast.

4. Site structure / routes
Create the following TanStack Start routes:
- `src/routes/index.tsx` — Home/Hero + About
- `src/routes/projects.tsx` — Projects listing
- `src/routes/projects.$slug.tsx` — Project detail page
- `src/routes/skills.tsx` — Skills, Resume timeline, Awards/Certificates
- `src/routes/contact.tsx` — Contact form + social links
- `src/routes/__root.tsx` — shared header with nav, dark mode toggle, footer

5. Components to build
- `Header` — fixed/ sticky top nav, logo/name, nav links, theme toggle.
- `Footer` — minimal footer with name, year, social links.
- `ThemeToggle` — switches between light and dark modes using a class-based toggle.
- `Section` — reusable section wrapper with consistent spacing.
- `ProjectCard` — project preview card with title, short description, tags, link to detail.
- `SkillCard` / `SkillList` — category, skills, optional progress bars.
- `Timeline` — education and experience entries.
- `AwardCard` — certificate/award items.
- `ContactForm` — name, email, message, validation with Zod + React Hook Form, submit via server function.
- `SocialLinks` — LinkedIn, GitHub, email icons.

6. Content strategy (realistic placeholders)
- Name: Oussama Yinssi
- Headline: "Data Science Master's Student | Big Data & AI Engineer"
- Short bio: placeholder about data science, AI, and big data interests.
- Projects (3 examples): e.g., predictive maintenance with ML, big data pipeline with Spark, NLP sentiment analysis. Each with title, description, tech stack, outcome, GitHub/ demo links.
- Skills: categories — Languages (Python, R, SQL), ML/AI (scikit-learn, TensorFlow, PyTorch), Big Data (Spark, Hadoop, Kafka), Data Viz (Tableau, Power BI, Matplotlib), MLOps (Docker, Airflow, MLflow).
- Resume timeline: education (master's program), experience placeholder or internships.
- Awards/Certificates: placeholders (e.g., Kaggle, Coursera, university honors).
- Social links: LinkedIn, GitHub, email.

7. Feature implementation
- Dark mode toggle: class-based `.dark` toggle with persistence in `localStorage`. Implemented in a `ThemeProvider` or directly in `__root.tsx`.
- Contact form: Zod validation, React Hook Form, submits to a `submitContactMessage` server function that writes to `contact_messages` table. Success/error toasts with sonner.
- Resume download: generate a clean PDF resume from placeholder content using `reportlab` or `docx-js` saved to `public/resume.pdf`, then add a download button. Alternatively, if the user later provides a real PDF, it can be replaced.
- Project detail pages: dynamic route `/projects/$slug` with full project case study, tags, links, and a back button.

8. SEO / metadata
- Each route gets unique `head()` meta: title, description, og:title, og:description, og:type, twitter:card.
- Home route: title "Oussama Yinssi — Data Science & AI Portfolio".
- No placeholder "Lovable App" text in any route.
- Add a generated or placeholder hero image for og:image only if a strong absolute image is produced; otherwise omit it.

9. Build & validation steps
- Run `bun run build` and fix any type errors.
- Verify all routes render correctly and navigation links work.
- Test the contact form end-to-end after Lovable Cloud is enabled.
- Verify dark mode toggles without hydration mismatches.
- Check the site on desktop and mobile viewports.