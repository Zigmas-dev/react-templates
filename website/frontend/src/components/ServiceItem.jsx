import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";
import "./serviceItem.scss";

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Svetainių kūrimas',
    description: 'Kuriu interaktyvias ir modernias svetaines naudojant React.',
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'Frontend programavimas',
    description: 'Ruošiu optimizuotą ir responsyvią vartotojo sąsają.',
  },
  {
    id: 3,
    icon: <FaDatabase />,
    title: 'Duomenų bazių integracija',
    description: 'Integruoju duomenų bazes ir užtikrinu sklandų backend ryšį.',
  },
];

const ServiceItem = () => {
  return (
    <div className="services-container">
      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
