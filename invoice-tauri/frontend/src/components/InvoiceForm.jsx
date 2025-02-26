import { useState } from "react";
import { Formik, Field, Form } from "formik";
import PropTypes from "prop-types";
import axios from "axios";
import { FaSave } from "react-icons/fa";
import { ClipLoader } from "react-spinners"; // Teisingas importas iš react-spinners
import "./invoiceForm.scss";

const InvoiceForm = ({ onSave }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/save-invoice", values); // Pakeisk pagal savo serverio API
      onSave(response.data);
    } catch (error) {
      console.error("Klaida išsaugojant sąskaitą:", error);
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
              {/* Pardavėjo informacija */}
              <div className="section seller">
                <h3>Pardavėjas</h3>
                <div>
                  <label htmlFor="seller.companyName">Įmonės pavadinimas</label>
                  <Field id="seller.companyName" name="seller.companyName" type="text" disabled />
                </div>
                <div>
                  <label htmlFor="seller.companyCode">Įmonės kodas</label>
                  <Field id="seller.companyCode" name="seller.companyCode" type="text" disabled />
                </div>
                <div>
                  <label htmlFor="seller.address">Adresas</label>
                  <Field id="seller.address" name="seller.address" type="text" disabled />
                </div>
                <div>
                  <label htmlFor="seller.phone">Telefonas</label>
                  <Field id="seller.phone" name="seller.phone" type="text" disabled />
                </div>
                <div>
                  <label htmlFor="seller.email">El. paštas</label>
                  <Field id="seller.email" name="seller.email" type="email" disabled />
                </div>
              </div>

              {/* Kliento informacija */}
              <div className="section client">
                <h3>Klientas</h3>
                <div>
                  <label htmlFor="client.companyName">Įmonės pavadinimas</label>
                  <Field id="client.companyName" name="client.companyName" type="text" />
                </div>
                <div>
                  <label htmlFor="client.companyCode">Įmonės kodas</label>
                  <Field id="client.companyCode" name="client.companyCode" type="text" />
                </div>
                <div>
                  <label htmlFor="client.address">Adresas</label>
                  <Field id="client.address" name="client.address" type="text" />
                </div>
                <div>
                  <label htmlFor="client.phone">Telefonas</label>
                  <Field id="client.phone" name="client.phone" type="text" />
                </div>
                <div>
                  <label htmlFor="client.email">El. paštas</label>
                  <Field id="client.email" name="client.email" type="email" />
                </div>
              </div>
            </div>

            {/* Paslaugos */}
            <h3>Paslaugos</h3>
            {values.services.map((service, index) => (
              <div key={index}>
                <div>
                  <label htmlFor={`services[${index}].name`}>Paslauga</label>
                  <Field id={`services[${index}].name`} name={`services[${index}].name`} type="text" />
                </div>
                <div>
                  <label htmlFor={`services[${index}].quantity`}>Kiekis</label>
                  <Field id={`services[${index}].quantity`} name={`services[${index}].quantity`} type="number" min="1" />
                </div>
                <div>
                  <label htmlFor={`services[${index}].price`}>Kaina už vienetą (€)</label>
                  <Field id={`services[${index}].price`} name={`services[${index}].price`} type="number" min="0" />
                </div>
              </div>
            ))}

            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <ClipLoader color="#00BFFF" loading={isSubmitting} size={30} />
                ) : (
                  <FaSave />
                )}
                Išsaugoti sąskaitą
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