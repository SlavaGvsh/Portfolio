import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import twitter from "../../img/icons/twitter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" >
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/SlavaGvsh" target="_blank" rel="noopener noreferrer">
                <img src={gitHub} alt="GitHub" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 frontend</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
