import { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import { FaPlus, FaTrash } from 'react-icons/fa';
import './invoicegenerator.scss';

// PDF Stiliai
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
    flexDirection: 'row',
    borderBottom: 1,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
  },
  total: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

// PDF komponentas
const InvoicePDF = ({ values }) => (
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
            <Text style={styles.tableCell}>{item.price}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.total}>
        Bendra suma: {values.items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)} €
      </Text>
    </Page>
  </Document>
);

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
};

// Pagrindinis komponentas
const InvoiceGenerator = () => {
  const currentYear = new Date().getFullYear();
  const initialValues = {
    clientName: '',
    invoiceNumber: `ZWD-${currentYear}/1`, // Automatinis sąskaitos numeris
    date: new Date().toISOString().slice(0, 10), // Automatinė data
    items: [
      {
        name: '',
        quantity: 1,
        price: 0,
      },
    ],
  };

  const [clients, setClients] = useState(['Klientas 1', 'Klientas 2', 'Klientas 3']); // Klientų sąrašas

  const addNewClient = () => {
    const newClient = prompt('Įveskite naujo kliento pavadinimą:');
    if (newClient) {
      setClients((prevClients) => [...prevClients, newClient]);
    }
  };

  return (
    <div className="invoice-generator">
      <h2>Sąskaitos faktūros generatorius</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label>Klientas:</label>
              <Field
                as="select"
                name="clientName"
                onChange={(e) => setFieldValue('clientName', e.target.value)}
              >
                <option value="">Pasirinkite klientą</option>
                {clients.map((client, index) => (
                  <option key={index} value={client}>
                    {client}
                  </option>
                ))}
              </Field>
              <button type="button" onClick={addNewClient}>
                <FaPlus /> Naujas klientas
              </button>
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
                  <button type="button" onClick={() => push({ name: '', quantity: 1, price: 0 })}>
                    <FaPlus /> Pridėti
                  </button>
                </div>
              )}
            </FieldArray>
            <PDFDownloadLink
              document={<InvoicePDF values={values} />}
              fileName={`Invoice-${values.invoiceNumber || 'nauja'}.pdf`}
            >
              {({ loading }) => (loading ? 'Generuojama...' : 'Atsisiųsti PDF')}
            </PDFDownloadLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceGenerator;
