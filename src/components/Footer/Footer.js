import "./Footer.scss";
import { NavLink } from "react-router-dom";
import facebookIcon from "../../assets/Icons/facebook.png";
import instagramIcon from "../../assets/Icons/instagram.png";
import twitterIcon from "../../assets/Icons/twitter.png";
import youtubeIcon from "../../assets/Icons/youtube.png";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <h2 className="footer__content__credits">Created by Marco Luciano</h2>
      </div>
      <div className="footer__content__socials">
        <NavLink to="https://www.facebook.com/nba/">
          <img
            className="footer__content__socials-icons"
            src={facebookIcon}
            alt="facebook logo"
          />
        </NavLink>
        <NavLink to="https://www.instagram.com/nba/">
          <img
            className="footer__content__socials-icons"
            src={instagramIcon}
            alt="instagram logo"
          />
        </NavLink>
        <NavLink to="https://twitter.com/NBA">
          <img
            className="footer__content__socials-icons"
            src={twitterIcon}
            alt="instagram logo"
          />
        </NavLink>
        <NavLink to="https://www.youtube.com/@NBA">
          <img
            className="footer__content__socials-icons"
            src={youtubeIcon}
            alt="instagram logo"
          />
        </NavLink>
      </div>
      <div className="footer__content__page-links">
        <p className="footer__content__page-links-pages">ABOUT US</p>
        <p className="footer__content__page-links-pages">CONTACT US</p>
      </div>
      <div className="footer__content__affiliation">
        <p className="footer__content__affiliation-text">
          This site has no official affiliation with the NBA. All logos and
          images are the trademark and property of their owners and not My
          Starting Five
        </p>
      </div>
    </section>
  );
}

export default Footer;
