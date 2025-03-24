import { FaReact, FaJs, FaNode, FaGithub, FaFacebook } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icon-container">
        <div className="icon" color="#61DBFB">
          <FaReact color="#61DBFB" />
        </div>
        <div className="icon">
          <FaJs color="#F7DF1E" />
        </div>
        <div className="icon">
          <FaNode color="#83CD29" />
        </div>
        <div className="icon">
          <FaGithub color="#FFFFFF" />
        </div>
        <div className="icon">
          <FaFacebook color="#1877F2" />
        </div>
      </div>   
      <p>&copy; {new Date().getFullYear()} zigmaswebdev.lt. Visos teisės ginamos.</p>
    </div>
  );
};

export default Footer;