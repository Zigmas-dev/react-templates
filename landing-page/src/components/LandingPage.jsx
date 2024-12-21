import { useState } from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import "./landingpage.scss";

const LandingPage = () => {
  const [email, setEmai] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true)
      // Galite pridėti logiką, kad išsaugotumėte el. paštą (pvz., naudoti API arba localStorage)
    }
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="logo">LOGO</h1>
      </header>
      <main className="content">
        <h2 className="title">Svetainė šiuo metu kuriama!</h2>
        <p className="description">Mes sunkiai dirbame, kad sukurtume Jums geriausią patirtį. Užsiprenumeruokite, kad gautumėte naujienas!</p>
        {!submitted ? (
           <form className="form" onSubmit={handleSubmit}>
            <input
             type="email"
             placeholder="Įveskitę savo el. paštą"
             value={email}
             onChange={(e) => setEmai(e.target.value)}
             required
             className="input"
            />
            <button type="submit" className="button">
              Prenumeruoti
            </button>
           </form>
        ) : (
          <p className="thankyou">Ačiū! Mes jums pranešime netrukus!</p>
        )}
      </main>
      <footer className="footer">
        <div className="socials">
          <div className="social-icon facebook">
            <FaFacebookF />
          </div>
          <div className="social-icon google">
            <FaGoogle />
          </div>
          <div className="social-icon instagram">
            <FaInstagram />
          </div>
          <div className="social-icon youtube">
            <FaYoutube />
          </div>
          <div className="social-icon tiktok">
            <FaTiktok />
          </div>
        </div>
        <p>&copy; 2024 Visos teisės ginamos.</p>
      </footer>
    </div>
  );
};

export default LandingPage;