import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contacts from "../components/Contacts";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
       <Hero />
      </section>
      <div className="section-wrapper">
        <section className="about-container">
          <About />
        </section>
        <section className="gallery-container">
          <Gallery />
        </section>
        <section className="contact-container">
          <Contacts />
        </section>
      </div>
    </div>
  );
};

export default Home;