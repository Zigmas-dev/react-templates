import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./index.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <LoginForm />
      <RegisterForm /> 
    </div>
  );
};

export default App;