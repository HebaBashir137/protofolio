import { ExternalLink } from "lucide-react";

function GitHubIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: "React Dashboard App",
    description:
      "A feature-rich admin dashboard with charts, tables, and real-time data visualization.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    github: "#",
    live: "#",
    accentStart: "var(--color-accent)",
    accentEnd: "var(--color-accent-alt)",
  },
  {
    title: "E-Commerce UI",
    description:
      "A modern shopping experience with cart management, filters, and smooth animations.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    github: "#",
    live: "#",
    accentStart: "var(--color-accent-alt)",
    accentEnd: "var(--color-accent)",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing my work and skills, built with Next.js 16 and Tailwind v4.",
    tags: ["Next.js 16", "Tailwind v4", "React 19"],
    github: "#",
    live: "#",
    accentStart: "var(--color-accent)",
    accentEnd: "var(--color-accent-alt)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            What I&apos;ve built
          </p>
          <h2
            className="font-bold text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
            }}
          >
            Projects
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-1.5 bg-(--color-surface) border border-(--color-border) hover:border-(--color-accent)/30"
            >
              {/* Gradient top-border on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${project.accentStart}, ${project.accentEnd})`,
                }}
              />

              <h3
                className="font-bold text-xl mb-3 text-(--color-text)"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed mb-5 grow text-(--color-muted)">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md font-medium bg-(--color-bg) text-(--color-muted) border border-(--color-border)"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm transition-colors duration-200 text-(--color-muted) hover:text-(--color-text)"
                >
                  <GitHubIcon size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-sm transition-colors duration-200 text-(--color-muted) hover:text-(--color-accent)"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
