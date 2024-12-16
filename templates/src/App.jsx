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
import SkillProgressBars from "./components/SkillProgressBars"; // Naujas komponentas
import Banner from "./components/Banner";
import NotificationBar from "./components/NotificationBar";
import Testimonials from "./components/Testimonials";
import CountdownTimer from "./components/CountdownTimer";
import PricingTable from "./components/PricingTable";
import Calendar from "./components/Calendar";
import Accordion from "./components/Accordion";
import ChatWidget from "./components/ChatWidget";
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

  const testimonialsData = [
    {
      name: "Petras Petraitis",
      message: "Puiki svetainė, labai patogu naudotis!",
      position: "Klientas",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Monika Monikaitė",
      message: "Geriausia patirtis, kokią tik esu turėjusi!",
      position: "Vartotoja",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Tomas Tomaitis",
      message: "Puikus dizainas ir funkcionalumas!",
      position: "Partneris",
      image: "https://via.placeholder.com/50",
    },
  ];

  const accordionItems = [
    { title: "Klausimas 1", content: "Tai yra atsakymas į pirmą klausimą." },
    { title: "Klausimas 2", content: "Tai yra atsakymas į antrą klausimą." },
    { title: "Klausimas 3", content: "Tai yra atsakymas į trečią klausimą." },
  ];

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 85 },
  ]; // Pavyzdiniai įgūdžiai

  const [progress, setProgress] = useState(50);

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

  const handleProgressChange = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
  };

  return (
    <div>
      <Header />
      <Banner
        text="Sveiki atvykę! Mūsų svetainėje rasite daugybę naudingos informacijos."
        speed="15s"
        backgroundColor="#4caf50"
        textColor="#fff"
        fontSize="20px"
      />
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
      <PricingTable />
      <NotificationBar
        message="Tai yra pranešimas apie naują funkcionalumą!"
        link="https://example.com"
        linkText="Sužinokite daugiau"
        type="info"
      />
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
          <SkillProgressBars skills={skills} /> {/* Pridėtas įgūdžių komponentas */}
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <FAQ key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <Accordion items={accordionItems} />
          <Testimonials testimonials={testimonialsData} />
          <Calendar />
        </>
      )}
      <ChatWidget />
      <SocialIcons />
      <Footer />
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default App;
