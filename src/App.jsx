import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Chat Bot",
    url: "https://chat-bot-nine-lake.vercel.app/",
    description: "Chatbot interactivo impulsado por IA con interfaz conversacional en tiempo real.",
    tags: ["React", "API", "IA"],
    gradient: "from-violet-900 via-purple-900 to-indigo-900",
    icon: "💬",
  },
  {
    title: "Detección de Rostro",
    url: "https://face-detection-portfolio.vercel.app/",
    description: "Sistema de detección de rostros en tiempo real usando visión por computadora.",
    tags: ["TensorFlow", "React", "WebCamera"],
    gradient: "from-cyan-900 via-teal-900 to-emerald-900",
    icon: "👁️",
  },
  {
    title: "Quiosco de Comida",
    url: "https://quisco-next-app-router-black.vercel.app/",
    description: "Interfaz de pedidos de comida con carrito y sistema de pago integrado.",
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
    gradient: "from-orange-900 via-red-900 to-rose-900",
    icon: "🍔",
  },
  {
    title: "Gestor de Tareas",
    url: "https://gestor-tareas-eight-brown.vercel.app/",
    description: "Aplicación completa para organizar y gestionar tareas con drag & drop.",
    tags: ["React", "Laravel", "PostgreSQL"],
    gradient: "from-green-900 via-emerald-900 to-teal-900",
    icon: "✅",
  },
  {
    title: "Seguimiento de Pacientes",
    url: "https://seguimiento-pacientes-tau.vercel.app/",
    description: "Sistema médico para el seguimiento y gestión integral de pacientes.",
    tags: ["Laravel", "PHP", "MySQL"],
    gradient: "from-blue-900 via-indigo-900 to-violet-900",
    icon: "🏥",
  },
];

const technologies = [
  { name: "React", icon: "⚛️", level: 90 },
  { name: "Laravel", icon: "🔴", level: 85 },
  { name: "PostgreSQL", icon: "🐘", level: 80 },
  { name: "PHP", icon: "🐘", level: 88 },
  { name: "PHPMyAdmin", icon: "🗄️", level: 75 },
  { name: "Vite", icon: "⚡", level: 82 },
  { name: "TailwindCSS", icon: "💨", level: 88 },
  { name: "MySQL", icon: "🗃️", level: 78 },
];

// Animated particle background
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 123, 0, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(229, 123, 0, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

// Glowing accent line
function GlowLine() {
  return (
    <div className="w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #e57b00, #ff9f1c, #e57b00)", boxShadow: "0 0 12px #e57b00, 0 0 30px rgba(229,123,0,0.3)" }} />
  );
}

