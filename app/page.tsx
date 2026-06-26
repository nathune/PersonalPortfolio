"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type ProjectMedia =
  | { kind: "image"; src: string; alt?: string }
  | { kind: "video"; src: string }
  | { kind: "text"; heading?: string; body: string }
  | { kind: "link"; label: string; href: string }
  | { kind: "model"; src: string; alt?: string };

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
    title: "UCSC Rocket Team",
    type: "CAD",
    description: "Payload and electrical sub-lead, designing and validating sub-scale payload prototypes for the rocket team.",
    link: "#",
    color: "#CCCFCB",
    image: "LaunchSite.png",
    modalMedia: [
      { kind: "model", src: "/Frame_Payload.gltf", alt: "Payload Frame CAD model" },
      {
        kind: "text",
        heading: "Overview | UCSC Rocket Team (2023 – Present)",
        body: "In my role within the Rocket Team, I led a cross-functional sub-team supporting payload development from concept through execution, coordinating mechanical, electrical, and constraint requirements. I designed, modeled, and tested sub-scale payload prototypes in Onshape to validate subsystem integration before full-scale assembly.",
      },
      {
        kind: "text",
        heading: "Engineering Challenge",
        body: "A core challenge was reducing payload mass without compromising structural integrity. I evaluated trade-offs between material selection, strength components, and deployment reliability, ultimately reducing payload mass by roughly 30% while maintaining the structural requirements needed for flight. Below, are two interactive payload models we went through for the design phase.",
      },
      { kind: "model", src: "No_Holes_Sabot.gltf", alt: "Subscale sabot CAD model" },
      {
        kind: "text",
        heading: "Prototype",
        body: "In the initial prototype, the payload structure was designed with a sabot-like deployment mechanism. The structure consisted of four hinged panels (\"leaves\") connected by high-tension cords that unfolded downward upon ejection while the central payload housing continued upward. Although all components remained tethered together, testing revealed significant drawbacks. The rapid deployment of the panels generated huge whiplash forces, causing them to recoil toward the payload and damage surrounding components. Additionally, the overall structure was relatively heavy, making the design less favorable from both a reliability and mass-efficiency standpoint.",
      },
      { kind: "model", src: "/Subscale_Sabot.gltf", alt: "No-holes sabot CAD model" },
      {
        kind: "text",
        heading: "Sabot",
        body: "To help fix the errors from the initial payload deployment mechanism, it was redesigned to reduce both mass and deployment-induced stresses. Two of the four original leaves were removed and replaced with small support stubs to maintain structural stability during flight. The remaining leaves were modified with large cutouts, significantly decreasing their weight while preserving their deployment functionality. This redesign reduced the momentum and impact forces generated during ejection, minimizing the risk of damaging the payload or surrounding components. Additionally, reducing the amount of printed material proved beneficial, as dense filament sections contributed substantially to the overall mass of the structure. The updated design achieved the same deployment behavior as the original concept while being lighter, safer, and more efficient.",
      },
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
  "Arduino",
  "TypeScript",
  "Teaching",
  "HR/Recruiting"
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
              if (block.kind === "model") {
                return (
                  // @ts-ignore -- model-viewer is a web component, not typed by React
                  <model-viewer
                    key={i}
                    src={block.src}
                    alt={block.alt ?? project.title}
                    camera-controls
                    auto-rotate
                    exposure="1.2"
                    shadow-intensity="0.6"
                    environment-image="neutral"
                    style={{
                      width: "100%",
                      height: "400px",
                      borderRadius: "6px",
                      background: "#9A9A94",
                    }}
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

function AnimatedParagraph({
  text,
  style,
  startDelay = 0,
}: {
  text: string;
  style?: React.CSSProperties;
  startDelay?: number;
}) {
  const words = text.split(" ");

  return (
    <p style={{ ...style, margin: 0 }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: startDelay + i * 0.06,
            ease: "easeOut",
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

const experiences = [
  {
    role: "UCSC Rocket Team",
    org: "School Club - Baskin Engineering",
    date: "Oct 2023 – Present",
    location: "Santa Cruz, CA",
    bullets: [
      "Led the design, modeling, and testing of sub-scale payload prototypes using SOLIDWORKS and Onshape to evaluate subsystem integration and deployment performance before full-scale manufacturing. Performed structural and materials trade-off analyses balancing mass, strength, and reliability, achieving a 30% reduction in payload weight while maintaining mission-critical structural performance.",
    ],
    tags: ["OnShape", "3D Printing", "Soldering"],
  },
  {
    role: "Recruiting Intern",
    org: "Career Launch Tech Initiative (CLTI)",
    date: "April 2026 – Present",
    location: "Marina Del Ray, CA",
    bullets: [
      "Managed full-cycle recruitment for multiple positions across the organization, coordinating candidate pipelines and maintaining visibility across more than 100 applications per week. Partnered closely with executive leadership, including the CEO and COO, to evaluate hiring trends, assess organizational needs, and align recruiting strategies with company growth objectives.",
    ],
    tags: ["HR/Recruiting", "Excel", "Applicant Tracking Systems (ATS)"],
  },
  {
    role: "Mechanical Engineering Research",
    org: "National Taiwan University - SOLab TW",
    date: "June 2025 – October 2025",
    location: "Taipei City, Taiwan",
    bullets: [
      "Designed and executed a fatigue-controlled biomechanical study analyzing tennis forehand motion using OpenCap and OpenSim, processing kinematic data from 12+ motion trials to evaluate shoulder and elbow joint behavior under fatigue. Identified a 40–60% phase delay in peak elbow flexion timing, indicating disrupted coordination and reduced efficiency in force transfer. Through comparative analysis of baseline and fatigue conditions, quantified L2 deviations across key joint metrics (e.g., elbow flexion and shoulder rotation), revealing the elbow as the most fatigue-sensitive joint. These findings contribute to understanding injury risk mechanisms and inform optimization of both athletic training strategies and robotic motion planning under fatigue constraints.",
    ],
    tags: ["Python", "SOLIDWORKS", "OpenSim/Cap", "Data Analytics", "Mechanics"],
  },
  {
    role: "Biomechanical Engineering Research",
    org: "UCLA Center for Advanced Surgical & Interventional Technology Lab",
    date: "June 2024 – May 2025",
    location: "Los Angeles, CA",
    bullets: [
      "Developed and integrated an FBG-based haptic sensing system on the da Vinci Si surgical robot to measure applied forces and improve tactile feedback during robotic-assisted palpation. Using optical encoders, made Arduino data acquisition, and 3D-printed sensor housings to enable real-time force estimation. Conducted validation experiments on 8 silicone tissue phantoms, where AI-assisted robotic sensing improved classification accuracy from 33.9% to 80%, demonstrating the value of augmented haptic perception in surgical robotics.",
    ],
    tags: ["Arduino", "C++", "Python", "SOLIDWORKS", "3D Printing", "Soldering"],
  },
  {
    role: "Residential IT Technician",
    org: "ITS ResNet",
    date: "2025 – 2026",
    location: "Santa Cruz, CA",
    bullets: [
      "Managed and resolved over 250+ technical support tickets through ServiceNow, providing IT assistance to a campus population of more than 25,000 users. Performed network diagnostics using Cisco tools to troubleshoot connectivity issues and restore service stability. Delivered hands-on hardware and software support for student devices and campus systems, ensuring consistent operational uptime across residential and academic environments.",
    ],
    tags: ["CiscoDNA/ISE", "ServiceNow!", "iPSK Manager", "Networking"],
  },
  {
    role: "Pre-Med Robotics Scholar Teacher",
    org: "UCLA Center for Advanced Surgical & Interventional Technology Lab",
    date: "Summer 2024",
    location: "Los Angeles, CA",
    bullets: [
      "Led demonstrations of the da Vinci robotic surgery system, focusing on system setup, kinematic behavior, and instrument control protocols. Developed simulation setups modeling robotic-assisted surgical procedures on an ER patient scenario to support educational demonstrations. Diagnosed and resolved mechanical and interface issues in real time to maintain stable system performance during live operation.",
    ],
    tags: ["Teaching", "Robotics"],
  },
  {
    role: "Engineering Tutor",
    org: "Baskin Engineering",
    date: "Oct 2024 - Present",
    location: "Santa Cruz, CA",
    bullets: [
      "Provided one-on-one and small group tutoring in engineering mathematics, reinforcing foundational concepts in Calculus II and Discrete Mathematics. Supported student understanding of integration techniques, series, and mathematical proofs through guided problem-solving and conceptual breakdowns, helping strengthen analytical reasoning and course performance.",
    ],
    tags: ["Teaching", "Math"],
  },
];

function NavMenu({ onDark }: { onDark: boolean }) {
  const [open, setOpen] = useState(false);

  const sections = [
    { label: "Introduction", id: "introduction" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const ink = onDark ? "#FAFAF8" : "#1A1A18";
  const bg = onDark ? "rgba(26,26,24,0.85)" : "rgba(250,250,248,0.95)";
  const border = onDark ? "rgba(255,255,255,0.15)" : "var(--line)";

  return (
    <div style={{ position: "fixed", top: "24px", right: "24px", zIndex: 200 }}>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Navigation menu"
        style={{
          background: "none",
          border: `1px solid ${border}`,
          borderRadius: "6px",
          cursor: "pointer",
          padding: "8px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          backdropFilter: "blur(8px)",
          backgroundColor: onDark ? "rgba(0,0,0,0.3)" : "rgba(250,250,248,0.8)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "18px",
              height: "1.5px",
              background: ink,
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transformOrigin: "center",
              transform:
                open && i === 0 ? "translateY(5.5px) rotate(45deg)"
                : open && i === 1 ? "scaleX(0)"
                : open && i === 2 ? "translateY(-5.5px) rotate(-45deg)"
                : "none",
            }}
          />
        ))}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              background: bg,
              border: `1px solid ${border}`,
              borderRadius: "8px",
              overflow: "hidden",
              minWidth: "160px",
              backdropFilter: "blur(12px)",
            }}
          >
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  borderTop: i > 0 ? `1px solid ${border}` : "none",
                  padding: "12px 18px",
                  cursor: "pointer",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: ink,
                }}
              >
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExperienceSection({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entryHeights, setEntryHeights] = useState<number[]>([]);
  const entryRefs = experiences.map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    const observers = entryRefs.map((ref, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0.4 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    const measureHeights = () => {
      setEntryHeights(entryRefs.map((ref) => ref.current?.offsetHeight ?? 220));
    };
    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, []);

  return (
    <section id={id} style={{ padding: "72px 0" }}>
      <h2
        style={{
          fontSize: "13px",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.08em",
          color: "var(--ink-soft)",
          margin: "0 0 56px",
          textTransform: "uppercase",
        }}
      >
        Experience
      </h2>

      <div style={{ display: "flex", gap: "40px" }}>
        {/* Dot rail */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: 0,
            paddingTop: "6px",
          }}
        >
          {experiences.map((_, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: activeIndex === i ? "14px" : "10px",
                  height: activeIndex === i ? "14px" : "10px",
                  borderRadius: "50%",
                  background: i <= activeIndex ? "var(--ink)" : "var(--line)",
                  transition: "all 0.4s ease",
                  flexShrink: 0,
                }}
              />
              {i < experiences.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: entryHeights[i] != null ? `${entryHeights[i]}px` : "220px",
                    background: i < activeIndex
                      ? "var(--ink)"
                      : "var(--line)",
                    transition: "background 0.4s ease",
                    margin: "6px 0",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Entries */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              ref={entryRefs[i]}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                paddingBottom: i < experiences.length - 1 ? "64px" : "0",
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "var(--ink-soft)",
                  margin: "0 0 3px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {exp.org}
              </p>
              <h3
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "28px",
                  fontWeight: 500,
                  margin: "0 0 6px",
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}
              >
                {exp.role}
              </h3>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: "var(--ink-soft)",
                  margin: "0 0 20px",
                  letterSpacing: "0.04em",
                }}
              >
                {exp.date} · {exp.location}
              </p>
              <ul
                style={{
                  margin: "0 0 20px",
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "19px",
                      lineHeight: 1.65,
                      color: "var(--ink)",
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.05em",
                      border: "1px solid var(--line)",
                      borderRadius: "4px",
                      padding: "5px 12px",
                      color: "var(--ink-soft)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [navOnDark, setNavOnDark] = useState(true);

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavOnDark(window.scrollY < window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* Scroll progress ring */}
      <ScrollProgress />

      {/* Nav menu */}
      <NavMenu onDark={navOnDark} />

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Hero */}
      <section
        id="introduction"
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
          <div style={{ marginBottom: "24px" }}>
            <AnimatedParagraph
              text="Hey! Thank you for checking out my profile. A little bit about me is that I'm a fourth-year at UC Santa Cruz studying Technology Information Management with a minor in Electrical Engineering. As a passion, I really enjoy 3D modeling, building new data tools, and mechanical systems, to coordinating teams and troubleshooting infrastructure."
              style={{
                fontSize: "26px",
                lineHeight: 1.6,
                maxWidth: "750px",
                fontFamily: "'Source Serif 4', serif",
              }}
            />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <AnimatedParagraph
              text="Here, you can find my projects presented as interactive showcases, really built and designed to give a physical sense of what it is."
              startDelay={2.4}
              style={{
                fontSize: "26px",
                lineHeight: 1.6,
                maxWidth: "750px",
                fontFamily: "'Source Serif 4', serif",
              }}
            />
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: 0 }} />

        {/* Experience */}
        <ExperienceSection id="experience" />

        <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: 0 }} />

        {/* Projects */}
        <section id="projects" style={{ padding: "72px 0" }}>
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
        <section id="contact" style={{ padding: "72px 0 100px" }}>
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