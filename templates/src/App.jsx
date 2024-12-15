import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SocialIcons from "./components/SocialIcons";
import Card from "./components/Card";
import Loader from "./components/Loader";
import Alert from "./components/Alert";
import Breadcrumb from "./components/Breadcrumb";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ"; // Pridedame FAQ
import "./index.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState({
    message: "Sveiki atvykę į mūsų svetainę!",
    type: "success",
    visible: true,
  });

  const sampleCardData = {
    title: "Pavyzdinis pavadinimas",
    description: "Tai yra pavyzdinis kortelės aprašymas.",
    image: "https://via.placeholder.com/150",
  };

  const breadcrumbItems = [
    { label: "Pradžia", href: "/" },
    { label: "Puslapis", href: "/page" },
    { label: "Dabartinis puslapis" },
  ];

  const galleryImages = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];

  const faqItems = [
    {
      question: "Kaip veikia svetainė?",
      answer: "Mūsų svetainė suteikia vartotojams patogią prieigą prie svarbios informacijos.",
    },
    {
      question: "Kaip galiu susisiekti?",
      answer: "Galite susisiekti naudodamiesi mūsų kontaktine forma arba el. paštu.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAlertMessage({
        message: "Krovimas baigtas!",
        type: "info",
        visible: true,
      });
    }, 3000);

    const alertTimer = setTimeout(() => {
      setAlertMessage((prev) => ({ ...prev, visible: false }));
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(alertTimer);
    };
  }, []);

  const closeAlert = () => {
    setAlertMessage((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <Main />
      {alertMessage.visible && (
        <Alert
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={closeAlert}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Card
            title={sampleCardData.title}
            description={sampleCardData.description}
            image={sampleCardData.image}
          />
          <Gallery images={galleryImages} />
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <FAQ key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </>
      )}
      <Footer />
      <LoginForm />
      <RegisterForm />
      <SocialIcons />
    </div>
  );
};

export default App;
