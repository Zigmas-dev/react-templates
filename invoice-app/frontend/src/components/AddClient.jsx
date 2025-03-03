import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import PropTypes from "prop-types";
import "./addClient.scss";

const AddClient = ({ onSelectClient }) => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:3000/clients/search?searchTerm=${searchTerm}`);
      setClients(response.data);
    } catch (error) {
      console.error("Klaida ieškant klientų:", error);
      setError("Nepavyko rasti klientų.");
    }
  };

  return (
    <div className="add-client-form">
      <h3>Pasirinkite klientą</h3>
      {error && <p className="error">{error}</p>}

      <Formik
        initialValues={{ searchField: "" }}
        onSubmit={(values) => {
          const selectedClient = clients.find(
            (client) =>
              client.Įmonės_pavadinimas === values.searchField ||
              client.Įmonės_kodas === values.searchField ||
              client.PVM_kodas === values.searchField
          );

          if (selectedClient) {
            onSelectClient(selectedClient);
          }
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <label>Ieškoti pagal pavadinimą, įmonės kodą arba PVM kodą:</label>
            <input
              type="text"
              name="searchField"
              value={values.searchField}
              onChange={(e) => {
                handleChange(e);
                handleSearch(e.target.value);
              }}
            />

            <button type="submit" className="select-button">Pasirinkti</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AddClient.propTypes = {
  onSelectClient: PropTypes.func.isRequired,
};

export default AddClient;