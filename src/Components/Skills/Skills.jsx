import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript", "Vue.js"]
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Python", "Express.js", "Django", "REST APIs", "GraphQL"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Figma"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
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
        
        {/* Optional: Skill bars for proficiency */}
        <div className="skill-bars">
          <h3>Proficiency Levels</h3>
          <div className="skill-bar">
            <span>JavaScript</span>
            <div className="progress">
              <div className="progress-fill" style={{width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>React</span>
            <div className="progress">
              <div className="progress-fill" style={{width: '85%'}}></div>
            </div>
          </div>
          {/* Add more skill bars as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
