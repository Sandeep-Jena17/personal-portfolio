import { useState, useEffect, useRef } from "react";

const skills = {
  Frontend: ["React.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Material UI"],
  Backend: ["Node.js", "REST APIs", "AWS Lambda", "Serverless"],
  "Cloud & AWS": ["DynamoDB", "S3", "Athena", "SES", "Cognito", "Amplify"],
  "Real-Time & Maps": ["WebRTC", "Geo-Visualization", "Map-based UI"],
  Tools: ["Git", "Postman", "Jira", "Microservices", "Agile"],
};

const experiences = [
  {
    title: "Campaign Management System",
    subtitle: "Media Matcher — Last 2+ Years",
    points: [
      "Built and scaled a campaign management platform from scratch using React & TypeScript",
      "Developed multi-step filters and dynamic listings for advertisers, publishers & campaigns",
      "Worked with AWS serverless microservices and DynamoDB-based data models",
      "Optimized listing APIs with pagination and selective attribute retrieval",
      "Collaborated with a 10+ member Agile team for scalability & client trust",
    ],
    tag: "React · TypeScript · AWS",
  },
  {
    title: "SPC — Education Platform",
    subtitle: "Backend Developer",
    points: [
      "Designed DynamoDB schemas to manage users, courses, and live class data",
      "Implemented WebRTC-based one-to-many live class sessions",
      "Validated user access based on course enrollment and time slots",
      "Integrated AWS SES to send session notifications",
    ],
    tag: "WebRTC · DynamoDB · SES",
  },
  {
    title: "Medical Application",
    subtitle: "Doctor & Patient Management",
    points: [
      "Developed UI modules for managing patient details and appointments",
      "Supported online consultation workflows and API integration",
    ],
    tag: "React · Node.js · REST APIs",
  },
  {
    title: "Carbon Biodiversity & Environment",
    subtitle: "Geo-Visualization Project",
    points: [
      "Built React-based UI to visualize geographical project data on maps",
      "Displayed environmental metrics: risk factors, cyclone frequency, emissions",
      "Implemented interactive map hover and table views for project insights",
    ],
    tag: "Maps · React · Data Viz",
  },
  {
    title: "DDS Wireless Platform",
    subtitle: "Production Support & Migration",
    points: [
      "Handled UI issues, data inconsistencies, and user-facing problems",
      "Migrated legacy Ember.js modules to React.js",
      "Improved maintainability and performance of key application areas",
    ],
    tag: "Ember.js → React · Migration",
  },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function Section({ id, children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section id={id} ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedExp, setExpandedExp] = useState(null);

  const navLinks = ["home", "about", "skills", "experience", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("jenasandeep595@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Courier New', 'Courier', monospace", background: "#0a0a0f", color: "#e8e8f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #00ffc8; border-radius: 2px; }
        body { background: #0a0a0f; }

        .nav-link {
          background: none; border: none; color: #888; font-family: 'Space Mono', monospace;
          font-size: 12px; letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
          padding: 8px 0; transition: color 0.2s; position: relative;
        }
        .nav-link:hover, .nav-link.active { color: #00ffc8; }
        .nav-link.active::after { content: ''; position: absolute; bottom: 4px; left: 0; right: 0; height: 1px; background: #00ffc8; }

        .skill-pill {
          display: inline-block; padding: 5px 14px; border: 1px solid #1e3a30;
          border-radius: 2px; font-family: 'Space Mono', monospace; font-size: 11px;
          color: #00ffc8; background: rgba(0,255,200,0.05); margin: 4px;
          transition: all 0.2s;
        }
        .skill-pill:hover { background: rgba(0,255,200,0.12); border-color: #00ffc8; transform: translateY(-2px); }

        .exp-card {
          border: 1px solid #1a1a2e; padding: 28px; margin-bottom: 16px;
          transition: all 0.3s; cursor: pointer; position: relative; overflow: hidden;
        }
        .exp-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: #00ffc8; transform: scaleY(0); transition: transform 0.3s;
        }
        .exp-card:hover::before, .exp-card.open::before { transform: scaleY(1); }
        .exp-card:hover { border-color: #00ffc8; background: rgba(0,255,200,0.03); }
        .exp-card.open { border-color: #00ffc8; background: rgba(0,255,200,0.03); }

        .cta-btn {
          display: inline-block; padding: 14px 32px; border: 1px solid #00ffc8;
          color: #00ffc8; font-family: 'Space Mono', monospace; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
          background: transparent; transition: all 0.3s; text-decoration: none;
        }
        .cta-btn:hover { background: rgba(0,255,200,0.1); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,255,200,0.15); }
        .cta-btn.filled { background: #00ffc8; color: #0a0a0f; font-weight: 700; }
        .cta-btn.filled:hover { background: #00e6b4; box-shadow: 0 8px 30px rgba(0,255,200,0.3); }

        .contact-item {
          display: flex; align-items: center; gap: 16px; padding: 20px 24px;
          border: 1px solid #1a1a2e; transition: all 0.3s; margin-bottom: 12px;
        }
        .contact-item:hover { border-color: #00ffc8; background: rgba(0,255,200,0.03); }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor { animation: blink 1s infinite; color: #00ffc8; }

        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .float { animation: float 4s ease-in-out infinite; }

        @keyframes gridMove { 0% { transform: translateY(0); } 100% { transform: translateY(40px); } }

        .grid-bg {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(0,255,200,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,200,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glow-text { color: #00ffc8; text-shadow: 0 0 30px rgba(0,255,200,0.4); }
        
        .tag { display: inline-block; padding: 3px 10px; background: rgba(0,255,200,0.08); border: 1px solid rgba(0,255,200,0.2); border-radius: 2px; font-size: 10px; letter-spacing: 1px; color: #00ffc8; font-family: 'Space Mono', monospace; }
        
        .section-label { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 4px; color: #00ffc8; text-transform: uppercase; margin-bottom: 12px; }
        .section-title { font-family: 'Syne', sans-serif; font-size: clamp(28px, 4vw, 48px); font-weight: 800; color: #fff; margin-bottom: 48px; }

        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu { display: block; }
          .hero-name { font-size: 42px !important; }
        }
      `}</style>

      {/* Grid Background */}
      <div className="grid-bg" />

      {/* Radial glow */}
      <div style={{ position: "fixed", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,255,200,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 5%", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70, background: "rgba(10,10,15,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.5px" }}>
          SK<span style={{ color: "#00ffc8" }}>.</span>
        </div>
        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
          {navLinks.map(l => (
            <button key={l} className={`nav-link ${active === l ? "active" : ""}`} onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "1px solid #1a1a2e", color: "#00ffc8", padding: "8px 12px", cursor: "pointer", fontFamily: "monospace" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
        {menuOpen && (
          <div style={{ position: "absolute", top: 70, left: 0, right: 0, background: "#0d0d15", borderBottom: "1px solid #1a1a2e", padding: "20px 5%", display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map(l => (
              <button key={l} className={`nav-link ${active === l ? "active" : ""}`} onClick={() => scrollTo(l)} style={{ textAlign: "left" }}>{l}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "100px 5% 60px", position: "relative" }}>
        <div style={{ maxWidth: 900 }}>
          <div className="section-label" style={{ marginBottom: 24 }}>// Frontend & Full-Stack Developer</div>
          <h1 className="hero-name" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, color: "#fff", marginBottom: 8 }}>
            Sandeep<br />
            <span style={{ color: "#00ffc8" }}>Kumar</span> Jena<span className="cursor">_</span>
          </h1>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#888", marginTop: 28, marginBottom: 40, maxWidth: 580, lineHeight: 1.8 }}>
            4+ years building enterprise-grade apps across media, education, healthcare & environment. React specialist · AWS serverless expert · TypeScript advocate.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="cta-btn filled" onClick={() => scrollTo("experience")}>View My Work</button>
            <button className="cta-btn" onClick={() => scrollTo("contact")}>Get In Touch</button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap" }}>
            {[["4+", "Years Experience"], ["5+", "Projects Shipped"], ["10+", "AWS Services Used"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: "#00ffc8" }}>{num}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#666", letterSpacing: 1 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="float" style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, #00ffc8)" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 2 }}>SCROLL</span>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" style={{ padding: "80px 5%", position: "relative" }}>
        <div style={{ maxWidth: 900 }}>
          <div className="section-label">// About Me</div>
          <h2 className="section-title">Who I Am</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <p style={{ color: "#aaa", lineHeight: 2, fontSize: 15, fontFamily: "'Space Mono', monospace" }}>
                Frontend / Full-Stack Developer with over <span style={{ color: "#00ffc8" }}>4 years of professional experience</span>, entering the 5th year. Based in Bhubaneswar, Odisha, India.
              </p>
              <p style={{ color: "#aaa", lineHeight: 2, fontSize: 15, fontFamily: "'Space Mono', monospace", marginTop: 20 }}>
                Currently focused on developing and optimizing a <span style={{ color: "#00ffc8" }}>campaign management system</span> using React, TypeScript, and AWS serverless microservices.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Location", value: "Bhubaneswar, Odisha, India" },
                { label: "Email", value: "jenasandeep595@gmail.com" },
                { label: "Phone", value: "+91-8917404918" },
                { label: "Education", value: "B.E. — College of Engg. Bhubaneswar, 2017" },
                { label: "Status", value: "Open to opportunities" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#00ffc8", letterSpacing: 1, minWidth: 80, paddingTop: 2 }}>{label.toUpperCase()}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#ccc" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" style={{ padding: "80px 5%", background: "rgba(0,255,200,0.01)", position: "relative" }}>
        <div style={{ maxWidth: 900 }}>
          <div className="section-label">// Technical Skills</div>
          <h2 className="section-title">What I Work With</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#555", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>
                  <span style={{ color: "#00ffc8" }}>&gt;</span> {category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {items.map(skill => <span key={skill} className="skill-pill">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" style={{ padding: "80px 5%", position: "relative" }}>
        <div style={{ maxWidth: 900 }}>
          <div className="section-label">// Professional Experience</div>
          <h2 className="section-title">Work History</h2>
          <div style={{ marginBottom: 16, fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#555" }}>
            <span style={{ color: "#00ffc8" }}>DDS Wireless</span> — Feb 2021 → Present (4+ Years)
          </div>
          {experiences.map((exp, i) => (
            <div key={i} className={`exp-card ${expandedExp === i ? "open" : ""}`} onClick={() => setExpandedExp(expandedExp === i ? null : i)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 4 }}>{exp.title}</h3>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#666" }}>{exp.subtitle}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="tag">{exp.tag}</span>
                  <span style={{ color: "#00ffc8", fontFamily: "monospace", fontSize: 18, transition: "transform 0.3s", display: "inline-block", transform: expandedExp === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </div>
              </div>
              {expandedExp === i && (
                <ul style={{ marginTop: 20, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#aaa", lineHeight: 1.7 }}>
                      <span style={{ color: "#00ffc8", flexShrink: 0 }}>→</span> {pt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" style={{ padding: "80px 5% 120px", position: "relative" }}>
        <div style={{ maxWidth: 700 }}>
          <div className="section-label">// Contact</div>
          <h2 className="section-title">Let's Build Something</h2>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#666", marginBottom: 40, lineHeight: 1.8 }}>
            Open to freelance projects, full-time opportunities, or just a good technical conversation. Drop me a line.
          </p>

          <div>
            {[
              { icon: "✉", label: "Email", value: "jenasandeep595@gmail.com", action: copyEmail, actionLabel: copied ? "Copied!" : "Copy" },
              { icon: "☎", label: "Phone", value: "+91-8917404918", action: null },
              { icon: "◈", label: "Location", value: "Bhubaneswar, Odisha, India", action: null },
            ].map(({ icon, label, value, action, actionLabel }) => (
              <div key={label} className="contact-item">
                <span style={{ color: "#00ffc8", fontSize: 20, width: 28, textAlign: "center" }}>{icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#555", letterSpacing: 1, marginBottom: 4 }}>{label.toUpperCase()}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#ccc" }}>{value}</div>
                </div>
                {action && (
                  <button onClick={action} style={{ background: "none", border: "1px solid #1a1a2e", color: "#00ffc8", fontFamily: "'Space Mono', monospace", fontSize: 10, padding: "6px 14px", cursor: "pointer", letterSpacing: 1, transition: "all 0.2s" }}>
                    {actionLabel}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #111", padding: "24px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#444" }}>© 2024 Sandeep Kumar Jena</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#00ffc8" }}>React · TypeScript · AWS</span>
      </footer>
    </div>
  );
}
