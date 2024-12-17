import { useState } from "react";
import "./tabs.scss";

const Tabs = () => {
  const tabsData = [
    { label: "Apie mane", content: "Tai yra apie mane turinys." },
    { label: "Projektai", content: "Tai yra projektų turinys." },
    { label: "Kontaktai", content: "Tai yra kontaktų turinys." },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__buttons">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`tabs__button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">{tabsData[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
