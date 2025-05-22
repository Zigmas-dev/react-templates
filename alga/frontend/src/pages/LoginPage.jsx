// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import "./loginPage.scss";

const LoginPage = () => {
  // Pradžioje nustatome, kad būtų rodoma registracijos forma
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();

  // Funkcija, kuri bus iškviesta po sėkmingos registracijos arba prisijungimo
  // Dabar ji priims argumentą, kuris nurodys, kokia buvo operacija
  const handleAuthSuccess = (operationType) => {
    if (operationType === "register") {
      // Jei tai registracija, tiesiog pakeičiame į prisijungimo formą
      setIsRegistering(false);
      alert("Registracija sėkminga! Dabar galite prisijungti.");
    } else if (operationType === "login") {
      // Jei tai prisijungimas, nukreipiame į /main puslapį
      navigate("/main");
    }
  };

  return (
    <div className="login-container">
      {isRegistering ? (
        <Register
          onLoginClick={() => setIsRegistering(false)}
          // Paduodame handleAuthSuccess ir nurodome operacijos tipą
          onRegisterSuccess={() => handleAuthSuccess("register")}
        />
      ) : (
        <Login
          onRegisterClick={() => setIsRegistering(true)}
          // Paduodame handleAuthSuccess ir nurodome operacijos tipą
          onLoginSuccess={() => handleAuthSuccess("login")}
        />
      )}
    </div>
  );
};

export default LoginPage;