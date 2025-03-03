import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ClientForm from "../components/ClientForm";
import InvoiceForm from "../components/InvoiceForm";
import "./main.scss";

const Main = () => {
  const [showClientForm, setShowClientForm] = useState(false); // Valdome formos rodymą

  return (
    <div className="main-container">
      <Header />
      <NavBar onToggleClientForm={() => setShowClientForm((prev) => !prev)} /> {/* Perduodame funkciją */}
      
      {showClientForm && ( // Jei true, rodome formą
        <div className="client-form-container">
          <ClientForm onClientAdded={() => setShowClientForm(false)} />
        </div>
      )}

      <div className="invoice-form-container">
        <InvoiceForm />
      </div>
    </div>
  );
};

export default Main;
