import "./footer.css";
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section: Brand Statement */}
        <div className="footer-top">
          <h1 className="footer-logo">Jeeva Photography</h1>
          <p className="footer-slogan">Capturing timeless stories with elegance.</p>
        </div>

        {/* Middle Section: Links & Socials */}
        <div className="footer-middle">
          <div className="footer-social-links">
            <a href="https://www.instagram.com/__jeeva_photography__/" target="_blank" rel="noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://wa.me/91709226986" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="mailto:hello@jeevaphotography.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-copyright">
            <p>© {currentYear} Jeeva Photography. Crafted with Love.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
