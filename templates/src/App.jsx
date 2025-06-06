
import Header from "./components/Header";
import LanguageSelector from "./components/LanguageSelector";
import SocialMedia from "./components/SocialMedia";
import CategoryLink from "./components/CategoryLink";
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
import SearchWithFilters from "./components/SearchWithFilters";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import InvoiceGenerator from "./components/InvoiceGenerator";
import LoginForm1 from "./components/LoginForm1";
import Cart from "./components/Cart";
import VatCalculator from "./components/VatCalculator";
import InvoiceVatTool from "./components/InvoiceVatTool";
import DarkMode from "./components/DarkMode";
import Spinners from "./components/Spinners";
import Buttons from "./components/Buttons";
import "./index.scss";

const App = () => {
 
  return (
    <div>
      <Header />
      <DarkMode />
      <Spinners />
      <Buttons />
      <Loader />
      <LanguageSelector />
      <Cart />
      <SearchWithFilters />
      <Banner />
      <SocialMedia />
      <CountdownTimer />
      <PricingTable />
      <CategoryLink />
      <Carousel />
      <ProfileCard />
      <Portfolio />
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
      <ContactForm />
      <Testimonials />
      <ChatWidget />
      <SocialIcons />
      <Footer />
      <Calendar />
      <LoginForm />
      <RegisterForm />
      <LoginForm1 />
      <InvoiceVatTool />
      <InvoiceGenerator />
      <VatCalculator />
    </div>
  );
};
       
export default App;
