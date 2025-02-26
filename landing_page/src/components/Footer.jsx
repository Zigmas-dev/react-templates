import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Web Programavimas. Visos teisės saugomos.</p>
    </footer>
  );
};

export default Footer;
