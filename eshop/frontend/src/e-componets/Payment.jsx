import { useState } from "react";
import "./payment.scss";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedLeasing, setSelectedLeasing] = useState("");

  const paymentMethods = [
    { id: "cash", label: "Grynais atsiimant vietoje" },
    { id: "bank", label: "Bankiniu pavedimu" },
    { id: "ebanking", label: "El. bankininkystė" },
    { id: "leasing", label: "Lizingu" },
  ];

  const banks = [
    { id: "swedbank", label: "Swedbank", logo: "lorem" },
    { id: "seb", label: "SEB", logo: "lorem" },
    { id: "luminor", label: "Luminor", logo: "lorem" },
  ];

  const leasingCompanies = [
    { id: "mokilizingas", label: "Mokilizingas", logo: "lorem" },
    { id: "generalfinansas", label: "General Finansas", logo: "lorem" },
  ];

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
    setSelectedBank("");
    setSelectedLeasing("");
  };

  const handleBankClick = (bankId) => {
    setSelectedBank(bankId);
  };

  const handleLeasingClick = (leasingId) => {
    setSelectedLeasing(leasingId);
  };

  return (
    <div className="payment">
      <h2>Pasirinkite mokėjimo būdą</h2>
      <table>
        <thead>
          <tr>
            <th>Pasirinkite</th>
            <th>Mokėjimo būdas</th>
            <th>Bankas / Lizingas</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((method) => (
            <tr key={method.id}>
              <td>
                <input
                  type="radio"
                  id={method.id}
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={handlePaymentChange}
                />
              </td>
              <td>
                <label htmlFor={method.id}>{method.label}</label>
              </td>
              <td>
                {method.id === "ebanking" && selectedPayment === "ebanking" && (
                  <div className="icon-selection">
                    {banks.map((bank) => (
                      <div
                        key={bank.id}
                        className={`icon ${selectedBank === bank.id ? "selected" : ""}`}
                        onClick={() => handleBankClick(bank.id)}
                      >
                        {bank.logo}
                      </div>
                    ))}
                  </div>
                )}
                {method.id === "leasing" && selectedPayment === "leasing" && (
                  <div className="icon-selection">
                    {leasingCompanies.map((company) => (
                      <div
                        key={company.id}
                        className={`icon ${selectedLeasing === company.id ? "selected" : ""}`}
                        onClick={() => handleLeasingClick(company.id)}
                      >
                        {company.logo}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPayment && <p>Pasirinktas mokėjimo būdas: {paymentMethods.find(method => method.id === selectedPayment).label}</p>}
      {selectedBank && <p>Pasirinktas bankas: {banks.find(bank => bank.id === selectedBank).label}</p>}
      {selectedLeasing && <p>Pasirinkta lizingo bendrovė: {leasingCompanies.find(company => company.id === selectedLeasing).label}</p>}
    </div>
  );
};

export default Payment;
