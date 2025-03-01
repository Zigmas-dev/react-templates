import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "./loginPage.scss";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="login-container">
      {isRegistering ? (
        <Register onLoginClick={() => setIsRegistering(false)} />
      ) : (
        <Login onRegisterClick={() => setIsRegistering(true)} />
      )}
    </div>
  );
};

export default LoginPage;
