// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Header from "../components/Header"; // <- pridėta
import "./loginPage.scss";

const LoginPage = () => {
  // Pradžioje rodoma prisijungimo forma
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  // Po sėkmingo prisijungimo ar registracijos
  const handleAuthSuccess = (operationType) => {
    if (operationType === "register") {
      setIsRegistering(false);
      alert("Registracija sėkminga! Dabar galite prisijungti.");
    } else if (operationType === "login") {
      navigate("/main");
    }
  };

  return (
    <div className="login-container">
      {/* Header su slaptu veiksmu (aktyvuoja registracijos formą) */}
      <Header onLogoClick={() => setIsRegistering(true)} />

      {isRegistering ? (
        <Register
          onLoginClick={() => setIsRegistering(false)}
          onRegisterSuccess={() => handleAuthSuccess("register")}
        />
      ) : (
        <Login
          onRegisterClick={() => setIsRegistering(true)}
          onLoginSuccess={() => handleAuthSuccess("login")}
        />
      )}
    </div>
  );
};

export default LoginPage;
