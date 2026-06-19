"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ProjectMedia =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "video"; src: string }
  | { kind: "text"; heading?: string; body: string }
  | { kind: "link"; label: string; href: string };

type Project = {
  title: string;
  type: string;
  description: string;
  link: string;
  color: string;
  image?: string;
  // Everything inside the modal
  modalMedia?: ProjectMedia[];
};

const projects: Project[] = [
  {
    title: "Mock Tumors for Ex-Vivo Tissue",
    type: "CAD",
    description: "Designed mock tumor structures for ex-vivo tissue testing.",
    link: "#",
    color: "#D9D4C7",
    image: "/tumor.png",
    modalMedia: [
  { kind: "image", src: "/tumor.png", alt: "Tumor CAD render" },
  {
    kind: "text",
    heading: "Overview",
    body: "Using gel-silicone molds of varying hardness, I created a silicone sheet that mimics bowel tissue with an embedded tumor. The surrounding tissue is cast at a softer durometer while a harder silicone core represents the tumor. All of this formed a single CAD-designed mold poured in stages.",
  },
  {
    kind: "text",
    heading: "Experience: Research — UCLA CASIT Lab (June 2024 – May 2025)",
    body: "Implemented a fiber Bragg grating (FBG) haptic sensing system on the da Vinci Si surgical robot to measure applied force and improve tactile feedback during robotic-assisted palpation. Designed and integrated optical encoders, Arduino-based data acquisition, and 3D-printed CAD components for sensor housing. Conducted human trials on 8 silicone tissue phantoms — results showed classification accuracies of 44.5% (manual), 33.9% (robot only), 46.7% (robot + haptic), and 80% (robot + AI).",
  },
  { kind: "link", label: "View CAD Files", href: "#" },
],
  },
  {
    title: "Project title two",
    type: "CODE",
    description: "A short placeholder description.",
    link: "#",
    color: "#C9CFC4",
    modalMedia: [
      {
        kind: "text",
        heading: "About this project",
        body: "Replace this with a real description.",
      },
      { kind: "link", label: "GitHub Repo", href: "#" },
    ],
  },
  {
    title: "Project title three",
    type: "RESEARCH",
    description: "A short placeholder description.",
    link: "#",
    color: "#D6CFC2",
    modalMedia: [
      {
        kind: "text",
        heading: "Research Summary",
        body: "Replace this with your research abstract or summary.",
      },
      { kind: "link", label: "Read Paper", href: "#" },
    ],
  },
  {
    title: "Project title four",
    type: "PDF",
    description: "A short placeholder description.",
    link: "#",
    color: "#CCCFCB",
    modalMedia: [
      {
        kind: "text",
        heading: "Document",
        body: "Replace this with a summary of the document.",
      },
      { kind: "link", label: "View PDF", href: "#" },
    ],
  },
];

const skills = [
  "SolidWorks",
  "Electronic Circuits",
  "Soldering",
  "OpenSIM/Cap",
  "Python",
  "Node.js",
  "React",
  "Next.js",
  "AutoCAD",
  "C++/CSS",
  "Git",
  "Wireshark/Networking",
  "Cisco DNA/ISE",
  "HTML",
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Modal */}
        <motion.div
          key="modal"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "var(--bg)",
            borderRadius: "10px",
            width: "85vw",
            maxWidth: "900px",
            maxHeight: "85vh",
            overflowY: "auto",
            position: "relative",
            padding: "48px",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "sticky",
              top: 0,
              float: "right",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "var(--ink-soft)",
              lineHeight: 1,
              padding: "0 0 16px 16px",
            }}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Header */}
          <span
            style={{
              fontSize: "11px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
              color: "var(--ink-soft)",
              textTransform: "uppercase",
            }}
          >
            {project.type}
          </span>
          <h2
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 500,
              margin: "8px 0 32px",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h2>

          {/* Media blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {project.modalMedia?.map((block, i) => {
              if (block.kind === "image") {
                return (
                  <img
                    key={i}
                    src={block.src}
                    alt={block.alt ?? project.title}
                    style={{
                      width: "100%",
                      borderRadius: "6px",
                      objectFit: "cover",
                      maxHeight: "400px",
                    }}
                  />
                );
              }
              if (block.kind === "video") {
                return (
                  <video
                    key={i}
                    src={block.src}
                    controls
                    style={{ width: "100%", borderRadius: "6px" }}
                  />
                );
              }
              if (block.kind === "text") {
                return (
                  <div key={i}>
                    {block.heading && (
                      <h3
                        style={{
                          fontSize: "13px",
                          fontFamily: "'JetBrains Mono', monospace",
                          letterSpacing: "0.08em",
                          color: "var(--ink-soft)",
                          textTransform: "uppercase",
                          margin: "0 0 10px",
                        }}
                      >
                        {block.heading}
                      </h3>
                    )}
                    <p
                      style={{
                        fontFamily: "'Source Serif 4', serif",
                        fontSize: "18px",
                        lineHeight: 1.7,
                        margin: 0,
                        color: "var(--ink)",
                      }}
                    >
                      {block.body}
                    </p>
                  </div>
                );
              }
              if (block.kind === "link") {
                return (
                  <a
                    key={i}
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      fontSize: "14px",
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.05em",
                      border: "1px solid var(--ink)",
                      borderRadius: "4px",
                      padding: "10px 20px",
                      textDecoration: "none",
                      color: "var(--ink)",
                      alignSelf: "flex-start",
                    }}
                  >
                    {block.label} →
                  </a>
                );
              }
              return null;
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <main>
      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/campus-video.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
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
              color: "#fff",
            }}
          >
            Nathan To
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.85)",
              margin: 0,
            }}
          >
            Technology Information Management, B.S. <br />
            &nbsp;&nbsp;&nbsp;&amp; Electrical Engineering Minor at UC Santa Cruz
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: 0,
            right: 0,
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.75)",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: 0 }} />

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
          <p style={{ fontSize: "20px", lineHeight: 1.6, marginBottom: "24px", maxWidth: "700px", fontFamily: "'Source Serif 4', serif" }}>
            Hey! Thank you for checking out my profile. A little bit about me is that I&apos;m a fourth-year at UC Santa Cruz studying Technology Information Management with a minor in Electrical Engineering. As a passion, I really enjoy 3D modeling, building new data tools, and mechanical systems, to coordinating teams and troubleshooting infrastructure.
          </p>
          <p style={{ fontSize: "20px", lineHeight: 1.6, marginBottom: "24px", maxWidth: "700px", fontFamily: "'Source Serif 4', serif" }}>
            Here, you can find my projects presented as interactive showcases, really built and designed to give a physical sense of what it is.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: 0 }} />

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
            Showcase
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                onClick={() => setActiveProject(project)}
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
                    backgroundImage: project.image ? `url(${project.image})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                    background: "none",
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
                      fontFamily: "'Source Serif 4', serif",
                    }}
                  >
                    {project.title}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: 0 }} />

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

        <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: 0 }} />

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
              href="https://www.linkedin.com/in/nathanwto/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                color: "#0A66C2",
                fontFamily: "'Times New Roman', serif",
                fontWeight: "bold",
              }}
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}