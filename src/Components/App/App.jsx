import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header/Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Your Name</h1>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hello, I'm [Your Name]</h1>
          <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <a href="#about" className="cta-button">Learn More About Me</a>
        </div>
      </section>

      {/* Main Content Sections */}
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
