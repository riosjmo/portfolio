import "./SocialSidebar.css";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-links">
        <a
          href="https://github.com/riosjmo"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/riotech"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
      <div className="social-line"></div>
    </div>
  );
};

export default SocialSidebar;
