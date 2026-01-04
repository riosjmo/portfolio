import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Churro (Recipe Explorer)",
      description:
        "A full-stack recipe discovery platform that connects food enthusiasts with thousands of recipes from around the world.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveUrl: "https://churro.jumpingcrab.com/",
      githubUrl: "https://github.com/riosjmo/recipe_explorer_backend",
      image:
        "https://i.postimg.cc/1zdmR2n6/churro-search.png",
    },
    {
      title: "WTWR (What to Wear)",
      description:
        "A weather-based clothing recommendation app that fetches real-time weather data and suggests custom appropriate clothing.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveUrl: "https://riowtwr.jumpingcrab.com/",
      githubUrl: "https://github.com/riosjmo/se_project_express",
      image:
        "https://i.postimg.cc/qRdJSYNs/wtwr-home.png",
    },
    {
      title: "Employee Ticketing App",
      description:
        "A full-stack employee ticketing system built with React, TypeScript, Node.js, and PostgreSQL, featuring authentication, role-aware ticket management, and a structured backend architecture.",
      technologies: ["React", "TypeScript", "PostgreSQL"],
      liveUrl: "https://github.com/riosjmo/employee-ticketing-system",
      githubUrl: "https://github.com/riosjmo/employee-ticketing-system",
      image:
        "https://i.postimg.cc/mrH721Wf/employee-ticketing-home.png",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project__card-title">{project.title}</h3>
                <p className="project__card-description">
                  {project.description}
                </p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Project Link
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
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
