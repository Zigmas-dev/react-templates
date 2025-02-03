import { useState } from "react";
import { CSSTransition } from "react-transition-group";  // Importuojame CSSTransition
import AboutMe from "./AboutMe";
import Values from "./Values";
import "./links.scss";

const Links = () => {
   const [activeComponent, setActiveComponent] = useState(null); // Viena bendra būsena

   return (
     <div>
      <nav className="links">
       <a href="#" onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "about" ? null : "about"); }}>
        Apie mane
       </a>
       <a href="#" onClick={(e) => { e.preventDefault(); setActiveComponent(activeComponent === "values" ? null : "values"); }}>
        Vertybės
       </a>
       <a href="#why-me">Kodėl aš</a>
      </nav>
      
      <div className="content">
        <CSSTransition
          in={activeComponent === "about"}  // Tikriname, ar komponentas turi būti rodomas
          timeout={800}  // Trukmė
          classNames="fade"  // CSS klasės pavadinimas
          unmountOnExit  // Kai komponentas išnyksta, jis bus pašalintas iš DOM
        >
          <AboutMe key="about" />
        </CSSTransition>
      </div>

      <div className="content">
        <CSSTransition
          in={activeComponent === "values"}  // Tikriname, ar komponentas turi būti rodomas
          timeout={800}  // Trukmė
          classNames="fade"  // CSS klasės pavadinimas
          unmountOnExit  // Kai komponentas išnyksta, jis bus pašalintas iš DOM
        >
          <Values key="values" />
        </CSSTransition>
      </div>
     </div>
   );
};

export default Links;
