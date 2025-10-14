import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer who loves creating amazing web experiences. 
              With a background in [your background], I bring a unique perspective to every project.
            </p>
            <p>
              I specialize in [your specializations] and am always eager to learn new technologies 
              and tackle challenging problems.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Location:</strong> [Your City, Country]
              </div>
              <div className="detail-item">
                <strong>Education:</strong> [Your Education]
              </div>
              <div className="detail-item">
                <strong>Experience:</strong> [Years] years
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/path-to-your-photo.jpg" alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
