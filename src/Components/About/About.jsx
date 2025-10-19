import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p className="about__text-1">
              Hi, I'm Rio! I'm a full-stack software engineer with hands-on
              experience building and deploying production-grade applications. I
              specialize in creating scalable backends and responsive frontends
              that combine clean design, security, and functionality. My journey started in high school, where I developed a passion for coding and problem-solving,
              which led me to pursue a career in software development. I then further honed my skills through Tripleten Academy's intensive full-stack program, and have created
              multiple full-stack projects since.
            </p>
            <p className="about__text-2">
              I've delivered those real-world projects using JavaScript, Node.js,
              Express, MongoDB, and React, and deployed them on Google Cloud
              with Nginx and SSL/TLS. My experience spans the full development
              cycle — from API design and authentication to UI development and
              cloud deployment.
            </p>
            <div className="about-details">
              <div className="about__location">
                <strong className="about__location-title">Location:</strong> Austin, TX
              </div>
              <div className="about__education">
                <strong className="about__education-title">Education:</strong> Tripleten Academy
              </div>
              <div className="about__experience">
                <strong className="about__experience-title">Experience:</strong> 2 years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
