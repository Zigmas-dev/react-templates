import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import AdminDashboard from "../components/AdminDashboard";
import "./adminPage.scss";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          {isRegistering ? (
            <>
              <RegisterForm onSwitchToLogin={() =>
              setIsRegistering(false)} />
            </>
          ) : (
            <>
              <LoginForm
                onLoginSuccess={handleLoginSuccess}
                onSwitchToRegister={() => setIsRegistering(true)}
              />
            </>
          )}
        </>
      ) : (
        <AdminDashboard />
      )}
    </>
  );
};

export default AdminPage;
