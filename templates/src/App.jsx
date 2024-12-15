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
import FAQ from "./components/FAQ";
import ProfileCard from "./components/ProfileCard";
import Tabs from "./components/Tabs";
import ProgressBar from "./components/ProgressBar";
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

  const profileData = {
    name: "Jonas Jonaitis",
    position: "Web Developer",
    image: "https://via.placeholder.com/150",
    description: "Patyręs programuotojas, dirbantis su React ir Node.js.",
  };

  const tabsData = [
    { label: "Apie mane", content: "Tai yra apie mane turinys." },
    { label: "Projektai", content: "Tai yra projektų turinys." },
    { label: "Kontaktai", content: "Tai yra kontaktų turinys." },
  ];

  const [progress, setProgress] = useState(50); // Pradinė reikšmė

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

  // Funkcija progreso keitimui
  const handleProgressChange = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
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
          <ProfileCard {...profileData} />
          <Tabs tabs={tabsData} />
          <ProgressBar progress={progress} />
          <button onClick={handleProgressChange}>Atnaujinti progresą</button>
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <FAQ key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </>
      )}
      <SocialIcons />
      <Footer />
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default App;
