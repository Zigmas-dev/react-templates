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
      <nav className="links">
       <a href="#" onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "about" ? null : "about"); }}>
        Apie mane
       </a>
       <a href="#" onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "values" ? null : "values"); }}>
        Vertybės
       </a>
       <a href="#" onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "why-me" ? null : "why-me"); }}>
        Kodėl aš
       </a>
      </nav>
      
      <div className="content">
        <CSSTransition in={activeComponent === "about"} timeout={800} classNames="fade" unmountOnExit>
          <AboutMe key="about" />
        </CSSTransition>
      </div>

      <div className="content">
        <CSSTransition in={activeComponent === "values"} timeout={800} classNames="fade" unmountOnExit>
          <Values key="values" />
        </CSSTransition>
      </div>

      <div className="content">
        <CSSTransition in={activeComponent === "why-me"} timeout={800} classNames="fade" unmountOnExit>
          <WhyMe key="why-me" />
        </CSSTransition>
      </div>
     </div>
   );
};

export default Links;
