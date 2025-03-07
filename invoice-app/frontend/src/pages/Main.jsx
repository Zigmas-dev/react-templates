import { useState } from "react";
import Header from "../components/Header";
import InvoiceForm from "../components/InvoiceForm";
import ClientForm from "../components/ClientForm";
import InvoicePreview from "../pages/InvoicePreview";
import "./main.scss";

const Main = () => {
  const [showClientForm, setShowClientForm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [invoicePreviewData, setInvoicePreviewData] = useState(null);

  const handleInvoiceSave = (invoiceData) => {
    console.log("Sąskaita išsaugota:", invoiceData);
    setInvoicePreviewData(invoiceData);
    setShowPreview(true);
  };

  const handleBackToForm = () => {
    setShowPreview(false);
  };

  const handlePrint = () => {
    const printContents = document.querySelector(".invoice-preview-container").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    setTimeout(() => {
        document.body.innerHTML = originalContents;
    }, 250);
  };

  return (
    <div className="main-container">
      <Header setShowClientForm={setShowClientForm} />

      {showClientForm && (
        <div className="client-form-container">
          <ClientForm onClientAdded={() => setShowClientForm(false)} />
        </div>
      )}

      {showPreview ? (
        <div className="invoice-preview-container">
          <InvoicePreview invoiceData={invoicePreviewData} />
          <div className="preview-buttons">
            <button onClick={handleBackToForm}>Grįžti į formą</button>
            <button onClick={handlePrint}>Spausdinti</button>
          </div>
        </div>
      ) : (
        <div className="invoice-form-container">
          <InvoiceForm onSave={handleInvoiceSave} />
        </div>
      )}
    </div>
  );
};

export default Main;