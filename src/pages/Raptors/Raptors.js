import "./Raptors.scss";
import fredVanvleet from "../../assets/Images/RaptorsPlayers/fvv.jpg";
import garyTrentJr from "../../assets/Images/RaptorsPlayers/gtj.jpg";
import scottieBarnes from "../../assets/Images/RaptorsPlayers/scottie.jpg";
import ogAnunoby from "../../assets/Images/RaptorsPlayers/og.jpg";
import pascalSiakam from "../../assets/Images/RaptorsPlayers/siakam.jpg";
import jakobPoeltl from "../../assets/Images/RaptorsPlayers/poeltl.jpg";

function Raptors() {
  return (
    <section className="main-section">
      <h2 className="main-section__header">Raptors</h2>
      <div className="card-section">
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__title">Fred Vanvleet</h2>
              <img
                className="card__image"
                src={fredVanvleet}
                alt="Fred VanVleet"
              />
              <p className="card__front-description">Guard, Toronto Raptors</p>
            </div>
            <div className="card__back">
              <h2 className="card__title">Stats</h2>
              <ul className="card__stats">
                <li className="card__stats-stat">Points per game: 25.3</li>
                <li className="card__stats-stat">Rebounds per game: 7.8</li>
                <li className="card__stats-stat">Assists per game: 7.7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__title">Gary Trent Jr.</h2>
              <img
                className="card__image"
                src={garyTrentJr}
                alt="Gary Trent Jr."
              />
              <p className="card__front-description">Guard, Toronto Raptors</p>
            </div>
            <div className="card__back">
              <h2 className="card__title">Stats</h2>
              <ul className="card__stats">
                <li className="card__stats-stat">Points per game: 25.3</li>
                <li className="card__stats-stat">Rebounds per game: 7.8</li>
                <li className="card__stats-stat">Assists per game: 7.7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__title">Scottie Barnes</h2>
              <img
                className="card__image"
                src={scottieBarnes}
                alt="Scottie Barnes"
              />
              <p className="card__front-description">
                Guard/Forward, Toronto Raptors
              </p>
            </div>
            <div className="card__back">
              <h2 className="card__title">Stats</h2>
              <ul className="card__stats">
                <li className="card__stats-stat">Points per game: 25.3</li>
                <li className="card__stats-stat">Rebounds per game: 7.8</li>
                <li className="card__stats-stat">Assists per game: 7.7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__title">OG Anunoby</h2>
              <img className="card__image" src={ogAnunoby} alt="OG Anunoby" />
              <p className="card__front-description">
                Forward, Toronto Raptors
              </p>
            </div>
            <div className="card__back">
              <h2 className="card__title">Stats</h2>
              <ul className="card__stats">
                <li className="card__stats-stat">Points per game: 25.3</li>
                <li className="card__stats-stat">Rebounds per game: 7.8</li>
                <li className="card__stats-stat">Assists per game: 7.7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__title">Pascal Siakam</h2>
              <img
                className="card__image"
                src={pascalSiakam}
                alt="Pascal Siakam"
              />
              <p className="card__front-description">
                Forward/Center, Toronto Raptors
              </p>
            </div>
            <div className="card__back">
              <h2 className="card__title">Stats</h2>
              <ul className="card__stats">
                <li className="card__stats-stat">Points per game: 25.3</li>
                <li className="card__stats-stat">Rebounds per game: 7.8</li>
                <li className="card__stats-stat">Assists per game: 7.7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__title">Jakob Poeltl</h2>
              <img
                className="card__image"
                src={jakobPoeltl}
                alt="Jakob Poeltl"
              />
              <p className="card__front-description">Center, Toronto Raptors</p>
            </div>
            <div className="card__back">
              <h2 className="card__title">Stats</h2>
              <ul className="card__stats">
                <li className="card__stats-stat">Points per game: 25.3</li>
                <li className="card__stats-stat">Rebounds per game: 7.8</li>
                <li className="card__stats-stat">Assists per game: 7.7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Raptors;
