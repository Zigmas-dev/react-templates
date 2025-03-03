import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import "./addClient.scss";

const AddClient = ({ onSelectClient }) => {
  const [clients, setClients] = useState();
  const [error, setError] = useState("");
  const { setFieldValue } = useFormikContext();

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:3000/clients/search?searchTerm=${searchTerm}`);
      setClients(response.data);
    } catch (error) {
      console.error("Klaida ieškant klientų:", error);
      setError("Nepavyko rasti klientų.");
    }
  };

  const handleClientSelect = (client) => {
    setFieldValue("client.companyName", client.Įmonės_pavadinimas);
    setFieldValue("client.companyCode", client.Įmonės_kodas);
    setFieldValue("client.vatCode", client.PVM_kodas);
    setFieldValue("client.address", client.Adresas);
    setFieldValue("client.phone", client.Telefonas);
    setFieldValue("client.email", client.El_paštas);
    onSelectClient(client);
  };

  return (
    <div className="add-client-form">
      <h3>Pasirinkite klientą</h3>
      {error && <p className="error">{error}</p>}

      <label>Ieškoti pagal pavadinimą, įmonės kodą arba PVM kodą:</label>
      <input
        type="text"
        name="searchField"
        onChange={(e) => handleSearch(e.target.value)}
      />

      <ul>
        {clients && clients.map((client) => (
          <li key={client.id} onClick={() => handleClientSelect(client)}>
            {client.Įmonės_pavadinimas} ({client.Įmonės_kodas})
          </li>
        ))}
      </ul>
    </div>
  );
};

AddClient.propTypes = {
  onSelectClient: PropTypes.func.isRequired,
};

export default AddClient;