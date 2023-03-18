import "./Header.scss";
import nbaLogoSvg from "../../assets/Logos/TeamLogosSVG/SVG-nba.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header__nav">
        <NavLink to="/">
          <img className="header__nba-logo" src={nbaLogoSvg} alt="NBA Logo" />
        </NavLink>
        <h1 className="header__title">Marco Luciano Capstone Project</h1>
      </div>
    </section>
  );
}

export default Header;
