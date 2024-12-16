import "./pricingTable.scss";

const PricingTable = () => {
  const plans = [
    {
      name: "Basic",
      price: "€9.99/mėn.",
      features: ["1 vartotojas", "10 GB vietos", "El. pašto palaikymas"],
      buttonText: "Pasirinkti",
    },
    {
      name: "Pro",
      price: "€19.99/mėn.",
      features: ["5 vartotojai", "50 GB vietos", "24/7 palaikymas"],
      buttonText: "Pasirinkti",
    },
    {
      name: "Enterprise",
      price: "€49.99/mėn.",
      features: ["Neriboti vartotojai", "Neribota vieta", "Prioritetinis palaikymas"],
      buttonText: "Susisiekite su mumis",
    },
  ];

  return (
    <div className="pricing-table">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h3 className="plan-name">{plan.name}</h3>
          <p className="plan-price">{plan.price}</p>
          <ul className="plan-features">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="plan-button">{plan.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
