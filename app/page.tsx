const projects = [
  {
    title: "Project title one",
    type: "CAD",
    description:
      "A short placeholder description of this project goes here — what it is, what problem it solved, and what tools were used.",
    link: "#",
  },
  {
    title: "Project title two",
    type: "CODE",
    description:
      "A short placeholder description of this project goes here — what it is, what problem it solved, and what tools were used.",
    link: "#",
  },
  {
    title: "Project title three",
    type: "RESEARCH",
    description:
      "A short placeholder description of this project goes here — what it is, what problem it solved, and what tools were used.",
    link: "#",
  },
  {
    title: "Project title four",
    type: "PDF",
    description:
      "A short placeholder description of this project goes here — what it is, what problem it solved, and what tools were used.",
    link: "#",
  },
];

const skills = [
  "SolidWorks",
  "Python",
  "MATLAB",
  "React",
  "Next.js",
  "AutoCAD",
  "C++",
  "Git",
];

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      <section style={{ paddingTop: "96px", paddingBottom: "64px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "42px",
            fontWeight: 500,
            margin: "0 0 8px",
            letterSpacing: "-0.01em",
          }}
        >
          Nathan
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--ink-soft)",
            margin: "0 0 28px",
          }}
        >
          Engineer &amp; builder — CAD, code, and research.
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.7,
            maxWidth: "540px",
            margin: 0,
          }}
        >
          Placeholder bio paragraph. A few sentences about your background,
          what you study or work on, and what kind of problems you like
          solving. Swap this out with your own introduction whenever you are
          ready.
        </p>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--line)",
          margin: 0,
        }}
      />

      <section style={{ padding: "56px 0" }}>
        <h2
          style={{
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.08em",
            color: "var(--ink-soft)",
            margin: "0 0 20px",
            textTransform: "uppercase",
          }}
        >
          About
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
          Placeholder about section. This is the place for more background —
          where you study, what you are focused on, and how you got into the
          kind of work shown below. Replace with a couple of real paragraphs
          when ready.
        </p>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--line)",
          margin: 0,
        }}
      />

      <section style={{ padding: "56px 0" }}>
        <h2
          style={{
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.08em",
            color: "var(--ink-soft)",
            margin: "0 0 28px",
            textTransform: "uppercase",
          }}
        >
          Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {projects.map((project) => (<a
            
              key={project.title}
              href={project.link}
              style={{
                display: "block",
                textDecoration: "none",
                paddingBottom: "32px",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                    border: "1px solid var(--line)",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    whiteSpace: "nowrap",
                    marginLeft: "16px",
                  }}
                >
                  {project.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--ink-soft)",
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--line)",
          margin: 0,
        }}
      />

      <section style={{ padding: "56px 0" }}>
        <h2
          style={{
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.08em",
            color: "var(--ink-soft)",
            margin: "0 0 20px",
            textTransform: "uppercase",
          }}
        >
          Skills
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: "14px",
                border: "1px solid var(--line)",
                borderRadius: "4px",
                padding: "6px 14px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--line)",
          margin: 0,
        }}
      />

      <section style={{ padding: "56px 0 96px" }}>
        <h2
          style={{
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.08em",
            color: "var(--ink-soft)",
            margin: "0 0 20px",
            textTransform: "uppercase",
          }}
        >
          Contact
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a
            href="mailto:your.email@example.com"
            style={{ fontSize: "16px", textDecoration: "underline" }}
          >
            your.email@example.com
          </a>
          <a
            href="https://github.com/nathune"
            style={{ fontSize: "16px", textDecoration: "underline" }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-handle"
            style={{ fontSize: "16px", textDecoration: "underline" }}
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}