import { FaFacebookF, FaGoogle, FaInstagram, FaGithub, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import './socials.scss';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <div className="social-icon facebook">
        <FaFacebookF />
      </div>
      <div className="social-icon google">
        <FaGoogle />
      </div>
      <div className="social-icon instagram">
        <FaInstagram />
      </div>
      <div className="social-icon github">
        <FaGithub />
      </div>
      <div className="social-icon youtube">
        <FaYoutube />
      </div>
      <div className="social-icon tiktok">
        <FaTiktok />
      </div>
      <div className="social-icon twitter">
        <FaTwitter />
      </div>
    </div>
  );
};

export default SocialIcons;
