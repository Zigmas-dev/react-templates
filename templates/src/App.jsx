import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SocialIcons from "./components/SocialIcons";
import "./index.scss";

const App = () => {
  // Pavyzdiniai duomenys Card komponentui
  const sampleCardData = {
    title: "Pavyzdinis pavadinimas",
    description: "Tai yra pavyzdinis kortelės aprašymas, kuris parodo, kaip ji atrodys.",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div>
      <Header />
      <Main />
      
      {/* Kortelės komponentas su perduodamais props */}
      <Card
        title={sampleCardData.title}
        description={sampleCardData.description}
        image={sampleCardData.image}
      />
      
      <Footer />
      <LoginForm />
      <RegisterForm />
      <SocialIcons />
    </div>
  );
};

export default App;
