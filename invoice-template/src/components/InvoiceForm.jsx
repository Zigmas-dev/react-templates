import { useState } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import PropTypes from "prop-types";
import axios from "axios";
import { FaSave, FaBuilding } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";
import "./invoiceForm.scss";

const InvoiceForm = ({ onSave }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("ZWD 25/0001");

  const generateInvoiceNumber = (previousNumber) => {
    const [prefix, date, currentNumber] = previousNumber.split(" ");
    const nextNumber = parseInt(currentNumber) + 1;
    return `${prefix} ${date}/${String(nextNumber).padStart(4, "0")}`;
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const invoiceData = {
        seller: values.seller,
        client: values.client,
        services: values.services,
        invoiceNumber,
      };

      setInvoiceNumber(generateInvoiceNumber(invoiceNumber));

      await axios.post("http://127.0.0.1:3000/api/invoices", invoiceData);

      onSave(invoiceData);
    } catch (error) {
      console.error("Klaida išsaugant sąskaitą:", error);
      setErrorMessage("Nepavyko išsaugoti sąskaitos. Bandykite dar kartą.");
    }

    setIsSubmitting(false);
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
                <Field name="client.companyName" type="text" />
                <Field name="client.companyCode" type="text" />
                <Field name="client.address" type="text" />
                <Field name="client.phone" type="text" />
                <Field name="client.email" type="email" />
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

            <button type="submit" className="save-button" disabled={isSubmitting}>
              {isSubmitting ? <TailSpin height={30} width={30} /> : <FaSave />}
              Išsaugoti sąskaitą
            </button>
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
