// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importuojame useNavigate
import Login from "../components/Login";
import Register from "../components/Register";
import "./loginPage.scss";

const LoginPage = () => {
  // Pradžioje nustatome, kad būtų rodoma registracijos forma
  const [isRegistering, setIsRegistering] = useState(true); // Pakeista į true
  const navigate = useNavigate(); // Inicijuojame useNavigate hook'ą

  // Funkcija, kuri bus iškviesta po sėkmingos registracijos arba prisijungimo
  const handleAuthSuccess = () => {
    navigate("/main"); // Nukreipiame vartotoją į /main puslapį
  };

  return (
    <div className="login-container">
      {isRegistering ? (
        <Register
          onLoginClick={() => setIsRegistering(false)}
          onRegisterSuccess={handleAuthSuccess} // Paduodame sėkmės funkciją
        />
      ) : (
        <Login
          onRegisterClick={() => setIsRegistering(true)}
          onLoginSuccess={handleAuthSuccess} // Paduodame sėkmės funkciją
        />
      )}
    </div>
  );
};

export default LoginPage;