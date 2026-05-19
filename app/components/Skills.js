const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3","Tailwind CSS", "CSS Modules", "Responsive Design"],
  },
  {

    category: "Tools",
    skills: ["Git", "Figma","Node.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            What I work with
          </p>
          <h2
            className="font-bold text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            Skills
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="p-6 rounded-xl border border-(--color-border) bg-(--color-surface)"
            >
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-5 text-(--color-muted)"
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default bg-(--color-bg) text-(--color-text) border border-(--color-border) hover:border-(--color-accent) hover:text-(--color-accent)"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
