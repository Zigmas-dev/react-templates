import { FaRegFileAlt } from "react-icons/fa";
import "./invoice.scss";

const Invoice = () => {
  return (
    <div className="invoice-container">
      <header className="invoice-header">
        <FaRegFileAlt className="invoice-icon" />
        <h1>Sąskaita faktūra ZWB </h1>
        <p className="invoice-data">Sąskaita išrašyta: </p>
      </header>

      <section className="invoice-info">
        <div className="column">
          <h3>Pardavėjas</h3>
          <p><strong>Įm. pavadinimas:</strong></p>
          <p>Įm. kodas:</p>
          <p>Adresas:</p>
          <p>Telefonas:</p>
          <p>El. paštas:</p>
        </div>
        <div className="column">
          <h3>Pirkėjas</h3>
          <p><strong>Įm. pavadinimas:</strong></p>
          <p>Įm. kodas:</p>
          <p>Adresas:</p>
          <p>Telefonas:</p>
          <p>El. paštas:</p>
        </div>
      </section>

      <section className="invoice-table">
        <table>
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Paslauga</th>
              <th>Kiekis</th>
              <th>Vnt. kaina</th>
              <th>Suma</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Svetainės kūrimas</td>
              <td>1</td>
              <td>€500</td>
              <td>€500</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paslauga B</td>
              <td>2</td>
              <td>€150</td>
              <td>€300</td>
            </tr>
          </tbody>
        </table>
        <div className="invoice-total">
          <p><strong>Bendra suma: €800</strong></p>
        </div>
      </section>

      <section className="invoice-payment">
        <h3>Apmokėjimo informacija</h3>
        <p><strong>Apmokėti iki:</strong></p>
        <p><strong>Banko sąskaita:</strong></p>
        <p><strong>Bankas:</strong> AB „Swedbank“</p>
        <p><strong>Mokėjimo paskirtis:</strong> Sąskaita ZWB</p>
      </section>

      <section className="invoice-signatures">
        <div>
          <h3>Sąskaitą išrašė:</h3>
          <div className="signature-box"></div>
        </div>
        <div>
          <h3>Sąskaitą gavo:</h3>
          <div className="signature-box"></div>
        </div>
      </section>
    </div>
  );
};

export default Invoice; 