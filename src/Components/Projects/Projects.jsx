import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project. Explain what it does and what technologies you used.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://your-project-live-url.com",
      githubUrl: "https://github.com/yourusername/project-one",
      image: "/path-to-project-image.jpg"
    },
    {
      title: "Project Two", 
      description: "Description of your second project. Highlight the key features and your role in the development.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL"],
      liveUrl: "https://your-project-live-url.com",
      githubUrl: "https://github.com/yourusername/project-two",
      image: "/path-to-project-image.jpg"
    },
    {
      title: "Project Three",
      description: "Your third project description. Mention any challenges you overcame and what you learned.",
      technologies: ["Python", "Django", "React"],
      liveUrl: "https://your-project-live-url.com", 
      githubUrl: "https://github.com/yourusername/project-three",
      image: "/path-to-project-image.jpg"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
