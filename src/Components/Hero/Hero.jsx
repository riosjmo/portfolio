import "./Hero.css";
import author from "../../assets/author.jpg";
import moon from "../../assets/moon.png";
import rope from "../../assets/rope.png";

const Hero = () => {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero">
      {/* Theatre ropes and moon */}
      <div className="theatre-decoration">
        <img src={rope} alt="" className="rope rope-left" />
        <img src={rope} alt="" className="rope rope-right" />
        <img src={moon} alt="Moon" className="hanging-moon" />
      </div>
      
      <div className="hero-content">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title-line1">Hey, I'm</span>
            <span className="hero__title-line2"> Rio Morales,</span>
          </h1>
          <p className="hero__subtitle">
            Full Stack Developer & Software Engineer
          </p>
          <a href="#about" className="cta-button" onClick={handleScrollToAbout}>
            Learn More About Me
          </a>
        </div>
        <div className="hero__image">
          <img src={author} alt="Author" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
