import { FaReact, FaJs, FaNode } from "react-icons/fa";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <div className="content">
          <p>
            Sveiki! Aš esu Zigmas, pradedantis junior programuotojas ir
            freelanceris, dirbantis tiek frontend, tiek backend srityse.
          </p>
          <p>
            Nors mano kelias į programavimą tik prasideda, nuolatinis mokymasis
            leidžia man kurti funkcionalias ir estetiškas svetaines bei programas,
            atitinkančias šiuolaikinius technologinius standartus.
          </p>
          <p>
            Šiuo metu pagrinde specializuojuosi frontend technologijose (
            <span className="icon-text">
              <FaReact className="icon" color="#61DBFB" /> React,
            </span>{" "}
            <span className="icon-text">
              <FaJs className="icon" color="#F0DB4F" /> JavaScript
            </span>
            ), tačiau taip pat gilinuosi į backend ({" "}
            <span className="icon-text">
              <FaNode className="icon" color="#68A063" /> Node.js
            </span>{" "}
            ).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;