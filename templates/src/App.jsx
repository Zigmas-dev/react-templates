
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
 
  

  return (
    <div>
      <Header />
      <Loader />
      <Banner />
      <CountdownTimer />
      <PricingTable />
      <Carousel />
      <ProfileCard />
      <Tabs />
      <NotificationBar />
      <Breadcrumb />
      <Main />
      <FAQ />
      <Alert />
      <Gallery />
      <SkillProgressBars /> {/* Pridėtas įgūdžių komponentas */}
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
