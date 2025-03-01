import Login from "../components/Login";
import "./loginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Reikia prisijungti</h2>
      <Login />
    </div>
  );
};

export default LoginPage;