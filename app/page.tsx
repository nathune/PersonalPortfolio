"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Project title one",
    type: "CAD",
    description:
      "A short placeholder description of this project goes here - what it is, what problem it solved, and what tools were used.",
    link: "#",
    color: "#D9D4C7",
  },
  {
    title: "Project title two",
    type: "CODE",
    description:
      "A short placeholder description of this project goes here - what it is, what problem it solved, and what tools were used.",
    link: "#",
    color: "#C9CFC4",
  },
  {
    title: "Project title three",
    type: "RESEARCH",
    description:
      "A short placeholder description of this project goes here - what it is, what problem it solved, and what tools were used.",
    link: "#",
    color: "#D6CFC2",
  },
  {
    title: "Project title four",
    type: "PDF",
    description:
      "A short placeholder description of this project goes here - what it is, what problem it solved, and what tools were used.",
    link: "#",
    color: "#CCCFCB",
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
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "clamp(56px, 11vw, 120px)",
            fontWeight: 500,
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
          }}
        >
          Nathan
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "var(--ink-soft)",
            margin: "0 0 32px",
          }}
        >
          Engineer &amp; builder &mdash; CAD, code, and research.
        </p>
        <p
          style={{
            fontSize: "17px",
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

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--line)",
            margin: 0,
          }}
        />

        {/* About */}
        <section style={{ padding: "72px 0" }}>
          <h2
            style={{
              fontSize: "13px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
              color: "var(--ink-soft)",
              margin: "0 0 24px",
              textTransform: "uppercase",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "700px",
            }}
          >
            Placeholder about section. This is the place for more background
            &mdash; where you study, what you are focused on, and how you got
            into the kind of work shown below. Replace with a couple of real
            paragraphs when ready.
          </p>
        </section>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--line)",
            margin: 0,
          }}
        />

        {/* Projects */}
        <section style={{ padding: "72px 0" }}>
          <h2
            style={{
              fontSize: "13px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
              color: "var(--ink-soft)",
              margin: "0 0 32px",
              textTransform: "uppercase",
            }}
          >
            Projects
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                style={{
                  display: "block",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "6px",
                  aspectRatio: "4 / 3",
                  cursor: "pointer",
                }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.06 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: project.color,
                  }}
                />
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: 12 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(26,26,24,0.72)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#fff",
                      letterSpacing: "0.05em",
                      opacity: 0.8,
                      marginBottom: "6px",
                    }}
                  >
                    {project.type}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#fff",
                    }}
                  >
                    {project.title}
                  </span>
                </motion.div>
              </motion.a>
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

        {/* Skills */}
        <section style={{ padding: "72px 0" }}>
          <h2
            style={{
              fontSize: "13px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
              color: "var(--ink-soft)",
              margin: "0 0 24px",
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

        {/* Contact */}
        <section style={{ padding: "72px 0 100px" }}>
          <h2
            style={{
              fontSize: "13px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
              color: "var(--ink-soft)",
              margin: "0 0 24px",
              textTransform: "uppercase",
            }}
          >
            Contact
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href="mailto:your.email@example.com"
              style={{ fontSize: "17px", textDecoration: "underline" }}
            >
              your.email@example.com
            </a>
            <a
              href="https://github.com/nathune"
              style={{ fontSize: "17px", textDecoration: "underline" }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-handle"
              style={{ fontSize: "17px", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}