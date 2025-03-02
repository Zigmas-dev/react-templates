import Header from "../components/Header";
import ClientForm from "../components/ClientForm";
import "./main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="client-form-container">
        <ClientForm />
      </div>
    </div>
  );
};

export default Main;