// Hero section
function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: "100vh", background: "linear-gradient(180deg, #0a0a0f 0%, #12121a 60%, #1a1a2e 100%)" }}
    >
      <Particles />
      {/* Top nav bar */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5" style={{ zIndex: 10 }}>
        <div className="text-2xl font-bold tracking-wider" style={{ color: "#e57b00", fontFamily: "'Segoe UI', sans-serif", textShadow: "0 0 20px rgba(229,123,0,0.4)" }}>
          PORTFOLIO
        </div>
        <div className="flex gap-6">
          {["Inicio", "Sobre mí", "Proyectos", "Tecnologías"].map((item) => (
            <a
              key={item}
              href={`#${item === "Inicio" ? "hero" : item === "Sobre mí" ? "about" : item === "Proyectos" ? "projects" : "tech"}`}
              className="text-sm tracking-widest uppercase transition-all duration-300"
              style={{ color: "#aaa", fontFamily: "'Segoe UI', sans-serif" }}
              onMouseEnter={(e) => (e.target.style.color = "#e57b00")}
              onMouseLeave={(e) => (e.target.style.color = "#aaa")}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl mx-auto" style={{ animation: "fadeInUp 1s ease forwards" }}>
        <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#e57b00", fontFamily: "'Segoe UI', sans-serif" }}>
          Bienvenido
        </p>
        <h1 className="text-6xl font-bold leading-tight mb-2" 
            style={{ 
              color: "#ffffff", 
              fontFamily: "'Segoe UI', sans-serif", 
              textShadow: "0 0 60px rgba(229,123,0,0.15)" 
            }}
          >
            Hola, soy Cristian Rivas <br />
            Ingeniero en Software
          </h1>
        <h2 className="text-5xl font-bold mb-6" style={{ background: "linear-gradient(135deg, #e57b00, #ff9f1c, #ffbf69)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "'Segoe UI', sans-serif" }}>
          Full Stack Developer
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#888", maxWidth: "600px", margin: "0 auto 2rem", fontFamily: "'Segoe UI', sans-serif" }}>
          Diseño y desarrollo aplicaciones modernas, escalables y centradas en el usuario. Especializado en soluciones digitales con tecnologías de vanguardia.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 rounded-sm font-semibold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
            style={{ background: "linear-gradient(135deg, #e57b00, #ff9f1c)", color: "#fff", fontFamily: "'Segoe UI', sans-serif", boxShadow: "0 4px 25px rgba(229,123,0,0.35)" }}
            onMouseEnter={(e) => (e.target.style.boxShadow = "0 4px 40px rgba(229,123,0,0.6)")}
            onMouseLeave={(e) => (e.target.style.boxShadow = "0 4px 25px rgba(229,123,0,0.35)")}
          >
            Ver Proyectos
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-sm font-semibold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
            style={{ background: "transparent", color: "#e57b00", border: "1px solid #e57b00", fontFamily: "'Segoe UI', sans-serif" }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(229,123,0,0.1)"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
          >
            Sobre Mí
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 10 }}>
        <span className="text-xs tracking-widest uppercase" style={{ color: "#555", fontFamily: "'Segoe UI', sans-serif" }}>Scroll</span>
        <div className="w-px h-10 rounded-full" style={{ background: "linear-gradient(180deg, #e57b00, transparent)" }} />
      </div>
    </section>
  );
}

// About section
function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-24"
      style={{ background: "linear-gradient(180deg, #12121a 0%, #0f0f18 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#e57b00", fontFamily: "'Segoe UI', sans-serif" }}>Conóceme</p>
          <h2 className="text-4xl font-bold mb-3" style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>Sobre Mí</h2>
          <GlowLine />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0">
            <div
              className="w-56 h-56 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)", border: "1px solid rgba(229,123,0,0.3)" }}
            >
              <div className="text-7xl">👨‍💻</div>
              <div className="absolute inset-0 rounded-lg" style={{ boxShadow: "inset 0 0 60px rgba(229,123,0,0.08)" }} />
            </div>
            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Proyectos", value: "5+" },
                { label: "Tecnologías", value: "8+" },
                { label: "Años", value: "2+" },
                { label: "Clientes", value: "3+" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg p-3 text-center" style={{ background: "rgba(229,123,0,0.06)", border: "1px solid rgba(229,123,0,0.12)" }}>
                  <p className="text-xl font-bold" style={{ color: "#e57b00" }}>{s.value}</p>
                  <p className="text-xs" style={{ color: "#666" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio text */}
          <div className="flex-1">
            <p className="text-base leading-relaxed mb-5" style={{ color: "#999", fontFamily: "'Segoe UI', sans-serif", lineHeight: "1.9" }}>
              Ingeniero en Software titulado por la <span style={{ color: "#e57b00" }}>Escuela Superior Politécnica de Chimborazo</span>, con sólida formación y experiencia práctica en el diseño, desarrollo e implementación de aplicaciones y sistemas de información, bajo metodologías ágiles.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#999", fontFamily: "'Segoe UI', sans-serif", lineHeight: "1.9" }}>
              Cuento con un enfoque <span style={{ color: "#e57b00" }}>Full Stack</span> y conocimientos en diseño UI/UX, orientados a crear soluciones digitales funcionales, escalables y centradas en el usuario. Poseo experiencia en el desarrollo y gestión de bases de datos, utilizando tecnologías como PostgreSQL y MySQL, así como herramientas para análisis y visualización de datos como Power BI.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#999", fontFamily: "'Segoe UI', sans-serif", lineHeight: "1.9" }}>
              Trabajo con frameworks y tecnologías modernas como <span style={{ color: "#e57b00" }}>Laravel, PHP, React y TailwindCSS</span>, integrando sistemas y optimizando la comunicación en entornos tecnológicos, apoyado en conocimientos fundamentales de redes de computadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Technologies section
function Technologies() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="tech"
      className="relative w-full px-6 py-24"
      style={{ background: "linear-gradient(180deg, #0f0f18 0%, #12121a 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start mb-14">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#e57b00", fontFamily: "'Segoe UI', sans-serif" }}>Herramientas</p>
          <h2 className="text-4xl font-bold mb-3" style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>Tecnologías</h2>
          <GlowLine />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className="rounded-lg p-6 text-center cursor-pointer transition-all duration-400 relative overflow-hidden"
              style={{
                background: hovered === i ? "rgba(229,123,0,0.1)" : "rgba(229,123,0,0.04)",
                border: hovered === i ? "1px solid rgba(229,123,0,0.5)" : "1px solid rgba(229,123,0,0.12)",
                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === i ? "0 8px 30px rgba(229,123,0,0.2)" : "none",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="text-3xl mb-3">{tech.icon}</div>
              <p className="text-sm font-semibold mb-3" style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>{tech.name}</p>
              {/* Skill bar */}
              <div className="w-full h-1 rounded-full" style={{ background: "#1a1a2e" }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: hovered === i ? `${tech.level}%` : "0%",
                    background: "linear-gradient(90deg, #e57b00, #ff9f1c)",
                    boxShadow: "0 0 8px rgba(229,123,0,0.4)",
                  }}
                />
              </div>
              <p className="text-xs mt-2" style={{ color: "#555" }}>{tech.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects section
function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24"
      style={{ background: "linear-gradient(180deg, #12121a 0%, #0f0f18 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-14">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#e57b00", fontFamily: "'Segoe UI', sans-serif" }}>Desarrollo</p>
          <h2 className="text-4xl font-bold mb-3" style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>Mis Proyectos</h2>
          <GlowLine />
        </div>

        {/* Featured project (first one, big) */}
        <div
          className="relative rounded-lg overflow-hidden mb-6 cursor-pointer transition-all duration-400"
          style={{
            minHeight: "320px",
            background: `linear-gradient(135deg, #1a0533, #2d1b4e, #1a0533)`,
            border: "1px solid rgba(229,123,0,0.2)",
            transform: hoveredProject === "featured" ? "scale(1.005)" : "scale(1)",
            boxShadow: hoveredProject === "featured" ? "0 12px 50px rgba(229,123,0,0.25)" : "0 4px 20px rgba(0,0,0,0.3)",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={() => setHoveredProject("featured")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => window.open(projects[0].url, "_blank")}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(229,123,0,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div className="relative z-10 flex flex-col lg:flex-row items-center p-10 gap-8 h-full">
            <div className="text-8xl">{projects[0].icon}</div>
            <div className="flex-1">
              <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: "rgba(229,123,0,0.2)", color: "#e57b00" }}>
                Proyecto Destacado
              </span>
              <h3 className="text-3xl font-bold mt-4 mb-2" style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>{projects[0].title}</h3>
              <p className="text-sm mb-4" style={{ color: "#888" }}>{projects[0].description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-sm" style={{ background: "rgba(229,123,0,0.1)", color: "#e57b00", border: "1px solid rgba(229,123,0,0.2)" }}>{tag}</span>
                ))}
              </div>
              <span className="text-sm font-semibold inline-flex items-center gap-2 transition-all duration-300" style={{ color: "#e57b00" }}>
                Ver Proyecto →
              </span>
            </div>
          </div>
        </div>

        {/* Grid of remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(1).map((project, i) => (
            <div
              key={project.title}
              className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-400"
              style={{
                background: "linear-gradient(135deg, #15151f, #1e1e2e)",
                border: hoveredProject === i ? "1px solid rgba(229,123,0,0.45)" : "1px solid rgba(229,123,0,0.12)",
                transform: hoveredProject === i ? "translateY(-3px)" : "translateY(0)",
                boxShadow: hoveredProject === i ? "0 10px 40px rgba(229,123,0,0.2)" : "0 2px 12px rgba(0,0,0,0.25)",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => window.open(project.url, "_blank")}
            >
              {/* Top accent glow bar */}
              <div className="w-full h-0.5" style={{ background: hoveredProject === i ? "linear-gradient(90deg, #e57b00, #ff9f1c, transparent)" : "transparent", transition: "all 0.35s ease" }} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{project.icon}</div>
                  <div
                    className="text-xs px-2 py-1 rounded-sm opacity-0 transition-all duration-300"
                    style={{
                      background: "rgba(229,123,0,0.15)",
                      color: "#e57b00",
                      opacity: hoveredProject === i ? 1 : 0,
                    }}
                  >
                    Abrir →
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>{project.title}</h3>
                <p className="text-xs mb-4" style={{ color: "#666", lineHeight: "1.7" }}>{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-sm" style={{ background: "rgba(229,123,0,0.08)", color: "#e57b00", border: "1px solid rgba(229,123,0,0.15)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer
      className="w-full px-6 py-16 text-center"
      style={{ background: "linear-gradient(180deg, #0f0f18 0%, #0a0a0f 100%)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
          ¿Interesado en colaborar?
        </h3>
        <p className="text-sm mb-6" style={{ color: "#666" }}>Estoy disponible para proyectos y oportunidades profesionales.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:cristianrivas0071@gmail.com"
            className="px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #e57b00, #ff9f1c)", color: "#fff", boxShadow: "0 4px 20px rgba(229,123,0,0.3)" }}
          >
            Contacto
          </a>
        </div>
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(229,123,0,0.1)" }}>
          <p className="text-xs" style={{ color: "#444" }}>© 2025 Portfolio — Desarrollado con React + Vite</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: rgba(229,123,0,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(229,123,0,0.6); }
      `}</style>
      <Hero id="hero" />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}
