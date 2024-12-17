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
import Carousel from "./components/Carousel"; // Importuotas naujas komponentas
import ChatWidget from "./components/ChatWidget";
import "./index.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState({
    message: "Sveiki atvykę į mūsų svetainę!",
    type: "success",
    visible: true,
  });

  

  const galleryImages = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];

  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 85 },
  ]; // Pavyzdiniai įgūdžiai

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
      <Banner />
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
      <PricingTable />
      <Carousel />
      <ProfileCard />
      <Tabs />
      <NotificationBar />
      <Breadcrumb />
      <Main />
      <FAQ />
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
          <Gallery images={galleryImages} />
          <SkillProgressBars skills={skills} /> {/* Pridėtas įgūdžių komponentas */}
          
        </>
      )}
      <Card />
      <Accordion />
      <ProgressBar />
      <Testimonials />
      <ChatWidget />
      <SocialIcons />
      <Footer />
      <Calendar />
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default App;
