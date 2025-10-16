import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [spinClass, setSpinClass] = useState("");

  const toggleMenu = () => {
    // Set the appropriate spin animation class
    if (isMenuOpen) {
      // Closing the menu - spin counterclockwise
      setSpinClass("spin-close");
    } else {
      // Opening the menu - spin clockwise
      setSpinClass("spin-open");
    }

    // Toggle menu state
    setIsMenuOpen(!isMenuOpen);

    // Clear the spin class after animation completes
    setTimeout(() => {
      setSpinClass("");
    }, 600); // Match the animation duration
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    console.log("Navigation clicked:", targetId); // Debug log

    // Close the menu
    setIsMenuOpen(false);

    // Smooth scroll to target section
    const targetElement = document.querySelector(targetId);
    console.log("Target element found:", targetElement); // Debug log
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Rio Morales</h1>
        </div>
      </nav>

      {/* Animated Circular Menu */}
      <div className={`circular-menu ${isMenuOpen ? "active" : ""}`}>
        {/* Menu Button */}
        <button className={`menu-toggle ${spinClass}`} onClick={toggleMenu}>
          <img src="/src/assets/more.png" alt="Menu" />
        </button>

        {/* Layered Circles with individual text - Largest to Smallest */}
        <div className="circle-layer layer-5">
          <a
            href="#contact"
            className="menu-item"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            CONTACT
          </a>
        </div>
        <div className="circle-layer layer-4">
          <a
            href="#projects"
            className="menu-item"
            onClick={(e) => handleNavClick(e, "#projects")}
          >
            PROJECTS
          </a>
        </div>
        <div className="circle-layer layer-3">
          <a
            href="#skills"
            className="menu-item"
            onClick={(e) => handleNavClick(e, "#skills")}
          >
            SKILLS & TECH
          </a>
        </div>
        <div className="circle-layer layer-2">
          <a
            href="#about"
            className="menu-item"
            onClick={(e) => handleNavClick(e, "#about")}
          >
            ABOUT ME
          </a>
        </div>
        <div className="circle-layer layer-1">
          <a
            href="#home"
            className="menu-item"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            HOME
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
