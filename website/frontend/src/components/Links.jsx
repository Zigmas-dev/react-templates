import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AboutMe from "./AboutMe";
import Values from "./Values";
import WhyMe from "./WhyMe";
import "./links.scss";

const Links = ({ setIsHeroVisible }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (component) => {
    setActiveComponent(activeComponent === component ? null : component);
    setIsHeroVisible(false); // Paspaudus nuorodą, paslepia hero-container
  };

  // Kai visi komponentai užsidaro (activeComponent === null), vėl rodomas hero-container
  useEffect(() => {
    if (activeComponent === null) {
      setIsHeroVisible(true);
    }
  }, [activeComponent, setIsHeroVisible]);

  return (
    <div>
      <nav className="links" role="navigation" aria-label="Pagrindinė navigacija">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleClick("about"); }}
          aria-current={activeComponent === "about" ? "page" : undefined}
          aria-expanded={activeComponent === "about"}
          id="about-link"
        >
          Apie mane
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleClick("values"); }}
          aria-current={activeComponent === "values" ? "page" : undefined}
          aria-expanded={activeComponent === "values"}
          id="values-link"
        >
          Vertybės
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleClick("why-me"); }}
          aria-current={activeComponent === "why-me" ? "page" : undefined}
          aria-expanded={activeComponent === "why-me"}
          id="why-me-link"
        >
          Kodėl aš
        </a>
      </nav>

      <div className="content" aria-labelledby="about-link">
        {activeComponent === "about" && <AboutMe key="about" />}
      </div>

      <div className="content" aria-labelledby="values-link">
        {activeComponent === "values" && <Values key="values" />}
      </div>

      <div className="content" aria-labelledby="why-me-link">
        {activeComponent === "why-me" && <WhyMe key="why-me" />}
      </div>
    </div>
  );
};

// Pridedame PropTypes validaciją
Links.propTypes = {
  setIsHeroVisible: PropTypes.func.isRequired,
};

export default Links;
