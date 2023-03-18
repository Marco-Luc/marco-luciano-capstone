import "./Header.scss";
import nbaLogoSvg from "../../assets/Logos/TeamLogosSVG/SVG-nba.svg";

function Header() {
  return (
    <section className="header">
      <div className="header__nav">
        <img className="header__nba-logo" src={nbaLogoSvg} alt="NBA Logo" />
        <h1 className="header__title">Capstone Project</h1>
      </div>
    </section>
  );
}

export default Header;
