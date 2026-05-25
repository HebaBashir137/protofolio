export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            About Me
          </p>
          <h2
            className="font-bold text-4xl md:text-5xl mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            Crafting Digital Experiences
          </h2>
          <p
            className="text-lg leading-relaxed mb-5"
            style={{ color: "var(--color-muted)" }}
          >
            I&apos;m a passionate Frontend Developer focused on crafting modern
            web experiences. 
          </p>
          
        </div>

        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 20%, transparent), color-mix(in srgb, var(--color-accent-alt) 10%, transparent))",
                filter: "blur(32px)",
                opacity: 0.6,
              }}
            />
            {/* Ring */}
            <div
              className="relative w-full h-full rounded-full flex items-center justify-center"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Inner accent ring */}
              <div
                className="absolute inset-4 rounded-full opacity-20"
                style={{
                  border: "1px solid var(--color-accent)",
                }}
              />
              <div className="text-center z-10">
                <span
                  className="font-bold text-7xl block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background:
                      "linear-gradient(135deg, var(--color-accent), var(--color-accent-alt))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  HG
                </span>
                <span
                  className="text-sm mt-1 block tracking-widest uppercase"
                  style={{ color: "var(--color-muted)" }}
                >
                  Frontend Dev
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
