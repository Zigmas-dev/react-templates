import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./styles/index.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;