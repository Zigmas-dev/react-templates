import { useState } from "react";
import Header from "../components/Header";
import InvoiceForm from "../components/InvoiceForm";
import ClientForm from "../components/ClientForm";
import "./main.scss";

const Main = () => {
  const [showClientForm, setShowClientForm] = useState(false);

  return (
    <div className="main-container">
      <Header setShowClientForm={setShowClientForm} /> {/* Perduodam funkciją į Header */}
      
      {showClientForm && (
        <div className="client-form-container">
          <ClientForm onClientAdded={() => setShowClientForm(false)} /> {/* Uždaroma po pridėjimo */}
        </div>
      )}

      <div className="invoice-form-container">
        <InvoiceForm />
      </div>
    </div>
  );
};

export default Main;
