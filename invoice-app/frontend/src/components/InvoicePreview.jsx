import PropTypes from "prop-types";
import "./invoicePreview.scss";

const InvoicePreview = ({ invoiceData }) => {
  const { seller, client, services } = invoiceData;

  const total = services.reduce(
    (acc, service) => acc + service.quantity * service.price,
    0
  );

  return (
    <div className="invoice-preview">
      <h2>Sąskaita-Faktūra</h2>

      <h3>Pardavėjas</h3>
      <p>{seller.companyName}</p>
      <p>{seller.companyCode}</p>
      <p>{seller.address}</p>
      <p>{seller.phone}</p>
      <p>{seller.email}</p>

      <h3>Klientas</h3>
      <p>{client.companyName}</p>
      <p>{client.companyCode}</p>
      <p>{client.address}</p>
      <p>{client.phone}</p>
      <p>{client.email}</p>

      <h3>Paslaugos</h3>
      <table>
        <thead>
          <tr>
            <th>Paslauga</th>
            <th>Kiekis</th>
            <th>Kaina (€)</th>
            <th>Suma (€)</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.quantity}</td>
              <td>{service.price}</td>
              <td>{(service.quantity * service.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Bendra suma</h3>
      <p>{total.toFixed(2)} €</p>
    </div>
  );
};

InvoicePreview.propTypes = {
  invoiceData: PropTypes.object.isRequired,
};

export default InvoicePreview;