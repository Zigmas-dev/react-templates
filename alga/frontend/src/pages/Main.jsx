import { useState } from "react"; // Importuojame useState
import SalaryCalculator from "../components/SalaryCalculator";
import Organizer from "../components/Organizer";
import "./main.scss";

const Main = () => {
  // Būsena, kuri saugos, kuris komponentas yra pasirinktas rodyti
  const [selectedComponent, setSelectedComponent] = useState(null); // Pradžioje nieko nerodome

  // Funkcijos, skirtos nustatyti pasirinktą komponentą
  const handleSelectCalculator = () => {
    setSelectedComponent('calculator');
  };

  const handleSelectOrganizer = () => {
    setSelectedComponent('organizer');
  };

  // Funkcija, skirta grįžti į pasirinkimų ekraną
  const handleGoBack = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="main-container">
      <div className="selects">
        <h2>Ką norite daryti?</h2>
        {selectedComponent === null && ( // Rodyti mygtukus, jei niekas nepasirinkta
          <div className="options-buttons">
            <button onClick={handleSelectCalculator}>Algos skaičiuoklė</button>
            <button onClick={handleSelectOrganizer}>Organizatorius</button>
          </div>
        )}
      </div>

      {/* Sąlyginis komponentų atvaizdavimas */}
      {selectedComponent === 'calculator' && (
        <>
          <SalaryCalculator />
          <button className="back-button" onClick={handleGoBack}>Grįžti atgal</button>
        </>
      )}

      {selectedComponent === 'organizer' && (
        <>
          <Organizer />
          <button className="back-button" onClick={handleGoBack}>Grįžti atgal</button>
        </>
      )}
    </div>
  );
};

export default Main;