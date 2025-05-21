import "./footer.scss";

const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} <span className="footer-text">M&L Multiservice ApS.</span> Visos teisės saugomos.</p>
      </div>
    </footer>
  );
  export default Footer;
  