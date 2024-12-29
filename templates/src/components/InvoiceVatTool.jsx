import { useState } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./invoicevattool.scss";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottom: 1,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
  },
  total: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
});

// PDF Component
const InvoicePDF = ({ values, vatRate }) => {
  const totalAmount = values.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const amountWithoutVat = totalAmount / (1 + vatRate / 100);
  const vat = totalAmount - amountWithoutVat;

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>Sąskaita faktūra Nr. {values.invoiceNumber}</Text>
        <Text style={styles.section}>Klientas: {values.clientName}</Text>
        <Text style={styles.section}>Data: {values.date}</Text>
        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>Pavadinimas</Text>
            <Text style={styles.tableCell}>Kiekis</Text>
            <Text style={styles.tableCell}>Kaina (€)</Text>
          </View>
          {values.items.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.quantity}</Text>
              <Text style={styles.tableCell}>{item.price.toFixed(2)}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.total}>Suma be PVM: {amountWithoutVat.toFixed(2)} €</Text>
        <Text style={styles.total}>PVM ({vatRate}%): {vat.toFixed(2)} €</Text>
        <Text style={styles.total}>Bendra suma: {totalAmount.toFixed(2)} €</Text>
      </Page>
    </Document>
  );
};

InvoicePDF.propTypes = {
  values: PropTypes.shape({
    clientName: PropTypes.string.isRequired,
    invoiceNumber: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  vatRate: PropTypes.number.isRequired,
};

// Main Component
const InvoiceVatTool = ({ vatRate = 21 }) => { // Numatytas parametrų naudojimas vietoj defaultProps
  const [view, setView] = useState("invoice");

  const currentYear = new Date().getFullYear();
  const initialValues = {
    clientName: "",
    invoiceNumber: `ZWD-${currentYear}/1`,
    date: new Date().toISOString().slice(0, 10),
    items: [
      {
        name: "",
        quantity: 1,
        price: 0,
      },
    ],
  };

  return (
    <div className="invoice-vat-tool">
      <h2>Sąskaitos ir PVM įrankis</h2>
      <div className="toggle-buttons">
        <button onClick={() => setView("invoice")} className={view === "invoice" ? "active" : ""}>
          Sąskaita faktūra
        </button>
        <button onClick={() => setView("vat")} className={view === "vat" ? "active" : ""}>
          PVM Skaičiuoklė
        </button>
      </div>

      {view === "invoice" ? (
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ values }) => (
            <Form>
              <div className="form-group">
                <label>Klientas:</label>
                <Field name="clientName" placeholder="Įveskite kliento vardą" />
              </div>
              <div className="form-group">
                <label>Sąskaitos numeris:</label>
                <Field name="invoiceNumber" disabled />
              </div>
              <div className="form-group">
                <label>Data:</label>
                <Field name="date" type="date" />
              </div>
              <FieldArray name="items">
                {({ push, remove }) => (
                  <div>
                    {values.items.map((item, index) => (
                      <div className="item-row" key={index}>
                        <Field name={`items[${index}].name`} placeholder="Prekė" />
                        <Field
                          name={`items[${index}].quantity`}
                          type="number"
                          placeholder="Kiekis"
                        />
                        <Field
                          name={`items[${index}].price`}
                          type="number"
                          placeholder="Kaina"
                        />
                        <button type="button" onClick={() => remove(index)}>
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={() => push({ name: "", quantity: 1, price: 0 })}>
                      <FaPlus /> Pridėti
                    </button>
                  </div>
                )}
              </FieldArray>
              <PDFDownloadLink
                document={<InvoicePDF values={values} vatRate={vatRate} />}
                fileName={`Invoice-${values.invoiceNumber || "nauja"}.pdf`}
              >
                {({ loading }) => (loading ? "Generuojama..." : "Atsisiųsti PDF")}
              </PDFDownloadLink>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="vat-calculator">
          <h3>PVM skaičiuoklė</h3>
          {/* VAT calculator UI can be implemented here if needed */}
        </div>
      )}
    </div>
  );
};

InvoiceVatTool.propTypes = {
  vatRate: PropTypes.number,
};

export default InvoiceVatTool;
