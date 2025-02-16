import { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import "./index.scss";

const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleSaveInvoice = (data) => {
    setInvoiceData(data);
  };

  return (
    <div className="app">
      <h1>Kurti sąskaitą-faktūrą</h1>
      <InvoiceForm onSave={handleSaveInvoice} />
      {invoiceData && <InvoicePreview invoiceData={invoiceData} />}
    </div>
  );
};

export default App;