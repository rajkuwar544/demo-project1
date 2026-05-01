import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.2}s`;
    });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with animations",
    },
    {
      title: "E-Commerce UI",
      desc: "Shopping UI built with React",
    },
    {
      title: "Weather App",
      desc: "Live weather using API",
    },
    {
      title: "Chat App",
      desc: "Real-time messaging app",
    },
    {
      title: "Todo App",
      desc: "Task manager with local storage",
    },
    {
      title: "Blog Platform",
      desc: "Simple blogging website",
    },
  ];

  return (
    <div className="container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>👋 Hi, I'm Raj</h1>
        <p>Frontend Developer | React | Vite</p>
        <button className="btn">View Projects</button>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>🚀 My Projects</h2>
        <div className="grid">
          {projects.map((p, index) => (
            <div key={index} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <button className="btn small">View</button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Raj Kuwar | Made with ❤️</p>
      </footer>
    </div>
  );
}

export default App;