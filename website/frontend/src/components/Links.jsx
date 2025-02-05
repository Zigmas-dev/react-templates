import { useState } from "react";
import { CSSTransition } from "react-transition-group";
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
        <CSSTransition in={activeComponent === "about"} timeout={1500} classNames="fade" unmountOnExit>
          <AboutMe key="about" />
        </CSSTransition>
      </div>

      <div className="content" aria-labelledby="values-link">
        <CSSTransition in={activeComponent === "values"} timeout={1500} classNames="fade" unmountOnExit>
          <Values key="values" />
        </CSSTransition>
      </div>

      <div className="content" aria-labelledby="why-me-link">
        <CSSTransition in={activeComponent === "why-me"} timeout={1500} classNames="fade" unmountOnExit>
          <WhyMe key="why-me" />
        </CSSTransition>
      </div>
     </div>
   );
};

export default Links;
