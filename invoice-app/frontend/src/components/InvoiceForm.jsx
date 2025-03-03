import { useState, useEffect } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import PropTypes from "prop-types";
import axios from "axios";
import { FaSave, FaBuilding } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import "./invoiceForm.scss";

const InvoiceForm = ({ onSave }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(
    localStorage.getItem("invoiceNumber") || "ZWD 25/0000"
  );

  useEffect(() => {
    const fetchInvoiceNumber = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/invoices");
        const latestNumber = response.data.invoiceNumber || "ZWD 25/0000";
        setInvoiceNumber(latestNumber);
        localStorage.setItem("invoiceNumber", latestNumber);
      } catch (error) {
        console.error("Klaida gaunant sąskaitos numerį:", error);
        setErrorMessage("Nepavyko gauti sąskaitos numerio.");
      }
    };
    if (!localStorage.getItem("invoiceNumber")) {
      fetchInvoiceNumber();
    }
  }, []);

  const generateNextInvoiceNumber = (currentNumber) => {
    const regex = /(\d{4})$/;
    const match = currentNumber.match(regex);
    if (match) {
      const newNumber = String(parseInt(match[0], 10) + 1).padStart(4, "0");
      return currentNumber.replace(regex, newNumber);
    }
    return "ZWD 25/0000";
  };

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const newInvoiceNumber = generateNextInvoiceNumber(invoiceNumber);
      const invoiceData = {
        seller: values.seller,
        client: values.client,
        services: values.services,
        invoiceNumber: newInvoiceNumber,
      };

      await axios.post("http://127.0.0.1:3000/api/invoices", invoiceData);
      setInvoiceNumber(newInvoiceNumber);
      localStorage.setItem("invoiceNumber", newInvoiceNumber);
      onSave(invoiceData);
      resetForm();
    } catch (error) {
      console.error("Klaida išsaugant sąskaitą:", error);
      setErrorMessage("Nepavyko išsaugoti sąskaitos. Bandykite dar kartą.");
    }
    setIsSubmitting(false);
  };

  const fetchAndUpdateInvoice = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/api/invoices");
      const latestNumber = response.data.invoiceNumber || "ZWD 25/0000";
      setInvoiceNumber(latestNumber);
      localStorage.setItem("invoiceNumber", latestNumber);
    } catch (error) {
      console.error("Klaida atnaujinant sąskaitos numerį:", error);
      setErrorMessage("Nepavyko atnaujinti sąskaitos numerio.");
    }
  };

  return (
    <div className="invoice-form">
      <Formik
        initialValues={{
          seller: {
            companyName: "UAB Pavyzdys",
            companyCode: "123456789",
            bankAccount: "LT123456789012345678",
            address: "Vilniaus g. 10, Vilnius",
            phone: "+370 612 34567",
            email: "info@pavyzdys.lt",
          },
          client: {
            companyName: "",
            companyCode: "",
            pvmCode: "",
            address: "",
            phone: "",
            email: "",
          },
          services: [{ name: "", quantity: 1, price: 0 }],
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <h2>Sąskaitos-faktūros formos užpildymas</h2>

            <div className="form-sections">
              <div className="section seller">
                <h3><FaBuilding /> Pardavėjas</h3>
                <Field name="seller.companyName" type="text" disabled />
                <Field name="seller.companyCode" type="text" disabled />
                <Field name="seller.address" type="text" disabled />
                <Field name="seller.phone" type="text" disabled />
                <Field name="seller.email" type="email" disabled />
              </div>

              <div className="section client">
                <h3><FaBuilding /> Klientas</h3>
                <Field name="client.companyName" type="text" placeholder="Įmonės pavadinimas" />
                <Field name="client.companyCode" type="text" placeholder="įmonės kodas" />
                <Field name="client.pvmCode" type="text" placeholder="PVM kodas" />
                <Field name="client.address" type="text" placeholder="Adresas" />
                <Field name="client.phone" type="text" placeholder="Tel. numeris" />
                <Field name="client.email" type="email" placeholder="El. paštas" />
              </div>
            </div>

            <FieldArray name="services">
              {({ push, remove }) => (
                <>
                  <h3>Paslaugos</h3>
                  {values.services.map((_, index) => (
                    <div key={index} className="service-item">
                      <Field name={`services[${index}].name`} type="text" />
                      <Field name={`services[${index}].quantity`} type="number" min="1" />
                      <Field name={`services[${index}].price`} type="number" min="0" />
                      <button type="button" className="delete-button" onClick={() => remove(index)}>Pašalinti</button>
                    </div>
                  ))}
                  <button type="button" className="add-button" onClick={() => push({ name: "", quantity: 1, price: 0 })}>
                    Pridėti paslaugą
                  </button>
                </>
              )}
            </FieldArray>

            {errorMessage && <p className="error">{errorMessage}</p>}

            <div className="invoice-number">
              <label>Sąskaitos numeris:</label>
              <input type="text" value={invoiceNumber} disabled />
            </div>

            <div className="button-wrapper">
              <button type="button" onClick={fetchAndUpdateInvoice} className="update-button">
                Atnaujinti sąskaitą
              </button>

              <button type="submit" className="save-button" disabled={isSubmitting}>
                {isSubmitting ? <ClipLoader size={30} color="#000" /> : <FaSave />} Išsaugoti sąskaitą
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

InvoiceForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default InvoiceForm;
