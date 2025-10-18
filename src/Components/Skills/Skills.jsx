import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React, ", "JavaScript, ", "HTML5, ", "CSS3, ", "TypeScript, ", "Vue.js, ", "Responsive UI/UX"]
    },
    {
      category: "Backend",
      skills: ["Node.js, ", "Express.js, ", "Authentication, ", "REST APIs, ", "GraphQL, ", "Error Handling, ", "Microservices"]
    },
    {
      category: "Database",
      skills: ["MongoDB, ", "Mongoose"]
    },
    {
      category: "Tools & Deployment",
      skills: ["Webpack, ", "Git/GitHub, ", "Docker basics, ", "Google Cloud Platform, ", "Nginx, ", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills__title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category__title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
