
import PropTypes from "prop-types";
import "./invoicePreview.scss";

const InvoicePreview = ({ invoiceData }) => {
  const { seller, client, services, invoiceNumber } = invoiceData;

  const total = services.reduce(
    (acc, service) => acc + service.quantity * service.price,
    0
  );

  const issueDate = new Date().toLocaleDateString();
  const paymentDueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="invoice-preview-container">
      <div className="invoice-preview">
        <h2>Sąskaita-Faktūra Nr.: {invoiceNumber}</h2>
        <p className="date">Data: {issueDate}</p>

        <div className="company-details">
          <div className="seller-details">
            <h3>Pardavėjas</h3>
            <p>{seller.companyName}</p>
            <p>{seller.companyCode}</p>
            <p>{seller.address}</p>
            <p>{seller.phone}</p>
            <p>{seller.email}</p>
          </div>
          <div className="client-details">
            <h3>Klientas</h3>
            <p>{client.companyName}</p>
            <p>{client.companyCode}</p>
            <p>{client.address}</p>
            <p>{client.phone}</p>
            <p>{client.email}</p>
          </div>
        </div>

        <h3>Paslaugos</h3>
        <table>
          <thead>
            <tr>
              <th>Paslauga</th>
              <th>Kiekis</th>
              <th>Kaina (€)</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.quantity}</td>
                <td>{(service.quantity * service.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-section">
          <h3>Bendra suma: {total.toFixed(2)} €</h3>
        </div>

        <div className="signatures">
          <div className="signature-section">
            <h3>Sąskaitą išrašė</h3>
            <div className="signature-line">Vardas, pavardė:</div>
            <div className="signature-line">Parašas:</div>
          </div>
          <div className="signature-section">
            <h3>Sąskaitą gavo</h3>
            <div className="signature-line">Vardas, pavardė:</div>
            <div className="signature-line">Parašas:</div>
          </div>
        </div>

        <div className="payment-terms">
          <p>Prašome apmokėti iki: {paymentDueDate}.</p>
        </div>

        <div className="page-counter">1/1</div>
      </div>
    </div>
  );
};

InvoicePreview.propTypes = {
  invoiceData: PropTypes.object.isRequired,
};

export default InvoicePreview;