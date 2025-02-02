import { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import Invoice from "./pages/Invoice";
import "./index.scss";

const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleSave = (data) => {
    setInvoiceData(data);
  };

  return (
    <div>
      <InvoiceForm onSave={handleSave} />
      <Invoice invoiceData={invoiceData} />
    </div>
  );
};

export default App;
