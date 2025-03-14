import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contacts from "../components/Contacts";
import Modal from "../components/Modal";
import "./home.scss";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <Contacts onButtonClick={openModal} /> {/* Perduodame funkciją */}
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      </Modal>
    </div>
  );
};

export default Home;