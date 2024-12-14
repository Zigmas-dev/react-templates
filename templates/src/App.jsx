import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SocialIcons from "./components/SocialIcons";
import Card from "./components/Card";
import Loader from "./components/Loader";
import Alert from "./components/Alert"; // Importuojame Alert komponentą
import "./index.scss";

const App = () => {
  // Naudojame state valdyti krovimo būsenai
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState({
    message: "Sveiki atvykę į mūsų svetainę!",
    type: "success",
  });

  const sampleCardData = {
    title: "Pavyzdinis pavadinimas",
    description: "Tai yra pavyzdinis kortelės aprašymas.",
    image: "https://via.placeholder.com/150",
  };

  // useEffect, kad nustatytų laikmatį ir išjungtų krovimą
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Po 3 sekundžių išjungiame loaderį
      setAlertMessage({
        message: "Krovimas baigtas!",
        type: "info",
      });
    }, 3000); // 3000 ms = 3 sekundės

    // Išvalome laikmatį, jei komponentas sunaikinamas
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      <Main />
      {/* Rodyti Alert, jei yra pranešimas */}
      <Alert message={alertMessage.message} type={alertMessage.type} />
      {isLoading ? (
        <Loader /> // Rodomas loaderis
      ) : (
        <Card
          title={sampleCardData.title}
          description={sampleCardData.description}
          image={sampleCardData.image}
        />
      )}
      <Footer />
      <LoginForm />
      <RegisterForm />
      <SocialIcons />
    </div>
  );
};

export default App;
