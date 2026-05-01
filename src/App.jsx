import "./App.css";

function App() {
  const projects = [
    "Portfolio Website",
    "E-Commerce UI",
    "Weather App",
    "Chat Application",
    "Blog Platform",
    "Task Manager",
  ];

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">Raj.dev</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        <header className="header">
          <h1>Dashboard</h1>
          <button className="btn">+ Add Project</button>
        </header>

        {/* STATS */}
        <div className="cards">
          <div className="card green">
            <h3>Total Projects</h3>
            <p>6</p>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <p>4</p>
          </div>

          <div className="card">
            <h3>Running</h3>
            <p>2</p>
          </div>
        </div>

        {/* PROJECT GRID */}
        <section className="projects">
          <h2>My Projects</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <h3>{p}</h3>
                <p>Modern UI built using React & Vite</p>
                <button>View</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;