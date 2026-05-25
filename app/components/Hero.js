export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />

      {/* Radial cyan glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "35%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-5"
            style={{ color: "var(--color-accent)" }}
          >
            Frontend Developer
          </p>

          <h1
            className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Hello, I&apos;m{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-alt) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Heba Gusibat
            </span>
          </h1>

          <p
            className="text-lg max-w-lg mb-10 leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
           I’m a junior software engineer specializing in building 
            exceptional digital experiences. Welcome to my portfolio!
            
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-accent-alt))",
                color: "#08080E",
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 border border-(--color-border) text-(--color-text) hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Code block terminal */}
        <div className="hidden lg:block">
          <CodeBlock />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-px h-10 mx-auto"
          style={{
            background: "linear-gradient(to bottom, var(--color-muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}

function CodeBlock() {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      }}
    >
      {/* Terminal title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span
          className="ml-2 text-xs"
          style={{ color: "var(--color-muted)" }}
        >
          heba.config.js
        </span>
      </div>

      {/* Code content */}
      <div className="p-5 text-sm leading-7">
        <Line>
          <Keyword>const</Keyword> <Variable>developer</Variable>{" "}
          <Punct>=</Punct> <Punct>{"{"}</Punct>
        </Line>

        <Line indent>
          <Property>name</Property>
          <Punct>:</Punct>{" "}
          <StringVal>&quot;Heba Gusibat&quot;</StringVal>
          <Punct>,</Punct>
        </Line>

        <Line indent>
          <Property>role</Property>
          <Punct>:</Punct>{" "}
          <StringVal>&quot;Frontend Developer&quot;</StringVal>
          <Punct>,</Punct>
        </Line>

        <Line indent>
          <Property>skills</Property>
          <Punct>:</Punct>{" "}
          <Punct>[</Punct>
        </Line>

        <Line indent={2}>
          <StringVal>&quot;React&quot;</StringVal>
          <Punct>,</Punct>{" "}
          <StringVal>&quot;Next.js&quot;</StringVal>
          <Punct>,</Punct>
        </Line>
        <Line indent={2}>
          <StringVal>&quot;TypeScript&quot;</StringVal>
          <Punct>,</Punct>{" "}
          <StringVal>&quot;Tailwind&quot;</StringVal>
          <Punct>,</Punct>
        </Line>

        <Line indent>
          <Punct>]</Punct>
          <Punct>,</Punct>
        </Line>

        <Line indent>
          <Property>focus</Property>
          <Punct>:</Punct>{" "}
          <StringVal>&quot;Building great UX&quot;</StringVal>
          <Punct>,</Punct>
        </Line>

        <Line indent>
          <Property>available</Property>
          <Punct>:</Punct>{" "}
          <span style={{ color: "#4ADE80" }}>true</span>
          <Punct>,</Punct>
        </Line>

        <Line>
          <Punct>{"}"}</Punct>
          <Punct>;</Punct>
        </Line>

        <div className="mt-4" style={{ borderTop: "1px solid var(--color-border)", paddingTop: "16px" }}>
          <Line>
            <Comment>{"// Ready to build something amazing?"}</Comment>
          </Line>
          <Line>
            <Keyword>export</Keyword>{" "}
            <Keyword>default</Keyword>{" "}
            <Variable>developer</Variable>
            <Punct>;</Punct>
          </Line>
        </div>

        {/* Cursor blink */}
        <Line>
          <span
            className="inline-block w-2 h-4 align-middle animate-pulse"
            style={{ background: "var(--color-accent)", marginLeft: "2px" }}
          />
        </Line>
      </div>
    </div>
  );
}

/* Syntax-highlight helper components */
function Line({ children, indent = 0 }) {
  return (
    <div style={{ paddingLeft: `${indent * 20}px` }}>
      {children}
    </div>
  );
}

function Keyword({ children }) {
  return <span style={{ color: "var(--color-accent-alt)" }}>{children}</span>;
}

function Variable({ children }) {
  return <span style={{ color: "#60B4FF" }}>{children}</span>;
}

function Property({ children }) {
  return <span style={{ color: "#E2C08D" }}>{children}</span>;
}

function StringVal({ children }) {
  return <span style={{ color: "var(--color-accent)" }}>{children}</span>;
}

function Punct({ children }) {
  return (
    <span style={{ color: "var(--color-muted)" }}>{children}</span>
  );
}

function Comment({ children }) {
  return (
    <span style={{ color: "var(--color-muted)", fontStyle: "italic" }}>
      {children}
    </span>
  );
}
