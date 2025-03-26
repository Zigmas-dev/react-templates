import ElectronicsList from "../e-componets/ElectronicsList";
import "./electronics.scss";

const Electronics = () => {
  return (
    <div className="electronics-container">
      <h2>Elektronikos prekės</h2>
      <ElectronicsList />
    </div>
  );
};

export default Electronics;
