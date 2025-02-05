import { useState } from "react";
import AboutMe from "./AboutMe";
import Values from "./Values";
import WhyMe from "./WhyMe";
import "./links.scss";

const Links = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
      <nav className="links" role="navigation" aria-label="Pagrindinė navigacija">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "about" ? null : "about"); }}
          aria-current={activeComponent === "about" ? "page" : undefined}
          aria-expanded={activeComponent === "about"}
          id="about-link"
        >
          Apie mane
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "values" ? null : "values"); }}
          aria-current={activeComponent === "values" ? "page" : undefined}
          aria-expanded={activeComponent === "values"}
          id="values-link"
        >
          Vertybės
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "why-me" ? null : "why-me"); }}
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

export default Links;
