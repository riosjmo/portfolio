import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import SocialSidebar from "../SocialSidebar/SocialSidebar";
import "./App.css";

function App() {
  return (
      <div className="app">
        <Header />
        <SocialSidebar />

        {/* Hero Section - Home */}
        <section id="home">
          <Hero />
        </section>

        {/* Main Content Sections */}
        <main>
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
  );
}

export default App;
