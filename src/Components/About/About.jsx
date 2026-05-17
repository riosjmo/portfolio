import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p className="about__text-1">
              Hi, I’m Rio! I’m a full-stack software engineer with hands-on
              experience building and deploying production-ready applications. I
              specialize in scalable backend systems and responsive frontend
              experiences, with experience using JavaScript, TypeScript,
              Node.js, Express, React, MongoDB, PostgreSQL, Prisma, and cloud
              deployment technologies including Google Cloud, Nginx, and
              SSL/TLS.
            </p>
            <p className="about__text-2">
              My passion for software development started in high school and
              later grew through TripleTen Academy’s intensive full-stack
              software engineering program. Since then, I’ve continued building
              full-stack projects while strengthening my understanding of APIs,
              authentication, backend architecture, and system design. Most
              recently, I served as Lead Developer during a software engineering
              externship, where I worked on a cross-functional team building a
              production-style file upload platform and co-leading the final
              stakeholder presentation communicating technical decisions and
              delivered outcomes.
            </p>
            <div className="about-details">
              <div className="about__location">
                <strong className="about__location-title">Location:</strong>{" "}
                Austin, TX
              </div>
              <div className="about__education">
                <strong className="about__education-title">Education:</strong>{" "}
                Tripleten Academy
              </div>
              <div className="about__experience">
                <strong className="about__experience-title">Experience:</strong>{" "}
                2 years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
