import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "Vite",
        "JSX",
        "Styled Components",
        "Responsive UI",
        "Accessibility",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "MVC / Layered Architecture"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Mongoose"],
    },
    {
      category: "Auth & Security",
      skills: ["JWT (Access & Refresh Tokens)", "bcrypt"],
    },
    {
      category: "Infrastructure / DevOps",
      skills: ["Docker", "Redis", "NGINX", "PM2"],
    },
    {
      category: "Tooling",
      skills: ["Git", "GitHub", "Postman", "API Testing", "Documentation"],
    },
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
                    {skillIndex < category.skills.length - 1 ? ", " : ""}
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
