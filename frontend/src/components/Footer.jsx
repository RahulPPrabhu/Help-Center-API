import '../App.css';
import Logo from "../images/FooterIcon.png";

const Footer = () => {
  const date = new Date();
  const copyright = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Abstract</h3>
          <ul>
            <li>
              <a href="#">Branches</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Release Notes</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
          <h4>Contact Us</h4>
          <p>info@abstract.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo-footer">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <div className="copyright">
          © Copyright {copyright} <br />
          Abstract Studio Design, Inc. <br />
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;