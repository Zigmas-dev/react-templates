import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mano svetainė</p>
      </div>
    </footer>
  );
};

export default Footer;