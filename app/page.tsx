"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
    heading: "Overview | Research — UCLA CASIT Lab (June 2024 – May 2025)",
    body: "To create realistic test cases for robotic palpation experiments, I designed silicone tissue phantoms that simulated both healthy bowel tissue and embedded tumors. Using a CAD-designed multi-stage mold, I cast soft silicone to represent surrounding tissue and integrated a higher-durometer silicone core to replicate a tumor. After several design iterations, I refined the mold design and sealing mechanisms to eliminate silicone leakage and uneven surface formation. I was able to then produce consistent samples ranging at different hardness levels.",
  },

  
],
  },
  {
    title: "Joint Kinematics Under Fatigue, a Motion Capture Study",
    type: "RESEARCH",
    description: "Studied how neuromuscular fatigue affects shoulder and elbow joint kinematics during a tennis forehand swing using OpenSim and OpenCap motion capture.",
    link: "#",
    color: "#C9CFC4",
    image: "/presenting-card.jpg",
    modalMedia: [
      {
        kind: "text",
        heading: "Overview",
        body: "I examined the impact of fatigue on upper-limb joint kinematics during a tennis forehand swing using motion capture software, OpenSim and OpenCap. Shoulder flexion, adduction, and rotation, along with elbow flexion, were tracked across baseline and fatigue trials and compared using Euclidean distance and dynamic time warping to build an accurate representative baseline curve.",
      },
      {
        kind: "text",
        heading: "Engineering Challenge",
        body: "Raw trial data couldn't be compared directly due to timing offsets between recordings, and averaging trials alone produced a misleading 'average swing' rather than an accurate baseline. I addressed this by normalizing each trial's time axis from 0 to 1, then applying dynamic time warping and Euclidean distance calculations to align trials and construct a representative midpoint baseline for accurate comparison against fatigue trials.",
      },
      {
        kind: "text",
        heading: "Results & Findings",
        body: "Fatigue trials showed reduced peak joint angles and flattened angular trajectories compared to baseline, most notably in elbow flexion and shoulder adduction. The elbow flexion joint showed the greatest deviation from baseline (L2 distance of 156.00), while shoulder rotation showed the largest overall change (517.74), indicating fatigue disrupts joint coordination and timing during the swing. This indicated both injury prevention and robotic motion optimization.",
      },
      { kind: "link", label: "View Research Poster (PDF)", href: "/NTU_Research_Poster_Final.pdf" },
    ],
  },
  {
  title: "TShark9000: Network Protocol Security Analyzer",
  type: "CODE",
  description: "1st place hackathon project — a full-stack network capture analyzer that flags security risks and renders network traffic in 3D.",
  link: "#",
  color: "#D6CFC2",
  image: "/3D-visual.jpg",
  modalMedia: [
    
    {
      kind: "text",
      heading: "Overview",
      body: "Built at the SYNthesis Hackathon, TShark9000 is a web tool that parses network packet captures and generates a security report. Users upload a capture file and get back a breakdown of source and destination IPs alongside a dedicated tab flagging potential security alerts, including a 3D visualization of the network itself.",
    },
    {
      kind: "text",
      heading: "Engineering Challenge",
      body: "As part of the team, I helped design the web interface using Flask and HTML/CSS, building the file upload pipeline, automated packet data extraction, and the underlying network analysis logic. A core challenge in creating the backbone of the website was integrating features like high-risk traffic flagging and packet identification, which lived in separate files written by different teammates. I solved this by tracing through each function, understanding what it expected as input and returned as output, and restructuring the calls so everything aligned cleanly within the main backbone of the code.",    },
    { kind: "image", src: "/tshark-gui.jpg", alt: "TShark9000 application interface" },
    {
      kind: "text",
      heading: "Recognition & Team",
      body: "Awarded 1st place at the SYNthesis Hackathon, hosted by the Computer Networking Association, out of competing teams building network and security tools. Built collaboratively with a team of four over the course of the hackathon.",
    },
    { kind: "link", label: "View on GitHub", href: "https://github.com/caleblin125/Tshark1/tree/main" },
    { kind: "link", label: "View on Devpost", href: "https://devpost.com/software/tshark9000" },
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

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);

      // Ring sits bottom-right; check if that point is still over the
      // dark hero section (roughly the first viewport height) or has
      // scrolled into the light body.
      const ringPointY = scrollTop + window.innerHeight - 32;
      setOnDark(ringPointY < window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - circumference * progress;
  const strokeColor = onDark ? "#FAFAF8" : "#1A1A18";
  const trackColor = onDark ? "rgba(255,255,255,0.3)" : "var(--line)";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth="1.5"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
          style={{ transition: "stroke-dashoffset 0.1s linear, stroke 0.3s ease" }}
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <main>
      {/* Scroll progress ring */}
      <ScrollProgress />

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

          <div className="project-grid">
            
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
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 50%)",
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