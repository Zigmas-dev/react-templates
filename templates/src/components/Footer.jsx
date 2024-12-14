import "./footer.scss";

const Footer = () => {
   return (
     <footer className="footer">
       <p>&copy; 2024 Visos teisės ginamos.</p>
       <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferre">Facebook</a>
       </div>
     </footer>
   );
};

export default Footer;